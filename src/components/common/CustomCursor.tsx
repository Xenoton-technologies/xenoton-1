import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el || window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.2, ease: "power1.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.2, ease: "power1.out" });
    let isZoomed = false;

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const shouldZoom = !!target?.closest?.("a, button, .zoom-cursor");
      if (shouldZoom !== isZoomed) {
        isZoomed = shouldZoom;
        gsap.to(el, {
          scale: shouldZoom ? 3 : 1,
          duration: 0.1,
          ease: "power1.out",
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />;
}
