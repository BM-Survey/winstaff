import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            description="Results from employers who trusted us with their hiring and HR."
          />
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 90}>
              <Card as="li" className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} aria-hidden="true" className="size-4 fill-current" />
                    ))}
                  </div>
                  <Quote aria-hidden="true" className="size-6 text-accent/40" />
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-full bg-primary-soft text-sm font-bold text-primary"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-primary">{t.name}</span>
                    <span className="block text-xs text-muted">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
