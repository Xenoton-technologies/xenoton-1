import { motion, type Variants } from "motion/react"
import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TechGrid } from "@/components/TechGrid"
import { ArchitectureVisual } from "@/components/ArchitectureVisual"
import { cn } from "@/lib/utils"

const CHIPS = ["Web Development", "Mobile Apps", "Custom Software", "AI Solutions", "Cloud Ready"]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

function RevealWord({ children, delay, className }: { children: string; delay: number; className?: string }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        className={cn("inline-block", className)}
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  const navigate = useNavigate()

  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-center overflow-hidden pt-[72px]"
    >
      <TechGrid className="bg-glow-primary" />

      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-mono-label mb-6 text-primary"
          >
            SOFTWARE · DESIGN · CLOUD · DIGITAL PRODUCTS
          </motion.p>

          <h1 className="text-balance font-sans text-[clamp(50px,7.2vw,94px)] font-extrabold leading-[0.94] tracking-[-0.035em] text-foreground">
            <span className="block">
              <RevealWord delay={0.12}>Build.</RevealWord> <RevealWord delay={0.24}>Innovate.</RevealWord>
            </span>
            <span className="block">
              <RevealWord delay={0.36} className="text-gradient">
                Transform.
              </RevealWord>
            </span>
          </h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-[1.7] text-muted-foreground"
          >
            At Xenoton Technologies, we build modern, scalable, and reliable digital
            solutions that help businesses turn ideas into impactful products.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 max-w-xl text-lg leading-[1.7] text-muted-foreground"
          >
            From web and mobile applications to custom software and cloud-ready
            solutions, we combine technology, creativity, and business understanding
            to deliver solutions designed for the future.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" onClick={() => navigate("/contact")}>
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/services")}>
              Explore Our Services
            </Button>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-3">
            {CHIPS.map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.06 }}
                className="font-mono-label rounded-full border border-border bg-card px-4 py-2 text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <ArchitectureVisual />
        </motion.div>
      </div>
    </section>
  )
}
