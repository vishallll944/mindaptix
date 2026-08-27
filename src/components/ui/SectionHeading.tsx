type Align = "left" | "center" | "right";

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: Align;
  className?: string;
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  dark = false,
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? " center" : align === "right" ? " text-right" : "";

  return (
    <div
      className={`section-header${alignClass}${dark ? " section-header--dark" : ""}${className ? ` ${className}` : ""}`}
    >
      {eyebrow ? (
        <p className={`eyebrow${dark ? " eyebrow-light" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
