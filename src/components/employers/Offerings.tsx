import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { employersPage } from "@/content/site";

export function Offerings() {
  const { offerings: o } = employersPage;
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={o.eyebrow} title={o.title} />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {o.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <li className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-colors hover:border-primary"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <item.icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark group-hover:text-primary">
                    Learn more
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
