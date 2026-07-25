"use client";

import {
  Layers,
  MonitorSmartphone,
  Server,
  Plug,
  Smartphone,
  Sparkles,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  MonitorSmartphone,
  Server,
  Plug,
  Smartphone,
  Sparkles,
  Gauge,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="04"
          label="Services"
          title="What I can build for"
          highlight="your team."
          description="From architecture to pixel-level polish — a full range of engineering services under one roof."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.id} direction="up" delay={i * 0.06} distance={20}>
                <GlassCard className="h-full">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-signal-500/25 to-ion/10 text-signal-300 ring-1 ring-white/10">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs text-white/25">
                      {service.index}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-frost">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {service.description}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
