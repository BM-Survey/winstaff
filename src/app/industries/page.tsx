import type { Metadata } from "next";
import { JsonLd, pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { IndustryNav } from "@/components/industries/IndustryNav";
import { IndustrySection } from "@/components/industries/IndustrySection";
import { OtherSectors } from "@/components/industries/OtherSectors";
import { StatsBand } from "@/components/home/StatsBand";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/ui/CTABanner";
import { industriesPage } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Recruit For",
  description:
    "Offshore recruiting for US roles in information technology, semiconductor and electronics, engineering and manufacturing, and corporate and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Industries", path: "/industries" }])} />
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
