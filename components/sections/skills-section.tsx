import { skillGroups } from "@/data/portfolio";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section className="section-anchor section-spacing" id="skills">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="The stack behind my analysis workflow"
            description="A clean toolkit across programming, databases, dashboards, and visual storytelling."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal delay={0.08 * index} key={group.title}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                    {group.title}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} className="bg-white/5 text-foreground">
                        {item}
                      </Badge>
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
