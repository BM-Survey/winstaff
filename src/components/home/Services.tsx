import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our services"
            title="Scale your core business. We'll handle the recruiting."
            description="Sourcing, recruiting and RPO for employers and staffing firms worldwide, delivered by a dedicated offshore team."
          />
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Card as="li" hover className="flex h-full flex-col">
                <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <s.icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-muted">{s.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink/85">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${s.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent-dark hover:text-primary"
                >
                  Learn more
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
