type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}: Props) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  const titleCls = tone === "dark" ? "text-white" : "text-primary";
  const descCls = tone === "dark" ? "text-white/75" : "text-muted";

  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleCls}`}>
        {title}
      </h2>
      {description && <p className={`mt-4 text-lg leading-relaxed ${descCls}`}>{description}</p>}
    </div>
  );
}
