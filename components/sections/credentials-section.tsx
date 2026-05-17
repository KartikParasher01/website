import { Award, GraduationCap, MapPin } from "lucide-react";

import { certificationsOrTraining, education } from "@/data/portfolio";

import { HoverPanel } from "@/components/shared/hover-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function CredentialsSection() {
  return (
    <section className="section-anchor section-spacing" id="credentials">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Education and training that support the technical story"
            description="A compact view of the education and certifications behind my work across analytics, ETL, BI, cloud workflows, and practical AI use cases."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <HoverPanel>
              <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                        Education
                      </p>
                      <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                        Academic Background
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {education.map((item) => (
                      <div
                        key={`${item.institution}-${item.period}`}
                        className="rounded-3xl border border-white/10 bg-background/40 p-5"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-display text-lg font-semibold text-foreground">
                              {item.institution}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.credential}
                            </p>
                          </div>
                          <Badge className="bg-white/5 text-foreground">{item.period}</Badge>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </HoverPanel>
          </Reveal>

          <Reveal delay={0.08}>
            <HoverPanel delay={0.02}>
              <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                        Certifications
                      </p>
                      <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                        Training and Simulations
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {certificationsOrTraining.map((item) => (
                      <div
                        key={`${item.title}-${item.issuer}`}
                        className="rounded-2xl border border-white/10 bg-background/40 px-4 py-3"
                      >
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {item.issuer}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </HoverPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
