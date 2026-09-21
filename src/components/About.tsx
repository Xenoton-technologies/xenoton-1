import { motion } from "motion/react"
import { Reveal } from "@/components/Reveal"

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        <Reveal>
          <p className="font-mono-label mb-6 text-primary">06 / ABOUT XENOTON</p>
          <h2 className="text-balance font-sans text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.025em] text-foreground">
            Building Digital Solutions for a Connected World
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted-foreground">
            Xenoton Technologies is a software and technology solutions company
            focused on helping businesses build, improve, and scale their digital
            presence.
          </p>
          <p className="mt-4 max-w-xl text-base leading-[1.7] text-muted-foreground">
            We develop modern websites, web applications, mobile applications,
            custom software, APIs, and technology solutions tailored to individual
            business requirements.
          </p>
          <p className="mt-4 max-w-xl text-base leading-[1.7] text-muted-foreground">
            Our approach combines technical expertise, creative thinking, and an
            understanding of business needs to deliver solutions that are
            practical, scalable, and user-friendly.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-lg border border-border bg-card p-8">
            <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)]" />
            <div className="relative grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.2, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex h-16 w-16 items-center justify-center rounded-md border border-border bg-card-elevated"
                >
                  <span
                    className="h-2 w-2 rounded-full bg-primary/70"
                    style={{ opacity: (i % 4) * 0.25 + 0.25 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
