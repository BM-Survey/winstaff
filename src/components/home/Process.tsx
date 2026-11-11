import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/content/site";

export function Process() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A simple, transparent process"
            description="Four steps from requirement intake to a candidate who joins."
          />
        </Reveal>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block"
          />
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <li className="relative">
                <span className="relative z-10 grid size-14 place-items-center rounded-2xl bg-primary text-lg font-extrabold text-white shadow-soft ring-8 ring-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
