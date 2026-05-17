import { projects } from "@/data/portfolio";

import { ProjectCard } from "@/components/shared/project-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProjectsSection() {
  return (
    <section className="section-anchor section-spacing" id="projects">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Case studies that show how the analysis leads to action"
            description="These projects complement the experience section by showing how I structure analysis, dashboards, and SQL problem-solving into recruiter-friendly case studies."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
