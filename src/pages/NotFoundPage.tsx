import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-[72px] text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-4 text-balance font-sans text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.025em] text-foreground">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-sm text-[15px] leading-[1.7] text-muted-foreground">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className={buttonVariants({ size: "lg", className: "mt-8" })}>
        Back to Home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
