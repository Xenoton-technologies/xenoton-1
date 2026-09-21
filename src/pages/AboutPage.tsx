import { About } from "@/components/About"
import { MissionVision } from "@/components/MissionVision"
import { Beliefs } from "@/components/Beliefs"
import { CTA } from "@/components/CTA"

export function AboutPage() {
  return (
    <div className="pt-[72px]">
      <About />
      <MissionVision />
      <Beliefs />
      <CTA />
    </div>
  )
}
