import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export type StatsCardProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function StatsCard({
  value,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: StatsCardProps) {
  return (
    <article className={`stats-card${className ? ` ${className}` : ""}`}>
      <p className="stats-card__value">
        <AnimatedCounter
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
        />
      </p>
      <p className="stats-card__label">{label}</p>
    </article>
  );
}
