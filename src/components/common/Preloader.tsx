import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const done = () => setLoaded(true);
    if (document.readyState === "complete") {
      done();
    } else {
      window.addEventListener("load", done);
    }
    const timer = window.setTimeout(done, 3500);
    return () => {
      window.removeEventListener("load", done);
      window.clearTimeout(timer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      id="preloader"
      className={cn(loaded && "loaded")}
      onTransitionEnd={() => loaded && setRemoved(true)}
      aria-hidden="true"
    >
      <div className="loader-ring" />
    </div>
  );
}
