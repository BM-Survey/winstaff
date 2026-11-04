import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  hover?: boolean;
};

export function Card({ children, className = "", as: Tag = "div", hover = false }: Props) {
  return (
    <Tag
      className={`rounded-card border border-line bg-white p-6 shadow-soft sm:p-8 ${
        hover ? "transition-transform duration-300 hover:-translate-y-1 hover:shadow-float" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
