import type { Metadata } from "next";
import { company, faqs, type FAQ } from "@/content/site";

const ogImage = { url: "/logo.jpg", width: 1254, height: 1254, alt: company.name }; // TODO: replace with a 1200x630 /public/og.jpg

/** Absolute URL for a site path. */
export function absoluteUrl(path = "/") {
  return new URL(path, company.url).toString();
}

/**
 * Per-page metadata: title, description, canonical, Open Graph and Twitter.
 * Keeps social previews and canonicals unique per page instead of inheriting the homepage's.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${company.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: company.name,
      title: fullTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

/* ---------- Structured data (schema.org JSON-LD) ---------- */

const orgId = `${company.url}/#organization`;

export const organizationSchema = {
  "@type": ["Organization", "EmploymentAgency"],
  "@id": orgId,
  name: company.name,
  url: company.url,
  logo: absoluteUrl("/logo.jpg"),
  image: absoluteUrl("/logo.jpg"),
  description: company.description,
  slogan: company.tagline,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.street}, New Kalyani Nagar`,
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: company.address.postalCode,
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "United States" },
  knowsAbout: [
    "Offshore recruiting",
    "Recruitment process outsourcing (RPO)",
    "Talent sourcing",
    "Full-cycle recruiting",
    "IT recruitment",
    "Semiconductor recruitment",
    "Engineering recruitment",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: company.phone,
    email: company.email,
    areaServed: "US",
    availableLanguage: ["English"],
  },
  ...(company.social.length > 0 && { sameAs: company.social.map((s) => s.href) }),
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${company.url}/#website`,
  url: company.url,
  name: company.name,
  inLanguage: "en-US",
  publisher: { "@id": orgId },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: FAQ[] = faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  offers,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  offers?: { name: string; description: string }[];
}) {
  return {
    "@type": "Service",
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "United States" },
    ...(offers && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name,
        itemListElement: offers.map((o) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: o.name, description: o.description },
        })),
      },
    }),
  };
}

/** Renders one or more schema.org objects as a single JSON-LD graph. */
export function JsonLd({ data }: { data: object | object[] }) {
  const graph = { "@context": "https://schema.org", "@graph": Array.isArray(data) ? data : [data] };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
