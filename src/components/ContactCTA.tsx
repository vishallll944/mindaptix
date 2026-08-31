"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeInView";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE } from "@/data/site.js";
import { Mail, Phone } from "lucide-react";

export function ContactCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 gradient-cta" />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent-blue/30"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 23 + 10) % 100}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-5">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
              Ready To Build Your Next{" "}
              <span className="gradient-text">Growth Engine?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Let&apos;s combine strategy, technology and creativity to create
              measurable business growth.
            </p>
            <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
              <a
                href={SITE.emailHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-accent-blue"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-accent-blue"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.08)] backdrop-blur-xl md:p-10"
          >
            {status === "success" ? (
              <div className="py-12 text-center">
                <p className="text-2xl font-bold text-text-primary">Thank you!</p>
                <p className="mt-2 text-text-secondary">
                  We&apos;ll be in touch within 24 hours with your free growth audit.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "name", label: "Name", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "company", label: "Company", type: "text", required: false },
                    { name: "website", label: "Website", type: "url", required: false },
                    { name: "phone", label: "Phone", type: "tel", required: false },
                  ].map((field) => (
                    <div key={field.name} className={field.name === "phone" ? "sm:col-span-2 sm:max-w-[calc(50%-0.5rem)]" : ""}>
                      <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-text-primary">
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-text-primary transition-colors focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-text-primary transition-colors focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                    placeholder="Tell us about your growth goals..."
                  />
                </div>

                <div className="mt-6">
                  <MagneticButton>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-blue px-6 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:bg-blue-700 disabled:opacity-70 sm:w-auto"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Free Growth Audit
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>
              </>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
