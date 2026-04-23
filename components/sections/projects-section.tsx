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
            description="These projects are written for recruiters and hiring managers: each one frames the problem, explains the dataset and approach, then lands on the insight and business impact."
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
