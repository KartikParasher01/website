import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/navigation/site-footer";
import { SiteNavbar } from "@/components/navigation/site-navbar";
import { siteConfig } from "@/data/portfolio";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Data Analyst Portfolio`,
  description:
    "Recruiter-focused data analyst portfolio built with Next.js, Tailwind CSS, Framer Motion, and shadcn/ui-inspired components."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <SiteNavbar />
          <div className="flex-1 pt-20">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
