import { MapPin } from "lucide-react";

import { experiences } from "@/data/portfolio";

import { HoverPanel } from "@/components/shared/hover-panel";
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
            title="Production-facing work across data quality, pipelines, and AI"
            description="These roles show hands-on experience across ETL, orchestration, segmentation, vector search, and business-facing delivery in real environments."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-1">
          {experiences.map((experience, index) => (
            <Reveal delay={0.08 * index} key={`${experience.company}-${experience.role}`}>
              <HoverPanel delay={0.02 * index}>
                <Card className="group relative h-full overflow-hidden transition-colors duration-300 hover:border-primary/30">
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardContent className="p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-display text-2xl font-semibold text-foreground">
                          {experience.company}
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-primary/80">
                          {experience.role}
                        </p>
                        <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary/80" />
                          {experience.location}
                        </p>
                      </div>
                      <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {experience.period}
                      </p>
                    </div>

                    <p className="mt-6 text-base leading-7 text-muted-foreground">
                      {experience.impact}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {experience.metrics.map((metric) => (
                        <div
                          className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                          key={`${experience.role}-${metric.label}`}
                        >
                          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                            {metric.label}
                          </p>
                          <p className="mt-2 font-display text-lg font-semibold text-foreground">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 space-y-3">
                      {experience.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-start gap-3">
                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(77,163,255,0.65)]" />
                          <p className="text-sm leading-6 text-muted-foreground">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </HoverPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
