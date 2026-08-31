"use client";

import { motion } from "framer-motion";

const TAGS = [
  { label: "SEO", color: "#2563EB", angle: -90 },
  { label: "AI", color: "#0D9488", angle: -30 },
  { label: "GEO", color: "#06B6D4", angle: 30 },
  { label: "AEO", color: "#14B8A6", angle: 90 },
  { label: "CRO", color: "#0EA5E9", angle: 150 },
  { label: "PPC", color: "#6366F1", angle: 210 },
];

export function HeroSceneFallback() {
  return (
    <div className="relative flex h-[380px] w-full items-center justify-center overflow-hidden md:h-[460px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-36 w-36 animate-blob rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 animate-blob rounded-full bg-teal-300/30 blur-3xl [animation-delay:2s]" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-cyan-200/40 blur-2xl [animation-delay:4s]" />
      </div>

      <div className="relative h-64 w-64 sm:h-72 sm:w-72">
        {/* Outer rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-blue-400/40"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-dashed border-teal-400/50"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute inset-9 rounded-full border border-cyan-300/40"
        />

        {/* Core */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[28%] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-teal-600 shadow-[0_0_40px_rgba(37,99,235,0.45)]"
        >
          <div className="text-center text-white">
            <p className="text-lg font-extrabold sm:text-xl">Growth</p>
            <p className="text-[10px] font-medium text-blue-100">AI · SEO · Ads</p>
          </div>
        </motion.div>

        {/* Orbiting tags */}
        {TAGS.map((tag, i) => {
          const rad = (tag.angle * Math.PI) / 180;
          const r = 48;
          return (
            <motion.span
              key={tag.label}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.2 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute rounded-full border border-white/80 bg-white/95 px-2.5 py-1 text-[10px] font-bold shadow-md"
              style={{
                left: `${50 + Math.cos(rad) * r}%`,
                top: `${50 + Math.sin(rad) * r}%`,
                transform: "translate(-50%, -50%)",
                color: tag.color,
                boxShadow: `0 4px 12px ${tag.color}22`,
              }}
            >
              {tag.label}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}

export function GrowthSphereFallback() {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-lg items-center justify-center md:h-[420px]">
      <div className="relative h-56 w-56 animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/80 via-teal-100/60 to-cyan-100/80 blur-sm" />
        <div className="absolute inset-2 rounded-full border border-white/80 bg-white/40 backdrop-blur-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2 p-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple opacity-60"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
