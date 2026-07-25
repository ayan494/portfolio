import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  index,
  label,
  title,
  highlight,
  description,
  align = "left",
  className,
}: {
  index: string;
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Reveal direction="up" distance={16}>
        <div className="flex items-center gap-3">
          <span className="section-eyebrow">
            // {index} — {label}
          </span>
        </div>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2 className="text-3xl font-semibold tracking-tight text-frost sm:text-4xl md:text-5xl">
          {title}{" "}
          {highlight && (
            <span className="font-serif italic text-gradient-serif">
              {highlight}
            </span>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-base text-mist md:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
