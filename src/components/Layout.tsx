import { Outlet } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { StickyMobileCTA } from "@/components/StickyMobileCTA"

export function Layout() {
  return (
    <div className="pb-20 md:pb-0">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
