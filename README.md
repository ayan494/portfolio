# Ayan Saeed — Full Stack Developer Portfolio

A premium, dark-navy, glassmorphic portfolio built with Next.js 15 (App
Router), React 19, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components by default)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 (custom `void` / `signal` / `ion` color tokens)
- **Animation:** Framer Motion (scroll reveals, layout transitions) + GSAP
  (hero parallax orbs via `gsap.quickTo`)
- **Icons:** lucide-react, react-icons
- **Fonts:** Inter, Instrument Serif, JetBrains Mono — self-hosted via
  `@fontsource/*` packages (no runtime dependency on Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed.
4. Deploy.

## Folder Structure

```
app/            Routes, layout, metadata, global styles
  layout.tsx    Root layout, fonts, SEO metadata, JSON-LD
  page.tsx      Composes all sections
  globals.css   Tailwind layers + design-system utilities
  robots.ts     robots.txt route
  sitemap.ts    sitemap.xml route
components/
  ui/           Reusable primitives (GlassCard, Reveal, MagneticButton, etc.)
  sections/     Page sections (Navbar, Hero, About, Skills, Projects, ...)
data/           Typed content (projects, skills, experience, testimonials...)
hooks/          useScrollDirection, useActiveSection
lib/            cn() classname helper, scroll helper
public/         Resume PDF, favicon, OG image
styles/         Notes on the styling approach
```

## Content You'll Likely Want to Personalize

- `data/site.ts` — email, phone, social links, SEO metadata
- `data/projects.ts` — project descriptions, GitHub links (currently point to
  `github.com/ayan494`; update per-repo links if each project has its own repo)
- `public/Ayan-Saeed-Resume.pdf` — replace with your latest resume
- `public/og-image.png` — social share preview image
- Contact form in `components/sections/Contact.tsx` currently opens the
  user's email client via `mailto:`. Wire it to a real API route (e.g. with
  Resend or Nodemailer) if you want server-side email delivery instead.

## Accessibility & Performance Notes

- Respects `prefers-reduced-motion`
- Visible focus states on all interactive elements
- Semantic headings and `aria-label`s on icon-only buttons
- All images/art are inline SVG (no external image requests, fast + crisp
  at any resolution)
