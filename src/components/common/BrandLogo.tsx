import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img src="/brand/xenoton-mark.png" alt="" className="h-10 w-auto" />
      <span
        className={cn(
          "text-[17px] font-bold tracking-[0.06em]",
          light ? "text-white" : "text-black"
        )}
      >
        XENOTON<span className="hap-gradient-text">.</span>
        <span
          className={cn(
            "hidden font-medium sm:inline",
            light ? "text-white/60" : "text-[#4d515f]"
          )}
        >
          {" "}
          TECHNOLOGIES
        </span>
      </span>
    </Link>
  );
}
