import type { LucideIcon } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  index: string
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  className?: string
  delay?: number
  wide?: boolean
}

export function ServiceCard({
  index,
  icon: Icon,
  title,
  description,
  tags,
  className,
  delay = 0,
  wide = false,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex flex-col rounded-lg border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/50 hover:bg-card-elevated",
        wide && "lg:flex-row lg:items-center lg:gap-10",
        className
      )}
    >
      <div className={cn("flex items-start justify-between", wide && "lg:w-64 lg:shrink-0 lg:flex-col lg:gap-6")}>
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-muted text-primary transition-shadow duration-300 group-hover:shadow-[0_0_16px_hsl(190_95%_52%/0.35)]">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
      </div>

      <div className={cn("flex flex-1 flex-col", wide && "lg:flex-1")}>
        <h3 className="mt-6 text-xl font-semibold tracking-[-0.01em] text-foreground lg:mt-0">{title}</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-label rounded border border-border bg-muted px-2.5 py-1 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-foreground/80">
          <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.div>
  )
}
