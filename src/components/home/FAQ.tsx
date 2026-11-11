import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs, type FAQ as FAQItem } from "@/content/site";
import { JsonLd, faqSchema } from "@/lib/seo";

type Props = {
  items?: FAQItem[];
  title?: string;
  description?: string;
  /** Emit FAQPage structured data. Enable on the one page each FAQ set "belongs" to. */
  schema?: boolean;
};

export function FAQ({
  items = faqs,
  title = "Questions, answered",
  description = "Common questions about offshore recruiting and RPO. Can't find yours? Get in touch.",
  schema = false,
}: Props) {
  return (
    <section id="faq" className="py-20 sm:py-24">
      {schema && <JsonLd data={faqSchema(items)} />}
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <SectionHeading align="left" eyebrow="FAQ" title={title} description={description} />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-8">
          <FAQAccordion items={items} />
        </Reveal>
      </Container>
    </section>
  );
}
