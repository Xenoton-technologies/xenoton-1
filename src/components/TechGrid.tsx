import { cn } from "@/lib/utils"

interface TechGridProps {
  className?: string
  glow?: boolean
}

const GLOW_POINTS = [
  { top: "18%", left: "78%", size: 220, delay: "0s" },
  { top: "62%", left: "12%", size: 260, delay: "1.4s" },
  { top: "85%", left: "68%", size: 180, delay: "2.6s" },
]

export function TechGrid({ className, glow = true }: TechGridProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      {glow &&
        GLOW_POINTS.map((point, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-slow"
            style={{
              top: point.top,
              left: point.left,
              width: point.size,
              height: point.size,
              background: "radial-gradient(circle, hsl(222 84% 48% / 0.07), transparent 70%)",
              animationDelay: point.delay,
            }}
          />
        ))}
    </div>
  )
}
