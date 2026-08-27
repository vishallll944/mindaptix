import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PROCESS } from "@/data/framework.js";
import { SERVICES } from "@/data/services.js";
import { SITE } from "@/data/site.js";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

function getBenefits(title: string, desc: string) {
  return [
    desc,
    `A clear roadmap for ${title} priorities — not random one-off fixes`,
    "Measurement tied to rankings, traffic, leads, and revenue signals",
    "Aligned with the 4Core AI Growth Framework across search and AI platforms",
    "White-hat execution designed for durable, compounding results",
  ];
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: `Service | ${SITE.name}` };
  }

  return {
    title: `${service.title} | ${SITE.name}`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const benefits = getBenefits(service.title, service.desc);

  return (
    <main>
      <section className="page-hero page-hero--dark">
        <div className="container">
          <FadeIn>
            <p className="eyebrow eyebrow-light">Service</p>
            <h1 className="page-hero__title">{service.title}</h1>
            <p className="page-hero__lead">{service.desc}</p>
            <div className="page-hero__actions">
              <Button href="/contact" size="lg">
                Get Free SEO Audit
              </Button>
              <Button href="/services" variant="secondary" size="lg" className="btn-on-dark">
                All services
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail__grid">
          <FadeIn>
            <SectionHeading
              eyebrow="Outcomes"
              title={`Why teams choose our ${service.title}`}
              subtitle="Practical benefits you can feel in visibility, pipeline, and reporting — not just keyword dashboards."
            />
            <ul className="benefit-list">
              {benefits.map((item) => (
                <li key={item} className="benefit-list__item">
                  <span className="benefit-list__icon" aria-hidden>
                    <Check size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="card">
              <p className="eyebrow">Engagement snapshot</p>
              <h3 className="section-title" style={{ fontSize: "1.5rem", maxWidth: "none" }}>
                Built for measurable growth
              </h3>
              <p className="section-subtitle" style={{ maxWidth: "none" }}>
                We start with discovery, prioritize the highest-ROI work for {service.title},
                then execute and iterate with transparent reporting.
              </p>
              <div className="btn-group" style={{ marginTop: "1.5rem" }}>
                <Button href="/contact">Start with an audit</Button>
                <Button href="/case-studies" variant="outline">
                  See case studies
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Process"
              title="How we deliver"
              subtitle="A clear path from research to scale — consistent across every service engagement."
            />
          </FadeIn>
          <ol className="process-steps">
            {PROCESS.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.05}>
                <li className="process-step">
                  <p className="process-step__num">STEP {step.step}</p>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.desc}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title={`Ready to grow with ${service.title}?`}
        subtitle="Get a free AI SEO audit focused on your market, competitors, and conversion goals."
        secondaryLabel="Browse all services"
        secondaryHref="/services"
      />
    </main>
  );
}
