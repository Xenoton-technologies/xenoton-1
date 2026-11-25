import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={cn("hap-header-section", sticky && "sticky-on")}>
        <div className="hap-container">
          <div className="hap-header-top-area">
            <div className="flex items-center gap-10">
              <a href={CONTACT_INFO.phoneHref} className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                Call Now {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hidden items-center gap-1.5 xl:flex"
              >
                <Mail className="h-3.5 w-3.5" />
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-[30px]">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Xenoton on ${item.name}`}
                  >
                    <Icon className="h-[15px] w-[15px]" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hap-header-menu-navigation flex items-center justify-between">
            <BrandLogo />
            <nav className="main-navigation flex items-center max-[62rem]:hidden">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  className={({ isActive }) => cn(isActive && "active")}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <button
              className="text-[24px] text-[var(--hap-base-color)] min-[62rem]:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      <div className={cn("mobile_menu_wrap min-[62rem]:hidden", mobileOpen && "mobile_menu_on")}>
        <div className="mobile_menu_overlay" onClick={() => setMobileOpen(false)} />
        <div className="mobile_menu_content">
          <button
            className="absolute right-[25px] top-[25px] text-[#d60606]"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="mx-auto my-[50px] flex justify-center">
            <BrandLogo light />
          </div>
          <nav>
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => cn(isActive && "active")}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-10 flex gap-4 text-white">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Xenoton on ${item.name}`}
                  className="transition-colors hover:text-[var(--hap-base-color)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
