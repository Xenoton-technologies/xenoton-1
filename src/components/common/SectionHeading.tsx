import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`hap-section-title mb-3 ${className ?? ""}`}>
      <div
        className="sub-title wow fadeInRight"
        data-wow-delay="200"
        data-wow-duration="1000"
      >
        {children}
      </div>
    </div>
  );
}

export function Headline({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
}) {
  return <Tag className={cn("headline-title", className)}>{children}</Tag>;
}
