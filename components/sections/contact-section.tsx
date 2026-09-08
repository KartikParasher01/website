"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Copy, Check, Sparkles } from "lucide-react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Copy, Check } from "lucide-react";

import { contactLinks } from "@/data/portfolio";

import { contactLinks, siteConfig } from "@/data/portfolio";
import { HoverPanel } from "@/components/shared/hover-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { ResumeModal } from "@/components/shared/resume-modal";

const icons = [Mail, Linkedin, Github];
const icons = [Mail, Phone, Linkedin, Github];

export function ContactSection() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  function handleCopy(text: string, label: string) {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  }

  return (
    <section className="section-anchor section-spacing" id="contact">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Open to junior data science, analytics, and AI-driven work"
            description="If you're hiring for someone who can work across data analysis, dashboards, cloud tooling, and practical AI workflows, let's connect."
          />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Direct Line"
              title="Let's build reliable data systems & applied AI together"
              description="Actively open to Data & AI Engineer, Data Scientist, and Data Engineering roles. Fast response guaranteed."
            />
            <div className="shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D1CABE] pb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-illoca-blue uppercase tracking-widest">
                <span>07 // DIRECT COMMUNICATION</span>
              </div>
              <h2 className="mt-2 font-syne text-3xl sm:text-5xl font-extrabold text-illoca-ink tracking-tight">
                Let&apos;s Build Reliable Data Systems Together
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-illoca-body">
                Actively seeking Data &amp; AI Engineer, Data Engineering, and Applied AI roles. Fast turnaround and direct communication guaranteed.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <ResumeModal />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
        {/* Window-to-Window 4-Card Contact Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* 4-Card Contact Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((item, index) => {
            const Icon = icons[index];
            const Icon = icons[index % icons.length];
            const isCopyable = item.label === "Email" || item.label === "Phone";

            return (
              <Reveal delay={0.08 * index} key={item.label}>
              <Reveal delay={0.06 * index} key={item.label}>
                <HoverPanel delay={0.02 * index}>
                  <Card className="h-full transition-colors duration-300 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                  <Card className="h-full rounded-3xl border border-white/[0.08] bg-[#090d16]/80 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.2)] group">
                    <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary group-hover:scale-105 group-hover:border-primary/50 transition-all">
                            <Icon className="h-5 w-5" />
                          </div>
                          {isCopyable ? (
                            <button
                              onClick={() => handleCopy(item.value, item.label)}
                              className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all"
                              title={`Copy ${item.label}`}
                            >
                              {copiedLabel === item.label ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </button>
              <Reveal delay={0.05 * index} key={item.label}>
                <div className="paper-card h-full flex flex-col justify-between p-6 bg-white border border-[#DCD5C8] hover:border-illoca-blue group">
                  <div>
                    <div className="flex items-center justify-between gap-4 border-b border-dashed border-[#DCD5C8] pb-4 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#A19D94] bg-[#F8F5EE] text-illoca-blue group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      {isCopyable ? (
                        <button
                          onClick={() => handleCopy(item.value, item.label)}
                          className="flex h-8 items-center gap-1.5 rounded-lg border border-[#9C9C9C] bg-white px-2.5 font-mono text-xs text-illoca-body hover:bg-illoca-sand/30 hover:text-illoca-ink transition-all shadow-sm"
                          title={`Copy ${item.label}`}
                        >
                          {copiedLabel === item.label ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-600" />
                              <span className="text-emerald-700 font-bold">Copied</span>
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all"
                              aria-label={`Open ${item.label}`}
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />

                        <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
                          {item.label}
                        </p>

                        </button>
                      ) : (
                        <Link
                          className="mt-2 block font-display text-base sm:text-lg font-semibold text-foreground transition-colors hover:text-primary break-all"
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#9C9C9C] bg-white text-illoca-body hover:bg-illoca-sand/30 hover:text-illoca-ink transition-all shadow-sm"
                          aria-label={`Open ${item.label}`}
                        >
                          {item.value}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                      )}
                    </div>

                      <p className="mt-5 text-xs uppercase tracking-[0.24em] text-primary/80">
                        {item.label}
                      </p>
                      <Link
                        className="mt-3 block text-base leading-7 text-foreground transition-colors hover:text-primary"
                        href={item.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {item.value}
                      </Link>
                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                        <span>{item.label === "Phone" ? "Call / WhatsApp" : item.label === "Email" ? "Direct Inbox" : "Social Profile"}</span>
                        <span className="text-primary group-hover:underline">
                          {copiedLabel === item.label ? "Copied!" : "Connect →"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </HoverPanel>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-illoca-muted font-bold">
                      {item.label}
                    </p>

                    <Link
                      className="mt-2 block font-syne text-base sm:text-lg font-bold text-illoca-ink hover:text-illoca-blue transition-colors break-all"
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.value}
                    </Link>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DCD5C8] flex items-center justify-between font-mono text-[11px] text-illoca-muted">
                    <span>
                      {item.label === "Phone"
                        ? "Direct / WhatsApp"
                        : item.label === "Email"
                        ? "Direct Inbox"
                        : "Public Profile"}
                    </span>
                    <span className="text-illoca-blue font-bold group-hover:underline">
                      {copiedLabel === item.label ? "Copied!" : "Connect →"}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Status Callout Strip */}
        <Reveal delay={0.25}>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-xl">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Based in <span className="text-foreground font-semibold">Noida / Jamshedpur, India</span> • Available for On-Site, Hybrid, and Remote Roles across India &amp; Global Teams.
            </p>
        {/* Location Availability Ribbon */}
        <Reveal delay={0.2}>
          <div className="mt-10 rounded-xl border border-[#DCD5C8] bg-white p-5 text-center font-mono text-xs text-illoca-body shadow-sm">
            Based in <span className="font-syne font-bold text-illoca-ink">Noida / Jamshedpur, India</span> • Open for On-Site, Hybrid, and Remote Roles across India &amp; Global Teams.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

