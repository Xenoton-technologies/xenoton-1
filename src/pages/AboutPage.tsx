import { motion } from "motion/react";
import { Lightbulb, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { Eyebrow, Headline, Reveal } from "@/components/common/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore modern technologies and better ways to solve problems.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "We focus on writing maintainable, reliable, and scalable solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe successful products are built through strong communication and teamwork.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We build solutions that can evolve as businesses and technologies change.",
  },
];

export function AboutPage() {
  return (
    <div>
      <PageBanner image="/images/banner-about.jpg" title="About Us" crumb="About Us" />

      <section id="about" className="relative border-t border-border py-24">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
          <Reveal>
            <Eyebrow>06 / ABOUT XENOTON</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(34px,4.5vw,58px)] font-bold tracking-[-0.03em] text-foreground"
            >
              Building Digital Solutions for a Connected World
            </Headline>
            <p className="mt-6 max-w-xl text-lg leading-[1.7] text-muted-foreground">
              Xenoton Technologies is a software and technology solutions company focused on
              helping businesses build, improve, and scale their digital presence.
            </p>
            <p className="mt-4 max-w-xl text-base leading-[1.7] text-muted-foreground">
              We develop modern websites, web applications, mobile applications, custom software,
              APIs, and technology solutions tailored to individual business requirements.
            </p>
            <p className="mt-4 max-w-xl text-base leading-[1.7] text-muted-foreground">
              Our approach combines technical expertise, creative thinking, and an understanding
              of business needs to deliver solutions that are practical, scalable, and
              user-friendly.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="hap-img-animation relative h-full min-h-[420px] overflow-hidden rounded-[30px]">
              <img
                src="/images/about-office.jpg"
                alt="A team working together in an open-plan office"
                className="hap-img-target absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-border py-24">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
          <Reveal>
            <div className="relative h-full rounded-lg border border-border bg-card p-10">
              <span className="font-mono text-7xl font-bold leading-none text-primary/15">“</span>
              <p className="font-mono-label mt-2 text-primary">MISSION</p>
              <p className="mt-6 text-2xl font-medium leading-[1.5] tracking-[-0.01em] text-foreground">
                To deliver innovative and reliable technology solutions that simplify business
                processes, improve digital experiences, and create long-term value for our
                clients.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative h-full rounded-lg border border-border bg-card p-10">
              <span className="font-mono text-7xl font-bold leading-none text-primary/15">“</span>
              <p className="font-mono-label mt-2 text-primary">VISION</p>
              <p className="mt-6 text-2xl font-medium leading-[1.5] tracking-[-0.01em] text-foreground">
                To grow into a trusted technology partner known for innovation, quality,
                transparency, and customer-focused digital solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-lg border border-border bg-card p-7"
                >
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
