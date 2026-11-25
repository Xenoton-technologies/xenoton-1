export interface SolutionDomain {
  label: string;
  items: string[];
}

export const SOLUTION_DOMAINS: SolutionDomain[] = [
  {
    label: "FRONTEND",
    items: ["React.js", "Next.js", "Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Express.js", ".NET", "ASP.NET Core", "REST APIs"],
  },
  {
    label: "PYTHON & AI",
    items: [
      "Python",
      "Django",
      "Flask",
      "FastAPI",
      "AI",
      "Machine Learning",
      "Generative AI",
      "Power BI",
    ],
  },
  {
    label: "DATABASES",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    label: "TOOLS & PLATFORMS",
    items: ["Git", "GitHub", "Docker", "Postman", "Cloud Platforms"],
  },
];
