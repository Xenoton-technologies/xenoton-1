import { HeroSection } from "@/components/sections/HeroSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { AboutIntroSection } from "@/components/sections/AboutIntroSection";
import { ServicesHomeSection } from "@/components/sections/ServicesHomeSection";
import { WhyXenotonSection } from "@/components/sections/WhyXenotonSection";
import { CounterSection } from "@/components/sections/CounterSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { JourneySection } from "@/components/sections/JourneySection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <AboutIntroSection />
      <ServicesHomeSection />
      <WhyXenotonSection />
      <CounterSection />
      <ContactSection />
      <ProcessSection />
      <JourneySection />
    </>
  );
}
