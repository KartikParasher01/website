import { experiences } from "@/data/portfolio";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section className="section-anchor section-spacing" id="experience">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Experience shaped by real business data work"
            description="This section focuses on measurable analytical growth, practical reporting work, and the tools I have been building with in a live business environment."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-1">
          {experiences.map((experience, index) => (
            <Reveal delay={0.08 * index} key={experience.company}>
              <Card className="h-full">
                <CardContent className="p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-display text-2xl font-semibold text-foreground">
                        {experience.company}
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-primary/80">
                        {experience.role}
                      </p>
                    </div>
                    <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {experience.period}
                    </p>
                  </div>

                  <p className="mt-6 text-base leading-7 text-muted-foreground">
                    {experience.impact}
                  </p>

                  <div className="mt-6 space-y-3">
                    {experience.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3">
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                        <p className="text-sm leading-6 text-muted-foreground">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
