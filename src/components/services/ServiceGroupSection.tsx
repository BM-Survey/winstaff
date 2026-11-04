import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ctas, type ServiceGroup } from "@/content/site";

type Props = { group: ServiceGroup; index: number };

export function ServiceGroupSection({ group, index }: Props) {
  const flip = index % 2 === 1;
  return (
    <section id={group.slug} className={`scroll-mt-20 py-20 sm:py-24 ${flip ? "bg-surface" : ""}`}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow={`${String(index + 1).padStart(2, "0")} · ${group.eyebrow}`}
                title={group.title}
                description={group.description}
              />
            </Reveal>
            <Reveal delay={80}>
              <ul className="mt-7 space-y-3">
                {group.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm font-medium text-ink/85">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-dark">
                      <Check aria-hidden="true" className="size-3" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={ctas.enquiry.href}>
                  Discuss {group.eyebrow.toLowerCase()}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-float">
              <Image
                src={group.image.src}
                alt={group.image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {group.subServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <li className="h-full rounded-card border border-line bg-white p-6 shadow-soft">
                <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <s.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                {s.href && (
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark hover:text-primary"
                  >
                    Explore RPO
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
