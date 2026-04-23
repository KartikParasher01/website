import { Code2, Database, LayoutDashboard, Search, Sparkles } from "lucide-react";

import { aboutHighlights, aboutSummary } from "@/data/portfolio";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const icons = [Code2, Database, LayoutDashboard, Sparkles, Search];

export function AboutSection() {
  return (
    <section className="section-anchor section-spacing" id="about">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Analytical thinking with business-first communication"
            description={aboutSummary}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {aboutHighlights.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal delay={0.08 * index} key={item.title}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
