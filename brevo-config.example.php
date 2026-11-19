<?php
/**
 * Copy this to the server as `brevo-config.php` and place it ONE LEVEL ABOVE
 * public_html — e.g. /home/<user>/domains/winstaffsolutions.com/brevo-config.php
 *
 * It must NOT go inside public_html, or the API key becomes downloadable.
 * Never commit the filled-in version to git.
 */
return [
    'brevo_api_key' => 'xkeysib-REPLACE-ME',
    'from_email'    => 'contact@winstaffsolutions.com', // verified sender in Brevo
    'to_email'      => 'contact@winstaffsolutions.com', // where enquiries land
];
