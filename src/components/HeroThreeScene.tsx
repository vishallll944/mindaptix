"use client";

import dynamic from "next/dynamic";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";
import { HeroSceneFallback } from "./three/SceneFallbacks";

const HeroSceneCanvas = dynamic(
  () => import("./three/HeroScene").then((m) => m.HeroSceneCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[380px] items-center justify-center md:h-[460px]">
        <div className="h-14 w-14 animate-pulse rounded-full bg-gradient-to-br from-blue-200 to-teal-200" />
      </div>
    ),
  }
);

export function HeroThreeScene() {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();

  if (mobile || reduced) return <HeroSceneFallback />;
  return <HeroSceneCanvas />;
}
