import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/data/services.js";
import { SITE } from "@/data/site.js";
import { ServiceDetailView } from "@/components/ServiceDetailView";

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
    "Aligned with the Mindaptix AI Growth Framework across search and AI platforms",
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

  return (
    <ServiceDetailView
      title={service.title}
      desc={service.desc}
      slug={service.slug}
      icon={service.icon}
      benefits={getBenefits(service.title, service.desc)}
    />
  );
}
