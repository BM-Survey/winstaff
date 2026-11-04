import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { employersPage } from "@/content/site";

export function Assurance() {
  const { assurance: a } = employersPage;
  return (
    <section className="bg-primary py-20 text-white sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading tone="dark" eyebrow={a.eyebrow} title={a.title} />
        </Reveal>
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {a.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <li className="flex gap-4">
                <BadgeCheck aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-accent" />
                <div>
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">{item.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
