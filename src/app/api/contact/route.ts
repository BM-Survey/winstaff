import { NextResponse } from "next/server";
import { company } from "@/content/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

/** Fields we accept from the public contact form. */
const FIELDS = ["audience", "name", "company", "city", "email", "phone", "interest", "message"] as const;
type Field = (typeof FIELDS)[number];

const LABELS: Record<Field, string> = {
  audience: "Enquiry type",
  name: "Full name",
  company: "Company",
  city: "Current city",
  email: "Email",
  phone: "Phone",
  interest: "Interest",
  message: "Message",
};

const AUDIENCE_LABELS: Record<string, string> = {
  employer: "Employer",
  "job-seeker": "Job seeker",
};

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.CONTACT_FROM_EMAIL;
  const recipient = process.env.CONTACT_TO_EMAIL ?? company.email;

  if (!apiKey || !sender) {
    console.error("Contact form: BREVO_API_KEY or CONTACT_FROM_EMAIL is not set.");
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = Object.fromEntries(FIELDS.map((f) => [f, clean(body[f], f === "message" ? 5000 : 200)])) as Record<Field, string>;

  if (!data.name || !data.email || !data.phone || !data.message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const audience = AUDIENCE_LABELS[data.audience] ?? "Enquiry";
  const rows = FIELDS.filter((f) => data[f] && f !== "message").map((f) => {
    const value = f === "audience" ? audience : data[f];
    return `<tr>
      <td style="padding:6px 16px 6px 0;color:#64748b;font:14px system-ui,sans-serif;vertical-align:top;white-space:nowrap;">${LABELS[f]}</td>
      <td style="padding:6px 0;color:#0f172a;font:600 14px system-ui,sans-serif;">${escapeHtml(value)}</td>
    </tr>`;
  });

  const htmlContent = `<div style="max-width:640px;margin:0 auto;padding:24px;background:#f8fafc;">
    <h1 style="margin:0 0 4px;font:700 20px system-ui,sans-serif;color:#0f172a;">New ${audience.toLowerCase()} enquiry</h1>
    <p style="margin:0 0 20px;font:14px system-ui,sans-serif;color:#64748b;">Submitted via the website contact form.</p>
    <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;">
      <table style="border-collapse:collapse;width:100%;">${rows.join("")}</table>
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e2e8f0;">
        <div style="color:#64748b;font:14px system-ui,sans-serif;margin-bottom:6px;">${LABELS.message}</div>
        <div style="color:#0f172a;font:14px/1.6 system-ui,sans-serif;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
      </div>
    </div>
    <p style="margin:20px 0 0;font:13px system-ui,sans-serif;color:#94a3b8;">Reply directly to this email to reach ${escapeHtml(data.name)}.</p>
  </div>`;

  const textContent = [
    ...FIELDS.filter((f) => data[f] && f !== "message").map((f) => `${LABELS[f]}: ${f === "audience" ? audience : data[f]}`),
    "",
    `${LABELS.message}:`,
    data.message,
  ].join("\n");

  try {
    const response = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: `${company.name} Website`, email: sender },
        to: [{ email: recipient }],
        replyTo: { email: data.email, name: data.name },
        subject: `${audience} enquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`,
        htmlContent,
        textContent,
      }),
    });

    if (!response.ok) {
      console.error("Brevo rejected the message:", response.status, await response.text());
      return NextResponse.json({ error: "We could not send your message. Please email us directly." }, { status: 502 });
    }
  } catch (error) {
    console.error("Brevo request failed:", error);
    return NextResponse.json({ error: "We could not send your message. Please email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
