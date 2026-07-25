"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollDirection() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;

      setIsScrolled(currentY > 24);

      if (currentY < 80) {
        setIsHidden(false);
      } else if (delta > 4) {
        setIsHidden(true);
      } else if (delta < -4) {
        setIsHidden(false);
      }

      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isHidden, isScrolled };
}
