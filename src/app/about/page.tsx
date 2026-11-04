import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Story } from "@/components/about/Story";
import { MissionVision } from "@/components/about/MissionVision";
import { StatsBand } from "@/components/home/StatsBand";
import { Values } from "@/components/about/Values";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Leadership } from "@/components/about/Leadership";
import { CTABanner } from "@/components/ui/CTABanner";
import { about } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about WinStaff Solutions, a Pune-based HR consultancy and staffing firm helping Indian businesses hire, stay compliant and grow.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About" }]}
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        description={about.hero.description}
        image={about.hero.image}
      />
      <Story />
      <MissionVision />
      <StatsBand />
      <Values />
      <WhyChooseUs />
      <Leadership />
      <CTABanner />
    </>
  );
}
