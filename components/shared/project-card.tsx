"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

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
      viewport={{ amount: 0.15, once: true }}
      whileHover={{ y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Card className="group relative h-full overflow-hidden transition-colors duration-300 hover:border-primary/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,163,255,0.16),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <CardContent className="relative flex h-full flex-col p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                {project.category}
              </p>
              <Link
                className="mt-3 block font-display text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                href={project.repoUrl}
                rel="noreferrer"
                target="_blank"
              >
                {project.title}
              </Link>
            </div>
            <Link
              className="rounded-full border border-primary/20 bg-primary/10 p-2 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              href={project.repoUrl}
              rel="noreferrer"
              target="_blank"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-5 text-base leading-7 text-muted-foreground">
            {project.shortDescription}
          </p>

          <div className="mt-6 rounded-3xl border border-white/10 bg-background/50 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Spotlight</p>
            <p className="mt-3 text-sm leading-7 text-foreground/90">{project.spotlight}</p>
          </div>

          <div className="mt-6 space-y-3">
            {project.previewPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm leading-6 text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} className="bg-white/5 text-foreground">
                {tool}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={project.repoUrl} rel="noreferrer" target="_blank">
                <Github className="h-4 w-4" />
                GitHub Repo
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={`/projects/${project.slug}`}>Read Case Study</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
