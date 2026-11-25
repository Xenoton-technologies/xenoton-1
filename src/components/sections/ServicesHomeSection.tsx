import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";

const MARQUEE_ITEMS = [
  "Web Development",
  "Custom Software",
  "Mobile Apps",
  "UI/UX Design",
  "Backend & APIs",
  "Cloud & Deployment",
  "Maintenance & Support",
  "AI & Automation",
];

function MarqueePill({
  className,
  reverse = false,
}: {
  className: string;
  reverse?: boolean;
}) {
  return (
    <span className={`scroller_item_1 ${className}`}>
      <ul
        className={`scroller_track ${reverse ? "reverse" : ""}`}
        style={{ "--marquee-duration": "30s" } as React.CSSProperties}
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <li key={idx} aria-hidden={idx >= MARQUEE_ITEMS.length}>
            {item}
          </li>
        ))}
      </ul>
    </span>
  );
}

export function ServicesHomeSection() {
  return (
    <section id="services" className="hap-service-section">
      <div className="hap-container relative z-[2]">
        <div className="hap-section-title dark-bg-title text-center">
          <div
            className="sub-title wow fadeInRight"
            data-wow-delay="200"
            data-wow-duration="1000"
          >
            Services
          </div>
          <h2 className="headline-title uppercase">
            Solutions Designed Around Your Business
          </h2>
        </div>

        <div className="hap-service-content">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.index} className="hap-service-item hap-img-animation">
                <div className="hap-service-title-icon flex items-center">
                  <div className="service-icon">
                    <Icon className="h-[50px] w-[50px]" strokeWidth={1.25} />
                  </div>
                  <div className="service-title">
                    <span>{service.index}</span>
                    <h3>
                      <Link to="/services">{service.title}</Link>
                    </h3>
                  </div>
                </div>

                <div className="hap-service-category-arrow flex items-center">
                  <div className="service-category max-[75rem]:hidden">
                    <Link to="/services">{service.tags[0]}</Link>
                    <Link to="/services">See More</Link>
                  </div>
                  <div className="service-arrow">
                    <Link to="/services" aria-label={`More about ${service.title}`}>
                      <ArrowRight className="h-[50px] w-[50px]" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>

                <div
                  className="service-hover max-md:hidden"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="service-hover-body">
                    <span className="text-[13px] font-bold opacity-80">{service.index}</span>
                    <p className="mt-1 text-[18px] font-bold leading-tight">{service.title}</p>
                    <p className="mt-2 text-[13px] leading-[1.5] text-white/90">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hap-service-scroll-text-area">
          <div className="hap-section-title dark-bg-title text-center">
            <div className="sub-title">Build. Innovate. Transform.</div>
          </div>
          <h2>
            Build
            <MarqueePill className="text_scroller_1" reverse />
            your
          </h2>
          <h2>
            ideas into
            <span className="strock_txt">digital</span>
            <span className="hap-gradient-text text-[0.8em]">✦</span>
          </h2>
          <h2>
            <MarqueePill className="text_scroller_2" />
            products
          </h2>
          <h2>
            <span className="strock_txt">that scale.</span>
            <MarqueePill className="text_scroller_3" />
          </h2>
        </div>
      </div>
    </section>
  );
}
