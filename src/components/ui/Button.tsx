import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "accent" | "outline" | "ghost" | "inverse";
type Size = "md" | "lg";

type Base = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkProps = Base & { href: string };
type ButtonProps = Base & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  accent: "bg-accent text-ink hover:bg-accent-dark hover:text-white",
  outline: "border border-line bg-white text-primary hover:border-primary hover:bg-primary-soft",
  ghost: "text-primary hover:bg-primary-soft",
  inverse: "bg-white text-primary hover:bg-primary-soft",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  const rest = { ...(props as ButtonProps) };
  delete rest.variant;
  delete rest.size;
  delete rest.className;
  delete (rest as { children?: ReactNode }).children;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
