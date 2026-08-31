import { Hero } from "@/sections/Hero";
import { GrowthIntro } from "@/sections/GrowthIntro";
import { TrustedBy } from "@/sections/TrustedBy";
import { SearchFuture } from "@/sections/SearchFuture";
import { GrowthFramework } from "@/sections/GrowthFramework";
import { Services } from "@/sections/Services";
import { Industries } from "@/sections/Industries";
import { Locations } from "@/sections/Locations";
import { CaseStudies } from "@/sections/CaseStudies";
import { Testimonials } from "@/sections/Testimonials";
import { Blog } from "@/sections/Blog";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <GrowthIntro />
      <TrustedBy />
      <SearchFuture />
      <GrowthFramework />
      <Services />
      <Industries />
      <Locations />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
