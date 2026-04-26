import Link from "next/link";
import { notFound } from "next/navigation";
import { Github } from "lucide-react";

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

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={project.repoUrl} rel="noreferrer" target="_blank">
                  <Github className="h-4 w-4" />
                  View On GitHub
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/#contact">Start A Conversation</Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="mt-12 overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.3fr_0.9fr] md:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-primary/80">
                  Why this project stands out
                </p>
                <p className="mt-4 text-2xl leading-9 text-foreground md:text-3xl">
                  {project.spotlight}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-background/40 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground">{metric.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-12">
            <p className="text-sm uppercase tracking-[0.24em] text-primary/80">Tools Used</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
              ))}
            </div>
          </div>
        </Reveal>

        <Separator className="my-12" />

        <section>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary/80">Approach</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
                Structured analysis from raw data to clear recommendations
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4">
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
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary/80">Key Insights</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
                Insight cards built for recruiter-style scanning
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.caseStudy.keyInsights.map((insight, index) => (
              <Reveal key={insight} delay={0.08 * index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-base leading-7 text-muted-foreground">{insight}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary/80">
                Business Impact
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
                The outcome is the story, not just the tooling
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4">
            {project.caseStudy.businessImpact.map((impact, index) => (
              <Reveal key={impact} delay={0.08 * index}>
                <Card>
                  <CardContent className="flex gap-4 p-6">
                    <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                    <p className="text-base leading-7 text-muted-foreground">{impact}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
