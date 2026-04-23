import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { contactLinks } from "@/data/portfolio";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const icons = [Mail, Linkedin, Github];

export function ContactSection() {
  return (
    <section className="section-anchor section-spacing" id="contact">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Open to junior data science, analytics, and AI-driven work"
            description="If you're hiring for someone who can work across data analysis, dashboards, cloud tooling, and practical AI workflows, let's connect."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contactLinks.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal delay={0.08 * index} key={item.label}>
                <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <p className="mt-5 text-xs uppercase tracking-[0.24em] text-primary/80">
                      {item.label}
                    </p>
                    <Link
                      className="mt-3 block text-base leading-7 text-foreground transition-colors hover:text-primary"
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.value}
                    </Link>
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
