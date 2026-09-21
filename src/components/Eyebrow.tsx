import { motion } from "motion/react"

interface EyebrowProps {
  children: string
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`font-mono-label mb-6 flex items-center gap-3 text-primary ${className ?? ""}`}
    >
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-6 origin-left bg-primary"
      />
      {children}
    </motion.div>
  )
}
