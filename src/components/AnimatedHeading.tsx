import type { ElementType, ReactNode } from "react"
import { motion, type Variants } from "motion/react"

interface AnimatedHeadingProps {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedHeading({ as: Tag = "h2", children, className, delay = 0 }: AnimatedHeadingProps) {
  const variants: Variants = {
    hidden: { y: "115%" },
    visible: { y: 0, transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <motion.div
      className="overflow-hidden py-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div variants={variants}>
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </motion.div>
  )
}
