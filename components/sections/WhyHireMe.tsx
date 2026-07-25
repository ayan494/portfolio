"use client";

import {
  Zap,
  Code2,
  Puzzle,
  Smartphone,
  Gauge,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { strengths } from "@/data/nav";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Code2,
  Puzzle,
  Smartphone,
  Gauge,
  Sparkles,
  Users,
};

export default function WhyHireMe() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="06"
          label="Why Hire Me"
          title="Strengths that make teams"
          highlight="move faster."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, i) => {
            const Icon = iconMap[strength.icon];
            return (
              <Reveal key={strength.title} direction="up" delay={i * 0.05} distance={16}>
                <div className="group relative h-full bg-void-950/95 p-7 transition-colors duration-300 hover:bg-void-800/60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-500/10 text-signal-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-frost">
                    {strength.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {strength.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
