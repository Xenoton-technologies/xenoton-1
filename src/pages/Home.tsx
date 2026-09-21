import { Hero } from "@/components/Hero"
import { Intro } from "@/components/Intro"
import { WhyXenoton } from "@/components/WhyXenoton"
import { Process } from "@/components/Process"
import { BusinessJourney } from "@/components/BusinessJourney"
import { FinalCTA } from "@/components/FinalCTA"

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyXenoton />
      <Process />
      <BusinessJourney />
      <FinalCTA />
    </>
  )
}
