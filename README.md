# WinStaff Solutions

Marketing site for WinStaff Solutions. Next.js 16 (App Router) + Tailwind CSS 4,
built as a static export and hosted on Hostinger shared (PHP/HTML) hosting.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # static export into out/
```

`out/` is the complete site, including `contact.php`. Anything in `public/` is
copied there verbatim, which is how the PHP endpoint ships alongside the HTML.

## Contact form

The site is static, so the form at `/contact` POSTs to `contact.php`, which
sends the enquiry through Brevo's transactional email API. Mail is sent from the
site's own domain with the enquirer in `Reply-To`, so replying from the inbox
answers the visitor. All user input is HTML-escaped into the message body.

### Server configuration

`contact.php` reads its credentials from `brevo-config.php`, which must sit
**one level above `public_html`** so it is never downloadable:

```
/home/<user>/domains/winstaffsolutions.com/
├── brevo-config.php      ← credentials live here (NOT web-accessible)
└── public_html/          ← contents of out/ go here
    ├── index.html
    └── contact.php
```

Copy `brevo-config.example.php` to that path as `brevo-config.php` and fill in:

| Key | Purpose |
| --- | --- |
| `brevo_api_key` | Brevo API key (SMTP & API → API Keys) |
| `from_email` | Sender address — must be a verified sender/domain in Brevo |
| `to_email` | Where enquiries are delivered |

`brevo-config.php` is gitignored and must never be committed.

## Deployment

1. `npm run build`
2. Upload the **contents** of `out/` into `public_html` (not the `out` folder itself).
3. Ensure `brevo-config.php` exists one level above `public_html`.

### Mail/DNS notes

- MX points to Google Workspace (`smtp.google.com`), so `contact@winstaffsolutions.com`
  is a Workspace mailbox.
- Brevo DKIM is published via the `brevo1` / `brevo2` CNAME records; this is what
  authenticates the form's mail. Do not remove them.
- A hard bounce causes Brevo to add the recipient to its suppression list and
  silently stop sending there. If enquiries stop arriving, check Brevo's blocked
  contacts first.
