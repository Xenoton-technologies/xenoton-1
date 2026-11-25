import { ClipboardList, CodeXml, Map, Palette, Rocket, Search } from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Discover",
    description: "We understand your business, requirements, users, and objectives.",
  },
  {
    icon: Map,
    title: "Plan",
    description:
      "We define the solution, technology stack, architecture, and development roadmap.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "We create intuitive interfaces and experiences focused on your users.",
  },
  {
    icon: CodeXml,
    title: "Develop",
    description: "Our team builds the solution using modern development practices.",
  },
  {
    icon: ClipboardList,
    title: "Test",
    description: "We test functionality, performance, responsiveness, and reliability.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing improvements and support.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="hap-topic-section">
      <div className="hap-container">
        <div className="hap-section-title text-center">
          <div
            className="sub-title wow fadeInRight"
            data-wow-delay="200"
            data-wow-duration="1000"
          >
            Our Process
          </div>
          <h2 className="headline-title uppercase">From Concept to Launch</h2>
        </div>

        <div className="hap-topic-content">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="hap-topic-item wow fadeInUp"
                data-wow-delay={200 + idx * 50}
                data-wow-duration="1000"
              >
                <div className="inner-img">
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#f4f2ff] text-[#6d55e9]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="inner-text">
                  <span className="block text-[13px] font-bold text-[#9fa4af]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
