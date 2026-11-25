import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowUpRight } from "lucide-react";

const JOURNEY_STAGES = [
  { name: "Business Need", image: "/images/journey-need.jpg" },
  { name: "Discovery", image: "/images/journey-discovery.jpg" },
  { name: "Solution", image: "/images/journey-solution.jpg" },
  { name: "Design", image: "/images/journey-design.jpg" },
  { name: "Engineering", image: "/images/journey-engineering.jpg" },
  { name: "Testing", image: "/images/journey-testing.jpg" },
  { name: "Deployment", image: "/images/journey-deployment.jpg" },
  { name: "Growth", image: "/images/journey-growth.jpg" },
];

export function JourneySection() {
  return (
    <section className="hap-gallery-section">
      <div className="hap-container pb-14 text-center">
        <div className="hap-section-title text-center">
          <div
            className="sub-title wow fadeInRight"
            data-wow-delay="200"
            data-wow-duration="1000"
          >
            The Journey
          </div>
          <h2 className="headline-title text-[clamp(32px,4vw,50px)] uppercase">
            Every Project Starts With Understanding The Problem.
          </h2>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={0}
        loop
        speed={500}
        autoplay={{ delay: 6000 }}
        breakpoints={{
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
      >
        {[...JOURNEY_STAGES, ...JOURNEY_STAGES].map((stage, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="hap-gallery-item"
              style={{
                background: `linear-gradient(180deg, rgba(20,14,50,0.15) 30%, rgba(20,14,50,0.9) 100%), url(${stage.image}) center / cover`,
              }}
            >
              <span className="absolute right-5 top-4 text-[64px] font-bold leading-none text-white/25">
                {String((idx % JOURNEY_STAGES.length) + 1).padStart(2, "0")}
              </span>
              <span className="relative text-[13px] font-bold uppercase tracking-wider text-white/60">
                Stage {String((idx % JOURNEY_STAGES.length) + 1).padStart(2, "0")}
              </span>
              <span className="relative mt-1 text-[24px] font-bold">{stage.name}</span>
              <Link to="/contact" className="overlay-box" aria-label="Start a project">
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
