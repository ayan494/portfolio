"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          index="05"
          label="Experience"
          title="A track record of"
          highlight="shipping."
          align="center"
          className="mx-auto items-center text-center"
        />

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-500/70 via-signal-500/25 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <Reveal
                key={item.id}
                direction={i % 2 === 0 ? "right" : "left"}
                distance={26}
                className={cn(
                  "relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0",
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                )}
              >
                <span
                  className={cn(
                    "absolute left-[10px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-void-950 sm:top-1",
                    item.status === "current"
                      ? "border-signal-400 shadow-glow-sm"
                      : "border-white/20",
                    i % 2 === 0 ? "sm:-right-3 sm:left-auto" : "sm:-left-3"
                  )}
                >
                  <Briefcase size={11} className="text-signal-300" />
                </span>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div
                    className={cn(
                      "flex flex-wrap items-center gap-2",
                      i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                    )}
                  >
                    <span className="font-mono text-xs text-signal-400">
                      {item.period}
                    </span>
                    {item.status === "current" && (
                      <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-frost">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mist">{item.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {item.description}
                  </p>
                  <ul
                    className={cn(
                      "mt-4 flex flex-col gap-2",
                      i % 2 === 0 ? "sm:items-end" : "sm:items-start"
                    )}
                  >
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className={cn(
                          "flex items-start gap-2 text-left text-xs text-mist sm:text-sm",
                          i % 2 === 0 && "sm:flex-row-reverse sm:text-right"
                        )}
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
