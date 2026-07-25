export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sara Khan",
    role: "Product Lead, Retail Client",
    quote:
      "Ayan turned a vague brief into a storefront that felt genuinely premium. Communication was clear at every step and the handoff was effortless.",
    initials: "SK",
  },
  {
    id: "t2",
    name: "Daniel Reyes",
    role: "Founder, SaaS Startup",
    quote:
      "The attention to animation detail and load performance was on another level. Our landing page conversion improved almost immediately.",
    initials: "DR",
  },
  {
    id: "t3",
    name: "Meera Patel",
    role: "Design Partner",
    quote:
      "Rare to find a developer who respects design intent this closely. Every spacing and motion decision matched the original concept exactly.",
    initials: "MP",
  },
  {
    id: "t4",
    name: "Omar Farooq",
    role: "CTO, Real Estate Platform",
    quote:
      "Clean, typed, well-structured code. House Hub shipped on time and has needed almost no maintenance since launch.",
    initials: "OF",
  },
  {
    id: "t5",
    name: "Lena Whitfield",
    role: "Marketing Director",
    quote:
      "Ayan's work made our brand feel like a much bigger company than we are. The Noirwood site still gets compliments months later.",
    initials: "LW",
  },
  {
    id: "t6",
    name: "Jason Kim",
    role: "Engineering Manager",
    quote:
      "Strong fundamentals — clean components, sensible state management, and a genuine eye for UX. Would bring him onto a team without hesitation.",
    initials: "JK",
  },
];
