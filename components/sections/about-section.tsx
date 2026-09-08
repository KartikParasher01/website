import { Code2, Database, LayoutDashboard, Search, Sparkles } from "lucide-react";
import { Database, Cpu, Search, Sparkles, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Database, Cpu, Search, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { aboutHighlights, aboutSummary } from "@/data/portfolio";

import { HoverPanel } from "@/components/shared/hover-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const icons = [Code2, Database, LayoutDashboard, Sparkles, Search];
const icons = [Database, Layers, Cpu, Search, Sparkles];
const illocaPillars = [
  {
    number: "1",
    handwritten: "Intents, Translated!",
    title: "ETL & Pipeline Engineering",
    description:
      "Design and deploy production-grade pipelines for data validation, deduplication, and record matching across large-scale enterprise lead datasets.",
    icon: Database,
    spec: "TradeIndia PySpark Core",
    metrics: "~80% faster batch cycles"
  },
  {
    number: "2",
    handwritten: "Workflows, Orchestrated!",
    title: "Airflow & Cloud DAGs",
    description:
      "Automate recurring business-critical DAGs using Apache Airflow, AWS Glue, AWS S3, and Azure Batch with automated data alerts and audit checks.",
    icon: Layers,
    spec: "AWS Glue + S3 + Azure Batch",
    metrics: "100% automated scheduled DAGs"
  },
  {
    number: "3",
    handwritten: "Discovery, Accelerated!",
    title: "FastAPI & Vector Search",
    description:
      "Build low-latency REST APIs utilizing Azure OpenAI embeddings, Pinecone vector indexing, and dynamic metadata filtering for semantic product search.",
    icon: Search,
    spec: "Pinecone + Azure OpenAI",
    metrics: "Sub-50ms query latency"
  },
  {
    number: "4",
    handwritten: "Scale, Generated!",
    title: "Applied Generative AI",
    description:
      "Architect LLM-powered applications including automated long-tail keyword generators for 1,000+ product categories and autonomous web research agents.",
    icon: Cpu,
    spec: "Groq API + Tavily + Pydantic",
    metrics: "1,000+ catalog categories"
  },
  {
    number: "5",
    handwritten: "Decisions, Realized!",
    title: "Enterprise BI & Analytics",
    description:
      "Convert complex high-volume datasets into decision-ready executive dashboards using Power BI, DAX, Power Query, and exploratory statistical modeling.",
    icon: Sparkles,
    spec: "Power BI + DAX + Python EDA",
    metrics: "Board-level decision clarity"
  }
];

export function AboutSection() {
  return (
    <section className="section-anchor section-spacing" id="about">
      <div className="section-shell">
        {/* Section Header */}
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A hybrid profile across data engineering, analytics, and AI"
            eyebrow="Core Competencies"
            title="Bridging big data engineering with applied generative AI"
            description={aboutSummary}
          />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D1CABE] pb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-illoca-blue uppercase tracking-widest">
                <span>02 // CORE COMPETENCIES</span>
              </div>
              <h2 className="mt-2 font-syne text-3xl sm:text-5xl font-extrabold text-illoca-ink tracking-tight">
                Architecting High-Yield Data Systems
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-illoca-body">
                {aboutSummary}
              </p>
            </div>

            <div className="shrink-0 font-hand text-xl text-illoca-coral -rotate-2">
              production-tested discipline ↵
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {/* Window-to-Window 5-Column / Bento Grid Layout */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {aboutHighlights.map((item, index) => {
            const Icon = icons[index];
            const Icon = icons[index % icons.length];
        {/* Illoca 5-Stage Numbered Bento Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {illocaPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal delay={0.05 * index} key={pillar.title}>
                <div className="paper-card h-full flex flex-col justify-between p-6 bg-white border border-[#DCD5C8] group hover:border-illoca-blue">
                  <div>
                    {/* Number Badge & Handwritten note */}
                    <div className="flex items-center justify-between gap-2 border-b border-dashed border-[#DCD5C8] pb-3 mb-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#9C9C9C] bg-illoca-sand/40 font-mono text-xs font-bold text-illoca-ink">
                        {pillar.number}
                      </span>
                      <span className="font-hand text-base text-illoca-coral -rotate-2 truncate">
                        {pillar.handwritten}
                      </span>
                    </div>

            return (
              <Reveal delay={0.08 * index} key={item.title}>
              <Reveal delay={0.06 * index} key={item.title}>
                <HoverPanel delay={0.02 * index}>
                  <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                  <Card className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.045] hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.2)]">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 font-display text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-primary/80">
                        <span>Pillar 0{index + 1}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </HoverPanel>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#A19D94] bg-illoca-sand/20 text-illoca-blue mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-syne text-base sm:text-lg font-bold text-illoca-ink leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-illoca-body">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DCD5C8] space-y-1 font-mono text-[10px]">
                    <div className="flex items-center justify-between text-illoca-muted">
                      <span>SPEC:</span>
                      <span className="text-illoca-ink font-bold truncate max-w-[130px]">{pillar.spec}</span>
                    </div>
                    <div className="flex items-center justify-between text-illoca-blue font-bold">
                      <span>METRIC:</span>
                      <span>{pillar.metrics}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Panoramic Recruiter Callout Banner */}
        <Reveal delay={0.3}>
          <div className="mt-8 p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-primary/10 via-white/[0.02] to-emerald-500/10 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Production Philosophy
        {/* Illoca Production Philosophy Callout Banner */}
        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border-2 border-[#838383] bg-[#FDFBF7] p-6 sm:p-8 shadow-paper flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-illoca-blue uppercase tracking-widest font-bold">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Architecture Philosophy
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Data reliability is the foundation of trustworthy AI.
              <h4 className="font-syne text-xl sm:text-2xl font-bold text-illoca-ink">
                Data reliability is the sole bedrock of trustworthy AI.
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl">
                Whether deduplicating millions of records with PySpark or serving real-time vector queries through FastAPI, my focus is always latency, accuracy, and reproducible enterprise value.
              <p className="text-xs sm:text-sm text-illoca-body max-w-3xl leading-relaxed">
                Whether parallelizing distributed records with PySpark across AWS or indexing dense vector embeddings with Pinecone and FastAPI, my commitment is strict schema enforcement, auditable pipelines, and sub-50ms latency.
              </p>
            </div>

            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground font-semibold px-5 py-3 text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_-3px_rgba(56,189,248,0.4)]"
              className="shrink-0 group inline-flex h-11 items-center overflow-hidden rounded-xl border border-[#A19D94] bg-illoca-blue text-white shadow-paper transition-all hover:bg-illoca-blue-dark active:translate-x-0.5 active:translate-y-0.5"
            >
              Discuss a Role
              <ArrowUpRight className="h-4 w-4" />
              <div className="flex h-11 w-11 items-center justify-center bg-illoca-coral text-white transition-colors group-hover:bg-illoca-coral-dark">
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <span className="px-5 font-mono text-xs sm:text-sm font-semibold tracking-tight">
                Discuss A Project
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
