import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="03"
          label="Selected Work"
          title="Projects built to be"
          highlight="shipped, not shelved."
          description="A selection of live, deployed applications — each one solving a real interface or engineering problem end to end."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
