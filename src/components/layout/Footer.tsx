import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { company, footer } from "@/content/site";

const colHeading = "text-xs font-semibold uppercase tracking-[0.2em] text-white/50";
const link = "text-[15px] text-white/80 transition-colors hover:text-white";

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-3.5">
      {links.map((l) => (
        <li key={l.label + l.href}>
          <Link href={l.href} className={link}>
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const half = Math.ceil(footer.serviceLinks.length / 2);
  const serviceCols = [footer.serviceLinks.slice(0, half), footer.serviceLinks.slice(half)];

  return (
    <footer className="relative overflow-hidden bg-primary-dark text-white">
      {/* Gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,_var(--color-primary)_0%,_transparent_60%)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_100%_100%,_var(--color-primary)_0%,_transparent_60%)] opacity-50"
      />

      <Container className="relative">
        {/* Top: conversation CTA + newsletter */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Logo tone="dark" />
            <h2 className="mt-8 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">{footer.headline}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">{footer.blurb}</p>
            <div className="mt-8">
              <Button href={footer.cta.href} variant="inverse" size="lg">
                {footer.cta.label}
                <ArrowRight aria-hidden="true" className="size-5" />
              </Button>
            </div>
            <ul className="mt-5 flex flex-wrap items-center gap-3">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex h-12 items-center gap-2.5 rounded-pill border border-white/20 bg-white/5 px-5 text-sm text-white/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  {company.email}
                </a>
              </li>
              {company.social.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-12 place-items-center rounded-pill border border-white/20 bg-white/5 text-white/90 transition-colors hover:border-white/40 hover:bg-white/10"
                  >
                    <SocialIcon name={s.key} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:pt-16">
            <h3 className="text-lg font-semibold">{footer.newsletter.title}</h3>
            <p className="mt-2 text-sm text-white/65">{footer.newsletter.description}</p>
            {/* UI only for now. TODO: wire to a form handler */}
            <form className="mt-5 flex flex-col gap-3 sm:flex-row" action="#" method="post">
              <label htmlFor="newsletter-email" className="sr-only">
                {footer.newsletter.placeholder}
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder={footer.newsletter.placeholder}
                className="h-12 flex-1 rounded-pill border border-white/20 bg-white/5 px-5 text-sm text-white placeholder:text-white/45 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              <Button type="submit" variant="accent" className="h-12">
                {footer.newsletter.button}
              </Button>
            </form>
            <p className="mt-3 text-xs text-white/50">{footer.newsletter.note}</p>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Middle: link columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-6">
            <h3 className={colHeading}>Services</h3>
            <div className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {serviceCols.map((col, i) => (
                <LinkList key={i} links={col} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <h3 className={colHeading}>Company</h3>
            <div className="mt-6">
              <LinkList links={footer.companyLinks} />
            </div>
          </div>
          <div className="lg:col-span-3">
            <h3 className={colHeading}>{footer.headOffice.title}</h3>
            <address className="mt-6 not-italic leading-relaxed text-white/80">
              {footer.headOffice.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Bottom: legal */}
        <div className="flex flex-col gap-4 py-7 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none -mb-[0.28em] select-none overflow-hidden text-center text-[clamp(4.5rem,17vw,16rem)] font-extrabold leading-none tracking-tight text-white/[0.05]"
        >
          {footer.watermark}
        </div>
      </Container>
    </footer>
  );
}
