import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { employersPage } from "@/content/site";

export function PainPoints() {
  const { painPoints: p } = employersPage;
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={p.eyebrow} title={p.title} />
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <li className="h-full rounded-card border border-line bg-white p-6 shadow-soft">
                <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent-dark">
                  <item.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
