import type { Metadata } from "next";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";
import { company, services } from "@/content/site";
import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { Services } from "@/components/home/Services";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { Process } from "@/components/home/Process";
import { Industries } from "@/components/home/Industries";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Offshore Recruiting & RPO Services for US Companies | WinStaff",
  description:
    "WinStaff Solutions is an offshore recruitment partner for US employers and staffing firms: talent sourcing, full-cycle recruiting, dedicated recruiters and RPO.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: "Offshore Recruiting Services", serviceType: "Offshore recruitment", description: company.description, path: "/", offers: services.map((s) => ({ name: s.title, description: s.description })) })} />
      <Hero />
      <StatsBand />
      <Services />
      <AudienceSplit />
      <Process />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <FAQ schema />
      <CTABanner />
    </>
  );
}
