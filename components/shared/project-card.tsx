"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { ArrowUpRight, Github, ExternalLink, Sparkles, BookOpen } from "lucide-react";

import type { Project } from "@/data/portfolio";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 * index }}
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 * index }}
      viewport={{ amount: 0.15, once: true }}
      whileHover={{ scale: 1.015, y: -8 }}
      whileHover={{ y: -6 }}
      whileHover={{ y: -4 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden transition-colors duration-300 hover:border-primary/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,163,255,0.16),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <CardContent className="relative flex h-full flex-col p-7">
          <div className="flex items-start justify-between gap-4">
      <div className="paper-card h-full flex flex-col justify-between p-6 sm:p-7 bg-white border border-[#DCD5C8] hover:border-illoca-blue group">
        <div>
          {/* Category & Status */}
          <div className="flex items-start justify-between gap-4 border-b border-dashed border-[#DCD5C8] pb-4 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                {project.category}
              </p>
      <Card className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090d16]/80 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_35px_-8px_rgba(56,189,248,0.2)]">
        {/* Glow ambient layer */}
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

        <CardContent className="relative flex h-full flex-col justify-between p-6 sm:p-7">
          <div>
            {/* Category & External Icon */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
                    {project.category}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-illoca-blue font-bold">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 rounded bg-illoca-coral/10 border border-illoca-coral/30 px-1.5 py-0.5 font-mono text-[9px] font-bold text-illoca-coral">
                    <Sparkles className="h-2.5 w-2.5" />
                    Featured
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
                      <Sparkles className="h-2.5 w-2.5" />
                      Featured
                    </span>
                  )}
                </div>
                <Link
                  className="mt-2 block font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                  href={`/projects/${project.slug}`}
                >
                  {project.title}
                </Link>
                )}
              </div>

              <Link
                className="mt-3 block font-display text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                href={project.repoUrl}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-primary/50"
                href={project.liveUrl || project.repoUrl}
                rel="noreferrer"
                target="_blank"
                aria-label={`Open ${project.title}`}
                className="mt-2 block font-syne text-xl sm:text-2xl font-bold tracking-tight text-illoca-ink transition-colors hover:text-illoca-blue"
                href={`/projects/${project.slug}`}
              >
                {project.title}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <Link
              className="rounded-full border border-primary/20 bg-primary/10 p-2 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              href={project.repoUrl}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#9C9C9C] bg-[#F8F5EE] text-illoca-ink transition-transform duration-200 group-hover:scale-105 group-hover:border-illoca-blue group-hover:text-illoca-blue shadow-sm"
              href={project.liveUrl || project.repoUrl}
              rel="noreferrer"
              target="_blank"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-5 text-base leading-7 text-muted-foreground">
          {/* Description */}
          <p className="text-xs sm:text-sm leading-relaxed text-illoca-body">
            {project.shortDescription}
          </p>
            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>

          <div className="mt-6 grid gap-2">
            {project.metrics.map((metric) => (
          {/* Metrics Chips */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {project.metrics.slice(0, 2).map((metric) => (
              <div
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                className="rounded-lg border border-[#DCD5C8] bg-[#FBF8F2] px-3 py-2"
                key={`${project.slug}-${metric.label}`}
              >
                <span className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-illoca-muted truncate">
                  {metric.label}
                </span>
                <span className="text-right text-sm font-semibold text-foreground">
                <span className="block font-syne text-xs font-bold text-illoca-ink truncate mt-0.5">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
            {/* Metrics Chips */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              {project.metrics.slice(0, 2).map((metric) => (
                <div
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                  key={`${project.slug}-${metric.label}`}
                >
                  <span className="block text-[10px] uppercase tracking-wider font-mono text-muted-foreground truncate">
                    {metric.label}
                  </span>
                  <span className="block text-xs font-bold text-foreground truncate mt-0.5">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-background/50 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Spotlight</p>
            <p className="mt-3 text-sm leading-7 text-foreground/90">{project.spotlight}</p>
          {/* Technical Key Spotlight */}
          <div className="mt-4 rounded-lg border border-[#DCD5C8] bg-[#FDFBF7] p-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-illoca-blue font-bold">Technical Key</p>
            <p className="mt-1 text-xs leading-relaxed text-illoca-body">{project.spotlight}</p>
          </div>
            {/* Spotlight */}
            <div className="mt-5 rounded-2xl border border-white/5 bg-white/[0.015] p-3.5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-primary">Technical Key</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{project.spotlight}</p>
            </div>

          <div className="mt-6 space-y-3">
            {project.previewPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm leading-6 text-muted-foreground">{point}</p>
          {/* Preview Points */}
          <div className="mt-4 space-y-1.5">
            {project.previewPoints.slice(0, 2).map((point) => (
              <div key={point} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-illoca-coral shrink-0" />
                <p className="text-xs leading-relaxed text-illoca-muted">{point}</p>
              </div>
            ))}
            {/* Preview Points */}
            <div className="mt-4 space-y-2">
              {project.previewPoints.slice(0, 2).map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <p className="text-xs leading-relaxed text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} className="bg-white/5 text-foreground">
        {/* Bottom Area: Tools & Actions */}
        <div className="mt-6 pt-5 border-t border-[#DCD5C8] space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tools.slice(0, 5).map((tool) => (
              <span
                key={tool}
                className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#DCD5C8] bg-[#F8F5EE] text-illoca-body"
              >
                {tool}
              </Badge>
              </span>
            ))}
            {project.tools.length > 5 && (
              <span className="font-mono text-[10px] text-illoca-muted self-center">
                +{project.tools.length - 5}
              </span>
            )}
          </div>
          {/* Bottom Area: Tools & Actions */}
          <div className="mt-6 pt-5 border-t border-white/5 space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tools.slice(0, 5).map((tool) => (
                <Badge
                  key={tool}
                  className="text-[10px] font-mono bg-white/[0.03] border-white/10 text-muted-foreground"
                >
                  {tool}
                </Badge>
              ))}
              {project.tools.length > 5 && (
                <span className="text-[10px] font-mono text-muted-foreground self-center">
                  +{project.tools.length - 5}
                </span>
              )}
            </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={project.repoUrl} rel="noreferrer" target="_blank">
                <Github className="h-4 w-4" />
                GitHub Repo
          <div className="flex flex-wrap gap-2 pt-1">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                rel="noreferrer"
                target="_blank"
                className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#A19D94] bg-illoca-blue px-3 font-mono text-xs font-bold text-white shadow-sm hover:bg-illoca-blue-dark transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Live App
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={`/projects/${project.slug}`}>Read Case Study</Link>
            </Button>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.liveUrl && (
                <Button asChild size="sm" className="h-8 text-xs font-semibold">
                  <Link href={project.liveUrl} rel="noreferrer" target="_blank">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live Web App
                  </Link>
                </Button>
              )}
              <Button asChild size="sm" variant={project.liveUrl ? "outline" : "default"} className="h-8 text-xs">
                <Link href={project.repoUrl} rel="noreferrer" target="_blank">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost" className="h-8 text-xs text-muted-foreground hover:text-foreground">
                <Link href={`/projects/${project.slug}`}>
                  <BookOpen className="h-3 w-3 mr-1" />
                  Case Study
                </Link>
              </Button>
            </div>
            )}

            <Link
              href={project.repoUrl}
              rel="noreferrer"
              target="_blank"
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#9C9C9C] bg-white px-3 font-mono text-xs font-bold text-illoca-ink shadow-sm hover:bg-illoca-sand/30 transition-colors"
            >
              <Github className="h-3 w-3" />
              Code
            </Link>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#DCD5C8] bg-[#F8F5EE] px-3 font-mono text-xs text-illoca-body hover:text-illoca-ink hover:border-[#9C9C9C] transition-colors"
            >
              <BookOpen className="h-3 w-3" />
              Case Study
            </Link>
          </div>
        </CardContent>
      </Card>
        </div>
      </div>
    </motion.div>
  );
}
