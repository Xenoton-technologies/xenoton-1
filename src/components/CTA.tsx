import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { TechGrid } from "@/components/TechGrid"
import { Eyebrow } from "@/components/Eyebrow"
import { AnimatedHeading } from "@/components/AnimatedHeading"

export function CTA() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden border-t border-border py-28">
      <TechGrid className="bg-glow-primary" />
      <div className="relative mx-auto max-w-[1240px] px-6 text-center md:px-10 lg:px-16">
        <Reveal className="mx-auto max-w-2xl">
          <div className="flex justify-center">
            <Eyebrow>LET'S BUILD</Eyebrow>
          </div>
          <AnimatedHeading
            as="h2"
            className="text-balance font-sans text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-0.035em] text-foreground"
          >
            Have an Idea? Let's Build It.
          </AnimatedHeading>
          <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">
            Whether you're starting a new digital product or improving an existing
            system, Xenoton Technologies can help turn your vision into a
            practical technology solution.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={() => navigate("/contact")}>
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
