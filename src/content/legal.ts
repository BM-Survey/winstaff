import { company } from "@/content/site";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
};

export type LegalDoc = {
  title: string;
  description: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

const addressLine = `${company.address.street}, ${company.address.locality}, ${company.address.region} ${company.address.postalCode}, ${company.address.country}`;

const contactList = [
  `Email: ${company.email}`,
  `Phone: ${company.phone}`,
  `Address: ${addressLine}`,
];

// TODO: have these documents reviewed by a lawyer before launch. They are a standard
// starting point for a B2B recruitment website, not legal advice.

/* ---------- Privacy Policy ---------- */
export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses, shares and protects personal information from clients, candidates and website visitors.`,
  lastUpdated: "November 11, 2026",
  intro: [
    `${company.name} ("${company.name}", "we", "us" or "our") provides offshore recruitment, talent sourcing and recruitment process outsourcing (RPO) services to employers and staffing firms in the United States. This Privacy Policy explains how we collect, use, share and protect personal information when you visit our website, contact us, use our services or apply for a role through us.`,
    "By using our website or services, you acknowledge that you have read and understood this Privacy Policy.",
  ],
  sections: [
    {
      id: "information-we-collect",
      heading: "1. Information we collect",
      paragraphs: ["We collect the following categories of personal information:"],
      list: [
        "Contact information: your name, email address, phone number, company name, job title and location when you fill in a form, book a meeting or email us.",
        "Candidate information: your resume or CV, employment history, education, skills, certifications, work authorization status, availability, compensation expectations and references, when you apply for a role or when we source your profile for a client requirement.",
        "Client information: details about hiring requirements, open roles, hiring teams and business contacts that our clients share with us to deliver our services.",
        "Communications: the content of emails, calls, messages and meeting notes exchanged with us.",
        "Technical information: your IP address, browser type, device information, pages visited, referring website and similar usage data collected automatically when you visit our website.",
      ],
    },
    {
      id: "sources",
      heading: "2. How we collect information",
      list: [
        "Directly from you, for example when you submit a form, send your resume or speak with our team.",
        "From our clients, who share hiring requirements and information about their hiring managers.",
        "From publicly available and professional sources, such as job boards, professional networking sites and public profiles, when sourcing candidates for a role.",
        "From referrals and references you provide.",
        "Automatically, through cookies and similar technologies on our website.",
      ],
    },
    {
      id: "how-we-use",
      heading: "3. How we use your information",
      list: [
        "To provide our recruitment, sourcing and RPO services to our clients.",
        "To identify, screen and present candidates for job opportunities, and to coordinate interviews, offers and onboarding.",
        "To respond to enquiries, schedule meetings and communicate with you about our services.",
        "To manage client relationships, contracts, invoicing and reporting.",
        "To operate, maintain, secure and improve our website.",
        "To send occasional updates or hiring insights where you have agreed to receive them. You can unsubscribe at any time.",
        "To comply with legal obligations and to protect our rights and the rights of others.",
      ],
    },
    {
      id: "sharing",
      heading: "4. How we share your information",
      paragraphs: ["We do not sell your personal information. We share it only as follows:"],
      list: [
        "With clients: if you are a candidate, we share your profile with prospective employers or staffing firms for roles you are considered for. Where practical, we confirm your interest before submitting your profile.",
        "With service providers: such as hosting, email, applicant tracking, CRM and communication tools that process information on our behalf under appropriate confidentiality obligations.",
        "For legal reasons: when required by law, court order or a government authority, or to protect our rights, safety or property.",
        "In a business transfer: if we are involved in a merger, acquisition or sale of assets, subject to this Privacy Policy.",
      ],
    },
    {
      id: "international-transfers",
      heading: "5. International data transfers",
      paragraphs: [
        "We are based in India and our clients are primarily in the United States. Your information may therefore be transferred to, stored in and processed in India, the United States and other countries where we or our service providers operate. We take reasonable steps to ensure your information receives an appropriate level of protection wherever it is processed.",
      ],
    },
    {
      id: "retention",
      heading: "6. Data retention",
      paragraphs: [
        "We keep personal information only for as long as needed for the purposes described in this policy, including to provide our services, maintain candidate records for future opportunities, and meet legal, accounting and reporting requirements. When information is no longer needed, we delete or anonymize it.",
      ],
    },
    {
      id: "security",
      heading: "7. Data security",
      paragraphs: [
        "We use reasonable administrative, technical and physical safeguards to protect personal information, including access controls, confidentiality agreements with our team and secure tools. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
      ],
    },
    {
      id: "cookies",
      heading: "8. Cookies and analytics",
      paragraphs: [
        "Our website may use cookies and similar technologies to keep the site working, remember your preferences and understand how visitors use the site. You can control or delete cookies through your browser settings. Blocking some cookies may affect how the website works.",
      ],
    },
    {
      id: "your-rights",
      heading: "9. Your rights and choices",
      paragraphs: [
        "Depending on where you live, you may have the right to:",
      ],
      list: [
        "Access the personal information we hold about you.",
        "Correct inaccurate or incomplete information.",
        "Request deletion of your information.",
        "Withdraw your consent, for example to being considered for future roles or to receiving marketing emails.",
        "Object to or restrict certain processing.",
        "Not be discriminated against for exercising your privacy rights.",
      ],
      after: [
        "Residents of certain US states, such as California, and individuals covered by India's Digital Personal Data Protection Act, 2023, may have additional rights under those laws. To exercise any of these rights, contact us using the details below. We may need to verify your identity before responding.",
      ],
    },
    {
      id: "children",
      heading: "10. Children's privacy",
      paragraphs: [
        "Our website and services are intended for adults and businesses. We do not knowingly collect personal information from children under 18. If you believe a child has provided us with personal information, please contact us and we will delete it.",
      ],
    },
    {
      id: "third-party-links",
      heading: "11. Third-party links",
      paragraphs: [
        "Our website may link to third-party websites, such as social networks or job boards. We are not responsible for the privacy practices of those websites, and we encourage you to read their privacy policies.",
      ],
    },
    {
      id: "changes",
      heading: "12. Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. When we do, we will change the \"Last updated\" date at the top of this page. Significant changes will be highlighted on our website.",
      ],
    },
    {
      id: "contact",
      heading: "13. Contact us",
      paragraphs: [`If you have questions about this Privacy Policy or how we handle your information, contact ${company.name}:`],
      list: contactList,
    },
  ],
};

/* ---------- Terms of Use ---------- */
export const termsOfUse: LegalDoc = {
  title: "Terms of Use",
  description: `The terms that govern your use of the ${company.name} website.`,
  lastUpdated: "November 11, 2026",
  intro: [
    `These Terms of Use ("Terms") govern your access to and use of the ${company.name} website (the "Website"). By accessing or using the Website, you agree to these Terms. If you do not agree, please do not use the Website.`,
    "Recruitment, sourcing and RPO services provided to clients are governed by separate written agreements. If those agreements conflict with these Terms, the written agreement applies.",
  ],
  sections: [
    {
      id: "use-of-website",
      heading: "1. Use of the Website",
      paragraphs: ["You may use the Website for lawful purposes only. You agree not to:"],
      list: [
        "Use the Website in any way that breaks applicable laws or regulations.",
        "Submit false, misleading or someone else's information.",
        "Attempt to gain unauthorized access to the Website, its servers or any connected systems.",
        "Introduce viruses, malware or other harmful code.",
        "Copy, scrape or harvest content or data from the Website by automated means without our written permission, except for search engine indexing.",
        "Interfere with the security, performance or availability of the Website.",
      ],
    },
    {
      id: "no-guarantee",
      heading: "2. No guarantee of employment or hiring outcomes",
      paragraphs: [
        "Information on the Website about services, job opportunities and hiring outcomes is provided for general information only. Submitting a resume or enquiry does not guarantee an interview, job offer, placement or business engagement. Hiring decisions are made solely by employers.",
        `${company.name} does not charge candidates any fee for applying to roles or being considered for job opportunities.`,
      ],
    },
    {
      id: "submissions",
      heading: "3. Information you submit",
      paragraphs: [
        "When you submit information through the Website, you confirm that it is accurate and that you have the right to share it. You grant us permission to use that information to respond to you and to provide our services, as described in our Privacy Policy.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "4. Intellectual property",
      paragraphs: [
        `All content on the Website, including text, graphics, logos, design and code, is owned by or licensed to ${company.name} and is protected by intellectual property laws. You may view and print pages for your personal or internal business use. You may not reproduce, modify, distribute or republish any content without our prior written consent.`,
      ],
    },
    {
      id: "third-party-links",
      heading: "5. Third-party links",
      paragraphs: [
        "The Website may contain links to third-party websites. These links are provided for convenience only. We do not control and are not responsible for the content, policies or practices of third-party websites.",
      ],
    },
    {
      id: "disclaimer",
      heading: "6. Disclaimer of warranties",
      paragraphs: [
        "The Website and its content are provided \"as is\" and \"as available\" without warranties of any kind, express or implied, including warranties of accuracy, completeness, fitness for a particular purpose and non-infringement. We do not warrant that the Website will be uninterrupted, error-free or free of harmful components.",
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "7. Limitation of liability",
      paragraphs: [
        `To the fullest extent permitted by law, ${company.name}, its directors, employees and partners will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits, data or business, arising from or related to your use of, or inability to use, the Website.`,
      ],
    },
    {
      id: "indemnity",
      heading: "8. Indemnity",
      paragraphs: [
        `You agree to indemnify and hold ${company.name} harmless from any claims, losses, liabilities and expenses, including reasonable legal fees, arising from your misuse of the Website or your breach of these Terms.`,
      ],
    },
    {
      id: "privacy",
      heading: "9. Privacy",
      paragraphs: [
        "Your use of the Website is also governed by our Privacy Policy, which explains how we collect and use personal information.",
      ],
    },
    {
      id: "governing-law",
      heading: "10. Governing law and jurisdiction",
      paragraphs: [
        "These Terms are governed by the laws of India. Any disputes arising from or relating to these Terms or the Website will be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.", // TODO: confirm governing law with your lawyer
      ],
    },
    {
      id: "changes",
      heading: "11. Changes to these Terms",
      paragraphs: [
        "We may update these Terms from time to time. The updated version will be posted on this page with a new \"Last updated\" date. Your continued use of the Website after changes are posted means you accept the updated Terms.",
      ],
    },
    {
      id: "contact",
      heading: "12. Contact us",
      paragraphs: ["If you have any questions about these Terms, contact us:"],
      list: contactList,
    },
  ],
};
