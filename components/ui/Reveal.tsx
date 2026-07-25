"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "blur" | "zoom";

const variantsFor = (direction: Direction, distance: number): Variants => {
  switch (direction) {
    case "up":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case "left":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case "blur":
      return {
        hidden: { opacity: 0, filter: "blur(12px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
      };
    case "zoom":
      return {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      };
  }
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 28,
  className,
  once = true,
  amount = 0.25,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variantsFor(direction, distance)}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
