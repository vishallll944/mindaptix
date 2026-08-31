import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Check,
  FileEdit,
  KeyRound,
  Link2,
  LineChart,
  Map,
  MapPin,
  Megaphone,
  PenLine,
  Receipt,
  SearchCheck,
  Settings2,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/data/site.js";
import {
  ADD_ONS,
  COMPARISON,
  CUSTOM_PACKAGE,
  IMPORTANT_NOTES,
  INCLUDED_IN_EVERY_PLAN,
  MONTHLY_WORKFLOW,
  PACKAGE_FAQS,
  PACKAGE_GUIDANCE,
  PACKAGE_TRUST_CHIPS,
  PACKAGES,
  SETUP_TIMELINE,
  WHY_MONTHLY,
} from "@/data/packages.js";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PackageFinder } from "@/components/PackageFinder";
import { FinalCTA } from "@/sections/FinalCTA";

export const metadata: Metadata = {
  title: `SEO Packages | Affordable Monthly SEO Plans | ${SITE.name}`,
  description:
    "Affordable monthly SEO packages starting at $149/month. Choose from 10, 25, 35 or 50 keyword SEO plans with on-page SEO, backlinks, reporting and growth strategy.",
};

const ICONS: Record<string, LucideIcon> = {
  Award,
  Users,
  Briefcase,
  BadgeCheck,
  Star,
  BarChart3,
  Receipt,
  Target,
  FileEdit,
  Link2,
  TrendingUp,
  SearchCheck,
  KeyRound,
  Settings2,
  LineChart,
  Map,
  MapPin,
  PenLine,
  Wrench,
  ShoppingCart,
  Sparkles,
  Megaphone,
};

function Icon({ name }: { name: string }) {
  const Cmp = ICONS[name] ?? Star;
  return <Cmp aria-hidden />;
}

