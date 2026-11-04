import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesPage } from "@/content/site";

export function EngagementModels() {
  const { engagementModels: em } = servicesPage;
  return (
    <section className="bg-primary py-20 text-white sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading tone="dark" eyebrow={em.eyebrow} title={em.title} description={em.description} />
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {em.models.map((m, i) => (
            <Reveal key={m.title} delay={i * 90}>
              <li className="h-full rounded-card border border-white/10 bg-white/5 p-7 backdrop-blur">
                <span className="grid size-12 place-items-center rounded-xl bg-white/10 text-accent">
                  <m.icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{m.title}</h3>
                <p className="mt-2 text-white/75">{m.description}</p>
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-white/90">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
