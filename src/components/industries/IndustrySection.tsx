import Image from "next/image";
import { AlertCircle, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ctas, type IndustryDetail } from "@/content/site";

type Props = { industry: IndustryDetail; index: number };

export function IndustrySection({ industry: d, index }: Props) {
  const flip = index % 2 === 1;
  return (
    <section id={d.slug} className={`scroll-mt-20 py-20 sm:py-24 ${flip ? "bg-surface" : ""}`}>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Intro + image */}
          <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-primary text-white">
                  <d.icon aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">{d.tagline}</p>
                  <h2 className="text-3xl font-bold tracking-tight text-primary">{d.name}</h2>
                </div>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-muted">{d.description}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-card shadow-float">
                <Image
                  src={d.image.src}
                  alt={d.image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Detail panels */}
          <div className={`grid gap-5 lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
            <Reveal delay={60}>
              <div className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Roles we fill</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {d.roles.map((r) => (
                    <li
                      key={r}
                      className="rounded-pill border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink/85"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={120}>
                <div className="h-full rounded-card border border-line bg-white p-6 shadow-soft sm:p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Typical challenges</h3>
                  <ul className="mt-4 space-y-3">
                    {d.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-ink/85">
                        <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="h-full rounded-card bg-primary p-6 text-white shadow-soft sm:p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">How WinStaff helps</h3>
                  <ul className="mt-4 space-y-3">
                    {d.howWeHelp.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-white/90">
                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <Reveal delay={220}>
              <Button href={ctas.hire.href} variant="outline">
                Hire for {d.name}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
