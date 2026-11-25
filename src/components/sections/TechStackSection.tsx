const TECH_ITEMS = [
  { name: "React.js", icon: "/tech/react.svg" },
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: ".NET", icon: "/tech/dotnetcore.svg" },
  { name: "Python", icon: "/tech/python.svg" },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
];

export function TechStackSection() {
  return (
    <section className="hap-sponsor-section">
      <div className="hap-container">
        <div className="hap-sponsor-content">
          <div className="grid grid-cols-1 min-[62rem]:grid-cols-[1fr_3fr]">
            <div className="hap-section-title">
              <div
                className="sub-title wow fadeInRight"
                data-wow-delay="300"
                data-wow-duration="1000"
              >
                Technology
              </div>
              <h2 className="tx-split-text split-in-right">The stack we build with</h2>
            </div>

            <div className="hap-sponsor-logo-area flex flex-wrap">
              {TECH_ITEMS.map((item) => (
                <div key={item.name} className="sponsor-logo">
                  <span className="flex items-center gap-3">
                    <img src={item.icon} alt="" className="h-10 w-10 shrink-0" loading="lazy" />
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
