"use client";

import dynamic from "next/dynamic";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";
import { GrowthSphereFallback } from "./three/SceneFallbacks";

const GrowthSphereCanvas = dynamic(
  () => import("./three/GrowthSphere").then((m) => m.GrowthSphereCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[360px] items-center justify-center md:h-[420px]">
        <div className="h-12 w-12 animate-pulse rounded-full bg-purple-100" />
      </div>
    ),
  }
);

export function ThreeScene() {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();

  return (
    <section id="growth-visualized" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 gradient-soft" />
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-blue">
            Interactive
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
            Growth, Visualized.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
            Every data point, search signal and AI node connected — building the
            ecosystem that powers your brand&apos;s digital presence.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-4 shadow-glow backdrop-blur-sm md:p-8">
          {mobile || reduced ? (
            <GrowthSphereFallback />
          ) : (
            <GrowthSphereCanvas />
          )}
        </div>
      </div>
    </section>
  );
}
