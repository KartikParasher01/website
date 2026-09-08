import Link from "next/link";
import { siteConfig } from "@/data/portfolio";
import { ResumeModal } from "@/components/shared/resume-modal";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="section-shell flex flex-col gap-3 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. Built for recruiter clarity and fast
          project review.
        </p>
        <p>Next.js, Tailwind CSS, Framer Motion, and shadcn/ui-inspired components.</p>
    <footer className="border-t border-white/10 bg-[#060911]/80 backdrop-blur-xl">
      <div className="section-shell flex flex-col gap-4 py-8 text-xs sm:text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
    <footer className="border-t border-[#D1CABE] bg-[#F5EFE6] py-10 mt-20">
      <div className="section-shell flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs text-illoca-body">
        <div className="space-y-1">
          <p className="text-foreground font-semibold">
            {siteConfig.name} — <span className="text-primary font-normal">{siteConfig.role}</span>
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded border border-[#9C9C9C] bg-white font-mono text-[10px] font-bold text-illoca-ink">
              KP
            </span>
            <p className="font-syne text-sm font-bold text-illoca-ink">
              {siteConfig.name} — <span className="text-illoca-blue font-semibold">{siteConfig.role}</span>
            </p>
          </div>
          <p className="text-illoca-muted text-[11px]">
            Production PySpark data pipelines, FastAPI vector search, Airflow DAGs, and autonomous AI systems.
          </p>
          <p className="text-xs text-muted-foreground">
            Production-oriented PySpark data pipelines, vector search APIs, and scalable AI workflows.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-illoca-blue transition-colors hover-underline-dotted"
          >
            LinkedIn
          </Link>
          <Link href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-illoca-blue transition-colors hover-underline-dotted"
          >
            GitHub
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="hover:text-illoca-blue transition-colors hover-underline-dotted"
          >
            {siteConfig.email}
          </Link>
          <ResumeModal />
        </div>
      </div>
    </footer>
  );
}
