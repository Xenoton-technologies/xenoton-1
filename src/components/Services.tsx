import {
  Globe,
  Code,
  Smartphone,
  Palette,
  Server,
  CloudCog,
  LifeBuoy,
  BrainCircuit,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { ServiceCard } from "@/components/ServiceCard"

const SERVICES = [
  {
    index: "01",
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites and web applications designed for today's digital environment.",
    tags: [
      "Business Websites",
      "Web Applications",
      "E-commerce Solutions",
      "Admin Dashboards",
      "Customer Portals",
      "Responsive Web Design",
    ],
  },
  {
    index: "02",
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed around your business processes instead of forcing your workflow into a generic product.",
    tags: [
      "Business Management Systems",
      "Internal Applications",
      "Workflow Solutions",
      "Enterprise Applications",
      "Custom Dashboards",
      "Automation Solutions",
    ],
  },
  {
    index: "03",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Engaging and scalable mobile experiences designed for smooth and reliable user experiences across devices.",
    tags: ["Business Applications", "Customer Applications", "Service Applications", "Application APIs", "App Maintenance"],
  },
  {
    index: "04",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, intuitive, and user-focused experiences that combine usability, functionality, and modern visual design.",
    tags: ["User Research", "Wireframes", "UI Design", "Prototypes", "Responsive Design", "Design Systems"],
  },
  {
    index: "05",
    icon: Server,
    title: "Backend & API Development",
    description:
      "Secure and scalable backend systems that connect applications, databases, and external services.",
    tags: ["REST APIs", "Authentication & Authorization", "Database Integration", "Third-Party API Integration", "Server-Side Development"],
  },
  {
    index: "06",
    icon: CloudCog,
    title: "Cloud & Deployment",
    description:
      "Reliable deployment and cloud-ready solutions designed for growing applications.",
    tags: ["Application Deployment", "Cloud Configuration", "Database Deployment", "Environment Setup", "Performance Optimization"],
  },
  {
    index: "07",
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, improvements, bug fixes, performance optimization, and feature enhancements to keep applications reliable and up to date.",
    tags: ["Bug Fixes", "Performance Optimization", "Feature Enhancements", "Ongoing Support"],
  },
  {
    index: "08",
    icon: BrainCircuit,
    title: "AI & Automation Solutions",
    description:
      "AI-driven capabilities that automate workflows, engage customers, and turn business data into decisions — layered onto your existing systems or built in from the start.",
    tags: ["AI Automation", "AI Chatbots", "Live Agent (Human + AI) Support", "Data Analytics", "Machine Learning", "Generative AI"],
  },
]

export function Services() {
  return (
    <section id="services" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
        <Reveal className="max-w-2xl">
          <p className="font-mono-label mb-6 text-primary">01 / SERVICES</p>
          <h2 className="text-balance font-sans text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.025em] text-foreground">
            Technology Solutions Designed Around Your Business
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-muted-foreground">
            We provide end-to-end software development and digital technology
            services to help businesses transform ideas into reliable digital
            products.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.index} {...service} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
