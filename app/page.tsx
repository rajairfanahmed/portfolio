import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";

export default function Home() {
  return (
    <div className="flex flex-col pb-24">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
