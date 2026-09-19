import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col pb-24">
      <MotionWrapper delay={0}>
        <HeroSection />
      </MotionWrapper>
      
      <MotionWrapper delay={0.1}>
        <AboutSection />
      </MotionWrapper>
      
      <MotionWrapper delay={0.2}>
        <ExperienceSection />
      </MotionWrapper>
      
      <MotionWrapper delay={0.3}>
        <ProjectsSection />
      </MotionWrapper>
      
      <MotionWrapper delay={0.4}>
        <ContactSection />
      </MotionWrapper>
    </div>
  );
}
