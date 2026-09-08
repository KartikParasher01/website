import { MapPin } from "lucide-react";
import { MapPin, Briefcase, Calendar } from "lucide-react";
import { MapPin, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

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
            eyebrow="Career Trajectory"
            title="Production engineering across large-scale data, cloud & AI"
            description="Proven track record in designing B2B deduplication pipelines, automating cloud DAGs, and deploying vector search APIs in live enterprise environments."
          />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D1CABE] pb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-illoca-blue uppercase tracking-widest">
                <span>03 // PROFESSIONAL TIMELINE</span>
              </div>
              <h2 className="mt-2 font-syne text-3xl sm:text-5xl font-extrabold text-illoca-ink tracking-tight">
                Enterprise Engineering &amp; Production Track Record
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-illoca-body">
                Hands-on engineering across TradeIndia and Tata Steel, delivering production data pipelines, hybrid cloud orchestration, and AI-powered search systems.
              </p>
            </div>

            <div className="shrink-0 font-hand text-xl text-illoca-coral -rotate-2">
              measurable impact delivered ↵
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-1">
        {/* Window-to-Window Timeline Container */}
        <div className="mt-12 space-y-6 lg:space-y-8 relative">
          {/* Subtle vertical accent line for desktop */}
          <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/60 via-cyan-500/20 to-transparent" />

        {/* Experience Cards */}
        <div className="mt-12 space-y-8">
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
                <Card className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080c16]/80 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_35px_-8px_rgba(56,189,248,0.2)]">
                  {/* Glowing ambient light on hover */}
                  <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              <div className="paper-card p-6 sm:p-8 lg:p-10 border border-[#DCD5C8] bg-white relative group hover:border-illoca-blue">
                {/* Dossier Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#DCD5C8] pb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded border border-[#9C9C9C] bg-illoca-sand/40 font-mono text-xs font-bold text-illoca-blue">
                        0{index + 1}
                      </span>
                      <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-illoca-ink">
                        {experience.company}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#A19D94] bg-[#F8F5EE] px-3 py-1 font-mono text-xs font-bold text-illoca-ink">
                        <Briefcase className="h-3.5 w-3.5 text-illoca-blue" />
                        {experience.role}
                      </span>
                    </div>

                  <CardContent className="p-6 sm:p-8 lg:p-10">
                    {/* Header Row: Company, Role, Location, Date */}
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/5 pb-6">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {experience.company}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            <Briefcase className="h-3 w-3" />
                            {experience.role}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground pt-1">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            {experience.location}
                          </span>
                        </div>
                      </div>
                      <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">

                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-mono text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {experience.period}
                      </p>
                      </div>
                    <div className="flex items-center gap-4 pt-2 font-mono text-xs text-illoca-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-illoca-coral" />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                    <p className="mt-6 text-base leading-7 text-muted-foreground">
                    {/* Impact Summary */}
                    <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300">
                      {experience.impact}
                    </p>
                  <div className="inline-flex items-center gap-2 rounded-lg border border-[#9C9C9C] bg-[#F8F5EE] px-3.5 py-1.5 font-mono text-xs font-bold text-illoca-ink shadow-sm">
                    <Calendar className="h-3.5 w-3.5 text-illoca-blue" />
                    {experience.period}
                  </div>
                </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {/* Metrics Bento Bar */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {experience.metrics.map((metric) => (
                        <div
                          className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                          key={`${experience.role}-${metric.label}`}
                          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 group-hover:border-primary/20 transition-colors"
                        >
                          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                          <p className="text-[11px] uppercase tracking-wider font-mono text-muted-foreground">
                            {metric.label}
                          </p>
                          <p className="mt-2 font-display text-lg font-semibold text-foreground">
                          <p className="mt-1.5 font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                {/* Impact Statement */}
                <p className="mt-6 font-sans text-sm sm:text-base leading-relaxed text-illoca-body font-medium">
                  {experience.impact}
                </p>

                {/* Metrics Bento Row */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {experience.metrics.map((metric) => (
                    <div
                      key={`${experience.role}-${metric.label}`}
                      className="rounded-xl border border-[#DCD5C8] bg-[#FBF8F2] p-4 group-hover:border-illoca-blue/30 transition-colors"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-wider text-illoca-muted">
                        {metric.label}
                      </p>
                      <p className="mt-1 font-syne text-lg font-extrabold text-illoca-blue">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                    <div className="mt-6 space-y-3">
                    {/* Bullet Points from Resume */}
                    <div className="mt-6 space-y-3 pt-2">
                      {experience.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-start gap-3">
                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(77,163,255,0.65)]" />
                          <p className="text-sm leading-6 text-muted-foreground">{outcome}</p>
                          <div className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary border border-primary/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          </div>
                          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                            {outcome}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </HoverPanel>
                {/* Detailed Deliverables */}
                <div className="mt-6 pt-6 border-t border-dashed border-[#DCD5C8]">
                  <p className="font-mono text-xs uppercase tracking-wider font-bold text-illoca-ink mb-3">
                    Delivered Technical Outcomes
                  </p>
                  <ul className="space-y-2.5">
                    {experience.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-3 font-sans text-xs sm:text-sm text-illoca-body leading-relaxed"
                      >
                        <CheckCircle2 className="h-4 w-4 text-illoca-blue shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
