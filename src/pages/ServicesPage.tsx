import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { Eyebrow, Headline, Reveal } from "@/components/common/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { SERVICES, type ServiceItem } from "@/data/services";
import { cn } from "@/lib/utils";

function ServiceCard({
  index,
  icon: Icon,
  title,
  description,
  tags,
  image,
  className,
  delay = 0,
  wide = false,
}: ServiceItem & { className?: string; delay?: number; wide?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex flex-col rounded-[24px] border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card-elevated hover:shadow-lg hover:shadow-primary/5",
        wide && "lg:flex-row lg:items-center lg:gap-10",
        className
      )}
    >
      {image && (
        <div className="-mx-3 -mt-3 mb-7 aspect-[16/10] overflow-hidden rounded-[18px]">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div
        className={cn(
          "flex items-start justify-between",
          wide && "lg:w-64 lg:shrink-0 lg:flex-col lg:gap-6"
        )}
      >
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-muted text-primary transition-shadow duration-300 group-hover:shadow-[0_0_16px_hsl(222_84%_48%/0.3)]">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
      </div>

      <div className={cn("flex flex-1 flex-col", wide && "lg:flex-1")}>
        <h3 className="mt-6 text-2xl font-bold tracking-[-0.015em] text-foreground lg:mt-0">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-label rounded border border-border bg-muted px-2.5 py-1 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-foreground/80">
          <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesPage() {
  return (
    <div>
      <PageBanner image="/images/banner-services.jpg" title="Our Services" crumb="Services" />
      <section id="services" className="relative border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>01 / SERVICES</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(34px,4.5vw,58px)] font-bold tracking-[-0.03em] text-foreground"
            >
              Technology Solutions Designed Around Your Business
            </Headline>
            <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">
              We provide end-to-end software development and digital technology services to help
              businesses transform ideas into reliable digital products.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={service.index} {...service} delay={(idx % 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
