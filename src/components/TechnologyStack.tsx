import { motion } from "motion/react"
import { Reveal } from "@/components/Reveal"

const GROUPS = [
  {
    label: "FRONTEND",
    items: ["React.js", "Next.js", "Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Express.js", ".NET", "ASP.NET Core", "REST APIs"],
  },
  {
    label: "PYTHON & AI",
    items: ["Python", "Django", "Flask", "FastAPI", "AI", "Machine Learning", "Generative AI", "Power BI"],
  },
  {
    label: "DATABASES",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    label: "TOOLS & PLATFORMS",
    items: ["Git", "GitHub", "Docker", "Postman", "Cloud Platforms"],
  },
]

export function TechnologyStack() {
  return (
    <section id="solutions" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <p className="font-mono-label mb-6 text-primary">02 / TECHNOLOGY</p>
          <h2 className="text-balance font-sans text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.025em] text-foreground">
            Technology Meets Innovation
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-muted-foreground">
            We use modern technologies and development practices to create
            solutions that are built to evolve with your business.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_24px_-8px_hsl(190_95%_52%/0.35)]"
            >
              <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                <span className="font-mono-label text-primary/90">{group.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              </div>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="font-mono text-[13px] text-muted-foreground transition-colors group-hover:text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
