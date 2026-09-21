import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"

const SERVICES = [
  "Web Development",
  "Custom Software",
  "Mobile App Development",
  "UI/UX Design",
  "Backend & APIs",
  "Cloud & Deployment",
  "Maintenance & Support",
  "AI & Automation",
]

const COMPANY = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-primary/40 bg-[#141a29]">
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/brand/xenoton-mark.png" alt="" className="h-9 w-auto" />
              <p className="font-mono text-sm font-semibold tracking-[0.08em] text-white">
                XENOTON<span className="text-primary">.</span> TECHNOLOGIES
              </p>
            </div>
            <p className="mt-4 text-sm leading-[1.7] text-white/55">
              Build.
              <br />
              Innovate.
              <br />
              Transform.
            </p>
            <p className="mt-4 max-w-[220px] text-sm leading-[1.7] text-white/55">
              Technology solutions for businesses ready to move forward.
            </p>
          </div>

          <div>
            <p className="font-mono-label text-white/50">Services</p>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service} className="text-sm text-white/55">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-label text-white/50">Company</p>
            <ul className="mt-5 flex flex-col gap-3">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-white/55 transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-label text-white/50">Contact</p>
            <ul className="mt-5 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-white/55">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="mailto:xenotontechnologies@gmail.com" className="transition-colors hover:text-primary">
                  xenotontechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/55">
                <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="tel:+919384116088" className="transition-colors hover:text-primary">
                  +91 9384116088
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/55">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Xenoton Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-white/40 transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/40 transition-colors hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
