export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export type Strength = {
  title: string;
  description: string;
  icon: string;
};

export const strengths: Strength[] = [
  {
    title: "Fast Learner",
    description: "Picks up new stacks and codebases quickly without hand-holding.",
    icon: "Zap",
  },
  {
    title: "Clean Code",
    description: "Writes typed, readable, well-structured code others can build on.",
    icon: "Code2",
  },
  {
    title: "Problem Solver",
    description: "Breaks down ambiguous requirements into shippable, working solutions.",
    icon: "Puzzle",
  },
  {
    title: "Responsive Design",
    description: "Every interface is built mobile-first and tested across real devices.",
    icon: "Smartphone",
  },
  {
    title: "Performance Focused",
    description: "Treats load time and Core Web Vitals as first-class requirements.",
    icon: "Gauge",
  },
  {
    title: "Modern Practices",
    description: "Uses current tooling, patterns, and architecture — not outdated habits.",
    icon: "Sparkles",
  },
  {
    title: "Team Collaboration",
    description: "Communicates clearly and works well inside existing team workflows.",
    icon: "Users",
  },
];
