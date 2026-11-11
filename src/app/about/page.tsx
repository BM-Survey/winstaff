import type { Metadata } from "next";
import { JsonLd, pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { AboutHero } from "@/components/about/AboutHero";
import { Story } from "@/components/about/Story";
import { MissionVision } from "@/components/about/MissionVision";
import { Values } from "@/components/about/Values";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "About Us: Offshore Recruitment Partner",
  description:
    "WinStaff Solutions is an offshore recruitment partner with a delivery center in Pune, India, helping US employers and staffing firms source, recruit and scale hiring.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <AboutHero />
      <Story />
      <MissionVision />
      <Values />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
