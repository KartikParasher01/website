"use client";

import Link from "next/link";
import { MouseEvent, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Database, LineChart, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const workflowCards = [
  {
    title: "ETL & PySpark",
    description: "Build scalable data workflows for validation, deduplication, matching, and large-scale processing.",
    icon: Database
  },
  {
    title: "Orchestration & Cloud",
    description: "Automate recurring workflows with Airflow, AWS Glue, AWS S3, and Azure Batch services.",
    icon: Sparkles
  },
  {
    title: "APIs & GenAI",
    description: "Turn embeddings, search, and AI-assisted data workflows into practical business-facing solutions.",
    icon: LineChart
  }
];

const dataNodes = [
  { label: "Ingest", value: "Scraped + internal data", x: "8%", y: "18%" },
  { label: "Clean", value: "Validation + matching", x: "54%", y: "10%" },
  { label: "Scale", value: "PySpark ETL", x: "18%", y: "55%" },
  { label: "Serve", value: "FastAPI + vector search", x: "58%", y: "62%" }
];

export function HeroSection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 26, mass: 0.3 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 26, mass: 0.3 });
  const spotlight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(77, 163, 255, 0.22), transparent 36%)`;

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = panelRef.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  return (
    <section className="section-shell flex min-h-[calc(100vh-5rem)] items-center py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Recruiter-Focused Data Science Portfolio</span>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Building data systems</span> that make AI and business
            decisions work better.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Junior Data Scientist building across PySpark, ETL, SQL, Airflow, APIs, cloud
            tooling, and Generative AI workflows to make data products more reliable, scalable,
            and useful.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground">
            {[
              "ETL & Data Quality",
              "PySpark & SQL",
              "Airflow & AWS Glue",
              "APIs & Vector Search",
              "Generative AI Workflows"
            ].map((item, index) => (
                <motion.div
                  key={item}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                  initial={{ opacity: 0, y: 14 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.32 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {item}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative"
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 -z-10 bg-hero-glow blur-3xl" />
          <motion.div
            className="panel relative overflow-hidden p-6 md:p-8"
            onMouseMove={handlePointerMove}
            ref={panelRef}
          >
            <motion.div className="absolute inset-0" style={{ background: spotlight }} />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,163,255,0.12),transparent_45%)]" />
            <div className="relative">
              <div className="relative mb-5 h-72 overflow-hidden rounded-[28px] border border-white/10 bg-black/25">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
                <motion.div
                  animate={{ x: ["-35%", "135%"] }}
                  className="absolute left-0 top-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                  transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  animate={{ y: ["125%", "-35%"] }}
                  className="absolute left-1/2 top-0 h-1/2 w-px bg-gradient-to-b from-transparent via-primary to-transparent"
                  transition={{
                    duration: 5.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                />
                {dataNodes.map((node, index) => (
                  <motion.div
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="absolute w-36 rounded-2xl border border-white/10 bg-background/70 p-3 shadow-glow backdrop-blur-md"
                    initial={{ opacity: 0, scale: 0.92, y: 12 }}
                    key={node.label}
                    style={{ left: node.x, top: node.y }}
                    transition={{
                      duration: 0.55,
                      delay: 0.35 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary/80">
                      {node.label}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-5 text-foreground">
                      {node.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                  Hybrid Data & AI Workflow
                </p>
                <div className="mt-6 grid gap-4">
                  {workflowCards.map((card, index) => {
                    const Icon = card.icon;

                    return (
                      <motion.div
                        key={card.title}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-3xl border border-white/10 bg-background/60 p-5"
                        initial={{ opacity: 0, x: 24 }}
                        transition={{
                          duration: 0.55,
                          delay: 0.18 + index * 0.08,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-display text-lg font-medium text-foreground">
                              {card.title}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                className="mt-5 ml-auto max-w-xs rounded-3xl border border-primary/20 bg-primary/10 p-5 text-sm text-primary shadow-glow"
                transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                Built to show recruiter-ready depth across engineering, orchestration, analytics,
                and practical AI workflows in one clean scan.
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
