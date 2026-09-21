import { motion } from "motion/react"
import { Layers, Cloud, Database, Server, Globe } from "lucide-react"

const NODES = [
  { label: "FRONTEND", meta: "React / Next.js", icon: Globe },
  { label: "API LAYER", meta: "REST / Auth", icon: Layers },
  { label: "BACKEND", meta: "Node / .NET", icon: Server },
  { label: "DATABASE", meta: "Mongo / SQL", icon: Database },
  { label: "CLOUD", meta: "Deployment", icon: Cloud },
]

export function ArchitectureVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col items-center">
      <svg
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke="hsl(190 95% 52% / 0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          className="animate-[dash_2.4s_linear_infinite]"
        />
      </svg>

      {NODES.map((node, i) => {
        const Icon = node.icon
        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mb-6 last:mb-0 w-full"
          >
            <div className="group relative flex items-center gap-4 rounded-lg border border-border bg-card-elevated/80 px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-primary">
                <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-mono-label text-primary/90">{node.label}</div>
                <div className="mt-0.5 text-[13px] text-muted-foreground">{node.meta}</div>
              </div>
              <span className="absolute right-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary/70 shadow-[0_0_8px_2px_hsl(190_95%_52%/0.5)]" />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
