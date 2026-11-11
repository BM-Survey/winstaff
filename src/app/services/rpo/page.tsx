import type { Metadata } from "next";
import { JsonLd, pageMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { RpoServices } from "@/components/rpo/RpoServices";
import { RpoModels } from "@/components/rpo/RpoModels";
import { RpoExpertise } from "@/components/rpo/RpoExpertise";
import { Process } from "@/components/home/Process";
import { FAQ } from "@/components/home/FAQ";
import { company, rpoFaqs, rpoPage } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "RPO Services for US Companies",
  description:
    "Flexible recruitment process outsourcing (RPO) for US companies: sourcing, screening, interview coordination, dedicated recruiters and offer management.",
  path: "/services/rpo",
});

export default function RpoPage() {
  const { hero, cta } = rpoPage;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: "RPO", path: "/services/rpo" },
          ]),
          serviceSchema({
            name: hero.title,
            serviceType: "Recruitment process outsourcing",
            description: hero.description,
            path: "/services/rpo",
            offers: rpoPage.services.items.map((s) => ({ name: s.title, description: s.description })),
          }),
        ]}
      />
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: "RPO" }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
      >
        <p className="max-w-xl text-base leading-relaxed text-muted">{hero.secondary}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={cta.cta.href} size="lg">
            {cta.cta.label}
            <ArrowRight aria-hidden="true" className="size-5" />
          </Button>
          <Button href="#rpo-services" variant="outline" size="lg">
            See what we cover
          </Button>
        </div>
      </PageHero>
      <RpoServices />
      <RpoModels />
      <RpoExpertise />
      <Process />
      <FAQ schema items={rpoFaqs} title="RPO questions, answered" description="What US companies ask us most about recruitment process outsourcing." />
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid items-center gap-8 rounded-card border border-line bg-surface p-8 sm:p-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{cta.title}</h2>
                <p className="mt-3 max-w-2xl text-lg text-muted">{cta.description}</p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                <Button href={cta.cta.href} variant="accent" size="lg">
                  {cta.cta.label}
                  <ArrowRight aria-hidden="true" className="size-5" />
                </Button>
                <Button href={company.phoneHref} variant="outline" size="lg">
                  <Phone aria-hidden="true" className="size-5" />
                  {company.phone}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
