import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({ nullTargetWarn: false });

export function useAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let ctx: gsap.Context | undefined;

    const wowElements = document.querySelectorAll<HTMLElement>(".wow");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.animationDelay = `${el.dataset.wowDelay ?? 0}ms`;
          el.style.animationDuration = `${el.dataset.wowDuration ?? 1000}ms`;
          el.classList.add("animated");
          observer.unobserve(el);
        }
      },
      { threshold: 0 }
    );

    wowElements.forEach((el) => {
      if (reducedMotion) {
        el.classList.add("animated");
      } else {
        observer.observe(el);
      }
    });

    document.fonts.ready.then(() => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".hap-img-animation").forEach((el) => {
          if (reducedMotion) {
            el.classList.add("active");
            return;
          }
          ScrollTrigger.create({
            trigger: el,
            start: "top 70%",
            once: true,
            onEnter: () => el.classList.add("active"),
          });
        });

        gsap.utils.toArray<HTMLElement>(".counter[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const counter = { value: reducedMotion ? target : 0 };
          el.textContent = String(counter.value);
          if (!reducedMotion) {
            gsap.to(counter, {
              value: target,
              duration: 1.5,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                once: true,
              },
              onUpdate: () => {
                el.textContent = String(Math.round(counter.value));
              },
            });
          }
        });

        if (!reducedMotion) {
          gsap.utils.toArray<HTMLElement>(".headline-title").forEach((el) => {
            const split = new SplitText(el, { type: "lines", linesClass: "split-line" });
            gsap.set(el, { perspective: 400 });
            gsap.from(split.lines, {
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              duration: 1,
              delay: 0.3,
              opacity: 0,
              rotationX: -80,
              force3D: true,
              transformOrigin: "top center -50",
              stagger: 0.1,
            });
          });

          gsap.utils.toArray<HTMLElement>(".bins-text p").forEach((el) => {
            const split = new SplitText(el, { type: "lines" });
            gsap.set(el, { perspective: 400 });
            gsap.from(split.lines, {
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              duration: 1,
              delay: 0.5,
              opacity: 0,
              rotationX: -80,
              force3D: true,
              transformOrigin: "top center -50",
              stagger: 0.1,
            });
          });

          gsap.utils.toArray<HTMLElement>(".tx-split-text").forEach((el) => {
            const split = new SplitText(el, {
              type: "lines,words,chars",
              linesClass: "split-line",
            });
            gsap.set(el, { perspective: 400 });
            if (el.classList.contains("split-in-right")) {
              gsap.set(split.chars, { opacity: 0, x: 50 });
            } else {
              gsap.set(split.chars, { opacity: 0, y: 80 });
            }
            gsap.to(split.chars, {
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
              },
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.02,
              ease: "back.out",
            });
          });

          gsap.utils.toArray<HTMLElement>("[data-parallax-x],[data-parallax-y]").forEach((el) => {
            gsap.fromTo(
              el,
              { x: 0, y: 0 },
              {
                x: Number(el.dataset.parallaxX ?? 0),
                y: Number(el.dataset.parallaxY ?? 0),
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          });
        }
      });

      ScrollTrigger.refresh();
    });

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("load", handleLoad);
      ctx?.revert();
    };
  }, [pathname]);
}
