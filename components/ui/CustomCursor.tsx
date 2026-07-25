"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest("a, button, [role='button'], input, textarea")
      );
    };

    const hide = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
    };
  }, [isVisible, x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden mix-blend-screen lg:block"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          scale: isPointer ? 2.2 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="h-3 w-3 rounded-full bg-signal-400 shadow-[0_0_20px_6px_rgba(62,123,250,0.55)]"
      />
    </motion.div>
  );
}
