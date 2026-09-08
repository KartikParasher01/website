import {
  Database,
  Terminal,
  Bot,
  Cloud,
  BarChart3,
  Wrench
  Wrench,
  CheckCircle2
} from "lucide-react";

import { skillGroups } from "@/data/portfolio";

import { HoverPanel } from "@/components/shared/hover-panel";
import { skillCategories } from "@/data/portfolio";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categoryIcons = [
  Database,
  Terminal,
  Cloud,
  Bot,
  Cloud,
  BarChart3,
  Wrench
  Database,
  Wrench,
  BarChart3
];

const standoutSkills = new Set([
  "Python",
  "SQL",
  "PySpark",
  "Apache Airflow",
  "ETL Pipelines",
  "Apache Airflow",
  "AWS Glue",
  "Azure Batch",
  "AWS (Glue, S3)",
  "Azure (Batch, OpenAI, Blob Storage)",
  "Large Language Models (LLMs)",
  "Vector Search",
  "Pinecone",
  "FastAPI",
  "Azure OpenAI",
  "Pinecone",
  "Generative AI"
  "AWS S3",
  "AWS Glue",
  "Azure Batch",
  "Render",
  "LLM Applications",
  "SQL",
  "Docker",
  "PostgreSQL",
  "Power BI"
]);

export function SkillsSection() {
  return (
    <section className="section-anchor section-spacing" id="skills">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="The stack behind my data and AI workflow"
            description="A practical toolkit spanning data processing, ETL, orchestration, APIs, cloud services, reporting, and applied Generative AI."
            eyebrow="Technical Arsenal"
            title="Production-tested tools across data engineering & modern AI"
            description="Organized by specialization domain, reflecting production pipelines deployed at TradeIndia, analytical modeling, and agentic AI systems."
          />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D1CABE] pb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-illoca-blue uppercase tracking-widest">
                <span>05 // TECHNICAL ARSENAL</span>
              </div>
              <h2 className="mt-2 font-syne text-3xl sm:text-5xl font-extrabold text-illoca-ink tracking-tight">
                Production-Tested Tools &amp; Applied AI Taxonomy
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-illoca-body">
                Structured by engineering domain, reflecting hands-on production pipelines at TradeIndia, analytical modeling, and agentic AI systems.
              </p>
            </div>

            <div className="shrink-0 font-hand text-xl text-illoca-coral -rotate-2">
              production-verified tooling ↵
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal delay={0.08 * index} key={group.title}>
              <HoverPanel delay={0.02 * index}>
                <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                  <CardContent className="p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                      {group.title}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge
                          key={item}
                          className={cn(
                            "bg-white/5 text-foreground transition-colors duration-300",
                            standoutSkills.has(item) &&
                              "border-primary/25 bg-primary/10 text-primary shadow-[0_0_18px_rgba(77,163,255,0.12)]"
                          )}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </HoverPanel>
            </Reveal>
          ))}
        {/* Window-to-Window 6-Category Bento Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
        {/* 6-Category Bento Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];

            return (
              <Reveal delay={0.06 * index} key={group.title}>
                <HoverPanel delay={0.02 * index}>
                  <Card className="h-full rounded-3xl border border-white/[0.08] bg-[#090d16]/80 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.2)]">
                    <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                      <div>
                        {/* Header with Icon */}
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-display font-bold text-foreground text-base">
                                {group.title}
                              </h3>
                              <p className="text-[11px] text-muted-foreground font-mono">
                                {group.description}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-muted-foreground opacity-60">
                            0{index + 1}
              <Reveal delay={0.06 * index} key={group.category}>
                <div className="paper-card h-full flex flex-col justify-between p-6 sm:p-7 bg-white border border-[#DCD5C8] hover:border-illoca-blue group">
                  <div>
                    <div className="flex items-center justify-between gap-3 border-b border-dashed border-[#DCD5C8] pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#A19D94] bg-[#F8F5EE] text-illoca-blue">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-illoca-muted block">
                            SPEC // DOMAIN 0{index + 1}
                          </span>
                          <h3 className="font-syne text-base sm:text-lg font-bold text-illoca-ink">
                            {group.category}
                          </h3>
                        </div>
                      </div>

                        {/* Skill Badges */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {group.items.map((item) => {
                            const isStandout = standoutSkills.has(item);
                      <span className="flex h-6 w-6 items-center justify-center rounded border border-[#9C9C9C] bg-illoca-sand/40 font-mono text-[10px] font-bold text-illoca-ink">
                        0{index + 1}
                      </span>
                    </div>

                            return (
                              <span
                                key={item}
                                className={cn(
                                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all",
                                  isStandout
                                    ? "bg-primary/10 border border-primary/30 text-sky-200 shadow-[0_0_15px_-4px_rgba(56,189,248,0.3)] hover:bg-primary/20"
                                    : "bg-white/[0.03] border border-white/[0.08] text-muted-foreground hover:border-white/20 hover:text-foreground"
                                )}
                              >
                                {isStandout && (
                                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                )}
                                {item}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    <p className="text-xs text-illoca-body mb-5 leading-relaxed">
                      {group.summary}
                    </p>

                      {/* Footer count indicator */}
                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                        <span>{group.items.length} verified technologies</span>
                        <span className="text-primary font-semibold">Active in Production</span>
                      </div>
                    </CardContent>
                  </Card>
                </HoverPanel>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((item) => {
                        const isStandout = standoutSkills.has(item);
                        return (
                          <span
                            key={item}
                            className={`rounded-lg px-2.5 py-1 font-mono text-xs transition-all ${
                              isStandout
                                ? "border border-illoca-blue/40 bg-illoca-blue/10 text-illoca-blue font-bold shadow-sm"
                                : "border border-[#DCD5C8] bg-[#FBF8F2] text-illoca-body hover:border-[#9C9C9C]"
                            }`}
                          >
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DCD5C8] flex items-center justify-between font-mono text-[10px] text-illoca-muted">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      {group.skills.length} core tools
                    </span>
                    <span className="text-illoca-blue font-bold">● Production Verified</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
