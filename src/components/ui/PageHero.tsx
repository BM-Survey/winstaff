import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: { src: string; alt: string };
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, crumbs, image, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div aria-hidden="true" className="bg-dots mask-fade-b pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full bg-primary/10 blur-3xl"
      />
      <Container className="relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-12">
        <Reveal className={image ? "lg:col-span-6" : "lg:col-span-8"}>
          {crumbs && crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-1.5">
                    <ChevronRight aria-hidden="true" className="size-4" />
                    {c.href ? (
                      <Link href={c.href} className="hover:text-primary">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="font-medium text-primary">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-dark">{eyebrow}</p>
          )}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          {description && <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
        {image && (
          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-card shadow-float">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
