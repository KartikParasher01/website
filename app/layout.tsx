import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Archivo, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/data/portfolio";

const disp = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-disp"
});

const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono"
});

export const viewport: Viewport = {
  themeColor: "#070B09"
};

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role} · ETL, PySpark & LLM Systems`,
  description: siteConfig.summary,
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role} · ETL, PySpark & LLM Systems`,
    description: "Production data pipelines · PySpark · FastAPI vector search · Autonomous AI research agents.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${disp.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
