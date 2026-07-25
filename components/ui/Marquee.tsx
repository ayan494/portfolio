import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  reverse = false,
  className,
  durationClass = "animate-marquee",
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  durationClass?: string;
}) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex shrink-0 gap-6 pr-6",
          reverse ? "animate-marquee-reverse" : durationClass
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 gap-6 pr-6",
          reverse ? "animate-marquee-reverse" : durationClass
        )}
      >
        {children}
      </div>
    </div>
  );
}
