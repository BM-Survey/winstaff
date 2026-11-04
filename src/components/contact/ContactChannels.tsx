import { contactPage } from "@/content/site";

export function ContactChannels() {
  return (
    <ul className="grid gap-4">
      {contactPage.channels.map((c) => {
        const external = c.href.startsWith("http");
        return (
          <li key={c.label}>
            <a
              href={c.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-start gap-4 rounded-card border border-line bg-white p-5 shadow-soft transition-colors hover:border-primary"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <c.icon aria-hidden="true" className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{c.label}</span>
                <span className="mt-0.5 block text-base font-bold text-primary">{c.value}</span>
                <span className="mt-0.5 block text-sm text-muted">{c.note}</span>
              </span>
            </a>
          </li>
        );
      })}
      <li className="rounded-card bg-primary p-6 text-white shadow-soft">
        <h2 className="text-base font-bold">{contactPage.nextSteps.title}</h2>
        <ol className="mt-4 space-y-3">
          {contactPage.nextSteps.steps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm text-white/85">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-bold text-accent">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </li>
    </ul>
  );
}
