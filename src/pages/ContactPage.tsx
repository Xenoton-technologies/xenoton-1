import { Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { Eyebrow, Headline, Reveal } from "@/components/common/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

const CONTACT_CARDS = [
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
];

export function ContactPage() {
  return (
    <div>
      <PageBanner image="/images/banner-contact.jpg" title="Contact Us" crumb="Contact Us" />

      <section id="contact" className="relative border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>07 / CONTACT</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(34px,4.5vw,58px)] font-bold tracking-[-0.03em] text-foreground"
            >
              Let&apos;s Build Something Together
            </Headline>
            <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">
              Have an Idea or Project in Mind? Whether you need a new website, a custom software
              solution, a web application, or support for an existing product, we&apos;d love to
              understand your requirements.
            </p>
            <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
              Tell us about your project, and let&apos;s explore the right technology solution for
              your business.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                {CONTACT_CARDS.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.label}
                      className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-primary">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-mono-label text-muted-foreground">{card.label}</p>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="mt-1.5 inline-block text-[15px] text-foreground transition-colors hover:text-primary"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="mt-1.5 text-[15px] text-foreground">{card.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
