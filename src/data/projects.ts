export interface ProjectItem {
  index: string;
  title: string;
  description: string;
  stack: string;
  image: string;
  url: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    index: "Project 01",
    title: "SevalKodi — E-Commerce Website",
    description:
      "A full-stack e-commerce platform built for SevalKodi, bringing their registered product brands together under one online store with catalog browsing, search, and account management.",
    stack: "Python · Django · Full-Stack Development",
    image: "/projects/sevalkodi.jpg",
    url: "https://sevalkodi.in",
  },
];
