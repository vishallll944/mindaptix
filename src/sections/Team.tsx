"use client";

import { TEAM } from "@/data/team.js";
import { TeamCard } from "@/components/cards/TeamCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Team() {
  return (
    <section className="section section-surface" id="team">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="The team"
            title="Strategists who build search into growth"
            subtitle="Meet the people behind the frameworks, audits and campaigns."
            align="center"
          />
        </FadeIn>

        <div className="team-grid">
          {TEAM.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.07}>
              <TeamCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                tags={member.tags}
                image={member.avatar}
                chatHref="/contact"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
