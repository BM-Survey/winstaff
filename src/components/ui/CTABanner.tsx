import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaBanner } from "@/content/site";

export function CTABanner() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-primary px-6 py-14 text-center shadow-float sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-primary-dark/60 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {ctaBanner.title}
            </h2>
            <p className="mt-4 text-lg text-white/75">{ctaBanner.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={ctaBanner.cta.href} variant="accent" size="lg">
                {ctaBanner.cta.label}
                <ArrowRight aria-hidden="true" className="size-5" />
              </Button>
              <Button href={ctaBanner.secondary.href} variant="inverse" size="lg">
                <Phone aria-hidden="true" className="size-5" />
                {ctaBanner.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
