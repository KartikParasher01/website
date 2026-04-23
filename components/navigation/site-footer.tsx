import { siteConfig } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="section-shell flex flex-col gap-3 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. Built for recruiter clarity and fast
          project review.
        </p>
        <p>Next.js, Tailwind CSS, Framer Motion, and shadcn/ui-inspired components.</p>
      </div>
    </footer>
  );
}
