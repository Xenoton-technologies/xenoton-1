import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { Eyebrow, Headline, Reveal } from "@/components/common/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { PROJECTS, type ProjectItem } from "@/data/projects";

function ProjectCard({
  index,
  title,
  description,
  stack,
  image,
  url,
  delay = 0,
}: ProjectItem & { delay?: number }) {
  const displayUrl = url.replace(/^https?:\/\//, "");

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
          <span className="ml-3 font-mono text-[11px] text-muted-foreground">{displayUrl}</span>
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
  );
}

export function ProjectsPage() {
  return (
    <div>
      <PageBanner image="/images/banner-projects.jpg" title="Our Projects" crumb="Projects" />
      <section id="projects" className="relative border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>05 / SELECTED WORK</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(34px,4.5vw,58px)] font-bold tracking-[-0.03em] text-foreground"
            >
              Ideas Into Working Products
            </Headline>
            <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">
              Our projects focus on solving practical business challenges through modern
              technology, thoughtful design, and scalable development.
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.index} {...project} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
