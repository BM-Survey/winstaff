import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { servicesPage } from "@/content/site";

export function ServiceOverview() {
  return (
    <section className="relative z-10 -mt-8 pb-4 sm:-mt-10">
      <Container>
        <ul className="grid gap-4 md:grid-cols-3">
          {servicesPage.groups.map((g, i) => (
            <Reveal key={g.slug} delay={i * 80}>
              <li>
                <Link
                  href={`#${g.slug}`}
                  className="group flex h-full items-start gap-4 rounded-card border border-line bg-white p-5 shadow-float transition-colors hover:border-primary"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <g.icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-base font-bold text-primary">{g.eyebrow}</span>
                    <span className="mt-1 block text-sm text-muted">
                      {g.subServices.map((s) => s.title.replace(/\s\(.*\)/, "")).join(" · ")}
                    </span>
                  </span>
                  <ArrowDown aria-hidden="true" className="mt-1 size-4 shrink-0 text-muted group-hover:text-primary" />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
