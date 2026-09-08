"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { navItems, siteConfig } from "@/data/portfolio";
import { ResumeModal } from "@/components/shared/resume-modal";
import { Button } from "@/components/ui/button";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-5">
        <div className="rounded-[28px] border border-white/10 bg-background/80 px-4 py-3 shadow-glow backdrop-blur-xl md:rounded-full">
    <header className="fixed inset-x-0 top-3 sm:top-5 z-50 pointer-events-none">
      <div className="section-shell flex justify-center">
        {/* Illoca Floating Architectural Capsule */}
        <div className="pointer-events-auto w-full max-w-4xl rounded-2xl sm:rounded-full border border-[#9C9C9C]/40 bg-white/95 px-4 sm:px-6 py-2.5 shadow-[4px_4px_0px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-display text-sm font-semibold text-primary">
      <div className="section-shell pt-4 sm:pt-5">
        <div className="rounded-2xl sm:rounded-full border border-white/10 bg-[#070b14]/85 px-4 sm:px-6 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all">
          <div className="flex items-center justify-between gap-3 md:gap-6">
            {/* Brand / Logo */}
            {/* Architectural Monogram Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-display text-sm font-bold text-primary transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/60">
                {initials}
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#9C9C9C] bg-illoca-sand/40 font-mono text-xs font-bold text-illoca-ink transition-transform duration-200 group-hover:scale-105">
                <span className="relative z-10">KP</span>
                <span className="absolute inset-0 border border-dashed border-[#9C9C9C]/40 rounded-lg" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">
              <div className="hidden sm:block">
                <p className="font-syne text-sm font-bold tracking-tight text-illoca-ink">
                  {siteConfig.name}
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <p className="font-display text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {siteConfig.name}
                  </p>
                  <span className="hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
                <p className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
                <p className="font-mono text-[10px] uppercase tracking-wider text-illoca-muted">
                  {siteConfig.role}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
            {/* Desktop Navigation Links */}
            <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  className="text-xs lg:text-sm font-medium text-muted-foreground transition-colors hover:text-primary tracking-wide"
                  className="font-mono text-xs font-medium text-illoca-body transition-colors hover:text-illoca-blue hover-underline-dotted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors hover:border-primary/40 md:hidden"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            {/* Quick Actions (Resume + Contact) */}
            {/* Right Action: Illoca Split Button */}
            <div className="hidden sm:flex items-center gap-3">
              <ResumeModal />
              <Button asChild size="sm" className="h-9 px-4 gap-1.5 text-xs font-semibold shadow-[0_0_20px_-3px_rgba(56,189,248,0.4)]">
                <Link href="/#contact">
                  Let's Connect
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <Link
                href="/#contact"
                className="group inline-flex h-9 items-center overflow-hidden rounded-lg border border-[#A19D94] bg-illoca-blue text-white shadow-[2px_2px_0px_rgba(0,0,0,0.1)] transition-all hover:bg-illoca-blue-dark active:translate-x-0.5 active:translate-y-0.5"
              >
                <div className="flex h-9 w-9 items-center justify-center bg-illoca-coral text-white transition-colors group-hover:bg-illoca-coral-dark">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <span className="px-3.5 font-mono text-xs font-semibold tracking-tight">
                  Connect
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:hidden">
              <ResumeModal />
              <button
                aria-expanded={open}
                aria-label="Toggle navigation"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors hover:border-primary/40"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#9C9C9C] bg-white text-illoca-ink"
                onClick={() => setOpen((value) => !value)}
                type="button"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Collapsible Menu */}
          {/* Mobile Dropdown */}
          <AnimatePresence>
            {open ? (
              <motion.nav
                animate={{ opacity: 1, height: "auto" }}
                className="overflow-hidden md:hidden"
                exit={{ opacity: 0, height: 0 }}
                initial={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                transition={{ duration: 0.2 }}
              >
                <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                <div className="mt-3 grid gap-1 border-t border-illoca-line pt-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-2xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                      className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary"
                      className="rounded-lg px-3 py-2 font-mono text-xs font-medium text-illoca-body hover:bg-illoca-sand/40 hover:text-illoca-blue"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Button asChild size="sm" className="w-full">
                      <Link href="/#contact" onClick={() => setOpen(false)}>
                        Let's Connect
                      </Link>
                    </Button>
                    <Link
                      href="/#contact"
                      onClick={() => setOpen(false)}
                      className="flex h-9 w-full items-center justify-center rounded-lg bg-illoca-blue font-mono text-xs font-semibold text-white"
                    >
                      Start A Conversation →
                    </Link>
                  </div>
                </div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
