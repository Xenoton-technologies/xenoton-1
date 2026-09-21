import { Mail, MapPin, Phone } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { ContactForm } from "@/components/ContactForm"

const DETAILS = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "xenotontechnologies@gmail.com",
    href: "mailto:xenotontechnologies@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 9384116088",
    href: "tel:+919384116088",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "India",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <p className="font-mono-label mb-6 text-primary">07 / CONTACT</p>
          <h2 className="text-balance font-sans text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.025em] text-foreground">
            Let's Build Something Together
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-muted-foreground">
            Have an Idea or Project in Mind? Whether you need a new website, a
            custom software solution, a web application, or support for an
            existing product, we'd love to understand your requirements.
          </p>
          <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
            Tell us about your project, and let's explore the right technology
            solution for your business.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              {DETAILS.map((detail) => {
                const Icon = detail.icon
                return (
                  <div key={detail.label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-primary">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-mono-label text-muted-foreground">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-1.5 inline-block text-[15px] text-foreground transition-colors hover:text-primary"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-[15px] text-foreground">{detail.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
