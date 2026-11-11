import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsOfUse } from "@/content/legal";
import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: termsOfUse.title,
  description: termsOfUse.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: termsOfUse.title, path: "/terms" }])} />
      <LegalPage doc={termsOfUse} related={{ label: "Privacy Policy", href: "/privacy" }} />
    </>
  );
}
