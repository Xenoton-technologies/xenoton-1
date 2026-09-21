import { Reveal } from "@/components/Reveal"
import { ProjectCard } from "@/components/ProjectCard"
import { Eyebrow } from "@/components/Eyebrow"
import { AnimatedHeading } from "@/components/AnimatedHeading"

const PROJECTS = [
  {
    index: "Project 01",
    title: "SevalKodi — E-Commerce Website",
    description:
      "A full-stack e-commerce platform built for SevalKodi, bringing their registered product brands together under one online store with catalog browsing, search, and account management.",
    stack: "Python · Django · Full-Stack Development",
    image: "/projects/sevalkodi.jpg",
    url: "https://sevalkodi.in",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>05 / SELECTED WORK</Eyebrow>
          <AnimatedHeading
            as="h2"
            className="text-balance font-sans text-[clamp(34px,4.5vw,58px)] font-bold tracking-[-0.03em] text-foreground"
          >
            Ideas Into Working Products
          </AnimatedHeading>
          <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">
            Our projects focus on solving practical business challenges through
            modern technology, thoughtful design, and scalable development.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.index} {...project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
