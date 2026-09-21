import type { ReactNode } from "react"
import { Reveal } from "@/components/Reveal"
import { Eyebrow } from "@/components/Eyebrow"
import { AnimatedHeading } from "@/components/AnimatedHeading"

interface LegalSection {
  heading: string
  body: ReactNode
}

interface LegalPageProps {
  eyebrow: string
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export function LegalPage({ eyebrow, title, updated, intro, sections }: LegalPageProps) {
  return (
    <div className="pt-[72px]">
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <AnimatedHeading
              as="h1"
              className="text-balance font-sans text-[clamp(34px,4.8vw,58px)] font-extrabold tracking-[-0.035em] text-foreground"
            >
              {title}
            </AnimatedHeading>
            <p className="mt-5 font-mono text-xs text-muted-foreground">Last updated: {updated}</p>
            <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">{intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[840px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-14">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={Math.min(i * 0.04, 0.2)}>
                <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground">{section.heading}</h2>
                <div className="mt-4 text-[15px] leading-[1.8] text-muted-foreground [&_a]:text-primary [&_a]:transition-colors hover:[&_a]:text-accent [&_li]:mt-2 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
                  {section.body}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
