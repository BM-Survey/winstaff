import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/content/site";

export function StatsBand() {
  return (
    <section aria-label="Key figures" className="bg-primary py-14 text-white sm:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-2 text-sm font-medium text-white/70">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
