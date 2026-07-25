"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === activeGroup)!;

  return (
    <section id="skills" className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-signal-600/10 blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="02"
          label="Skills"
          title="Tools I use to bring"
          highlight="ideas to life."
          description="A focused, modern toolkit — chosen for speed, type safety, and maintainability across the entire stack."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {skillGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                activeGroup === g.id
                  ? "text-void-950"
                  : "border border-white/10 bg-white/[0.02] text-mist hover:text-frost"
              )}
            >
              {activeGroup === g.id && (
                <motion.span
                  layoutId="skill-pill"
                  className="absolute inset-0 rounded-full bg-signal-400 shadow-glow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 font-mono text-xs">
                {g.index}
              </span>{" "}
              <span className="relative z-10">{g.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-5 sm:grid-cols-2"
          >
            {group.skills.map((skill, i) => (
              <Reveal key={skill.name} direction="up" delay={i * 0.05} distance={16}>
                <GlassCard glow={false} className="!p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-frost">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-signal-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-signal-600 via-signal-400 to-ion shadow-glow-sm"
                    />
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
