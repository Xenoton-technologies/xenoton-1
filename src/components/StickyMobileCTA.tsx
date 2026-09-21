import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-4 backdrop-blur-md md:hidden">
      <Button
        className="w-full"
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Start a Project
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
