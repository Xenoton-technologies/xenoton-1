import { Mail, Phone } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="hap-contact-section"
      style={{
        background:
          "linear-gradient(90deg, #131313 0%, #131313 38%, rgba(19,19,19,0.78) 62%, rgba(19,19,19,0.6) 100%), url(/images/contact-meeting.jpg) right center / cover no-repeat, #131313",
      }}
    >
      <div className="hap-container">
        <div className="grid grid-cols-1 gap-12 min-[62rem]:grid-cols-2">
          <div className="hap-contact-form max-[62rem]:order-2 max-[62rem]:max-w-none">
            <ContactForm variant="dark" />
          </div>

          <div className="hap-contact-text-area">
            <div className="hap-section-title dark-bg-title bins-text">
              <div
                className="sub-title wow fadeInRight"
                data-wow-delay="200"
                data-wow-duration="1000"
              >
                Request a Free Consultation
              </div>
              <h2 className="headline-title uppercase">Let&apos;s Turn Your Idea Into Reality.</h2>
              <p>
                Have a requirement? Have a question? Or simply want to explore an idea? We&apos;re
                ready to listen.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-[18px] text-white">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 transition-colors hover:text-[#f350bc]"
              >
                <Mail className="h-5 w-5 text-[#f350bc]" />
                {CONTACT_INFO.email}
              </a>
              <a
                href={CONTACT_INFO.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-[#f350bc]"
              >
                <Phone className="h-5 w-5 text-[#f350bc]" />
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div
              className="hap-contact-social wow fadeInUp flex flex-wrap gap-y-3"
              data-wow-delay="300"
              data-wow-duration="1000"
            >
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
