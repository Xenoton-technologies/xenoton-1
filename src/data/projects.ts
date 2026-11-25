export interface ProjectItem {
  index: string;
  client: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  stack: string;
  image: string;
  url?: string;
  displayUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    index: "Engagement 01",
    client: "SevalKodi",
    category: "Custom E-Commerce & Web Engineering",
    title: "SevalKodi — Unified Multi-Brand E-Commerce Platform",
    description:
      "Partnered with SevalKodi to consolidate their registered product brands into a single, fast online storefront tailored to their catalog structure and customer ordering workflow.",
    deliverables: [
      "Unified multi-brand product catalog & category browsing",
      "Fast product search, filtering, and customer account management",
      "Custom backend administration for inventory and order operations",
    ],
    stack: "Python · Django · Custom Full-Stack Web Development",
    image: "/projects/sevalkodi.jpg",
    url: "https://sevalkodi.in",
  },
  {
    index: "Engagement 02",
    client: "Capestone",
    category: "Enterprise Mandate & Revenue Platform",
    title: "Capestone — Mandate, Revenue & Incentive Management System",
    description:
      "Engineered a custom corporate mandate management platform with hierarchical 10-role access control, full mandate pipeline tracking, payment realisation, and automated incentive slab workflows.",
    deliverables: [
      "10-designation reporting-tree RBAC across Own, Team, Region & All scopes",
      "End-to-end mandate lifecycle, bank/product mapping, and rework tracking",
      "Payment realisation, monthly targets, and slab-based incentive approvals",
    ],
    stack: "Python · Django · PostgreSQL · jQuery · Docker · Nginx",
    image: "/images/capestone-preview.svg",
    displayUrl: "capestone.internal",
  },
];
