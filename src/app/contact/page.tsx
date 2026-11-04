import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { FAQ } from "@/components/home/FAQ";
import { contactPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact WinStaff Solutions in Pune for recruitment, HR consulting and outsourcing enquiries. Employers and job seekers welcome.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        description={contactPage.hero.description}
      />
      <section id="enquiry" className="scroll-mt-20 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <ContactChannels />
          </Reveal>
        </Container>
      </section>
      <MapEmbed />
      <FAQ />
    </>
  );
}
