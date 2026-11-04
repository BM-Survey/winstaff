import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { industriesPage } from "@/content/site";

export function OtherSectors() {
  const { otherSectors: o } = industriesPage;
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-card border border-dashed border-primary/30 bg-primary-soft/50 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold text-primary">{o.title}</h2>
              <p className="mt-2 max-w-2xl text-muted">{o.description}</p>
            </div>
            <Button href={o.cta.href}>
              {o.cta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
