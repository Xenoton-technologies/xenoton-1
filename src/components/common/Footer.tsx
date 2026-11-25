import { Link } from "react-router-dom";
import {
  CONTACT_INFO,
  FOOTER_COMPANY,
  FOOTER_SERVICES,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bi-footer-section">
      <div className="dots-mask" />
      <div className="bi-footer-widget-content">
        <div className="hap-container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 min-[62rem]:grid-cols-[4fr_3fr_2fr_3fr]">
            <div className="bi-footer-widget">
              <div className="about-widget">
                <h3>
                  Build. Innovate.
                  <br />
                  Transform.
                </h3>
                <p>
                  Technology solutions for businesses ready to move forward. From web and mobile
                  apps to custom software and the cloud, we turn ideas into reliable digital
                  products.
                </p>
              </div>
            </div>

            <div className="bi-footer-widget">
              <div className="menu-widget">
                <h3 className="widget-title">Services</h3>
                <ul>
                  {FOOTER_SERVICES.map((service) => (
                    <li key={service}>
                      <Link to="/services">{service}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bi-footer-widget">
              <div className="menu-widget">
                <h3 className="widget-title">Company</h3>
                <ul>
                  {FOOTER_COMPANY.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bi-footer-widget">
              <div className="menu-widget">
                <h3 className="widget-title">Contact Us</h3>
                <ul>
                  <li>
                    <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
                  </li>
                  <li>
                    <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                  </li>
                  <li>
                    <span>India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hap-container">
        <div className="bi-footer-social-content">
          <ul>
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-[17px] w-[17px]" />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bi-footer-logo">
          <div className="flex flex-col items-center gap-3 text-center">
            <img
              src="/brand/xenoton-mark.png"
              alt="Xenoton Technologies"
              className="h-14 w-auto"
            />
            <div className="logo-mail">
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hap-footer-copyright text-center">
        © {new Date().getFullYear()} Xenoton Technologies. All rights reserved.
      </div>
    </footer>
  );
}
