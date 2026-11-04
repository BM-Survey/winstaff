import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { industriesPage } from "@/content/site";

export function IndustryNav() {
  return (
    <section className="relative z-10 -mt-8 pb-4 sm:-mt-10">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 gap-3 rounded-card border border-line bg-white p-3 shadow-float sm:grid-cols-5">
            {industriesPage.details.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`#${d.slug}`}
                  className="group flex flex-col items-center gap-2 rounded-xl px-3 py-4 text-center transition-colors hover:bg-primary-soft"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <d.icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-sm font-bold leading-snug text-primary">{d.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
