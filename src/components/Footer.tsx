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

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/xenoton_technologies/",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/xenoton-technologies",
    icon: LinkedinIcon,
  },
  {
    name: "X",
    href: "https://x.com/xenoton_tech",
    icon: XIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@XenotonTechOfficial",
    icon: YoutubeIcon,
  },
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

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Xenoton on ${item.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
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
