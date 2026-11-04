import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { IndustryNav } from "@/components/industries/IndustryNav";
import { IndustrySection } from "@/components/industries/IndustrySection";
import { OtherSectors } from "@/components/industries/OtherSectors";
import { StatsBand } from "@/components/home/StatsBand";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/ui/CTABanner";
import { industriesPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "WinStaff Solutions provides specialist staffing and HR services for BPO, KPO, RPO, logistics, banking and telecom companies across India.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Industries" }]}
        eyebrow={industriesPage.hero.eyebrow}
        title={industriesPage.hero.title}
        description={industriesPage.hero.description}
        image={industriesPage.hero.image}
      />
      <IndustryNav />
      {industriesPage.details.map((d, i) => (
        <IndustrySection key={d.slug} industry={d} index={i} />
      ))}
      <StatsBand />
      <OtherSectors />
      <Testimonials />
      <CTABanner />
    </>
  );
}
