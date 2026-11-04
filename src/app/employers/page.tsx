import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "For Employers | Hire Talent",
  description:
    "Hire permanent, contract and temp-to-perm staff or outsource payroll and compliance with WinStaff Solutions, Pune. Shortlists in days, replacement guarantee, full statutory cover.",
  alternates: { canonical: "/employers" },
};

export default function EmployersPage() {
  const { hero } = employersPage;
  return (
    <>
      <PageHero
        crumbs={[{ label: "For Employers" }]}
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