export default function PackagesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="packages-hero">
        <div className="container">
          <FadeIn>
            <p className="packages-hero__eyebrow">
              <Sparkles aria-hidden /> SEO Packages
            </p>
            <h1 className="packages-hero__title">
              Affordable SEO Packages Built For <span>Rankings, Traffic &amp; Leads</span>
            </h1>
            <p className="packages-hero__lead">
              Choose a monthly SEO package designed to improve your Google rankings, increase
              organic traffic, build website authority and generate more qualified enquiries for
              your business.
            </p>
            <p className="packages-hero__note">
              At {SITE.name}, we combine keyword targeting, on-page SEO, technical checks, content
              recommendations, white-hat backlink building and monthly reporting to help your
              website grow consistently.
            </p>
            <div className="packages-hero__actions">
              <Button href="#seo-packages" size="lg">
                Choose Your SEO Package
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="btn-on-dark">
                Get Free SEO Audit
              </Button>
            </div>
            <div className="trust-chips">
              {PACKAGE_TRUST_CHIPS.map((chip) => (
                <div key={chip.label} className="trust-chip">
                  <Icon name={chip.icon} />
                  {chip.label}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why monthly SEO */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Monthly SEO"
              title="Why Choose A Monthly SEO Package?"
              subtitle="SEO is not a one-time task. Search visibility improves when your website is consistently optimised, monitored, updated and strengthened with quality content and authority-building work. Our monthly SEO packages are designed for businesses that want a clear, affordable and structured SEO plan without confusing agency pricing."
              align="center"
            />
          </FadeIn>
          <div className="mini-cards">
            {WHY_MONTHLY.map((item, i) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.05, 0.25)}>
                <div className="mini-card">
                  <span className="mini-card__icon">
                    <Icon name={item.icon} />
                  </span>
                  <h3 className="mini-card__title">{item.title}</h3>
                  <p className="mini-card__desc">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section services-section" id="seo-packages">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Pricing"
              title="Choose Your SEO Package"
              subtitle="Monthly SEO plans with clear pricing, defined deliverables and transparent reporting."
              align="center"
            />
          </FadeIn>
          <div className="pricing-grid">
            {PACKAGES.map((plan, i) => (
              <FadeIn key={plan.id} delay={Math.min(i * 0.06, 0.24)}>
                <div className={`pricing-card${plan.badge ? " pricing-card--highlight" : ""}`}>
                  {plan.badge ? <span className="pricing-card__badge">{plan.badge}</span> : null}
                  <h3 className="pricing-card__name">{plan.name}</h3>
                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">{plan.price}</span>
                    <span className="pricing-card__period">{plan.period}</span>
                  </div>
                  <p className="pricing-card__bestfor">Best for: {plan.bestFor}</p>
                  <p className="pricing-card__desc">{plan.desc}</p>
                  <ul className="pricing-card__features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={plan.badge ? "primary" : "outline"}>
                    {plan.cta}
                    <ArrowRight className="btn-arrow" aria-hidden />
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Custom plan */}
          <FadeIn>
            <div className="pricing-custom">
              <div className="pricing-card pricing-card--highlight">
                <span className="pricing-card__badge">{CUSTOM_PACKAGE.badge}</span>
                <h3 className="pricing-card__name">{CUSTOM_PACKAGE.name}</h3>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount" style={{ fontSize: "1.6rem" }}>
                    {CUSTOM_PACKAGE.price}
                  </span>
                </div>
                <p className="pricing-card__bestfor">
                  Based on your website, market, goals &amp; growth requirements — best for:{" "}
                  {CUSTOM_PACKAGE.bestFor}
                </p>
                <p className="pricing-card__desc">{CUSTOM_PACKAGE.desc}</p>
                <ul className="pricing-card__features">
                  {CUSTOM_PACKAGE.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div>
                  <Button href="/contact">
                    {CUSTOM_PACKAGE.cta}
                    <ArrowRight className="btn-arrow" aria-hidden />
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Compare"
              title="Compare SEO Packages"
              subtitle="A side-by-side breakdown of every feature across all four monthly SEO plans."
              align="center"
            />
          </FadeIn>
          <FadeIn>
            <div className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    {COMPARISON.columns.map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.rows.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      {row.values.map((value, i) => (
                        <td key={`${row.feature}-${COMPARISON.columns[i]}`}>
                          {value === true ? (
                            <span className="compare-check">
                              <Check aria-hidden />
                            </span>
                          ) : value === false ? (
                            <span className="compare-dash">—</span>
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              Not sure which package is right for you? Get a free SEO audit and we&apos;ll recommend
              the best plan.
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
              <Button href="/contact" size="lg">
                Get Free SEO Audit
                <ArrowRight className="btn-arrow" aria-hidden />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Package finder */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Compare & Choose"
              title="Find The SEO Package Built For Your Business"
              subtitle="Pick your business type below and we'll highlight the SEO package that best matches your scale, competition and growth stage."
              align="center"
            />
          </FadeIn>
          <FadeIn>
            <PackageFinder />
          </FadeIn>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              Not sure? Request a free SEO audit and we&apos;ll recommend the right package based on
              your website, competition and goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Included in every plan */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Included In Every Plan"
              title="What's Included In Every SEO Package?"
              align="center"
            />
          </FadeIn>
          <div className="mini-cards mini-cards--4">
            {INCLUDED_IN_EVERY_PLAN.map((item, i) => (
              <FadeIn key={item.title} delay={Math.min(i * 0.04, 0.2)}>
                <div className="mini-card">
                  <span className="mini-card__icon">
                    <Icon name={item.icon} />
                  </span>
                  <h3 className="mini-card__title">{item.title}</h3>
                  <p className="mini-card__desc">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Setup timeline */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Setup Timeline"
              title="On-Page SEO Setup Completed Within 10 Days"
              subtitle="Usually, we complete the initial on-page SEO setup within 10 days. The exact timeline depends on your business type, website platform, number of pages, website size, access availability and how many fixes are required."
              align="center"
            />
          </FadeIn>
          <div className="setup-timeline">
            {SETUP_TIMELINE.map((phase, i) => (
              <FadeIn key={phase.phase} delay={Math.min(i * 0.08, 0.24)}>
                <div className="timeline-card">
                  <span className="timeline-card__phase">{phase.phase}</span>
                  <p className="timeline-card__days">{phase.days}</p>
                  <h3 className="timeline-card__title">{phase.title}</h3>
                  <ul className="timeline-card__list">
                    {phase.items.map((item) => (
                      <li key={item}>
                        <Check aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              Please note: For larger websites, ecommerce websites, multi-location websites or
              websites with many technical issues, the timeline may require additional time or a
              custom scope.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Monthly workflow */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Monthly Workflow"
              title="How Monthly SEO Work Is Delivered"
              align="center"
            />
          </FadeIn>
          <div className="workflow-steps">
            {MONTHLY_WORKFLOW.map((step, i) => (
              <FadeIn key={step.step} delay={Math.min(i * 0.06, 0.18)}>
                <div className="workflow-step">
                  <p className="workflow-step__num">{step.step}</p>
                  <h3 className="workflow-step__title">
                    Step {Number(step.step)}: {step.title}
                  </h3>
                  <p className="workflow-step__desc">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Guidance"
              title="Which SEO Package Is Right For Your Business?"
              align="center"
            />
          </FadeIn>
          <div className="guidance-grid">
            {PACKAGE_GUIDANCE.map((guide, i) => (
              <FadeIn key={guide.plan} delay={Math.min(i * 0.06, 0.18)}>
                <div className="guidance-card">
                  <h3 className="guidance-card__title">
                    Choose <span>{guide.plan}</span> If:
                  </h3>
                  <ul className="guidance-card__list">
                    {guide.points.map((point) => (
                      <li key={point}>
                        <Check aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Optional Add-Ons"
              title="Optional SEO Add-Ons"
              align="center"
            />
          </FadeIn>
          <div className="mini-cards mini-cards--4">
            {ADD_ONS.map((addon, i) => (
              <FadeIn key={addon.title} delay={Math.min(i * 0.04, 0.2)}>
                <div className="mini-card">
                  <span className="mini-card__icon">
                    <Icon name={addon.icon} />
                  </span>
                  <h3 className="mini-card__title">{addon.title}</h3>
                  <p className="mini-card__desc">{addon.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", marginTop: "1.75rem", maxWidth: "100%" }}
            >
              Add-ons are quoted separately depending on website size, content needs, technical
              complexity and business goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Important notes */}
      <section className="section services-section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Important Notes"
              title="Important Notes Before Choosing A Package"
              align="center"
            />
          </FadeIn>
          <div className="notes-grid">
            {IMPORTANT_NOTES.map((note, i) => (
              <FadeIn key={note.title} delay={Math.min(i * 0.05, 0.2)}>
                <div className="note-card">
                  <h3 className="note-card__title">{note.title}</h3>
                  <p className="note-card__desc">{note.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQs"
              title="Frequently Asked Questions About SEO Packages"
              align="center"
            />
          </FadeIn>
          <FadeIn>
            <FAQAccordion items={PACKAGE_FAQS} />
          </FadeIn>
        </div>
      </section>

      <FinalCTA
        title="Ready To Grow Your Rankings, Traffic & Leads?"
        subtitle={`Choose an SEO package that fits your business goals and start building a stronger organic presence with ${SITE.name}. Not sure which plan is right for you? Request a free SEO audit and we'll recommend the best package based on your website, competition and growth goals.`}
      />
    </main>
  );
}
