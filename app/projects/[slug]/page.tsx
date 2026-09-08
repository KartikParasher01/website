import Link from "next/link";
import { notFound } from "next/navigation";
import { Github } from "lucide-react";
import { Github, ExternalLink } from "lucide-react";
import { Github, ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section-shell pb-24 pt-12 md:pb-32">
      <div className="mx-auto max-w-5xl">
    <main className="section-shell pb-24 pt-8 md:pb-32">
      <div className="w-full max-w-[1500px] mx-auto">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Link
                href="/#projects"
                className="eyebrow transition-colors hover:border-primary/40 hover:text-white"
              >
                Back To Projects
              </Link>
              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-primary/80">
                {project.category}
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {project.shortDescription}
              </p>
            </div>
          <div className="border-b border-[#D1CABE] pb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-illoca-muted hover:text-illoca-blue transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              BACK TO SPECIFICATIONS &amp; SYSTEMS
            </Link>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
              {project.liveUrl && (
                <Button asChild size="lg" className="shadow-[0_0_20px_-3px_rgba(56,189,248,0.4)]">
                  <Link href={project.liveUrl} rel="noreferrer" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Launch Live Web App
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-4xl space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-illoca-blue">
                  {project.category}
                </span>
                <h1 className="font-syne text-4xl sm:text-6xl font-extrabold text-illoca-ink tracking-tight leading-[1.05]">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-illoca-body">
                  {project.shortDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="group inline-flex h-11 items-center overflow-hidden rounded-xl border border-[#A19D94] bg-illoca-blue text-white shadow-paper transition-all hover:bg-illoca-blue-dark active:translate-x-0.5 active:translate-y-0.5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center bg-illoca-coral text-white transition-colors group-hover:bg-illoca-coral-dark">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                    <span className="px-5 font-mono text-xs sm:text-sm font-semibold tracking-tight">
                      Launch Live Web App
                    </span>
                  </Link>
                </Button>
              )}
              <Button asChild variant={project.liveUrl ? "outline" : "default"} size="lg">
                <Link href={project.repoUrl} rel="noreferrer" target="_blank">
                )}

                <Link
                  href={project.repoUrl}
                  rel="noreferrer"
                  target="_blank"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#9C9C9C] bg-white px-5 font-mono text-xs sm:text-sm font-semibold text-illoca-ink shadow-paper hover:bg-illoca-sand/30 transition-all"
                >
                  <Github className="h-4 w-4" />
                  <Github className="h-4 w-4 mr-2" />
                  View On GitHub
                  GitHub Repository
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/#contact">Start A Conversation</Link>
              </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Technical Key Highlight Card */}
        <Reveal delay={0.1}>
          <Card className="mt-12 overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.3fr_0.9fr] md:p-10">
          <div className="mt-10 rounded-2xl border-2 border-[#838383] bg-[#FDFBF7] p-6 sm:p-10 shadow-paper">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-primary/80">
                  Why this project stands out
                </p>
                <p className="mt-4 text-2xl leading-9 text-foreground md:text-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-illoca-blue">
                  WHY THIS SYSTEM STANDS OUT
                </span>
                <p className="mt-3 font-syne text-xl sm:text-2xl font-bold leading-relaxed text-illoca-ink">
                  {project.spotlight}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-background/40 p-4"
                    className="rounded-xl border border-[#DCD5C8] bg-white p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-illoca-muted">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground">{metric.value}</p>
                    </span>
                    <p className="mt-1 font-syne text-base font-bold text-illoca-blue">{metric.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Problem & Dataset */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.12}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Problem Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-muted-foreground">
                  {project.caseStudy.problemStatement}
                </p>
              </CardContent>
            </Card>
            <div className="paper-card p-6 sm:p-8 bg-white border border-[#DCD5C8] h-full">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-illoca-blue">
                PROBLEM STATEMENT
              </span>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-illoca-body">
                {project.caseStudy.problemStatement}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Dataset Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-muted-foreground">
                  {project.caseStudy.datasetDescription}
                </p>
              </CardContent>
            </Card>
            <div className="paper-card p-6 sm:p-8 bg-white border border-[#DCD5C8] h-full">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-illoca-coral">
                DATASET &amp; INGESTION SPECS
              </span>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-illoca-body">
                {project.caseStudy.datasetDescription}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Tools */}
        <Reveal delay={0.18}>
          <div className="mt-12">
            <p className="text-sm uppercase tracking-[0.24em] text-primary/80">Tools Used</p>
            <div className="mt-5 flex flex-wrap gap-3">
          <div className="mt-10 rounded-xl border border-[#DCD5C8] bg-[#FBF8F2] p-5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-illoca-muted">
              STACK &amp; RUNTIME TOOLS
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
                <span
                  key={tool}
                  className="font-mono text-xs px-3 py-1 rounded-lg border border-[#DCD5C8] bg-white text-illoca-ink font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Separator className="my-12" />

        <section>
        {/* Approach Stages */}
        <section className="mt-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary/80">Approach</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
                Structured analysis from raw data to clear recommendations
            <div className="border-b border-[#D1CABE] pb-4 mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-illoca-blue">
                ENGINEERING EXECUTION
              </span>
              <h2 className="mt-1 font-syne text-2xl sm:text-4xl font-extrabold text-illoca-ink">
                Structured Analysis from Raw Data to Production Delivery
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4">

          <div className="grid gap-4">
            {project.caseStudy.approach.map((step, index) => (
              <Reveal key={step} delay={0.08 * index}>
                <Card>
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
                      0{index + 1}
                    </div>
                    <p className="pt-1 text-base leading-7 text-muted-foreground">{step}</p>
                  </CardContent>
                </Card>
              <Reveal key={step} delay={0.06 * index}>
                <div className="paper-card p-5 sm:p-6 bg-white border border-[#DCD5C8] flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#9C9C9C] bg-illoca-sand/40 font-mono text-xs font-bold text-illoca-ink">
                    0{index + 1}
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-illoca-body pt-1">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Key Insights */}
        <section className="mt-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary/80">Key Insights</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
                Insight cards built for recruiter-style scanning
            <div className="border-b border-[#D1CABE] pb-4 mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-illoca-blue">
                EMPIRICAL INSIGHTS
              </span>
              <h2 className="mt-1 font-syne text-2xl sm:text-4xl font-extrabold text-illoca-ink">
                Verified Architectural Findings
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="grid gap-4 md:grid-cols-2">
            {project.caseStudy.keyInsights.map((insight, index) => (
              <Reveal key={insight} delay={0.08 * index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-base leading-7 text-muted-foreground">{insight}</p>
                  </CardContent>
                </Card>
              <Reveal key={insight} delay={0.06 * index}>
                <div className="paper-card p-6 bg-white border border-[#DCD5C8] h-full flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-illoca-blue shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base leading-relaxed text-illoca-body">
                    {insight}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Business Impact */}
        <section className="mt-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary/80">
                Business Impact
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
                The outcome is the story, not just the tooling
            <div className="border-b border-[#D1CABE] pb-4 mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-illoca-coral">
                BUSINESS &amp; OPERATIONAL OUTCOME
              </span>
              <h2 className="mt-1 font-syne text-2xl sm:text-4xl font-extrabold text-illoca-ink">
                The Measurable Deliverable
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4">
          <div className="grid gap-4">
            {project.caseStudy.businessImpact.map((impact, index) => (
              <Reveal key={impact} delay={0.08 * index}>
                <Card>
                  <CardContent className="flex gap-4 p-6">
                    <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                    <p className="text-base leading-7 text-muted-foreground">{impact}</p>
                  </CardContent>
                </Card>
              <Reveal key={impact} delay={0.06 * index}>
                <div className="paper-card p-6 bg-white border border-[#DCD5C8] flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-illoca-coral" />
                  <p className="text-sm sm:text-base leading-relaxed text-illoca-body font-medium">
                    {impact}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
