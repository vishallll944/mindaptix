"use client";

import { useMemo, useState } from "react";
import { CASE_STUDIES } from "@/data/caseStudies.js";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function CaseStudiesExplorer() {
  const categories = useMemo(() => {
    const unique = [...new Set(CASE_STUDIES.map((s) => s.category))];
    return ["All", ...unique];
  }, []);
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? CASE_STUDIES : CASE_STUDIES.filter((s) => s.category === active);

  return (
    <div>
      <div className="filter-chips" role="tablist" aria-label="Filter case studies by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            className={`filter-chip${active === category ? " is-active" : ""}`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="case-studies-grid">
        {visible.map((study, i) => (
          <FadeIn key={`${active}-${study.id}`} delay={Math.min(i * 0.05, 0.2)}>
            <CaseStudyCard
              tag={study.tag}
              title={study.title}
              summary={study.summary}
              metrics={study.metrics}
              href={study.href}
              image={study.image}
              platform={study.platform}
              market={study.market}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
