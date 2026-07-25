"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  as,
  ariaLabel,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: "a" | "button";
  ariaLabel?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        target={as === "a" ? "_blank" : undefined}
        rel={as === "a" ? "noopener noreferrer" : undefined}
        className={cn(className)}
        whileTap={{ scale: 0.96 }}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
