import { Award, GraduationCap, MapPin, Megaphone } from "lucide-react";
import { Award, GraduationCap, MapPin, Megaphone, CheckCircle2 } from "lucide-react";

import { certificationsOrTraining, education, leadershipHighlights } from "@/data/portfolio";

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
            eyebrow="Credentials & Verified Training"
            title="Academic excellence, industry simulations & leadership"
            description="Verified certifications across Data Analytics, SQL, and Business Decision Making, backed by hands-on enterprise job simulations and university leadership."
          />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D1CABE] pb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-illoca-blue uppercase tracking-widest">
                <span>06 // CREDENTIALS &amp; LEADERSHIP</span>
              </div>
              <h2 className="mt-2 font-syne text-3xl sm:text-5xl font-extrabold text-illoca-ink tracking-tight">
                Academic Foundation &amp; Enterprise Simulations
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-illoca-body">
                Verified certifications across Data Analytics, SQL, and Business Decision Making, backed by hands-on enterprise job simulations and university leadership.
              </p>
            </div>

            <div className="shrink-0 font-hand text-xl text-illoca-coral -rotate-2">
              academic &amp; industry verified ↵
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_0.82fr]">
        {/* Window-to-Window 3-Column Bento Grid */}
        {/* 3-Column Bento Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Col 1: Academic Background */}
          <Reveal>
            <HoverPanel>
              <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <GraduationCap className="h-5 w-5" />
              <Card className="h-full rounded-3xl border border-white/[0.08] bg-[#090d16]/80 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.2)]">
                <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="paper-card h-full flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#DCD5C8] hover:border-illoca-blue">
              <div>
                <div className="flex items-center gap-3 border-b border-dashed border-[#DCD5C8] pb-4 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#A19D94] bg-[#F8F5EE] text-illoca-blue">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
                          Degree &amp; Schooling
                        </p>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          Academic Foundation
                        </h3>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                        Education
                      </p>
                      <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                        Academic Background
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-illoca-muted block">
                      DEGREES &amp; SCHOOLING
                    </span>
                    <h3 className="font-syne text-xl font-bold text-illoca-ink">
                      Academic Foundation
                    </h3>
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
                    <div className="space-y-6">
                      {education.map((item) => (
                        <div
                          key={item.institution}
                          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5 transition-all hover:bg-white/[0.04]"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-semibold text-foreground text-base">
                              {item.institution}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.credential}
                            </p>
                            </h4>
                            <span className="font-mono text-xs text-primary/90 bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                              {item.period}
                            </span>
                          </div>
                          <Badge className="bg-white/5 text-foreground">{item.period}</Badge>
                          <p className="mt-1 text-sm font-medium text-slate-300">
                            {item.credential}
                          </p>
                          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground border-t border-white/[0.05] pt-3">
                            <span className="font-mono text-cyan-400 font-semibold">
                              {item.detail}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-slate-400" />
                              {item.location}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {item.detail}
                        </p>
                <div className="space-y-5">
                  {education.map((item) => (
                    <div
                      key={item.institution}
                      className="rounded-xl border border-[#DCD5C8] bg-[#FBF8F2] p-4 transition-all hover:border-[#9C9C9C]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-syne font-bold text-illoca-ink text-base">
                          {item.institution}
                        </h4>
                        <span className="font-mono text-xs text-illoca-blue bg-illoca-blue/10 px-2 py-0.5 rounded border border-illoca-blue/20 font-bold">
                          {item.period}
                        </span>
                      </div>
                    ))}
                      ))}
                      <p className="mt-1 font-sans text-xs sm:text-sm font-medium text-illoca-body">
                        {item.credential}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-xs font-mono border-t border-dashed border-[#DCD5C8] pt-2.5">
                        <span className="text-illoca-coral font-bold">{item.detail}</span>
                        <span className="flex items-center gap-1 text-illoca-muted">
                          <MapPin className="h-3 w-3 text-illoca-coral" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-muted-foreground font-mono">
                    Birla Institute of Technology, Mesra — 2021-2024
                  </div>
                </CardContent>
              </Card>
            </HoverPanel>
              <div className="mt-6 pt-4 border-t border-[#DCD5C8] text-[11px] font-mono text-illoca-muted">
                Birla Institute of Technology, Mesra — 2021-2024
              </div>
            </div>
          </Reveal>

          {/* Col 2: Industry Certifications & Simulations */}
          {/* Col 2: Industry Certifications */}
          <Reveal delay={0.08}>
            <HoverPanel delay={0.02}>
              <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Award className="h-5 w-5" />
            <HoverPanel>
              <Card className="h-full rounded-3xl border border-white/[0.08] bg-[#090d16]/80 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.2)]">
                <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="paper-card h-full flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#DCD5C8] hover:border-illoca-blue">
              <div>
                <div className="flex items-center gap-3 border-b border-dashed border-[#DCD5C8] pb-4 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#A19D94] bg-[#F8F5EE] text-illoca-coral">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-400">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400">
                          Industry &amp; Skills
                        </p>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          Certifications &amp; Training
                        </h3>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                        Certifications
                      </p>
                      <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                        Training and Simulations
                      </p>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-illoca-muted block">
                      INDUSTRY ACCREDITATION
                    </span>
                    <h3 className="font-syne text-xl font-bold text-illoca-ink">
                      Verified Certifications
                    </h3>
                  </div>
                </div>

                    <div className="space-y-3">
                      {certificationsOrTraining.map((cert) => (
                        <div
                          key={cert.title}
                          className="flex items-start justify-between gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]"
                        >
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-slate-200">
                                {cert.title}
                              </p>
                              <p className="text-xs text-slate-400">
                                {cert.issuer}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant="secondary"
                            className="shrink-0 text-[10px] uppercase font-mono tracking-wider bg-white/[0.05] border-white/10"
                          >
                            Verified
                          </Badge>
                <div className="space-y-3">
                  {certificationsOrTraining.map((cert) => (
                    <div
                      key={cert.title}
                      className="flex items-start justify-between gap-3 rounded-lg border border-[#DCD5C8] bg-[#FBF8F2] p-3 transition-colors hover:border-[#9C9C9C]"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-syne text-xs sm:text-sm font-bold text-illoca-ink">
                            {cert.title}
                          </p>
                          <p className="font-mono text-[11px] text-illoca-muted">
                            {cert.issuer}
                          </p>
                        </div>
                      ))}
                      </div>
                      <span className="shrink-0 font-mono text-[10px] uppercase font-bold text-illoca-blue bg-illoca-blue/10 px-2 py-0.5 rounded border border-illoca-blue/20">
                        Verified
                      </span>
                    </div>
                  </div>
                  ))}
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
                  <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-muted-foreground font-mono">
                    Tata, Accenture &amp; Deloitte Simulations Completed
                  </div>
                </CardContent>
              </Card>
            </HoverPanel>
              <div className="mt-6 pt-4 border-t border-[#DCD5C8] text-[11px] font-mono text-illoca-muted">
                Tata, Accenture &amp; Deloitte Simulations Completed
              </div>
            </div>
          </Reveal>

          {/* Col 3: Leadership & Extracurricular */}
          {/* Col 3: Leadership Highlights */}
          <Reveal delay={0.16}>
            <HoverPanel delay={0.04}>
              <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Megaphone className="h-5 w-5" />
            <HoverPanel>
              <Card className="h-full rounded-3xl border border-white/[0.08] bg-[#090d16]/80 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:shadow-[0_0_30px_-8px_rgba(167,139,250,0.2)]">
                <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="paper-card h-full flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#DCD5C8] hover:border-illoca-blue">
              <div>
                <div className="flex items-center gap-3 border-b border-dashed border-[#DCD5C8] pb-4 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#A19D94] bg-[#F8F5EE] text-purple-600">
                    <Megaphone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-400/10 text-violet-400">
                        <Megaphone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-violet-400">
                          Initiative &amp; Community
                        </p>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          Leadership Highlights
                        </h3>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                        Leadership
                      </p>
                      <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                        Communication Signal
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-illoca-muted block">
                      CAMPUS INITIATIVE
                    </span>
                    <h3 className="font-syne text-xl font-bold text-illoca-ink">
                      Leadership Highlights
                    </h3>
                  </div>
                </div>

                  <div className="mt-6 space-y-4">
                    {leadershipHighlights.map((item) => (
                      <div
                        className="rounded-3xl border border-white/10 bg-background/40 p-5"
                        key={`${item.title}-${item.organization}`}
                      >
                        <p className="font-display text-lg font-semibold text-foreground">
                <div className="space-y-4">
                  {leadershipHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-purple-300 bg-purple-50/40 p-4"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs uppercase font-bold text-purple-800">
                          {item.title}
                    <div className="space-y-4">
                      {leadershipHighlights.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.08] to-transparent p-5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-xs uppercase tracking-wider text-violet-300 font-semibold">
                              {item.title}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-black/40 px-2 py-0.5 rounded-full border border-white/10">
                              BIT Mesra
                            </span>
                          </div>
                          <h4 className="mt-2 font-display text-base font-bold text-white">
                            {item.organization}
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-slate-300">
                            {item.detail}
                          </p>
                        </div>
                      ))}

                      {/* Continuous Learning Pillar */}
                      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                          Engineering Mindset
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          Strong focus on engineering discipline: automated deduplication, strict Pydantic validation schemas, clean API contract design, and production observability.
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary/80">
                          {item.organization}
                        </p>
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                          {item.detail}
                        </p>
                        </span>
                        <span className="font-mono text-[10px] text-illoca-muted bg-white px-2 py-0.5 rounded border border-[#DCD5C8]">
                          BIT Mesra
                        </span>
                      </div>
                    ))}
                      <h4 className="mt-1 font-syne text-sm font-bold text-illoca-ink">
                        {item.organization}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-illoca-body">
                        {item.detail}
                      </p>
                    </div>
                  ))}

                  <div className="rounded-xl border border-[#DCD5C8] bg-[#FBF8F2] p-4">
                    <h4 className="font-mono text-[11px] uppercase tracking-wider font-bold text-illoca-ink mb-1.5">
                      Engineering Discipline
                    </h4>
                    <p className="text-xs text-illoca-body leading-relaxed">
                      Strong focus on production hygiene: distributed deduplication, strict Pydantic schema validation, resilient Airflow retries, and reproducible deployment.
                    </p>
                  </div>
                </div>
              </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-muted-foreground font-mono">
                    Active in technical communication &amp; collaboration
                  </div>
                </CardContent>
              </Card>
            </HoverPanel>
              <div className="mt-6 pt-4 border-t border-[#DCD5C8] text-[11px] font-mono text-illoca-muted">
                Active in technical communication &amp; cross-team execution
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
