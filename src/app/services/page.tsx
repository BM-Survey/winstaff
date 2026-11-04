import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceGroupSection } from "@/components/services/ServiceGroupSection";
import { EngagementModels } from "@/components/services/EngagementModels";
import { Process } from "@/components/home/Process";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { servicesPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Recruitment, HR consulting and outsourcing services from WinStaff Solutions, Pune: executive search, RPO, permanent placement, payroll, statutory compliance and temp staffing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
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
