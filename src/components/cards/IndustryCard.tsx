import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Car,
  Cloud,
  GraduationCap,
  HeartPulse,
  Home,
  Plane,
  Scale,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  HeartPulse,
  Building2,
  ShoppingBag,
  ShoppingCart,
  Scale,
  Plane,
  Briefcase,
  Home,
  UtensilsCrossed,
  Sparkles,
  Sparkle: Sparkles,
  Car,
  GraduationCap,
  Stethoscope,
  Cloud,
  Store,
  Wrench,
};

export type IndustryCardProps = {
  name: string;
  description?: string;
  href?: string;
  icon?: string;
  className?: string;
};

export function IndustryCard({
  name,
  description = "Search strategies tailored to how buyers discover and convert.",
  href = "/contact",
  icon = "Briefcase",
  className = "",
}: IndustryCardProps) {
  const Icon = ICONS[icon] ?? Briefcase;

  return (
    <Link href={href} className={`industry-card${className ? ` ${className}` : ""}`}>
      <span className="industry-card__icon" aria-hidden>
        <Icon />
      </span>
      <div className="industry-card__body">
        <h3 className="industry-card__name">{name}</h3>
        <p className="industry-card__desc">{description}</p>
      </div>
      <ArrowRight className="industry-card__arrow" aria-hidden />
    </Link>
  );
}
