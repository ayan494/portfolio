export type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  variant: "canvas" | "noirwood" | "shopify" | "househub" | "nexcant" | "lumina";
  year: string;
  category: string;
};

export const projects: Project[] = [
  {
    id: "dream-canvas",
    index: "01",
    title: "Dream Canvas",
    tagline: "AI-assisted creative design workspace",
    description:
      "A creative canvas application where users compose, arrange, and export visual layouts in real time. Built with a focus on buttery-smooth interactions, undo-safe state management, and an interface that gets out of the artist's way.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://dream-canvas-dev-six.vercel.app/",
    githubUrl: "https://github.com/ayan494",
    variant: "canvas",
    year: "2024",
    category: "Creative Tool",
  },
  {
    id: "noirwood",
    index: "02",
    title: "Noirwood",
    tagline: "Luxury furniture & interior brand experience",
    description:
      "A dark, editorial e-commerce experience for a premium furniture brand — built around large-format imagery, restrained typography, and micro-interactions that let the product photography do the talking.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    liveUrl: "https://noirwood.vercel.app/",
    githubUrl: "https://github.com/ayan494",
    variant: "noirwood",
    year: "2024",
    category: "E-Commerce",
  },
  {
    id: "shopify-store",
    index: "03",
    title: "Shopify Store",
    tagline: "Full-featured storefront with cart & checkout flow",
    description:
      "A performant storefront built from the ground up — product catalog, filtering, cart state, and a checkout flow engineered for conversion, with every interaction backed by optimistic UI updates.",
    stack: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://shopify-store-umber.vercel.app/",
    githubUrl: "https://github.com/ayan494",
    variant: "shopify",
    year: "2023",
    category: "E-Commerce",
  },
  {
    id: "house-hub",
    index: "04",
    title: "House Hub",
    tagline: "Real estate discovery & listings platform",
    description:
      "A property discovery platform with map-based search, saved listings, and agent contact flows — designed to make browsing hundreds of listings feel calm and organized instead of overwhelming.",
    stack: ["React", "Next.js", "TypeScript", "Express.js", "MongoDB"],
    liveUrl: "https://house-hub-cyan.vercel.app/",
    githubUrl: "https://github.com/ayan494",
    variant: "househub",
    year: "2023",
    category: "Real Estate",
  },
  {
    id: "nexcant",
    index: "05",
    title: "Nexcant",
    tagline: "SaaS product & business landing experience",
    description:
      "A conversion-focused SaaS landing site with layered scroll animation, a pricing system that adapts to plan tiers, and a component library built to stay consistent across every marketing page.",
    stack: ["React", "JavaScript", "Tailwind CSS", "GSAP"],
    liveUrl: "https://ayan494.github.io/Nexcant--project-original/",
    githubUrl: "https://github.com/ayan494/Nexcant--project-original",
    variant: "nexcant",
    year: "2023",
    category: "SaaS Landing",
  },
  {
    id: "lumina",
    index: "06",
    title: "Lumina",
    tagline: "Minimal product showcase with light-driven UI",
    description:
      "A minimal, light-drenched product showcase exploring restraint as a design language — generous whitespace, soft gradients, and scroll-triggered reveals that never compete with the product itself.",
    stack: ["React", "Next.js", "TypeScript", "Framer Motion"],
    liveUrl: "https://lumina-delta-self-51.vercel.app/",
    githubUrl: "https://github.com/ayan494",
    variant: "lumina",
    year: "2024",
    category: "Product Showcase",
  },
];
