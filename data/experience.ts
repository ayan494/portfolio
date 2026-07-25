export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  org: string;
  description: string;
  points: string[];
  status: "current" | "past";
};

export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    period: "2024 — Present",
    title: "Freelance Full Stack Developer",
    org: "Self-employed / Remote",
    description:
      "Designing and building complete web applications for clients end-to-end — from architecture and API design to polished, animated interfaces.",
    points: [
      "Delivered 6+ production-grade projects across e-commerce, SaaS, and real estate domains",
      "Owned the full stack: React/Next.js frontends backed by Node.js and MongoDB",
      "Collaborated directly with clients to translate business goals into shipped features",
    ],
    status: "current",
  },
  {
    id: "personal-projects",
    period: "2023 — Present",
    title: "Independent Product Builder",
    org: "Personal Projects",
    description:
      "Building and shipping self-directed products to sharpen system design, UI craft, and performance engineering outside of client work.",
    points: [
      "Shipped Dream Canvas, Lumina, and Nexcant as fully deployed, public projects",
      "Practiced component-driven architecture and reusable design systems",
      "Iterated on Core Web Vitals and Lighthouse performance on every release",
    ],
    status: "current",
  },
  {
    id: "software-house-ready",
    period: "2024",
    title: "Software House Ready",
    org: "Professional Preparation",
    description:
      "Structured practice building production-ready codebases with the standards expected inside a software house team — code review discipline, git workflows, and documentation.",
    points: [
      "Adopted clean folder structures, typed APIs, and reusable component patterns",
      "Practiced Agile-style task breakdown and version control workflows",
      "Built comfort working inside existing codebases and design systems",
    ],
    status: "past",
  },
  {
    id: "modern-tech",
    period: "Ongoing",
    title: "Learning Modern Technologies",
    org: "Continuous Growth",
    description:
      "Actively deepening expertise across the modern full-stack ecosystem to stay ahead of what teams are shipping with today.",
    points: [
      "Exploring the Next.js App Router, Server Components, and edge rendering",
      "Studying system design fundamentals and scalable API architecture",
      "Refining animation craft with Framer Motion and GSAP",
    ],
    status: "past",
  },
];
