import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Menu, Phone, X, ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { CONTACT_INFO, NAV_LINKS, PRODUCT_LINKS, SOCIAL_LINKS } from "@/lib/constants";
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
              {NAV_LINKS.map((item) =>
                item.to === "/products" ? (
                  <div key={item.to} className="group relative">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cn("inline-flex items-center gap-1", isActive && "active")
                      }
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </NavLink>
                    <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="w-64 rounded-2xl border border-border bg-white p-2 shadow-xl shadow-black/10">
                        {PRODUCT_LINKS.map((prod) => (
                          <NavLink
                            key={prod.to}
                            to={prod.to}
                            className={({ isActive }) =>
                              cn(
                                "!m-0 block rounded-xl px-4 py-3 transition-colors hover:bg-card",
                                isActive && "active bg-card"
                              )
                            }
                          >
                            <span className="block text-[15px] font-semibold text-black">
                              {prod.label}
                            </span>
                            <span className="block text-xs font-normal text-muted-foreground">
                              {prod.subtitle}
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end
                    className={({ isActive }) => cn(isActive && "active")}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
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
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to !== "/products"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => cn(isActive && "active")}
                >
                  {item.label}
                </NavLink>
                {item.to === "/products" && (
                  <div className="pl-4">
                    {PRODUCT_LINKS.map((prod) => (
                      <NavLink
                        key={prod.to}
                        to={prod.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          cn("!text-[12px] text-white/75", isActive && "active")
                        }
                      >
                        {prod.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
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
