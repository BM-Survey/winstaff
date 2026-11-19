<?php
/**
 * Contact form endpoint for static hosting.
 *
 * The site is a static export, so this PHP file performs the send. It reads
 * its credentials from a config file kept OUTSIDE the web root, so the Brevo
 * API key is never servable over HTTP. See brevo-config.example.php.
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

/* ---------------------------------------------------------------- config */

$config = null;
foreach ([__DIR__ . '/../brevo-config.php', __DIR__ . '/../../brevo-config.php'] as $path) {
    if (is_readable($path)) {
        $config = require $path;
        break;
    }
}

$apiKey    = is_array($config) ? trim((string) ($config['brevo_api_key'] ?? '')) : '';
$sender    = is_array($config) ? trim((string) ($config['from_email'] ?? '')) : '';
$recipient = is_array($config) ? trim((string) ($config['to_email'] ?? '')) : '';

if ($apiKey === '' || $sender === '' || $recipient === '') {
    error_log('Contact form: brevo-config.php missing or incomplete.');
    http_response_code(500);
    echo json_encode(['error' => 'Email delivery is not configured.']);
    exit;
}

/* ------------------------------------------------------------- read body */

$body = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request.']);
    exit;
}

$labels = [
    'audience' => 'Enquiry type',
    'name'     => 'Full name',
    'company'  => 'Company',
    'city'     => 'Current city',
    'email'    => 'Email',
    'phone'    => 'Phone',
    'interest' => 'Interest',
    'message'  => 'Message',
];

$clean = static function ($value, int $max): string {
    if (!is_string($value)) {
        return '';
    }
    // Strip control characters, then trim and cap the length.
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr(trim($value), 0, $max);
};

$data = [];
foreach (array_keys($labels) as $field) {
    $data[$field] = $clean($body[$field] ?? '', $field === 'message' ? 5000 : 200);
}

if ($data['name'] === '' || $data['email'] === '' || $data['phone'] === '' || $data['message'] === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Please fill in all required fields.']);
    exit;
}
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter a valid email address.']);
    exit;
}

/* ------------------------------------------------------------ build mail */

$audienceLabels = ['employer' => 'Employer', 'job-seeker' => 'Job seeker'];
$audience = $audienceLabels[$data['audience']] ?? 'Enquiry';

$esc = static fn (string $v): string => htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

$rows = '';
$text = '';
foreach ($labels as $field => $label) {
    if ($field === 'message' || $data[$field] === '') {
        continue;
    }
    $value = $field === 'audience' ? $audience : $data[$field];
    $rows .= '<tr>'
        . '<td style="padding:6px 16px 6px 0;color:#64748b;font:14px system-ui,sans-serif;vertical-align:top;white-space:nowrap;">' . $esc($label) . '</td>'
        . '<td style="padding:6px 0;color:#0f172a;font:600 14px system-ui,sans-serif;">' . $esc($value) . '</td>'
        . '</tr>';
    $text .= $label . ': ' . $value . "\n";
}
$text .= "\n" . $labels['message'] . ":\n" . $data['message'];

$htmlContent = '<div style="max-width:640px;margin:0 auto;padding:24px;background:#f8fafc;">'
    . '<h1 style="margin:0 0 4px;font:700 20px system-ui,sans-serif;color:#0f172a;">New ' . $esc(strtolower($audience)) . ' enquiry</h1>'
    . '<p style="margin:0 0 20px;font:14px system-ui,sans-serif;color:#64748b;">Submitted via the website contact form.</p>'
    . '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;">'
    . '<table style="border-collapse:collapse;width:100%;">' . $rows . '</table>'
    . '<div style="margin-top:16px;padding-top:16px;border-top:1px solid #e2e8f0;">'
    . '<div style="color:#64748b;font:14px system-ui,sans-serif;margin-bottom:6px;">' . $esc($labels['message']) . '</div>'
    . '<div style="color:#0f172a;font:14px/1.6 system-ui,sans-serif;white-space:pre-wrap;">' . $esc($data['message']) . '</div>'
    . '</div></div>'
    . '<p style="margin:20px 0 0;font:13px system-ui,sans-serif;color:#94a3b8;">Reply directly to this email to reach ' . $esc($data['name']) . '.</p>'
    . '</div>';

$subject = $audience . ' enquiry — ' . $data['name']
    . ($data['company'] !== '' ? ' (' . $data['company'] . ')' : '');

$payload = [
    'sender'      => ['name' => 'WinStaff Solutions Website', 'email' => $sender],
    'to'          => [['email' => $recipient]],
    'replyTo'     => ['email' => $data['email'], 'name' => $data['name']],
    'subject'     => $subject,
    'htmlContent' => $htmlContent,
    'textContent' => $text,
];

/* ------------------------------------------------------------- send mail */

$ch = curl_init('https://api.brevo.com/v3/smtp/email');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 20,
    CURLOPT_HTTPHEADER     => [
        'api-key: ' . $apiKey,
        'Content-Type: application/json',
        'Accept: application/json',
    ],
    CURLOPT_POSTFIELDS     => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
]);

$response = curl_exec($ch);
$status   = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$curlErr  = curl_error($ch);
curl_close($ch);

if ($response === false || $status < 200 || $status >= 300) {
    error_log('Brevo send failed (' . $status . '): ' . ($curlErr !== '' ? $curlErr : (string) $response));
    http_response_code(502);
    echo json_encode(['error' => 'We could not send your message. Please email us directly.']);
    exit;
}

echo json_encode(['ok' => true]);
