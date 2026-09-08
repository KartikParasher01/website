import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { DM_Sans, Space_Grotesk, Syne, Caveat, Space_Mono } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/navigation/site-footer";
import { SiteNavbar } from "@/components/navigation/site-navbar";
import { IllocaHud } from "@/components/navigation/illoca-hud";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { siteConfig } from "@/data/portfolio";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne"
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hand"
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Data Science Portfolio`,
  title: `${siteConfig.name} | Data & AI Engineer Portfolio`,
  title: `${siteConfig.name} — ${siteConfig.role} | Architectural Portfolio`,
  description:
    "Recruiter-focused data science portfolio highlighting ETL, PySpark, Airflow, APIs, cloud workflows, and practical Generative AI experience."
    "Data & AI Engineer skilled in Python, SQL, PySpark, ETL, Airflow, FastAPI, Azure OpenAI, and Pinecone. Experienced in building production-oriented data pipelines, REST APIs, AI-powered applications, and search systems."
    "Data & AI Engineer portfolio inspired by Illoca. Specialized in PySpark distributed pipelines, FastAPI vector search, Apache Airflow orchestration, and agentic AI systems."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
      <body
        className={`${sans.variable} ${display.variable} ${syne.variable} ${caveat.variable} ${mono.variable} font-sans`}
      >
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <IllocaHud />
          <ScrollProgress />
          <SiteNavbar />
          <div className="flex-1 pt-20">{children}</div>
          <div className="flex-1 pt-24 sm:pt-28">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
