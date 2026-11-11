import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/content/site";

export function Industries() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Who we serve"
            title="Talent markets we know inside out"
            description="Specialist recruiters for the technology-driven and professional roles US companies need most."
          />
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 60}>
              <li className="group flex h-full flex-col rounded-card border border-line bg-white p-5 shadow-soft transition-colors hover:border-accent sm:p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <ind.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-primary lg:text-[15px]">{ind.name}</h3>
                <p className="mt-1 text-sm text-muted">{ind.blurb}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
