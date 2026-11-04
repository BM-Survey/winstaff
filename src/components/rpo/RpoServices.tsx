import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { rpoPage } from "@/content/site";

export function RpoServices() {
  const { services: s } = rpoPage;
  return (
    <section id="rpo-services" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} description={s.description} />
        </Reveal>
        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 80}>
              <li className="flex h-full gap-5 rounded-card border border-line bg-white p-6 shadow-soft sm:p-7">
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary text-white">
                    <item.icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-bold tracking-wider text-accent-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
