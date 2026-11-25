import { motion } from "motion/react";
import { PageBanner } from "@/components/common/PageBanner";
import { Eyebrow, Headline, Reveal } from "@/components/common/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { SOLUTION_DOMAINS } from "@/data/solutions";

export function SolutionsPage() {
  return (
    <div>
      <PageBanner image="/images/banner-solutions.jpg" title="Solutions" crumb="Solutions" />
      <section id="solutions" className="relative border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>02 / TECHNOLOGY</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(34px,4.5vw,58px)] font-bold tracking-[-0.03em] text-foreground"
            >
              Technology Meets Innovation
            </Headline>
            <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">
              We use modern technologies and development practices to create solutions that are
              built to evolve with your business.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SOLUTION_DOMAINS.map((domain, idx) => (
              <motion.div
                key={domain.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_24px_-8px_hsl(222_84%_48%/0.3)]"
              >
                <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono-label text-primary/90">{domain.label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                </div>
                <ul className="flex flex-col gap-3">
                  {domain.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[13px] text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
