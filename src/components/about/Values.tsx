import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/site";

export function Values() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our values"
            title="What we stand for"
            description="Four principles that shape every search, every contract and every conversation."
          />
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <li className="h-full rounded-card border border-line bg-white p-6 shadow-soft">
                <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <v.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
