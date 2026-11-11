import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import type { LegalDoc } from "@/content/legal";

export function LegalPage({ doc, related }: { doc: LegalDoc; related: { label: string; href: string } }) {
  return (
    <>
      <PageHero crumbs={[{ label: doc.title }]} eyebrow="Legal" title={doc.title} description={doc.description} />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <nav aria-label="On this page" className="rounded-card border border-line bg-surface p-6 lg:sticky lg:top-24">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">On this page</h2>
              <ol className="mt-4 space-y-2.5 text-sm">
                {doc.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-ink/80 transition-colors hover:text-primary">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
                See also:{" "}
                <Link href={related.href} className="font-semibold text-accent-dark hover:text-primary">
                  {related.label}
                </Link>
              </p>
            </nav>
          </aside>

          <article className="max-w-3xl lg:col-span-8">
            <p className="text-sm font-semibold text-muted">Last updated: {doc.lastUpdated}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/85">
              {doc.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-primary">{s.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/85">
                  {s.paragraphs?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className="list-disc space-y-2 pl-6 marker:text-accent">
                      {s.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {s.after?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}
