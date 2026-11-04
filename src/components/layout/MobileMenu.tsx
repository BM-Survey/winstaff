"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { NavLink } from "@/content/site";

type Props = { links: NavLink[]; cta: NavLink; secondary: NavLink };

export function MobileMenu({ links, cta, secondary }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 place-items-center rounded-xl text-primary hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-16 z-40 bg-primary/40 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white px-4 pb-6 pt-2 shadow-float transition-transform duration-300 ${
          open ? "visible translate-y-0" : "invisible -translate-y-[120%]"
        }`}
      >
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-primary hover:bg-surface"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-col gap-2">
          <Button href={cta.href} variant="primary" size="lg" className="w-full">
            {cta.label}
          </Button>
          <Button href={secondary.href} variant="outline" size="lg" className="w-full">
            {secondary.label}
          </Button>
        </div>
      </nav>
    </div>
  );
}
