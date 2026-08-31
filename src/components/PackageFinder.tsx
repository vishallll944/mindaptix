"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { FINDER_OPTIONS, PACKAGES } from "@/data/packages.js";
import { Button } from "@/components/ui/Button";

type FinderOption = (typeof FINDER_OPTIONS)[number];
type Plan = (typeof PACKAGES)[number];

const PLAN_BY_ID = new Map<string, Plan>(PACKAGES.map((p) => [p.id, p]));

export function PackageFinder() {
  const [selected, setSelected] = useState<FinderOption>(
    FINDER_OPTIONS.find((o) => o.id === "growing-service") ?? FINDER_OPTIONS[0],
  );
  const plan = PLAN_BY_ID.get(selected.plan)!;

  return (
    <div className="finder">
      <div>
        <p className="finder__step-label">1. Highlight your business type</p>
        <div className="finder__options" role="listbox" aria-label="Business type">
          {FINDER_OPTIONS.map((option) => {
            const optionPlan = PLAN_BY_ID.get(option.plan)!;
            const active = option.id === selected.id;
            return (
              <button
                key={option.id}
                type="button"
                className={`finder__option${active ? " is-active" : ""}`}
                onClick={() => setSelected(option)}
                aria-pressed={active}
              >
                <span className="finder__option-label">{option.label}</span>
                <span className="finder__option-fit">
                  Best fit: {optionPlan.name.replace(" SEO Plan", "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="finder__step-label">2. Your recommended SEO package</p>
        <div className="finder__result">
          <p className="finder__result-eyebrow">Recommended for {selected.label}</p>
          <h3 className="finder__result-name">{plan.name}</h3>
          <p className="finder__result-price">
            {plan.price}
            {plan.period}
            {plan.badge ? ` · ${plan.badge}` : ""}
          </p>
          <p className="finder__result-reason">{selected.reason}</p>
          <p className="finder__result-why">Why it fits</p>
          <ul className="finder__result-list">
            {selected.highlights.map((point) => (
              <li key={point}>
                <Check aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <div className="finder__result-actions">
            <Button href="/contact">
              Request Free SEO Audit
              <ArrowRight className="btn-arrow" aria-hidden />
            </Button>
            <Button href="#seo-packages" variant="secondary" className="btn-on-dark">
              View {plan.name.replace(" Plan", "")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
