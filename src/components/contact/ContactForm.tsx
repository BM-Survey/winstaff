"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactPage } from "@/content/site";

type Audience = "employer" | "job-seeker";

const field =
  "h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const label = "mb-1.5 block text-sm font-semibold text-primary";

export function ContactForm() {
  const { form } = contactPage;
  const id = useId();
  const [audience, setAudience] = useState<Audience>("employer");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Deep links such as /contact#job-seeker pre-select the audience.
  // The hash is only readable on the client, so this has to run after mount:
  // deriving it in useState would make the prerendered HTML disagree with the
  // first client render and cause a hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- see above
    if (window.location.hash === "#job-seeker") setAudience("job-seeker");
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    setSending(true);
    setError(null);

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...payload, audience }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error ?? "Something went wrong. Please try again.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div role="status" className="rounded-card border border-line bg-white p-8 text-center shadow-soft sm:p-10">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent-soft text-accent-dark">
          <CheckCircle2 aria-hidden="true" className="size-7" />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-primary">{form.success.title}</h2>
        <p className="mt-2 text-muted">{form.success.description}</p>
      </div>
    );
  }

  const isEmployer = audience === "employer";

  return (
    <form onSubmit={onSubmit} className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-8" noValidate={false}>
      <h2 className="text-2xl font-bold text-primary">{form.title}</h2>
      <p className="mt-1 text-sm text-muted">{form.description}</p>

      <fieldset className="mt-6">
        <legend className={label}>I am</legend>
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-surface p-1">
          {form.audiences.map((a) => {
            const active = audience === a.value;
            return (
              <label
                key={a.value}
                className={`cursor-pointer rounded-lg px-3 py-2.5 text-center text-sm font-semibold transition-colors ${
                  active ? "bg-primary text-white shadow-soft" : "text-primary hover:bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="audience"
                  value={a.value}
                  checked={active}
                  onChange={() => setAudience(a.value as Audience)}
                  className="sr-only"
                />
                {a.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>
            Full name
          </label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </div>
        {isEmployer ? (
          <div>
            <label htmlFor={`${id}-company`} className={label}>
              Company
            </label>
            <input id={`${id}-company`} name="company" required autoComplete="organization" className={field} placeholder="Company name" />
          </div>
        ) : (
          <div>
            <label htmlFor={`${id}-city`} className={label}>
              Current city
            </label>
            <input id={`${id}-city`} name="city" autoComplete="address-level2" className={field} placeholder="e.g. Dallas, TX" />
          </div>
        )}
        <div>
          <label htmlFor={`${id}-email`} className={label}>
            Email
          </label>
          <input id={`${id}-email`} type="email" name="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>
            Phone
          </label>
          <input id={`${id}-phone`} type="tel" name="phone" required autoComplete="tel" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-interest`} className={label}>
            {isEmployer ? "What do you need help with?" : "Which area are you looking for work in?"}
          </label>
          <select id={`${id}-interest`} name="interest" required className={field} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {(isEmployer ? form.serviceOptions : form.roleOptions).map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className={label}>
            {isEmployer ? "Tell us about the roles" : "Tell us about your experience"}
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            required
            className={`${field} h-auto py-3`}
            placeholder={
              isEmployer
                ? "Roles, number of openings, locations, timelines and the tools you use."
                : "Years of experience, current role, work authorization, availability and expected rate or salary."
            }
          />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1 size-4 rounded border-line accent-primary" />
        <span>I agree to be contacted by WinStaff Solutions about my enquiry.</span>
      </label>

      {error ? (
        <p role="alert" className="mt-5 flex items-start gap-2.5 rounded-xl bg-red-50 p-3.5 text-sm text-red-700">
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      ) : null}

      <div className="mt-6">
        <Button type="submit" size="lg" disabled={sending} className="w-full disabled:opacity-70 sm:w-auto">
          {sending ? "Sending\u2026" : "Send message"}
          {sending ? (
            <Loader2 aria-hidden="true" className="size-4 animate-spin" />
          ) : (
            <Send aria-hidden="true" className="size-4" />
          )}
        </Button>
      </div>
    </form>
  );
}
