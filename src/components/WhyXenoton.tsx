import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { Reveal } from "@/components/Reveal"
import { Eyebrow } from "@/components/Eyebrow"
import { AnimatedHeading } from "@/components/AnimatedHeading"

const ITEMS = [
  {
    title: "Business-Focused Solutions",
    description:
      "We understand that technology is valuable when it creates measurable business impact.",
  },
  {
    title: "Modern Technology",
    description:
      "We use current development tools and technologies to build maintainable and scalable applications.",
  },
  {
    title: "Scalable Architecture",
    description: "Our solutions are designed to support your business as it grows.",
  },
  {
    title: "User-Centric Approach",
    description: "We focus on creating simple, intuitive, and meaningful digital experiences.",
  },
  {
    title: "Transparent Collaboration",
    description:
      "We believe in clear communication and collaboration throughout the development journey.",
  },
]

export function WhyXenoton() {
  return (
    <section id="why-xenoton" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>03 / WHY XENOTON</Eyebrow>
          <AnimatedHeading
            as="h2"
            className="text-balance font-sans text-[clamp(34px,4.5vw,58px)] font-bold tracking-[-0.03em] text-foreground"
          >
            Built Around Your Business
          </AnimatedHeading>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative grid grid-cols-1 items-center gap-4 border-b border-border py-8 pl-6 md:grid-cols-[80px_1fr_2fr_40px] md:gap-8"
            >
              <span className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
              <span className="font-mono text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-mono-label text-foreground">{item.title}</h3>
              <p className="text-[15px] leading-[1.7] text-muted-foreground">{item.description}</p>
              <ArrowRight className="hidden h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
