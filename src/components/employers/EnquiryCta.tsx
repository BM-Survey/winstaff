import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company, employersPage } from "@/content/site";

export function EnquiryCta() {
  const { enquiryCta: e } = employersPage;
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="grid items-center gap-8 rounded-card border border-line bg-surface p-8 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{e.title}</h2>
              <p className="mt-3 max-w-2xl text-lg text-muted">{e.description}</p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Button href={e.cta.href} variant="accent" size="lg">
                {e.cta.label}
                <ArrowRight aria-hidden="true" className="size-5" />
              </Button>
              <Button href={company.phoneHref} variant="outline" size="lg">
                <Phone aria-hidden="true" className="size-5" />
                {company.phone}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
