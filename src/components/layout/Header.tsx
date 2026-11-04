import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ctas, nav } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-pill px-3.5 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-primary-soft hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={ctas.job.href} variant="ghost">
            {ctas.job.label}
          </Button>
          <Button href={ctas.hire.href} variant="primary">
            {ctas.hire.label}
          </Button>
        </div>

        <MobileMenu links={nav} cta={ctas.hire} secondary={ctas.job} />
      </Container>
    </header>
  );
}
