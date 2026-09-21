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
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-primary/30 bg-background">
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/brand/xenoton-logo.png"
                alt="Xenoton Technologies"
                className="h-10 w-10 rounded-lg object-contain ring-1 ring-white/10 shadow-sm"
              />
              <div className="flex flex-col">
                <p className="font-mono text-sm font-bold tracking-[0.08em] text-foreground">
                  XENOTON<span className="text-primary">.</span> TECHNOLOGIES
                </p>
                <p className="font-mono text-[10px] tracking-[0.14em] text-primary uppercase">
                  IDEAS <span className="opacity-50">→</span> SOLUTIONS <span className="opacity-50">→</span> IMPACT
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">
              Build.
              <br />
              Innovate.
              <br />
              Transform.
            </p>
            <p className="mt-4 max-w-[220px] text-sm leading-[1.7] text-muted-foreground">
              Technology solutions for businesses ready to move forward.
            </p>
          </div>

          <div>
            <p className="font-mono-label text-muted-foreground">Services</p>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-label text-muted-foreground">Company</p>
            <ul className="mt-5 flex flex-col gap-3">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-label text-muted-foreground">Contact</p>
            <ul className="mt-5 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <a
                  href="mailto:xenotontechnologies@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  xenotontechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                <a
                  href="tel:+919384116088"
                  className="transition-colors hover:text-primary"
                >
                  +91 9384116088
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Xenoton Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
