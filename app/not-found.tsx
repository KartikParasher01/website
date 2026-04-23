import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center py-24">
      <div className="panel max-w-2xl p-10 text-center">
        <p className="eyebrow">Page Not Found</p>
        <h1 className="mt-6 font-display text-4xl font-semibold text-foreground">
          This route doesn&apos;t exist in the portfolio.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Head back to the homepage to explore projects, skills, and experience.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
