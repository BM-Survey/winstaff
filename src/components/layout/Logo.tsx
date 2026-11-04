import Link from "next/link";
import { LogoMark } from "@/components/layout/LogoMark";
import { company } from "@/content/site";

type Props = { tone?: "light" | "dark" };

export function Logo({ tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${company.name} home`}>
      <span
        className={`grid size-10 place-items-center rounded-xl ${
          dark ? "bg-white/10 text-white" : "bg-primary text-logo-grey"
        }`}
      >
        <LogoMark className="size-9" />
      </span>
      <span className="leading-none">
        <span className={`block text-lg font-extrabold tracking-tight ${dark ? "text-white" : "text-primary"}`}>
          WinStaff
        </span>
        <span
          className={`mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-white/60" : "text-muted"
          }`}
        >
          Solutions
        </span>
      </span>
    </Link>
  );
}
