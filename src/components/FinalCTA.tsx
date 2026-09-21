import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { AnimatedHeading } from "@/components/AnimatedHeading"

export function FinalCTA() {
  const navigate = useNavigate()

  return (
    <section className="relative border-t border-border py-20">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 px-6 text-center md:px-10 lg:px-16">
        <Reveal>
          <AnimatedHeading
            as="h2"
            className="text-balance font-sans text-[clamp(32px,4.2vw,50px)] font-bold tracking-[-0.03em] text-foreground"
          >
            Let's Turn Your Idea Into Reality.
          </AnimatedHeading>
          <p className="mx-auto mt-5 max-w-md text-base leading-[1.7] text-muted-foreground">
            Have a requirement? Have a question? Or simply want to explore an
            idea? We're ready to listen.
          </p>
          <Button size="lg" className="mt-8" onClick={() => navigate("/contact")}>
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
