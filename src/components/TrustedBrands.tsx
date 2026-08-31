"use client";

import { SITE } from "@/data/site.js";

export function TrustedBrands() {
  const logos = [...SITE.clientLogos, ...SITE.clientLogos];

  return (
    <section className="border-y border-slate-100/80 bg-white/50 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-text-secondary">
          Trusted by ambitious brands
        </p>

        <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex w-max gap-12">
            {logos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="group flex shrink-0 items-center justify-center px-4"
              >
                <span className="text-xl font-bold tracking-tight text-slate-400 transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple group-hover:bg-clip-text group-hover:text-transparent">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
