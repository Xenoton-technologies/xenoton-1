import { motion } from "motion/react"
import { Reveal } from "@/components/Reveal"

const STEPS = [
  { title: "Discover", description: "We understand your business, requirements, users, and objectives." },
  { title: "Plan", description: "We define the solution, technology stack, architecture, and development roadmap." },
  { title: "Design", description: "We create intuitive interfaces and experiences focused on your users." },
  { title: "Develop", description: "Our team builds the solution using modern development practices." },
  { title: "Test", description: "We test functionality, performance, responsiveness, and reliability." },
  { title: "Launch & Support", description: "We deploy your solution and provide ongoing improvements and support." },
]

export function Process() {
  return (
    <section className="relative border-t border-border py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <p className="font-mono-label mb-6 text-primary">04 / PROCESS</p>
          <h2 className="text-balance font-sans text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.025em] text-foreground">
            From Concept to Launch
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[15px] top-3 h-[calc(100%-24px)] w-px bg-border md:left-0 md:top-3 md:h-px md:w-full">
            <motion.div
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{ scaleY: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top left" }}
              className="h-full w-full origin-left bg-primary/60 md:origin-left"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-6 md:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-4 pl-10 md:flex-col md:gap-0 md:pl-0"
              >
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-background font-mono text-xs text-primary md:relative md:mb-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
