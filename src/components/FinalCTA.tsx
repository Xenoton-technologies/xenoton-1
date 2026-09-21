import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"

export function FinalCTA() {
  return (
    <section className="relative border-t border-border py-20">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 px-6 text-center md:px-10 lg:px-16">
        <Reveal>
          <h2 className="text-balance font-sans text-[clamp(28px,3.8vw,44px)] font-semibold tracking-[-0.025em] text-foreground">
            Let's Turn Your Idea Into Reality.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-[1.7] text-muted-foreground">
            Have a requirement? Have a question? Or simply want to explore an
            idea? We're ready to listen.
          </p>
          <Button
            size="lg"
            className="mt-8"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
