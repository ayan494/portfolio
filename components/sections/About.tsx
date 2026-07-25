"use client";

import { GraduationCap, Target, Trophy, User } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

const timeline = [
  {
    year: "2022",
    title: "Started the Journey",
    description: "Began learning web fundamentals — HTML, CSS, and JavaScript — building small static projects.",
  },
  {
    year: "2023",
    title: "Went Full Stack",
    description: "Picked up React, Node.js, Express, and MongoDB to build complete, data-driven applications.",
  },
  {
    year: "2024",
    title: "Modern Stack Mastery",
    description: "Adopted Next.js, TypeScript, and Tailwind CSS to ship production-grade, animated interfaces.",
  },
  {
    year: "Now",
    title: "Building for Real Clients",
    description: "Delivering freelance projects end-to-end and preparing for a full-time software house role.",
  },
];

const achievements = [
  "Shipped 6+ live, production-deployed web applications",
  "Built a full type-safe stack from database to UI",
  "Self-taught modern architecture and design systems",
  "Consistently ships pixel-accurate, animated interfaces",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="01"
          label="About Me"
          title="A developer who cares about"
          highlight="the details."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Intro */}
          <Reveal direction="right" className="lg:col-span-2">
            <GlassCard className="h-full" glow={false}>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-signal-500/15 text-signal-300">
                <User size={20} />
              </div>
              <h3 className="text-xl font-semibold text-frost">Who I Am</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                I&apos;m Ayan Saeed, a Full Stack Developer who builds complete
                web products — not just interfaces. I care about how software
                is architected as much as how it looks, which means clean
                component structures, typed APIs, and interfaces that respond
                instantly to every interaction.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                My goal is simple: join a software house or remote team where
                I can ship production work, learn from senior engineers, and
                keep raising my own bar for craft.
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <Target size={18} className="mt-0.5 shrink-0 text-signal-300" />
                <p className="text-sm text-mist">
                  <span className="font-medium text-frost">Career goal:</span>{" "}
                  Grow into a senior full stack role building products used by
                  real people at scale.
                </p>
              </div>
            </GlassCard>
          </Reveal>

          {/* Timeline */}
          <Reveal direction="left" delay={0.1} className="lg:col-span-3">
            <GlassCard className="h-full" glow={false}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-500/15 text-signal-300">
                  <Trophy size={20} />
                </div>
                <h3 className="text-xl font-semibold text-frost">My Journey</h3>
              </div>

              <div className="relative flex flex-col gap-7 pl-2">
                <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-signal-500/60 via-signal-500/20 to-transparent" />
                {timeline.map((item, i) => (
                  <Reveal key={item.year} direction="up" delay={0.05 * i} distance={14}>
                    <div className="relative flex gap-5 pl-6">
                      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-signal-400 bg-void-950 shadow-glow-sm" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-signal-400">
                            {item.year}
                          </span>
                          <h4 className="text-sm font-semibold text-frost">
                            {item.title}
                          </h4>
                        </div>
                        <p className="mt-1 text-sm text-mist">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Reveal direction="up">
            <GlassCard className="h-full" glow={false}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-500/15 text-signal-300">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-semibold text-frost">Education</h3>
              </div>
              <p className="text-sm leading-relaxed text-mist">
                Continuous, self-directed education in modern software
                engineering — supplemented by structured practice with
                production-grade architecture, testing discipline, and
                real-world deployment workflows on Vercel and GitHub.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <GlassCard className="h-full" glow={false}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-500/15 text-signal-300">
                  <Trophy size={20} />
                </div>
                <h3 className="text-xl font-semibold text-frost">Achievements</h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-mist">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" />
                    {a}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
