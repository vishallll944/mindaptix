import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, title, lead, children, className = "" }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 ${className}`}>
      <div className="absolute inset-0 gradient-soft" />
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <span className="mb-4 inline-block rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-blue">
          {eyebrow}
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {lead}
          </p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
