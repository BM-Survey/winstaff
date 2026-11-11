import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { audiences } from "@/content/site";

export function AudienceSplit() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Who we work with"
            title="Built for US hiring teams"
            description="Whether you hire for your own company or for your clients, we add recruiting capacity that works like your own team."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {audiences.map((a, i) => {
            const isEmployer = a.key === "employers";
            return (
              <Reveal key={a.key} delay={i * 100}>
                <article
                  className={`flex h-full flex-col rounded-card p-7 shadow-soft sm:p-10 ${
                    isEmployer ? "bg-primary text-white" : "border border-line bg-white text-ink"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid size-11 place-items-center rounded-xl ${
                        isEmployer ? "bg-white/10 text-accent" : "bg-accent-soft text-accent-dark"
                      }`}
                    >
                      <a.icon aria-hidden="true" className="size-5" />
                    </span>
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isEmployer ? "text-accent" : "text-accent-dark"
                      }`}
                    >
                      {a.eyebrow}
                    </p>
                  </div>
                  <h3
                    className={`mt-5 text-2xl font-bold tracking-tight sm:text-3xl ${
                      isEmployer ? "text-white" : "text-primary"
                    }`}
                  >
                    {a.title}
                  </h3>
                  <p className={`mt-3 ${isEmployer ? "text-white/75" : "text-muted"}`}>
                    {a.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {a.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                            isEmployer ? "bg-accent text-ink" : "bg-accent-soft text-accent-dark"
                          }`}
                        >
                          <Check aria-hidden="true" className="size-3" />
                        </span>
                        <span className={isEmployer ? "text-white/90" : "text-ink/85"}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-2">
                    <Button href={a.cta.href} variant={isEmployer ? "accent" : "primary"} size="lg">
                      {a.cta.label}
                      <ArrowRight aria-hidden="true" className="size-5" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
