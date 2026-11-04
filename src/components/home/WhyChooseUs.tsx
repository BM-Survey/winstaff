import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/content/site";

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-float sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={whyChooseUs.image.src}
              alt={whyChooseUs.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={whyChooseUs.eyebrow}
              title={whyChooseUs.title}
              description={whyChooseUs.description}
            />
          </Reveal>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {whyChooseUs.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-dark">
                    <f.icon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-primary">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
