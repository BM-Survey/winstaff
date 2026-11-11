import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/content/legal";
import { JsonLd, breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: privacyPolicy.title, path: "/privacy" }])} />
      <LegalPage doc={privacyPolicy} related={{ label: "Terms of Use", href: "/terms" }} />
    </>
  );
}
