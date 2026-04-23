"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Database, LineChart, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const workflowCards = [
  {
    title: "SQL Precision",
    description: "Turn large tables into focused answers with clean joins, filters, and ranking logic.",
    icon: Database
  },
  {
    title: "Python Workflow",
    description: "Clean messy records, automate exploration, and build repeatable analysis steps.",
    icon: Sparkles
  },
  {
    title: "Business Storytelling",
    description: "Present the signal, not the noise, so stakeholders know what to do next.",
    icon: LineChart
  }
];

export function HeroSection() {
  return (
    <section className="section-shell flex min-h-[calc(100vh-5rem)] items-center py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Recruiter-Focused Data Analyst Portfolio</span>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
            I turn <span className="text-gradient">messy data</span> into business decisions.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Data analyst focused on SQL, Python, exploratory analysis, and dashboards that help
            teams move from raw exports to clear next steps with confidence.
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
            {["SQL Analysis", "Python Automation", "Power BI Dashboards", "Insight-Led Decisions"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                >
                  {item}
                </div>
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
          <div className="panel relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,163,255,0.12),transparent_45%)]" />
            <div className="relative">
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                  Analyst Workflow
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
                Built to help recruiters scan impact fast: problem, approach, insight, and business
                outcome in one clean flow.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
