import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Intro } from "@/components/Intro"
import { Services } from "@/components/Services"
import { TechnologyStack } from "@/components/TechnologyStack"
import { WhyXenoton } from "@/components/WhyXenoton"
import { Process } from "@/components/Process"
import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
import { MissionVision } from "@/components/MissionVision"
import { Beliefs } from "@/components/Beliefs"
import { BusinessJourney } from "@/components/BusinessJourney"
import { CTA } from "@/components/CTA"
import { Contact } from "@/components/Contact"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"
import { StickyMobileCTA } from "@/components/StickyMobileCTA"

export function Home() {
  return (
    <div className="pb-20 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <TechnologyStack />
        <WhyXenoton />
        <Process />
        <Projects />
        <About />
        <MissionVision />
        <Beliefs />
        <BusinessJourney />
        <CTA />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
