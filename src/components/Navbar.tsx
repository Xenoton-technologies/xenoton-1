import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300",
        scrolled
          ? "border-b border-primary/20 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-6 md:px-10 lg:px-16">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/brand/xenoton-logo.png"
            alt="Xenoton Technologies"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg object-contain ring-1 ring-white/10 shadow-sm transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-mono text-sm sm:text-base font-bold tracking-[0.08em] text-foreground leading-tight">
              XENOTON<span className="text-primary">.</span>
              <span className="text-muted-foreground font-semibold text-xs sm:text-sm tracking-[0.06em]"> TECHNOLOGIES</span>
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] text-primary/80 uppercase">
              IDEAS <span className="opacity-50">→</span> SOLUTIONS <span className="opacity-50">→</span> IMPACT
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Start a Project
          </Button>
        </div>

        <button
          className="text-foreground md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/60 py-4 font-mono text-sm uppercase tracking-[0.1em] text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-5 w-full"
                onClick={() => {
                  setMenuOpen(false)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Start a Project
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
