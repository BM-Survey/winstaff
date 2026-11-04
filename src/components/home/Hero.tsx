import Image from "next/image";
import { ArrowRight, CheckCircle2, Star, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ctas, hero } from "@/content/site";

const statIcons = [Users, TrendingUp];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Background: dot grid + soft colour washes */}
      <div aria-hidden="true" className="bg-dots mask-fade-b pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[36rem] rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 size-[28rem] rounded-full bg-primary/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        {/* Copy */}
        <Reveal className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-pill border border-line bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
            <span className="relative flex size-2">
              <span className="animate-ping-soft absolute inline-flex size-full rounded-full bg-accent" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {hero.badge}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            {hero.headline.before}{" "}
            <span className="highlight-underline text-accent-dark">{hero.headline.highlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.subtext}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={ctas.hire.href} size="lg" className="shadow-float">
              {ctas.hire.label}
              <ArrowRight aria-hidden="true" className="size-5" />
            </Button>
            <Button href={ctas.job.href} variant="outline" size="lg">
              {ctas.job.label}
            </Button>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {hero.proofPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-ink/80">
                <CheckCircle2 aria-hidden="true" className="size-4 text-accent" />
                {p}
              </li>
            ))}
          </ul>

          {/* Trust row */}
          <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
            <ul className="flex -space-x-2.5">
              {hero.trust.avatars.map((src, i) => (
                <li key={src} className="relative size-10 overflow-hidden rounded-full ring-2 ring-white">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                    priority={i === 0}
                  />
                </li>
              ))}
            </ul>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="flex text-accent" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <span className="text-sm font-bold text-primary">{hero.trust.rating}</span>
              </div>
              <p className="text-xs text-muted">{hero.trust.text}</p>
            </div>
          </div>
        </Reveal>

        {/* Visual */}
        <Reveal delay={120} className="lg:col-span-6">
          <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none lg:pl-6">
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-[88%] w-[88%] rounded-card border-2 border-accent/40 lg:-right-3 lg:-top-6"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-2 size-32 rounded-card bg-primary lg:-left-4 lg:size-40"
            />

            {/* Main photo */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-float sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 32rem, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"
              />
              <p className="absolute bottom-5 right-5 hidden max-w-[60%] text-right text-sm font-semibold text-white drop-shadow sm:block sm:text-base">
                {hero.eyebrow}
              </p>
            </div>

            {/* Secondary photo */}
            <div className="absolute -bottom-10 left-4 hidden w-40 overflow-hidden rounded-2xl shadow-float ring-4 ring-white sm:block lg:-left-2 lg:w-48">
              <div className="relative aspect-square">
                <Image
                  src={hero.imageSecondary.src}
                  alt={hero.imageSecondary.alt}
                  fill
                  sizes="12rem"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating stat cards */}
            {hero.floatingStats.map((s, i) => {
              const Icon = statIcons[i] ?? Users;
              const pos =
                i === 0
                  ? "left-0 top-6 -translate-x-3 sm:-translate-x-8 animate-float"
                  : "bottom-14 right-0 translate-x-3 sm:translate-x-8 animate-float-delayed";
              return (
                <div
                  key={s.label}
                  className={`absolute ${pos} flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-float backdrop-blur`}
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-dark">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-2xl font-extrabold leading-none text-primary">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-muted">{s.label}</span>
                    <span className="mt-1 block text-[11px] font-semibold text-accent-dark">
                      {s.trend}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
