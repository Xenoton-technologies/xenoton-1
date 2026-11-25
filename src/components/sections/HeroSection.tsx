import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function HeroBackdrop() {
  const facets = [
    { x: 260, y: 140, r: 45 },
    { x: 520, y: -60, r: 45 },
    { x: 880, y: 220, r: -45 },
    { x: 1180, y: 60, r: -45 },
    { x: 1500, y: 260, r: -45 },
    { x: 1820, y: 120, r: 45 },
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 2000 810"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hap-facet" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#4a5260" />
          <stop offset="55%" stopColor="#1f242d" />
          <stop offset="100%" stopColor="#07080a" />
        </radialGradient>
        <linearGradient id="hap-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="2000" height="810" fill="#000" />
      {facets.map((f, idx) => (
        <rect
          key={idx}
          x={f.x - 230}
          y={f.y}
          width="460"
          height="1100"
          rx="140"
          fill="url(#hap-facet)"
          opacity={0.85}
          transform={`rotate(${f.r} ${f.x} ${f.y + 550})`}
        />
      ))}
      <rect width="2000" height="810" fill="url(#hap-fade)" />
    </svg>
  );
}

function SoftwareDesignBadge() {
  const points = Array.from({ length: 28 }, (_, i) => {
    const angle = (i / 28) * Math.PI * 2;
    const radius = i % 2 === 0 ? 92 : 78;
    return `${100 + Math.cos(angle) * radius * 1.12},${66 + Math.sin(angle) * radius * 0.62}`;
  }).join(" ");

  return (
    <svg width="200" height="132" viewBox="0 0 200 132" aria-hidden="true">
      <polygon points={points} fill="#5b5cf0" />
      <text
        x="100"
        y="58"
        textAnchor="middle"
        fill="#fff"
        fontSize="21"
        fontWeight="600"
        fontFamily="Space Grotesk"
      >
        SOFTWARE
      </text>
      <text
        x="100"
        y="86"
        textAnchor="middle"
        fill="#fff"
        fontSize="21"
        fontWeight="600"
        fontFamily="Space Grotesk"
      >
        &amp; DESIGN
      </text>
    </svg>
  );
}

function HeroPillImage({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) {
  return (
    <img
      src={src}
      alt=""
      width={width}
      height={height}
      className="hap-img-target hap-banner-pill object-cover"
      style={{ width, height }}
    />
  );
}

export function HeroSection() {
  return (
    <section id="top" className="hap-banner-section">
      <HeroBackdrop />
      <div className="hap-container">
        <div className="hap-banner-content">
          <div className="hap-banner-text">
            <div className="hap-section-title dark-bg-title bins-text">
              <div
                className="sub-title wow fadeInRight"
                data-wow-delay="300"
                data-wow-duration="1000"
              >
                Software · Design · Cloud · Digital Products
              </div>
              <h1 className="headline-title capitalize">Build. Innovate. Transform.</h1>
              <p>
                At Xenoton Technologies, we build modern, scalable, and reliable digital solutions
                that help businesses turn ideas into impactful products.
              </p>
              <p>
                From web and mobile applications to custom software and cloud-ready solutions, we
                combine technology, creativity, and business understanding to deliver solutions
                designed for the future.
              </p>
              <div
                className="hap-btn-wrap wow fadeInRight flex flex-wrap items-center gap-4 max-lg:justify-center"
                data-wow-delay="500"
                data-wow-duration="1000"
              >
                <Link to="/contact" className="hap-btn">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center rounded-[40px] border border-white/70 px-[30px] py-[17px] text-[17px] font-medium uppercase text-white transition-colors duration-200 hover:border-[#f350bc] hover:text-[#f350bc]"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>

          <div className="hap-banner-image">
            <span
              className="hap-banner-shape4 wow zoomIn"
              data-wow-delay="500"
              data-wow-duration="1500"
            >
              <span data-parallax-y="80">
                <SoftwareDesignBadge />
              </span>
            </span>

            <div className="hap-banner-img1">
              <div className="hap-img-animation">
                <HeroPillImage src="/images/hero-developer.jpg" width={322} height={518} />
              </div>
              <span
                className="hap-banner-shape1 wow fadeInLeft left-[-20px]"
                data-wow-delay="800"
                data-wow-duration="1200"
              >
                <img
                  src="/brand/xenoton-mark.png"
                  alt=""
                  className="-mt-[130px] w-[120px] drop-shadow-[0_10px_30px_rgba(109,85,233,0.5)]"
                  data-parallax-x="50"
                />
              </span>
              <span
                className="hap-banner-shape2 wow fadeInUp"
                data-wow-delay="800"
                data-wow-duration="1200"
              >
                <span
                  className="block h-[90px] w-[90px] rounded-full border-[14px] border-[#6d55e9]/80"
                  data-parallax-x="-50"
                />
              </span>
              <span
                className="hap-banner-shape3 wow fadeInDown"
                data-wow-delay="900"
                data-wow-duration="1200"
              >
                <span
                  className="block h-[70px] w-[70px] rounded-full [background:var(--hap-gradient-color)] shadow-[0_10px_40px_rgba(255,80,184,0.5)]"
                  data-parallax-y="-50"
                />
              </span>
            </div>

            <div className="hap-banner-img2 hap-img-animation">
              <HeroPillImage src="/images/hero-team.jpg" width={354} height={606} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
