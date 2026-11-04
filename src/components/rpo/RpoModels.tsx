import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { rpoPage } from "@/content/site";

export function RpoModels() {
  const { models: m } = rpoPage;
  return (
    <section className="bg-primary py-20 text-white sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading tone="dark" eyebrow={m.eyebrow} title={m.title} description={m.description} />
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {m.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <li className="flex h-full flex-col rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-white/10 text-accent">
                  <item.icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">{item.description}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm font-medium text-accent">{item.fit}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
