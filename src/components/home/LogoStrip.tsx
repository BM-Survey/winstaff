import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { clients } from "@/content/site";

export function LogoStrip() {
  return (
    <section aria-labelledby="clients-heading" className="border-b border-line bg-white py-10">
      <Container>
        <h2
          id="clients-heading"
          className="text-center text-xs font-semibold uppercase tracking-widest text-muted"
        >
          Clients we worked with
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((c) => (
            <li key={c.name} className="h-32 bg-white p-2">
              <div className="relative h-full w-full">
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
