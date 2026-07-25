export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "fullstack",
    index: "01",
    title: "Full Stack Development",
    description:
      "End-to-end product builds — from database schema to deployed UI — using a single consistent, type-safe stack.",
    icon: "Layers",
  },
  {
    id: "frontend",
    index: "02",
    title: "Frontend Development",
    description:
      "Pixel-precise, animated interfaces built with React and Next.js that feel fast and considered on every device.",
    icon: "MonitorSmartphone",
  },
  {
    id: "backend",
    index: "03",
    title: "Backend Development",
    description:
      "Reliable server logic and data modeling with Node.js, Express, and MongoDB, built to scale without surprises.",
    icon: "Server",
  },
  {
    id: "api",
    index: "04",
    title: "REST API Development",
    description:
      "Clean, documented, versioned APIs designed for maintainability and easy integration with any client.",
    icon: "Plug",
  },
  {
    id: "responsive",
    index: "05",
    title: "Responsive Websites",
    description:
      "Interfaces engineered mobile-first and tested across breakpoints, so every screen size feels intentional.",
    icon: "Smartphone",
  },
  {
    id: "uiux",
    index: "06",
    title: "Modern UI/UX",
    description:
      "Interaction design grounded in clarity — motion, spacing, and hierarchy that guide users without friction.",
    icon: "Sparkles",
  },
  {
    id: "performance",
    index: "07",
    title: "Performance Optimization",
    description:
      "Bundle-size audits, image strategy, and rendering optimization to keep Lighthouse scores in the green.",
    icon: "Gauge",
  },
];
