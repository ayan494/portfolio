"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectArt from "@/components/ui/ProjectArt";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal direction="up" delay={delay} distance={30}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-colors duration-300 hover:border-signal-500/40"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectArt variant={project.variant} title={project.title} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-void-950/90 via-void-950/10 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-void-950/50 px-3 py-1 font-mono text-[11px] text-mist backdrop-blur-md">
            {project.category}
          </span>
          <span className="absolute right-4 top-4 font-mono text-xs text-white/40">
            {project.index}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-frost">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-signal-300">{project.tagline}</p>
            </div>
            <span className="shrink-0 font-mono text-xs text-mist">
              {project.year}
            </span>
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-mist"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-signal-500/15 px-4 py-2.5 text-sm font-medium text-signal-300 transition-colors duration-300 hover:bg-signal-500 hover:text-white"
            >
              Live Demo
              <ArrowUpRight size={15} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-mist transition-colors duration-300 hover:border-white/30 hover:text-frost"
            >
              <Github size={15} />
            </a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
