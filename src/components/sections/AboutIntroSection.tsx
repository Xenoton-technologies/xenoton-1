import { Link } from "react-router-dom";
import { ArrowRight, Cloud, CodeXml, Database, Smartphone } from "lucide-react";

const ABOUT_FEATURES = [
  { icon: CodeXml, title: "Web & Frontend Engineering" },
  { icon: Database, title: "Data & Backend Systems" },
  { icon: Smartphone, title: "Mobile App Experiences" },
  { icon: Cloud, title: "Cloud-Ready Delivery" },
];

function AboutTeamImage() {
  return (
    <div className="relative aspect-[544/704] w-[544px] max-w-full">
      <div className="absolute inset-0 left-[22px] bottom-[22px] rounded-t-[272px] rounded-b-[6px] border-[3px] border-transparent [background:linear-gradient(#fff,#fff)_padding-box,var(--hap-gradient-color)_border-box]" />
      <div className="absolute inset-0 right-[22px] top-[22px] overflow-hidden rounded-t-[272px]">
        <img
          src="/images/about-team.jpg"
          alt="A team collaborating around a laptop"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export function AboutIntroSection() {
  return (
    <section id="about-intro" className="hap-about-section">
      <div className="hap-container">
        <div className="relative">
          <div
            className="hap-about-img-area wow slideInLeft"
            data-wow-delay="50"
            data-wow-duration="2000"
          >
            <span className="about-shape1">
              <span
                className="block h-[300px] w-[300px] rounded-full opacity-25 [background:var(--hap-gradient-color)] blur-3xl"
                data-parallax-x="-50"
              />
            </span>
            <span className="about-shape2 z-10">
              <span
                className="block h-[54px] w-[54px] rounded-full border-[10px] border-[#f350bc]"
                data-parallax-x="50"
              />
            </span>
            <AboutTeamImage />
            <div className="about-exp z-10">
              <h3>
                <strong className="counter" data-count="8">
                  8
                </strong>
              </h3>
              <span>Core Services</span>
            </div>
          </div>

          <div className="hap-about-text-wrapper flex justify-end">
            <div className="hap-about-text-area">
              <div className="hap-section-title bins-text">
                <div
                  className="sub-title wow fadeInRight"
                  data-wow-delay="200"
                  data-wow-duration="1000"
                >
                  What We Do
                </div>
                <h2 className="headline-title uppercase">
                  Turning Ideas Into Digital Solutions
                </h2>
                <p>
                  Technology should solve real business challenges. We work with businesses and
                  organizations to design and develop digital products that are user-friendly,
                  scalable, secure, and built around their specific needs.
                </p>
              </div>

              <div className="hap-about-feature-area flex flex-wrap justify-between">
                {ABOUT_FEATURES.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="hap-about-feature-item wow fadeInUp flex items-center"
                      data-wow-delay={200 + idx * 100}
                      data-wow-duration="1000"
                    >
                      <div className="feature-icon">
                        <Icon className="h-[45px] w-[45px]" strokeWidth={1.25} />
                      </div>
                      <div className="feature-text">
                        <h3>{feat.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="wow flipInX" data-wow-delay="500" data-wow-duration="1000">
                <Link to="/contact" className="hap-btn">
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
