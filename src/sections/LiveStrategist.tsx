"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { LIVE_STRATEGIST } from "@/data/team.js";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function LiveStrategist() {
  const strategist = LIVE_STRATEGIST;

  return (
    <section className="section live-strategist">
      <div className="container">
        <FadeIn>
          <div className="live-strategist__card">
            <div className="live-strategist__avatar">
              <Image
                src={strategist.avatar}
                alt={strategist.name}
                width={88}
                height={88}
                unoptimized
              />
              <span className="live-strategist__online" aria-hidden />
            </div>
            <div style={{ flex: 1 }}>
              <p className="live-strategist__status">
                <span className="live-strategist__pulse" aria-hidden />
                Active Now
              </p>
              <h2 className="live-strategist__name">{strategist.name}</h2>
              <p className="live-strategist__role">{strategist.role}</p>
              <p style={{ marginTop: "0.85rem", marginBottom: "1.25rem", color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem" }}>
                Chat with a strategist about your SEO goals, AI visibility and the fastest path to qualified leads.
              </p>
              <Button href="/contact" size="lg">
                <MessageCircle size={18} aria-hidden />
                Start a Conversation
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
