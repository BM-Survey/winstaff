import type { Metadata } from "next";
import { company } from "@/content/site";
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

export const metadata: Metadata = {
  // Root layout title.template does not apply to the root page, so set it explicitly.
  title: `HR Consultancy & Staffing Firm in Pune | ${company.name}`,
  description:
    "WinStaff Solutions provides recruitment, HR consulting and outsourcing services for businesses across India. Hire talent or find your next job.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <Services />
      <AudienceSplit />
      <Process />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
