import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contactPage } from "@/content/site";

export function MapEmbed() {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-card border border-line shadow-soft">
            <iframe
              title={contactPage.map.title}
              src={contactPage.map.embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-[360px] w-full sm:h-[420px]"
            />
          </div>
          <a
            href={contactPage.map.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-dark"
          >
            Open in Google Maps
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
