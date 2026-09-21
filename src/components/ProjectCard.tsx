import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

interface ProjectCardProps {
  index: string
  title: string
  description: string
  stack: string
  image: string
  url: string
  delay?: number
}

export function ProjectCard({ index, title, description, stack, image, url, delay = 0 }: ProjectCardProps) {
  const host = url.replace(/^https?:\/\//, "")

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 items-center gap-10 rounded-lg border border-border bg-card p-6 transition-all duration-[250ms] hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 md:p-8 lg:grid-cols-2 lg:gap-14"
    >
      <div>
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        <h3 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-foreground">{title}</h3>
        <p className="mt-4 text-base leading-[1.7] text-muted-foreground">{description}</p>
        <div className="mt-6 border-t border-border pt-5">
          <span className="font-mono-label text-muted-foreground">Technology</span>
          <p className="mt-2 font-mono text-[13px] text-primary/90">{stack}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-mono-label text-primary transition-colors hover:text-accent"
        >
          Visit Live Site
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="overflow-hidden rounded-md border border-border bg-muted">
        <div className="flex items-center gap-1.5 border-b border-border bg-card-elevated px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/40" />
          <span className="ml-3 font-mono text-[11px] text-muted-foreground">{host}</span>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            alt={`${title} website preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </motion.div>
  )
}
