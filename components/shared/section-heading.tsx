import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-sm uppercase tracking-[0.24em] text-primary/80">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
        {description}
      </p>
    </div>
  );
}
