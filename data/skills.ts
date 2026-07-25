export type Skill = {
  name: string;
  level: number; // 0-100
};

export type SkillGroup = {
  id: string;
  label: string;
  index: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    index: "01",
    skills: [
      { name: "HTML5", level: 96 },
      { name: "CSS3", level: 94 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "Tailwind CSS", level: 96 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    index: "02",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 87 },
    ],
  },
  {
    id: "database",
    label: "Database",
    index: "03",
    skills: [
      { name: "MongoDB", level: 89 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    index: "04",
    skills: [
      { name: "Git", level: 93 },
      { name: "GitHub", level: 93 },
      { name: "Docker", level: 78 },
      { name: "VS Code", level: 97 },
      { name: "Vercel", level: 91 },
      { name: "Postman", level: 88 },
      { name: "Figma", level: 80 },
    ],
  },
];
