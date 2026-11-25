import {
  Globe,
  Code,
  Smartphone,
  Palette,
  Server,
  CloudCog,
  LifeBuoy,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  index: string;
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    index: "01",
    image: "/images/service-web.jpg",
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
    image: "/images/service-software.jpg",
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
    image: "/images/service-mobile.jpg",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Engaging and scalable mobile experiences designed for smooth and reliable user experiences across devices.",
    tags: [
      "Business Applications",
      "Customer Applications",
      "Service Applications",
      "Application APIs",
      "App Maintenance",
    ],
  },
  {
    index: "04",
    image: "/images/service-uiux.jpg",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, intuitive, and user-focused experiences that combine usability, functionality, and modern visual design.",
    tags: [
      "User Research",
      "Wireframes",
      "UI Design",
      "Prototypes",
      "Responsive Design",
      "Design Systems",
    ],
  },
  {
    index: "05",
    image: "/images/service-backend.jpg",
    icon: Server,
    title: "Backend & API Development",
    description:
      "Secure and scalable backend systems that connect applications, databases, and external services.",
    tags: [
      "REST APIs",
      "Authentication & Authorization",
      "Database Integration",
      "Third-Party API Integration",
      "Server-Side Development",
    ],
  },
  {
    index: "06",
    image: "/images/service-cloud.jpg",
    icon: CloudCog,
    title: "Cloud & Deployment",
    description:
      "Reliable deployment and cloud-ready solutions designed for growing applications.",
    tags: [
      "Application Deployment",
      "Cloud Configuration",
      "Database Deployment",
      "Environment Setup",
      "Performance Optimization",
    ],
  },
  {
    index: "07",
    image: "/images/service-support.jpg",
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, improvements, bug fixes, performance optimization, and feature enhancements to keep applications reliable and up to date.",
    tags: [
      "Bug Fixes",
      "Performance Optimization",
      "Feature Enhancements",
      "Ongoing Support",
    ],
  },
  {
    index: "08",
    image: "/images/service-ai.jpg",
    icon: BrainCircuit,
    title: "AI & Automation Solutions",
    description:
      "AI-driven capabilities that automate workflows, engage customers, and turn business data into decisions — layered onto your existing systems or built in from the start.",
    tags: [
      "AI Automation",
      "AI Chatbots",
      "Live Agent (Human + AI) Support",
      "Data Analytics",
      "Machine Learning",
      "Generative AI",
    ],
  },
];
