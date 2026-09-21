import { motion } from "motion/react"
import { Code2, Database, Cloud, Smartphone } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { TechGrid } from "@/components/TechGrid"

const NODES = [
  { icon: Code2, label: "Frontend" },
  { icon: Database, label: "Data" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Cloud, label: "Cloud" },
]

export function Intro() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      <TechGrid glow={false} />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        <Reveal>
          <p className="font-mono-label mb-6 text-primary">WHAT WE DO</p>
          <h2 className="text-balance font-sans text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.025em] text-foreground">
            Turning Ideas Into Digital Solutions
          </h2>
          <p className="mt-6 max-w-lg text-base leading-[1.7] text-muted-foreground">
            Technology should solve real business challenges.
          </p>
          <p className="mt-4 max-w-lg text-base leading-[1.7] text-muted-foreground">
            We work with businesses and organizations to design and develop digital
            products that are user-friendly, scalable, secure, and built around
            their specific needs.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative flex h-full min-h-[280px] items-center justify-center rounded-lg border border-border bg-card p-10">
            <div className="grid grid-cols-2 gap-6">
              {NODES.map((node, i) => {
                const Icon = node.icon
                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center gap-3 rounded-md border border-border bg-card-elevated px-8 py-7 text-center"
                  >
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    <span className="font-mono-label text-muted-foreground">{node.label}</span>
                  </motion.div>
                )
              })}
            </div>
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="hsl(220 18% 20%)" strokeWidth="1" />
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="hsl(220 18% 20%)" strokeWidth="1" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
