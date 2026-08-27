import { Hero } from "@/sections/Hero";
import { TrustedBy } from "@/sections/TrustedBy";
import { TrustStats } from "@/sections/TrustStats";
import { SearchFuture } from "@/sections/SearchFuture";
import { GrowthFramework } from "@/sections/GrowthFramework";
import { Services } from "@/sections/Services";
import { AuditCTA } from "@/sections/AuditCTA";
import { Industries } from "@/sections/Industries";
import { Locations } from "@/sections/Locations";
import { CaseStudies } from "@/sections/CaseStudies";
import { Team } from "@/sections/Team";
import { LiveStrategist } from "@/sections/LiveStrategist";
import { PerformanceDashboard } from "@/sections/PerformanceDashboard";
import { Testimonials } from "@/sections/Testimonials";
import { Blog } from "@/sections/Blog";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <TrustStats />
      <SearchFuture />
      <GrowthFramework />
      <Services />
      <AuditCTA />
      <Industries />
      <Locations />
      <CaseStudies />
      <Team />
      <LiveStrategist />
      <PerformanceDashboard />
      <Testimonials />
      <Blog />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
