import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  Layers,
  MapPin,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { about, ctas } from "@/content/site";

const pillarIcons = [UserCheck, ShieldCheck, Users];
const cardIcons = [MapPin, Layers];

const cardPositions = [
  "left-3 top-3 sm:-left-6 sm:top-8 animate-float",
  "bottom-3 right-3 sm:-right-4 sm:bottom-10 animate-float-delayed",
];

export function AboutHero() {
  const { hero } = about;
  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      <div aria-hidden="true" className="bg-dots-light mask-fade-b pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[38rem] rounded-full bg-primary/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 size-[32rem] rounded-full bg-primary blur-3xl"
      />

      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
        {/* Copy */}
        <Reveal className="lg:col-span-7">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight aria-hidden="true" className="size-4" />
                <span aria-current="page" className="font-medium text-white">
                  About
                </span>
              </li>
            </ol>
          </nav>

          <p className="mt-8 inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            {hero.title.before} <span className="text-accent">{hero.title.highlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{hero.description}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {hero.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? Users;
              return (
                <li
                  key={pillar}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-3 text-sm font-semibold leading-snug"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-ink">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  {pillar}
                </li>
              );
            })}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button href={ctas.hire.href} variant="accent" size="lg">
              {ctas.hire.label}
              <ArrowRight aria-hidden="true" className="size-5" />
            </Button>
            <Link
              href="#our-story"
              className="inline-flex items-center gap-2 rounded-pill font-semibold text-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
            >
              Read our story
              <ArrowDown aria-hidden="true" className="size-5" />
            </Link>
          </div>
        </Reveal>

        {/* Visual */}
        <Reveal delay={120} className="lg:col-span-5">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-card border-2 border-accent/60 sm:-right-4 sm:-top-4"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-float lg:aspect-[4/5]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 32rem, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent"
              />
            </div>

            {hero.cards.map((card, i) => {
              const Icon = cardIcons[i] ?? MapPin;
              return (
                <div
                  key={card.title}
                  className={`absolute ${cardPositions[i]} flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-3 py-2.5 text-ink shadow-float backdrop-blur sm:px-4 sm:py-3`}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-dark sm:size-11">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold leading-tight text-primary sm:text-base">
                      {card.title}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-muted">{card.text}</span>
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
