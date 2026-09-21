import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { TechGrid } from "@/components/TechGrid"

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28">
      <TechGrid className="bg-glow-primary" />
      <div className="relative mx-auto max-w-[1240px] px-6 text-center md:px-10 lg:px-16">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-mono-label mb-6 text-primary">LET'S BUILD</p>
          <h2 className="text-balance font-sans text-[clamp(32px,4.5vw,54px)] font-semibold tracking-[-0.03em] text-foreground">
            Have an Idea? Let's Build It.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-muted-foreground">
            Whether you're starting a new digital product or improving an existing
            system, Xenoton Technologies can help turn your vision into a
            practical technology solution.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
