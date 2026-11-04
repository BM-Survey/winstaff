import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/site";

export function Leadership() {
  const { leadership } = about;
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={leadership.eyebrow}
            title={leadership.title}
            description={leadership.description}
          />
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.members.map((m, i) => (
            <Reveal key={m.role} delay={i * 90}>
              <li className="h-full overflow-hidden rounded-card border border-line bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.role} at WinStaff Solutions`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary">{m.name}</h3>
                  <p className="text-sm font-semibold text-accent-dark">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
