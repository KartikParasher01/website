"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Sparkles, ExternalLink, Github, Bot, BookOpen } from "lucide-react";
import { Sparkles, ExternalLink, Github, Bot, BookOpen, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/portfolio";

import { ProjectCard } from "@/components/shared/project-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "AI & Web Intelligence",
  "Data Engineering & Big Data",
  "Applied AI & Search Systems",
  "Public Safety Analytics",
  "Consumer Media Analytics",
  "Revenue & Customer Analytics"
  "Consumer Media Analytics"
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const flagship = projects.find((p) => p.featured) || projects[0];

  return (
    <section className="section-anchor section-spacing" id="projects">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Case studies that show how the analysis leads to action"
            description="These projects complement the experience section by showing how I structure analysis, dashboards, and SQL problem-solving into recruiter-friendly case studies."
          />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Case Studies & Projects"
              title="Applied engineering with measurable business & AI outcomes"
              description="From autonomous research agents with Tavily & Groq to large-scale public data segmentation and executive BI dashboards."
            />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D1CABE] pb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-illoca-blue uppercase tracking-widest">
                <span>04 // CASE STUDIES &amp; SYSTEMS</span>
              </div>
              <h2 className="mt-2 font-syne text-3xl sm:text-5xl font-extrabold text-illoca-ink tracking-tight">
                Architectural Prototypes &amp; Production Systems
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-illoca-body">
                From autonomous multi-source AI research agents deployed on public cloud to large-scale PySpark data pipelines and executive Power BI dashboards.
              </p>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap gap-2 shrink-0">
            {/* Illoca Category Index Tabs */}
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  className={`rounded-lg px-3 py-1.5 font-mono text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_-3px_rgba(56,189,248,0.4)]"
                      : "border border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:text-foreground"
                      ? "bg-illoca-blue text-white shadow-[2px_2px_0px_rgba(0,0,0,0.15)]"
                      : "border border-[#9C9C9C] bg-white text-illoca-ink hover:bg-illoca-sand/40"
                  }`}
                >
                  {cat === "All" ? "All Projects" : cat.split(" ")[0] + "..."}
                  {cat === "All" ? "All Systems" : cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
        {/* Flagship Panoramic Showcase (When "All" or "AI & Web Intelligence" is selected) */}
        {(selectedCategory === "All" || selectedCategory === "AI & Web Intelligence") && (
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#091224] via-[#080d19] to-[#040811] p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
              {/* Radial ambient glow */}
              <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 xl:gap-12 items-center relative z-10">
            <div className="mt-10 rounded-2xl border-2 border-illoca-blue bg-white p-6 sm:p-10 shadow-[6px_6px_0px_rgba(59,96,197,0.15)] relative overflow-hidden">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 xl:gap-12 items-center">
                {/* Left Side: Flagship Story */}
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-300">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-illoca-coral/10 border border-illoca-coral/30 px-3 py-1 font-mono text-xs font-bold text-illoca-coral">
                      <Sparkles className="h-3.5 w-3.5" />
                      FLAGSHIP AI PROJECT
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      Deployed on Render
                    <span className="font-mono text-xs text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-lg border border-emerald-300 font-semibold">
                      ● Live on Render
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  <h3 className="font-syne text-2xl sm:text-4xl font-extrabold text-illoca-ink tracking-tight">
                    {flagship.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  <p className="text-sm sm:text-base leading-relaxed text-illoca-body">
                    {flagship.shortDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                    {flagship.metrics.map((m) => (
                      <div key={m.label} className="p-3 rounded-2xl border border-white/10 bg-white/[0.02]">
                        <span className="block text-[10px] font-mono uppercase text-primary tracking-wider truncate">
                      <div key={m.label} className="p-3 rounded-xl border border-[#DCD5C8] bg-[#FBF8F2]">
                        <span className="block font-mono text-[10px] uppercase text-illoca-muted tracking-wider truncate">
                          {m.label}
                        </span>
                        <span className="block text-xs font-bold text-foreground mt-1 truncate">
                        <span className="block font-syne text-xs font-bold text-illoca-ink mt-1 truncate">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Feature Bullets */}
                  <div className="space-y-2 pt-1">
                    {flagship.previewPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-illoca-body">
                        <span className="h-2 w-2 rounded-full bg-illoca-blue mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  {/* CTAs in Illoca Split Button Style */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    {flagship.liveUrl && (
                      <Button asChild size="lg" className="h-11 px-5 text-xs sm:text-sm font-semibold shadow-[0_0_20px_-3px_rgba(56,189,248,0.4)]">
                        <Link href={flagship.liveUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1.5" />
                          Launch Live App
                        </Link>
                      </Button>
                      <Link
                        href={flagship.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex h-11 items-center overflow-hidden rounded-xl border border-[#A19D94] bg-illoca-blue text-white shadow-paper transition-all hover:bg-illoca-blue-dark active:translate-x-0.5 active:translate-y-0.5"
                      >
                        <div className="flex h-11 w-11 items-center justify-center bg-illoca-coral text-white transition-colors group-hover:bg-illoca-coral-dark">
                          <ExternalLink className="h-4 w-4" />
                        </div>
                        <span className="px-5 font-mono text-xs sm:text-sm font-semibold tracking-tight">
                          Launch Live Web App
                        </span>
                      </Link>
                    )}
                    <Button asChild size="lg" variant="secondary" className="h-11 px-5 text-xs sm:text-sm">
                      <Link href={flagship.repoUrl} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4 mr-1.5" />
                        View Source Code
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="ghost" className="h-11 px-5 text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                      <Link href={`/projects/${flagship.slug}`}>
                        <BookOpen className="h-4 w-4 mr-1.5" />
                        Full Case Study
                      </Link>
                    </Button>

                    <Link
                      href={flagship.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#9C9C9C] bg-white px-5 font-mono text-xs sm:text-sm font-semibold text-illoca-ink shadow-paper hover:bg-illoca-sand/30 transition-all"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </Link>

                    <Link
                      href={`/projects/${flagship.slug}`}
                      className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#DCD5C8] bg-[#F8F5EE] px-4 font-mono text-xs text-illoca-body hover:text-illoca-ink hover:border-[#9C9C9C] transition-colors"
                    >
                      <BookOpen className="h-4 w-4" />
                      Full Case Study
                    </Link>
                  </div>
                </div>

                {/* Right Side: Architecture Flow Diagram */}
                <div className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="flex items-center gap-2 text-cyan-300 font-semibold">
                <div className="p-6 rounded-2xl border-2 border-[#838383] bg-[#FDFBF7] space-y-4 font-mono text-xs shadow-paper">
                  <div className="flex items-center justify-between border-b border-[#D1CABE] pb-3">
                    <span className="flex items-center gap-2 text-illoca-blue font-bold">
                      <Bot className="h-4 w-4" />
                      Agentic Pipeline Architecture
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">END-TO-END AUTOMATED</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 font-bold">
                      PRODUCTION VALIDATED
                    </span>
                  </div>

                  {/* Flow Stages */}
                  <div className="space-y-3 pt-1">
                    <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                      <div className="flex items-center justify-between text-[11px] text-primary font-bold">
                    <div className="p-3 rounded-xl border border-[#DCD5C8] bg-white">
                      <div className="flex items-center justify-between text-[11px] text-illoca-blue font-bold">
                        <span>1. Multi-Hop Query Planner</span>
                        <span className="text-[10px] text-muted-foreground">Decomposition</span>
                        <span className="text-[10px] text-illoca-muted">Decomposition</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1">
                      <p className="text-[11px] text-illoca-body mt-1">
                        Transforms input question into targeted semantic search vectors.
                      </p>
                    </div>

                    <div className="flex justify-center text-primary/50 text-xs">↓</div>
                    <div className="flex justify-center text-illoca-coral font-bold text-xs">↓</div>

                    <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                      <div className="flex items-center justify-between text-[11px] text-sky-300 font-bold">
                    <div className="p-3 rounded-xl border border-[#DCD5C8] bg-white">
                      <div className="flex items-center justify-between text-[11px] text-illoca-coral font-bold">
                        <span>2. Tavily Search + URL Scraper</span>
                        <span className="text-[10px] text-muted-foreground">Deduplication</span>
                        <span className="text-[10px] text-illoca-muted">Deduplication</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1">
                      <p className="text-[11px] text-illoca-body mt-1">
                        Scrapes high-signal web sources &amp; filters noise with BeautifulSoup.
                      </p>
                    </div>

                    <div className="flex justify-center text-sky-300/50 text-xs">↓</div>
                    <div className="flex justify-center text-illoca-blue font-bold text-xs">↓</div>

                    <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                      <div className="flex items-center justify-between text-[11px] text-emerald-300 font-bold">
                    <div className="p-3 rounded-xl border border-[#DCD5C8] bg-white">
                      <div className="flex items-center justify-between text-[11px] text-emerald-700 font-bold">
                        <span>3. Pydantic Validator + Groq LLM</span>
                        <span className="text-[10px] text-muted-foreground">Synthesis</span>
                        <span className="text-[10px] text-illoca-muted">Synthesis</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1">
                      <p className="text-[11px] text-illoca-body mt-1">
                        Synthesizes audit-ready structured report with verified source citations.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {flagship.tools.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-muted-foreground">
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-[#DCD5C8] bg-white text-illoca-ink">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Project Bento Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects
              .filter((p) => (selectedCategory === "All" ? !p.featured : true))
              .map((project, index) => (
                <ProjectCard index={index} key={project.slug} project={project} />
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
