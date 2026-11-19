# WinStaff Solutions

Marketing site for WinStaff Solutions. Next.js 16 (App Router) + Tailwind CSS 4.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in the Brevo values
npm run dev
```

## Contact form

The form at `/contact` POSTs to `src/app/api/contact/route.ts`, which sends the
enquiry through Brevo's transactional email API to `CONTACT_TO_EMAIL`. The mail is
sent from your own domain with the enquirer set as `Reply-To`, so replying from the
inbox answers the visitor directly.

Required environment variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `BREVO_API_KEY` | Brevo API key (SMTP & API → API Keys) |
| `CONTACT_FROM_EMAIL` | Sender address — must be a verified sender/domain in Brevo |
| `CONTACT_TO_EMAIL` | Where enquiries land. Defaults to `company.email` in `src/content/site.ts` |

## Deployment (Hostinger)

Deployed as a Node.js Web App on Hostinger Business/Cloud hosting. The app runs in
server mode so the contact API route works at runtime.

hPanel deploy settings:

| Field | Value |
| --- | --- |
| Application type | `next` |
| Build command | `npm run build` |
| Output directory | `.next` |
| Node.js version | 22 (20 or newer required) |
| Root directory | `/` |
| Entry file | ignored for `next` |

Set the environment variables above under **Environment variables** in the site
dashboard before the first build. Saving them triggers a redeploy.

Notes:

- Hostinger applies `output: "standalone"` itself and overrides any `output` value
  set in `next.config.ts` — do not set one.
- `next.config.ts` must export an object, not a function, or the config is lost.
- Apps sleep after a period without traffic, so the first request after an idle
  spell has a cold-start delay.
