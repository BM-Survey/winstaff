"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/content/site";

type Props = { items: FAQ[] };

export function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-card border border-line bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:px-7"
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`size-5 shrink-0 text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-6 text-muted leading-relaxed sm:px-7"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
