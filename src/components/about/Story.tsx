import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/site";

export function Story() {
  const { story } = about;
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHeading align="left" eyebrow={story.eyebrow} title={story.title} />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {story.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="lg:col-span-6">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-card border-2 border-accent/50"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-float">
              <Image
                src={story.image.src}
                alt={story.image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
