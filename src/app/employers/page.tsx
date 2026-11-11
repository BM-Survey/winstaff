import type { Metadata } from "next";
import { JsonLd, pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { PainPoints } from "@/components/employers/PainPoints";
import { Offerings } from "@/components/employers/Offerings";
import { EngagementModels } from "@/components/services/EngagementModels";
import { Process } from "@/components/home/Process";
import { Assurance } from "@/components/employers/Assurance";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { EnquiryCta } from "@/components/employers/EnquiryCta";
import { ctas, employersPage } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Why Choose an Offshore Recruiting Partner",
  description:
    "De-risk your hiring with WinStaff Solutions: dedicated offshore sourcers and recruiters, RPO programs and clear reporting for US employers and staffing firms.",
  path: "/employers",
});

export default function EmployersPage() {
  const { hero } = employersPage;
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Why WinStaff", path: "/employers" }])} />
      <PageHero
        crumbs={[{ label: "Why WinStaff" }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={ctas.enquiry.href} size="lg">
            {ctas.enquiry.label}
            <ArrowRight aria-hidden="true" className="size-5" />
          </Button>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {hero.points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm font-medium text-ink/80">
              <CheckCircle2 aria-hidden="true" className="size-4 text-accent-dark" />
              {p}
            </li>
          ))}
        </ul>
      </PageHero>
      <PainPoints />
      <Offerings />
      <EngagementModels />
      <Process />
      <Assurance />
      <Testimonials />
      <FAQ />
      <EnquiryCta />
    </>
  );
}
