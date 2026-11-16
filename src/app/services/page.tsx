import type { Metadata } from "next";
import { JsonLd, pageMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceGroupSection } from "@/components/services/ServiceGroupSection";
import { EngagementModels } from "@/components/services/EngagementModels";
import { Process } from "@/components/home/Process";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { servicesPage } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Global Offshore Recruiting Services",
  description:
    "Offshore talent sourcing, full-cycle recruiting, dedicated recruiters and RPO for employers and staffing firms worldwide. Scale recruiting capacity at a lower cost.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Services", path: "/services" }]),
          ...servicesPage.groups.map((g) =>
            serviceSchema({
              name: g.eyebrow,
              serviceType: g.eyebrow,
              description: g.description,
              path: `/services#${g.slug}`,
              offers: g.subServices.map((s) => ({ name: s.title, description: s.description })),
            }),
          ),
        ]}
      />
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        description={servicesPage.hero.description}
        image={servicesPage.hero.image}
      />
      <ServiceOverview />
      {servicesPage.groups.map((g, i) => (
        <ServiceGroupSection key={g.slug} group={g} index={i} />
      ))}
      <EngagementModels />
      <Process />
      <FAQ />
      <CTABanner />
    </>
  );
}
