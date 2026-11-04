import { Compass, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/content/site";

const icons = [Target, Compass];

export function MissionVision() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {about.missionVision.map((m, i) => {
            const Icon = icons[i] ?? Target;
            const dark = i === 0;
            return (
              <Reveal key={m.title} delay={i * 100}>
                <article
                  className={`h-full rounded-card p-8 shadow-soft sm:p-10 ${
                    dark ? "bg-primary text-white" : "border border-line bg-white"
                  }`}
                >
                  <span
                    className={`grid size-12 place-items-center rounded-xl ${
                      dark ? "bg-white/10 text-accent" : "bg-accent-soft text-accent-dark"
                    }`}
                  >
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h2 className={`mt-6 text-2xl font-bold ${dark ? "text-white" : "text-primary"}`}>
                    {m.title}
                  </h2>
                  <p className={`mt-3 text-lg leading-relaxed ${dark ? "text-white/80" : "text-muted"}`}>
                    {m.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
