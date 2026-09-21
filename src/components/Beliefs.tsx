import { Lightbulb, ShieldCheck, Users, TrendingUp } from "lucide-react"
import { motion } from "motion/react"

const BELIEFS = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore modern technologies and better ways to solve problems.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "We focus on writing maintainable, reliable, and scalable solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe successful products are built through strong communication and teamwork.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We build solutions that can evolve as businesses and technologies change.",
  },
]

export function Beliefs() {
  return (
    <section className="relative border-t border-border py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BELIEFS.map((belief, i) => {
            const Icon = belief.icon
            return (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-lg border border-border bg-card p-7"
              >
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-base font-semibold text-foreground">{belief.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{belief.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
