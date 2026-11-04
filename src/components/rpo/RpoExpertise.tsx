import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { rpoPage } from "@/content/site";

export function RpoExpertise() {
  const { expertise: e } = rpoPage;
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={e.eyebrow} title={e.title} description={e.description} />
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {e.sectors.map((sec, i) => (
            <Reveal key={sec.name} delay={(i % 2) * 80}>
              <li className="h-full rounded-card border border-line bg-white p-6 shadow-soft sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                    <sec.icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold text-primary">{sec.name}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {sec.skills.map((sk) => (
                    <li key={sk} className="rounded-pill border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink/85">
                      {sk}
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
