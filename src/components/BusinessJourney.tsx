import { motion } from "motion/react"
import { Reveal } from "@/components/Reveal"
import { AnimatedHeading } from "@/components/AnimatedHeading"

const STAGES = ["Business Need", "Discovery", "Solution", "Design", "Engineering", "Testing", "Deployment", "Growth"]

export function BusinessJourney() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <AnimatedHeading
            as="h2"
            className="text-balance font-sans text-[clamp(28px,3.8vw,46px)] font-bold tracking-[-0.025em] text-foreground"
          >
            Every Project Starts With Understanding The Problem.
          </AnimatedHeading>
        </Reveal>

        <div className="relative mx-auto mt-16 flex max-w-3xl flex-col items-center">
          <svg className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2" aria-hidden="true">
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="hsl(222 84% 48% / 0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>

          {STAGES.map((stage, i) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative z-10 mb-5 last:mb-0"
            >
              <div className="rounded-full border border-border bg-card-elevated px-6 py-2.5 font-mono-label text-foreground">
                {stage}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
