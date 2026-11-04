import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/site";

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, answered"
            description="Common questions about staffing and HR outsourcing in India. Can't find yours? Get in touch."
          />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-8">
          <FAQAccordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
