import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { Eyebrow, Headline, Reveal } from "@/components/common/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";

const PRODUCT_SHOWCASE = [
  {
    slug: "ai-chatbot",
    eyebrow: "PRODUCT 01 / CONVERSATIONAL AI",
    name: "Xenoton AI Chatbot",
    tagline:
      "Turn website visitors into qualified leads and delighted customers — 24/7. Instant AI answers trained on your business, with one-click live human handoff.",
    previewImage: "/images/product-chatbot-preview.svg",
    previewUrl: "chat.xenotontechnologies.com",
    highlights: [
      { value: "24/7", label: "Automated Lead Capture" },
      { value: "< 1s", label: "Instant AI Responses" },
      { value: "1-Click", label: "Human Agent Takeover" },
      { value: "Multi-Site", label: "Unified Live Inbox" },
    ],
  },
  {
    slug: "hms",
    eyebrow: "PRODUCT 02 / HEALTHCARE OPERATIONS",
    name: "Xenoton HMS",
    tagline:
      "A unified Hospital & Pharmacy Management Platform built for Indian healthcare — connecting OPD queues, inpatient beds, ICU, OT, FEFO pharmacy, labs, and billing.",
    previewImage: "/images/product-hms-preview.svg",
    previewUrl: "hms.xenotontechnologies.com",
    highlights: [
      { value: "30+", label: "Hospital & Pharmacy Modules" },
      { value: "14", label: "Role-Based Staff Profiles" },
      { value: "FEFO", label: "Zero-Expiry Pharmacy Control" },
      { value: "Multi-Branch", label: "Executive Visibility" },
    ],
  },
];

export function ProductsPage() {
  return (
    <div>
      <PageBanner
        image="/images/banner-projects.jpg"
        title="Our Products"
        crumb="Products"
      />

      <section id="products" className="relative border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>OUR PRODUCTS</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(34px,4.5vw,58px)] font-bold tracking-[-0.03em] text-foreground"
            >
              Software Products Built to Accelerate Growth &amp; Operations
            </Headline>
            <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">
              Ready-to-deploy platforms engineered by Xenoton Technologies for AI customer
              engagement and end-to-end hospital &amp; pharmacy management.
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-10">
            {PRODUCT_SHOWCASE.map((product, idx) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-1 items-center gap-10 rounded-[24px] border border-border bg-card p-6 transition-all duration-[250ms] hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 md:p-10 lg:grid-cols-2 lg:gap-14"
              >
                <div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {product.eyebrow}
                  </span>
                  <h3 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
                    {product.tagline}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {product.highlights.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-md border border-border bg-background px-4 py-3"
                      >
                        <span className="hap-gradient-text text-lg font-bold">{m.value}</span>
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/products/${product.slug}`}
                    className="mt-7 inline-flex items-center gap-2 font-mono-label text-primary transition-colors hover:text-accent"
                  >
                    Explore {product.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <Link
                  to={`/products/${product.slug}`}
                  className="block overflow-hidden rounded-md border border-border bg-muted"
                >
                  <div className="flex items-center gap-1.5 border-b border-border bg-card-elevated px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-success/40" />
                    <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                      {product.previewUrl}
                    </span>
                  </div>
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={product.previewImage}
                      alt={`${product.name} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
