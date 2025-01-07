import { HeroSection } from "@/components/hero";
import { OverviewSection } from "@/components/overview";
import { ProgramsSection } from "@/components/programs";
import { MetricsSection } from "@/components/metrics";
import { TestimonialsSection } from "@/components/testimonials";
import { FaqSection } from "@/components/faq";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <ProgramsSection />
      <MetricsSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
