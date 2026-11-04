import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Story } from "@/components/about/Story";
import { MissionVision } from "@/components/about/MissionVision";
import { StatsBand } from "@/components/home/StatsBand";
import { Values } from "@/components/about/Values";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Leadership } from "@/components/about/Leadership";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about WinStaff Solutions, a Pune-based HR consultancy and staffing firm helping Indian businesses hire, stay compliant and grow.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
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
