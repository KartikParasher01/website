"use client";

import Link from "next/link";
import { MouseEvent, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Database, LineChart, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Database,
  Search,
  Cpu,
  Sparkles,
  Zap,
  Bot,
  Terminal,
  Copy,
  Check,
  Phone,
  Mail,
  ArrowUpRight,
  Search,
  Bot
  ExternalLink,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ResumeModal } from "@/components/shared/resume-modal";

const workflowCards = [
const pipelineStages = [
const pipelinePrompts = [
  {
    title: "ETL & PySpark",
    description: "Build scalable data workflows for validation, deduplication, matching, and large-scale processing.",
    icon: Database
    id: "pyspark",
    label: "PySpark Deduplication",
    short: "PySpark ETL",
    prompt: "Deduplicate 10M+ B2B lead records with PySpark parallelization",
    label: "PySpark ETL",
    badge: "~80% Speedup",
    icon: Database,
    tech: ["PySpark", "ETL", "B2B Datasets"],
    tech: ["PySpark", "AWS Glue", "S3 Parquet"],
    summary:
      "Engineered large-scale distributed deduplication and record-matching pipelines on multi-million row datasets, slashing cycle processing time by ~80%.",
    code: `# PySpark Deduplication Pipeline (TradeIndia)
      "Engineered large-scale distributed deduplication and record-matching pipelines on multi-million row B2B lead datasets at TradeIndia, slashing runtime by ~80%.",
    code: `# PySpark Deduplication Engine (TradeIndia)
df = spark.read.parquet("s3://tradeindia-data/b2b-records/")
deduped_df = df.withColumn("match_hash", sha2(concat_ws("|", "company_name", "gstin"), 256)) \\
               .dropDuplicates(["match_hash"])
# Processing time reduced: 14.5 hrs -> 2.8 hrs (~80% cut)`
deduped_df = df.withColumn(
    "match_hash", sha2(concat_ws("|", "company_name", "gstin"), 256)
).dropDuplicates(["match_hash"])
# Cycle processing time reduced from 14.5 hrs to 2.8 hrs (~80% speedup)`
  },
  {
    title: "Orchestration & Cloud",
    description: "Automate recurring workflows with Airflow, AWS Glue, AWS S3, and Azure Batch services.",
    icon: Sparkles
    id: "vector",
    label: "FastAPI & Vector Search",
    short: "Vector Search",
    prompt: "Serve semantic product discovery via FastAPI & Pinecone vector search",
    label: "Vector Search",
    badge: "Sub-50ms API",
    icon: Search,
    tech: ["FastAPI", "Azure OpenAI", "Pinecone"],
    summary:
      "Constructed production FastAPI vector search API with Azure OpenAI embeddings, Pinecone indexing, and dynamic metadata filtering across the enterprise product catalog.",
      "Constructed production FastAPI vector search API with Azure OpenAI embeddings, Pinecone indexing, and dynamic metadata filtering across 1,000+ product categories.",
    code: `@app.post("/api/v1/search/semantic")
async def semantic_search(query: SearchQuery):
    embedding = await azure_openai.create_embedding(query.text)
    results = pinecone_index.query(
        vector=embedding,
        filter={"category": query.category},
        top_k=20,
        include_metadata=True
    )
    return {"latency_ms": 38, "matches": results.matches}`
  },
  {
    title: "APIs & GenAI",
    description: "Turn embeddings, search, and AI-assisted data workflows into practical business-facing solutions.",
    icon: LineChart
    id: "airflow",
    label: "Airflow & Cloud Orchestration",
    short: "Airflow DAGs",
    prompt: "Orchestrate recurring multi-cloud DAGs across AWS Glue & Azure Batch",
    label: "Airflow Cloud DAGs",
    badge: "100% Automated",
    icon: Cpu,
    tech: ["Airflow", "AWS Glue", "Azure Batch"],
    tech: ["Apache Airflow", "AWS Glue", "Azure Batch"],
    summary:
      "Automated recurring validation and transformation DAGs across AWS S3, AWS Glue, and Azure Batch, eliminating manual processing overhead and ensuring SLA compliance.",
    code: `with DAG("tradeindia_etl_sync", schedule_interval="@daily") as dag:
    validate = BashOperator(task_id="pydantic_schema_check")
    glue_job = AwsGlueJobOperator(task_id="run_glue_transform")
    azure_batch = AzureBatchOperator(task_id="index_vector_embeddings")
    validate >> glue_job >> azure_batch`
  },
  {
    id: "researchpilot",
    label: "ResearchPilot AI Agent",
    short: "GenAI Agent",
    prompt: "Run autonomous web research agent with multi-hop Tavily scraping & Groq",
    label: "ResearchPilot AI",
    badge: "Live on Render",
    icon: Bot,
    tech: ["Tavily Search", "Groq LLM", "Pydantic", "Gradio"],
    summary:
      "Autonomous research assistant converting natural questions into multi-hop queries, scraping web sources, deduplicating URLs, and generating structured reports.",
    code: `planner = QueryPlanner(llm=groq_client)
queries = planner.decompose(user_prompt)
web_sources = tavily.batch_search(queries)
report: ResearchReport = synthesizer.generate(
    sources=deduplicate_urls(web_sources),
    schema=ResearchReport
)`
sources = tavily.search(queries, max_results=10)
report = llm.generate_report(sources, schema=ResearchSchema)
# Deployed live on Render with strict Pydantic validation`
  }
];

const dataNodes = [
  { label: "Ingest", value: "Scraped + internal data", x: "8%", y: "18%" },
  { label: "Clean", value: "Validation + matching", x: "54%", y: "10%" },
  { label: "Scale", value: "PySpark ETL", x: "18%", y: "55%" },
  { label: "Serve", value: "FastAPI + vector search", x: "58%", y: "62%" }
const metrics = [
  {
    value: "~80%",
    label: "Processing Speedup",
    sub: "PySpark B2B deduplication pipeline"
  },
  {
    value: "12,000+",
    label: "Records Analyzed",
    sub: "Statistical segmentation & EDA"
  },
  {
    value: "Sub-50ms",
    label: "Semantic Search",
    sub: "FastAPI + Pinecone vector index"
  },
  {
    value: "~10%",
    label: "Growth Potential",
    sub: "Tata Steel emission norms analysis"
  }
const blueprintMetrics = [
  { value: "~80%", label: "Pipeline Speedup", sub: "PySpark parallelization at TradeIndia" },
  { value: "Sub-50ms", label: "Search Latency", sub: "FastAPI + Pinecone vector lookups" },
  { value: "1,000+", label: "Categories Optimized", sub: "LLM long-tail keyword generator" },
  { value: "Live Web", label: "ResearchPilot AI", sub: "Public agent deployed on Render" }
];

export function HeroSection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 26, mass: 0.3 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 26, mass: 0.3 });
  const spotlight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(77, 163, 255, 0.22), transparent 36%)`;
  const [activeStage, setActiveStage] = useState(0);
  const [activeStage, setActiveStage] = useState(pipelinePrompts[0]);
  const [copied, setCopied] = useState(false);

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = panelRef.current?.getBoundingClientRect();
  function copyPhone() {
    navigator.clipboard.writeText(siteConfig.phone);
  function handleCopy() {
    navigator.clipboard.writeText(activeStage.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

    if (!bounds) {
      return;
    }
  const stage = pipelineStages[activeStage];
  const Icon = stage.icon;

    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  return (
    <section className="section-shell flex min-h-[calc(100vh-5rem)] items-center py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
    <section className="section-shell flex min-h-[calc(100vh-5rem)] flex-col justify-center py-12 lg:py-16">
      {/* Upper Grid: Left Bio / Right Live Pipeline Sandbox */}
      <div className="grid items-center gap-10 xl:gap-14 lg:grid-cols-[1.1fr_0.9fr] 2xl:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: Standout Bio & Role Presentation */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 lg:space-y-8"
        >
          <span className="eyebrow">Recruiter-Focused Data Science Portfolio</span>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Building data systems</span> that make AI and business
            decisions work better.
          {/* Eyebrow & Availability */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              {siteConfig.role}
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-14">
      <div className="section-shell">
        {/* Illoca Handwritten Eyebrow & Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded border border-[#9C9C9C] bg-illoca-sand/50 font-mono text-xs font-bold text-illoca-blue">
              01
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              TradeIndia • Production-Tested
            <span className="font-hand text-xl sm:text-2xl text-illoca-muted -rotate-2">
              architectural data &amp; ai systems
            </span>
            {/* Squiggly SVG line */}
            <svg
              className="hidden sm:block h-2 w-24 text-[#8B8B8B]"
              viewBox="0 0 100 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5C18 1.5 35 7.5 50 4.5C65 1.5 82 6.5 99 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Standout Headline */}
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl xl:text-7xl leading-[1.02]">
            Engineering <span className="text-gradient">high-throughput data</span> pipelines &amp; scalable <span className="text-gradient-emerald">AI search</span> systems.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Junior Data Scientist building across PySpark, ETL, SQL, Airflow, APIs, cloud
            tooling, and Generative AI workflows to make data products more reliable, scalable,
            and useful.

          {/* Description */}
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            {siteConfig.summary}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
          {/* Primary Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <Button asChild size="lg" className="h-12 px-6 font-semibold shadow-[0_0_25px_-5px_rgba(56,189,248,0.4)]">
              <Link href="/#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
                Explore Projects
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#contact">Contact Me</Link>
            <ResumeModal />
            <Button asChild size="lg" variant="secondary" className="h-12 px-6">
              <Link href="/#experience">View Experience</Link>
            </Button>
          <div className="flex items-center gap-2 font-mono text-[11px] text-illoca-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase tracking-wider">Available for Data &amp; AI Roles</span>
          </div>
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
          {/* Direct Recruiter Contact Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-muted-foreground">
            <button
              onClick={copyPhone}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 hover:border-primary/40 hover:bg-white/5 transition-all text-foreground"
        {/* Monumental Hero Headline (Illoca Dual-Layer Style) */}
        <div className="relative my-4 sm:my-8">
          <div className="relative select-none">
            {/* Stroke Layer */}
            <h1 className="text-stroke-ink font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[106px] font-extrabold uppercase leading-[0.92] tracking-tight">
              Engineering At <br className="hidden sm:inline" />
              The Speed Of Scale
            </h1>
            {/* Solid Fill Layer */}
            <div
              className="absolute inset-0 font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[106px] font-extrabold uppercase leading-[0.92] tracking-tight text-illoca-ink"
              aria-hidden="true"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>{siteConfig.phone}</span>
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3 w-3 text-muted-foreground" />
              )}
            </button>
              Engineering At <br className="hidden sm:inline" />
              The Speed Of Scale
            </div>
          </div>

            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 hover:border-primary/40 hover:bg-white/5 transition-all text-foreground"
          {/* Handwritten Annotation Sticker */}
          <div className="mt-4 sm:mt-0 sm:absolute sm:right-6 sm:bottom-2 lg:right-12 lg:bottom-4 font-hand text-xl sm:text-2xl text-illoca-coral rotate-[-4deg] flex items-center gap-2">
            <span>production systems, not prototypes!</span>
            <svg
              className="h-6 w-6 text-illoca-coral"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span>{siteConfig.email}</span>
            </Link>
              <path d="M7 7l10 10M17 7v10H7" />
            </svg>
          </div>
        </div>

            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 hover:border-primary/40 hover:bg-white/5 transition-all text-muted-foreground hover:text-foreground"
            >
              LinkedIn
              <ArrowUpRight className="h-3 w-3" />
            </Link>
        {/* Subtitle description */}
        <div className="mt-6 max-w-3xl">
          <p className="text-base sm:text-xl font-normal leading-relaxed text-illoca-body">
            <strong className="font-semibold text-illoca-ink">Kartik Parasher</strong> — Data &amp; AI Engineer. Specialized in{" "}
            <span className="underline decoration-illoca-blue decoration-2 underline-offset-4">
              PySpark distributed data pipelines
            </span>
            ,{" "}
            <span className="underline decoration-illoca-coral decoration-2 underline-offset-4">
              FastAPI vector search
            </span>{" "}
            with Pinecone &amp; Azure OpenAI, and autonomous agentic workflows deployed on cloud infrastructure.
          </p>
        </div>

            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 hover:border-primary/40 hover:bg-white/5 transition-all text-muted-foreground hover:text-foreground"
            >
              GitHub
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </motion.div>
        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projects/researchpilot-ai"
            className="group inline-flex h-11 items-center overflow-hidden rounded-xl border border-[#A19D94] bg-illoca-blue text-white shadow-paper transition-all hover:bg-illoca-blue-dark active:translate-x-0.5 active:translate-y-0.5"
          >
            <div className="flex h-11 w-11 items-center justify-center bg-illoca-coral text-white transition-colors group-hover:bg-illoca-coral-dark">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="px-5 font-mono text-xs sm:text-sm font-semibold tracking-tight">
              Explore Flagship AI Project
            </span>
          </Link>

        {/* Right Column: Interactive Live Architecture & Pipeline Sandbox */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 -z-10 bg-hero-glow blur-3xl" />
          <motion.div
            className="panel relative overflow-hidden p-6 md:p-8"
            onMouseMove={handlePointerMove}
            ref={panelRef}
          <ResumeModal />

          <Link
            href="/#contact"
            className="inline-flex h-11 items-center rounded-xl border border-[#9C9C9C] bg-white px-5 font-mono text-xs sm:text-sm font-semibold text-illoca-ink shadow-paper hover:bg-illoca-sand/30 transition-all active:translate-x-0.5 active:translate-y-0.5"
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
          {/* Subtle Cyber Glow Backing */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-emerald-500/20 blur-2xl -z-10 opacity-70" />
            Direct Contact →
          </Link>
        </div>

          <div className="rounded-3xl border border-white/10 bg-[#090d16]/90 p-5 sm:p-7 backdrop-blur-2xl shadow-2xl">
            {/* Header / Sandbox Control Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-3 w-3 gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono font-medium text-muted-foreground">
                  interactive_pipeline_sandbox.py
                </span>
        {/* Illoca Signature Prompt Bar & Architectural Terminal */}
        <div className="mt-14 rounded-2xl border-2 border-[#838383] bg-[#F2F1EF]/95 p-4 sm:p-6 shadow-[5px_5px_0px_rgba(0,0,0,0.08)]">
          {/* Prompt Bar Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[#D1CABE] pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#9C9C9C] bg-white text-illoca-blue font-mono text-xs font-bold">
                λ
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[11px] font-mono text-primary">
                <Zap className="h-3 w-3" />
                Live Architecture
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-illoca-muted">
                  Interactive Pipeline Prompt
                </p>
                <p className="font-syne text-base sm:text-lg font-bold text-illoca-ink">
                  {activeStage.prompt}
                </p>
              </div>
            </div>

              <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                  Hybrid Data & AI Workflow
                </p>
                <div className="mt-6 grid gap-4">
                  {workflowCards.map((card, index) => {
                    const Icon = card.icon;
            {/* Interactive Pipeline Stage Tabs */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {pipelineStages.map((stg, idx) => {
                const StgIcon = stg.icon;
                const isActive = activeStage === idx;
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#9C9C9C] bg-white px-3 py-1.5 font-mono text-xs text-illoca-ink hover:bg-illoca-sand/30 transition-colors shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Copied Code</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

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
                return (
                  <button
                    key={stg.id}
                    onClick={() => setActiveStage(idx)}
                    className={`flex flex-col items-start p-3 rounded-2xl border text-left transition-all ${
                      isActive
                        ? "border-primary/50 bg-primary/15 text-foreground shadow-[0_0_20px_-3px_rgba(56,189,248,0.25)]"
                        : "border-white/5 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-foreground"
          {/* Prompt Switcher Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-4">
            {pipelinePrompts.map((stage) => {
              const Icon = stage.icon;
              const isSelected = activeStage.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage)}
                  className={`flex flex-col items-start p-3 rounded-xl text-left transition-all border ${
                    isSelected
                      ? "border-illoca-blue bg-white shadow-[3px_3px_0px_rgba(59,96,197,0.2)]"
                      : "border-[#D1CABE] bg-white/60 hover:bg-white hover:border-[#9C9C9C]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <Icon
                      className={`h-4 w-4 ${
                        isSelected ? "text-illoca-blue" : "text-illoca-muted"
                      }`}
                    />
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-illoca-sand/60 text-illoca-coral font-bold">
                      {stage.badge}
                    </span>
                  </div>
                  <span
                    className={`font-syne text-xs font-bold truncate w-full ${
                      isSelected ? "text-illoca-blue" : "text-illoca-ink"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1.5">
                      <StgIcon className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-[10px] font-mono opacity-70">0{idx + 1}</span>
                    </div>
                    <span className="text-xs font-semibold truncate w-full">{stg.short}</span>
                    <span className={`text-[10px] mt-1 font-mono ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {stg.badge}
                    </span>
                  </button>
                );
              })}
            </div>
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>

            {/* Active Stage Deep Dive */}
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-5 space-y-4"
              >
                {/* Stage Header & Tech Pills */}
                <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground text-sm sm:text-base">
                        {stage.label}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {stage.badge}
          {/* Active Stage Blueprint Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-4 rounded-xl border border-[#D1CABE] bg-white p-4 sm:p-5 shadow-inner"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <p className="text-xs font-medium text-illoca-body leading-relaxed max-w-2xl">
                  {activeStage.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeStage.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#D1CABE] bg-[#F8F5EE] text-illoca-ink"
                    >
                      {t}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground mb-3">
                    {stage.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted-foreground"
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
                        {t}
                      </span>
                    ))}
                  </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                className="mt-5 ml-auto max-w-xs rounded-3xl border border-primary/20 bg-primary/10 p-5 text-sm text-primary shadow-glow"
                transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                Built to show recruiter-ready depth across engineering, orchestration, analytics,
                and practical AI workflows in one clean scan.
                {/* Code Terminal View */}
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs overflow-x-auto text-sky-200/90 leading-relaxed shadow-inner">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground border-b border-white/10 pb-2 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="h-3.5 w-3.5 text-primary" />
                      Production Implementation
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">STATUS: EXECUTING</span>
                  </div>
                  <pre className="whitespace-pre overflow-x-auto font-mono text-[11px] sm:text-xs">
                    <code>{stage.code}</code>
                  </pre>
              {/* Code Snippet Box */}
              <div className="rounded-lg border border-[#373737] bg-[#1E1E24] p-4 font-mono text-xs text-emerald-300 shadow-inner overflow-x-auto">
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-700 pb-2 mb-2 font-mono">
                  <span>production_spec_{activeStage.id}.py</span>
                  <span className="text-illoca-coral font-bold">● VERIFIED EXECUTION</span>
                </div>
              </motion.div>
            </AnimatePresence>
                <pre className="text-[11px] font-mono leading-relaxed whitespace-pre-wrap">
                  {activeStage.code}
                </pre>
              </div>

            {/* Bottom Proof Quote */}
            <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Click tabs above to simulate production stages
              {activeStage.id === "researchpilot" && (
                <div className="mt-3 flex items-center justify-between font-mono text-xs pt-1 border-t border-dashed border-[#D1CABE]">
                  <span className="text-illoca-muted">Live Public Web App:</span>
                  <Link
                    href="https://researchpilot-ai.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-illoca-blue font-bold hover:underline inline-flex items-center gap-1"
                  >
                    researchpilot-ai.onrender.com
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Illoca Architectural Specification Metrics Ribbon */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {blueprintMetrics.map((m, i) => (
            <div
              key={m.label}
              className="paper-card p-5 border border-[#DCD5C8] bg-white relative overflow-hidden group"
            >
              <span className="absolute top-2 right-3 font-mono text-[10px] text-illoca-light">
                SPEC 0{i + 1}
              </span>
              <span className="font-mono text-primary font-medium">B2B & AI Scale</span>
              <p className="font-syne text-3xl sm:text-4xl font-extrabold text-illoca-blue">
                {m.value}
              </p>
              <p className="mt-1 font-syne text-xs sm:text-sm font-bold text-illoca-ink">
                {m.label}
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-illoca-muted">
                {m.sub}
              </p>
            </div>
          </motion.div>
          </div>
        </motion.div>
          ))}
        </div>
      </div>

      {/* Lower Ribbon: High-Density Recruiter Metrics Grid (Window-to-Window) */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
      >
        {metrics.map((item) => (
          <div
            key={item.label}
            className="p-5 sm:p-6 rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl hover:border-primary/30 transition-all group"
          >
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-foreground group-hover:text-primary transition-colors">
              {item.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary/90">
              {item.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              {item.sub}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
