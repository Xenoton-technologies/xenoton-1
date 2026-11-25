import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  Briefcase,
  Cpu,
  Handshake,
  Users,
} from "lucide-react";

const WHY_ITEMS = [
  {
    icon: Briefcase,
    title: "Business-Focused Solutions",
    description:
      "We understand that technology is valuable when it creates measurable business impact.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "We use current development tools and technologies to build maintainable and scalable applications.",
  },
  {
    icon: Blocks,
    title: "Scalable Architecture",
    description: "Our solutions are designed to support your business as it grows.",
  },
  {
    icon: Users,
    title: "User-Centric Approach",
    description: "We focus on creating simple, intuitive, and meaningful digital experiences.",
  },
  {
    icon: Handshake,
    title: "Transparent Collaboration",
    description:
      "We believe in clear communication and collaboration throughout the development journey.",
  },
];

const SLIDER_ITEMS = [...WHY_ITEMS, ...WHY_ITEMS];

export function WhyXenotonSection() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section id="why-xenoton" className="hap-team-section">
      <div className="hap-container relative z-[2]">
        <div className="hap-section-title text-center">
          <div
            className="sub-title wow fadeInRight"
            data-wow-delay="200"
            data-wow-duration="1000"
          >
            Why Xenoton
          </div>
          <h2 className="headline-title uppercase">Built Around Your Business</h2>
        </div>

        <div className="hap-team-slider-content relative mt-[30px]">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            slidesPerView={1}
            roundLengths
            loop
            speed={1000}
            breakpoints={{
              768: { slidesPerView: 2 },
              1300: { slidesPerView: 3 },
            }}
          >
            {SLIDER_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={idx}>
                  <div className="hap-team-item">
                    <div className="team-img">
                      <span className="hap-gradient-text text-[64px] font-bold leading-none">
                        {String((idx % WHY_ITEMS.length) + 1).padStart(2, "0")}
                      </span>
                      <div className="mx-auto mt-6 flex h-[90px] w-[90px] items-center justify-center rounded-full text-white [background:var(--hap-gradient-color)]">
                        <Icon className="h-10 w-10" strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-7 text-[24px] font-bold uppercase text-black">
                        {item.title}
                      </h3>
                      <p className="mx-auto mt-3 max-w-[280px] text-[16px] leading-[1.6] text-[#4d515f]">
                        {item.description}
                      </p>
                    </div>
                    <div className="team-text">
                      <span className="name">Why Xenoton</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="hap-carousel-arrows">
            <button
              type="button"
              aria-label="Previous"
              className="hap-slider-arrow prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="hap-slider-arrow next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
