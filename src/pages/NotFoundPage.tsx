import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { buttonVariants } from "@/components/ui/Button";

export function NotFoundPage() {
  return (
    <>
      <PageBanner image="/images/banner-404.jpg" title="404" crumb="Page Not Found" />
      <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-mono text-sm text-primary">404</p>
        <h2 className="mt-4 text-balance font-sans text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.025em] text-foreground">
          Page Not Found
        </h2>
        <p className="mt-4 max-w-sm text-[15px] leading-[1.7] text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link to="/" className={buttonVariants({ size: "lg", className: "mt-8" })}>
          Back to Home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
