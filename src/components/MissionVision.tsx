import { Reveal } from "@/components/Reveal"

export function MissionVision() {
  return (
    <section className="relative border-t border-border py-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
        <Reveal>
          <div className="relative h-full rounded-lg border border-border bg-card p-10">
            <span className="font-mono text-6xl font-bold leading-none text-primary/15">“</span>
            <p className="font-mono-label mt-2 text-primary">MISSION</p>
            <p className="mt-6 text-xl leading-[1.6] text-foreground">
              To deliver innovative and reliable technology solutions that
              simplify business processes, improve digital experiences, and
              create long-term value for our clients.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative h-full rounded-lg border border-border bg-card p-10">
            <span className="font-mono text-6xl font-bold leading-none text-primary/15">“</span>
            <p className="font-mono-label mt-2 text-primary">VISION</p>
            <p className="mt-6 text-xl leading-[1.6] text-foreground">
              To grow into a trusted technology partner known for innovation,
              quality, transparency, and customer-focused digital solutions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
