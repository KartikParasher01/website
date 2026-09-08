"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, FileText, Phone, Mail, MapPin, ExternalLink, Download } from "lucide-react";
import { siteConfig, skillGroups, experiences, education, certificationsOrTraining, leadershipHighlights } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Copy, Check, FileText, Phone, Mail, MapPin, Download } from "lucide-react";
import {
  siteConfig,
  skillCategories,
  experiences,
  education,
  certificationsOrTraining,
  leadershipHighlights
} from "@/data/portfolio";

export function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  }

  return (
    <>
      <Button
      <button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="hidden sm:inline-flex items-center gap-2 border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        className="group inline-flex h-9 items-center overflow-hidden rounded-lg border border-[#9C9C9C] bg-white text-illoca-ink shadow-sm hover:bg-illoca-sand/30 transition-all active:translate-x-0.5 active:translate-y-0.5"
      >
        <FileText className="h-3.5 w-3.5" />
        Resume
      </Button>
        <div className="flex h-9 w-9 items-center justify-center border-r border-[#DCD5C8] bg-illoca-sand/50 text-illoca-blue">
          <FileText className="h-4 w-4" />
        </div>
        <span className="px-3 font-mono text-xs font-bold tracking-tight">
          Resume Dossier
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            {/* Modal Dossier */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-white/10 bg-[#0a0f19] text-foreground shadow-2xl overflow-hidden"
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border-2 border-[#838383] bg-[#FDFBF7] text-illoca-ink shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/[0.02]">
              <div className="flex items-center justify-between border-b border-[#D1CABE] px-6 py-4 bg-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#A19D94] bg-[#F8F5EE] text-illoca-blue font-mono font-bold">
                    KP
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {siteConfig.name} — Verified Resume
                    <h3 className="font-syne text-lg font-bold text-illoca-ink">
                      {siteConfig.name} — Verified Engineering Dossier
                    </h3>
                    <p className="text-xs text-primary font-mono">{siteConfig.role}</p>
                    <p className="font-mono text-xs text-illoca-blue font-semibold">{siteConfig.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                  <button
                    onClick={() => window.print()}
                    className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#9C9C9C] bg-white px-3 py-1.5 font-mono text-xs font-bold text-illoca-ink hover:bg-illoca-sand/30 transition-colors shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <Download className="h-3.5 w-3.5 text-illoca-blue" />
                    Print / PDF
                  </Button>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-1.5 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
                    className="rounded-lg p-1.5 text-illoca-muted hover:bg-illoca-sand/40 hover:text-illoca-ink transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 font-sans">
                {/* Contact Quick Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl border border-[#DCD5C8] bg-white">
                  <button
                    onClick={() => copyToClipboard(siteConfig.email, "email")}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors text-left"
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-illoca-sand/20 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-xs truncate">{siteConfig.email}</span>
                      <Mail className="h-4 w-4 text-illoca-blue" />
                      <span className="font-mono text-xs truncate">{siteConfig.email}</span>
                    </div>
                    {copiedField === "email" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <Copy className="h-3.5 w-3.5 text-illoca-muted shrink-0" />
                    )}
                  </button>

                  <button
                    onClick={() => copyToClipboard(siteConfig.phone, "phone")}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors text-left"
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-illoca-sand/20 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-xs font-mono">{siteConfig.phone}</span>
                      <Phone className="h-4 w-4 text-illoca-coral" />
                      <span className="font-mono text-xs font-bold">{siteConfig.phone}</span>
                    </div>
                    {copiedField === "phone" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <Copy className="h-3.5 w-3.5 text-illoca-muted shrink-0" />
                    )}
                  </button>

                  <div className="flex items-center gap-2.5 p-2.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{siteConfig.location}</span>
                    <MapPin className="h-4 w-4 text-purple-600" />
                    <span className="font-mono text-xs text-illoca-muted">{siteConfig.location}</span>
                  </div>
                </div>

                {/* Professional Summary */}
                <section>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1.5 mb-3">
                    Summary
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-illoca-blue border-b border-[#D1CABE] pb-1.5 mb-3">
                    Professional Summary
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                  <p className="font-sans text-sm leading-relaxed text-illoca-body">
                    {siteConfig.summary}
                  </p>
                </section>

                {/* Technical Skills */}
                <section>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1.5 mb-4">
                    Technical Skills
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-illoca-blue border-b border-[#D1CABE] pb-1.5 mb-4">
                    Technical Skills Taxonomy
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {skillGroups.map((group) => (
                      <div key={group.title} className="p-3 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <p className="text-xs font-medium text-foreground mb-2">{group.title}</p>
                    {skillCategories.map((group) => (
                      <div key={group.category} className="p-3.5 rounded-xl border border-[#DCD5C8] bg-white">
                        <p className="font-syne text-xs font-bold text-illoca-ink mb-2">{group.category}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                          {group.skills.map((item) => (
                            <span
                              key={item}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted-foreground"
                              className="font-mono text-[11px] px-2 py-0.5 rounded border border-[#DCD5C8] bg-[#F8F5EE] text-illoca-body"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Professional Experience */}
                <section>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1.5 mb-4">
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-illoca-blue border-b border-[#D1CABE] pb-1.5 mb-4">
                    Professional Experience
                  </h4>
                  <div className="space-y-6">
                    {experiences.map((exp) => (
                      <div key={`${exp.company}-${exp.role}`} className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                      <div key={`${exp.company}-${exp.role}`} className="p-5 rounded-xl border border-[#DCD5C8] bg-white">
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                          <h5 className="font-display font-semibold text-foreground text-base">
                            {exp.company} <span className="text-muted-foreground font-normal">| {exp.location}</span>
                          <h5 className="font-syne font-bold text-illoca-ink text-base">
                            {exp.company} <span className="font-mono text-xs text-illoca-muted font-normal">| {exp.location}</span>
                          </h5>
                          <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                          <span className="font-mono text-xs text-illoca-blue bg-illoca-blue/10 px-2.5 py-0.5 rounded border border-illoca-blue/20 font-bold">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-sky-400 mb-3">{exp.role}</p>
                        <p className="font-mono text-xs font-bold text-illoca-coral mb-3">{exp.role}</p>
                        <ul className="space-y-2">
                          {exp.outcomes.map((bullet, i) => (
                            <li key={i} className="text-xs leading-relaxed text-muted-foreground flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <li key={i} className="font-sans text-xs leading-relaxed text-illoca-body flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-illoca-blue mt-1.5 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1.5 mb-4">
                    Education
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-illoca-blue border-b border-[#D1CABE] pb-1.5 mb-4">
                    Academic Background
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {education.map((edu) => (
                      <div key={edu.institution} className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                        <p className="font-semibold text-sm text-foreground">{edu.institution}</p>
                        <p className="text-xs text-primary mt-0.5">{edu.credential}</p>
                        <p className="text-xs text-muted-foreground mt-1">{edu.detail} • {edu.period}</p>
                        <p className="text-xs text-muted-foreground">{edu.location}</p>
                      <div key={edu.institution} className="p-4 rounded-xl border border-[#DCD5C8] bg-white">
                        <p className="font-syne font-bold text-sm text-illoca-ink">{edu.institution}</p>
                        <p className="font-sans text-xs text-illoca-blue mt-0.5 font-semibold">{edu.credential}</p>
                        <p className="font-mono text-xs text-illoca-coral font-bold mt-1">{edu.detail} • {edu.period}</p>
                        <p className="font-mono text-xs text-illoca-muted">{edu.location}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certifications & Training */}
                {/* Certifications & Simulations */}
                <section>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1.5 mb-4">
                    Certifications & Training
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-illoca-blue border-b border-[#D1CABE] pb-1.5 mb-4">
                    Certifications &amp; Industry Simulations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {certificationsOrTraining.map((cert) => (
                      <div key={cert.title} className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                        <p className="text-xs font-medium text-foreground">{cert.title}</p>
                        <p className="text-[11px] text-muted-foreground mt-1">{cert.issuer}</p>
                      <div key={cert.title} className="p-3 rounded-lg border border-[#DCD5C8] bg-white">
                        <p className="font-syne text-xs font-bold text-illoca-ink">{cert.title}</p>
                        <p className="font-mono text-[11px] text-illoca-muted mt-0.5">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Additional Leadership */}
                {/* Leadership */}
                <section>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1.5 mb-3">
                    Leadership & Extra-Curricular
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-illoca-blue border-b border-[#D1CABE] pb-1.5 mb-3">
                    Leadership &amp; Extracurricular
                  </h4>
                  {leadershipHighlights.map((lead) => (
                    <div key={lead.title} className="p-3 rounded-2xl border border-white/5 bg-white/[0.02]">
                      <p className="text-xs font-semibold text-foreground">
                        {lead.title} — <span className="text-primary font-normal">{lead.organization}</span>
                    <div key={lead.title} className="p-3.5 rounded-xl border border-[#DCD5C8] bg-white">
                      <p className="font-syne text-xs font-bold text-illoca-ink">
                        {lead.title} — <span className="text-illoca-blue">{lead.organization}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{lead.detail}</p>
                      <p className="font-sans text-xs text-illoca-body mt-1">{lead.detail}</p>
                    </div>
                  ))}
                </section>
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 p-4 px-6 bg-white/[0.02] flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Updated with latest production accomplishments
              <div className="border-t border-[#D1CABE] p-4 px-6 bg-white flex items-center justify-between font-mono text-xs">
                <span className="text-illoca-muted">
                  Kartik Parasher // Data &amp; AI Engineer Dossier
                </span>
                <Button size="sm" onClick={() => setIsOpen(false)}>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg bg-illoca-ink text-white px-4 py-1.5 font-bold hover:bg-illoca-body transition-colors"
                >
                  Close
                </Button>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

