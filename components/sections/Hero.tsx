"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import gsap from "gsap";
import Particles from "@/components/ui/Particles";
import MagneticButton from "@/components/ui/MagneticButton";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const quickX1 = gsap.quickTo(orb1.current, "x", { duration: 1.1, ease: "power3.out" });
    const quickY1 = gsap.quickTo(orb1.current, "y", { duration: 1.1, ease: "power3.out" });
    const quickX2 = gsap.quickTo(orb2.current, "x", { duration: 1.4, ease: "power3.out" });
    const quickY2 = gsap.quickTo(orb2.current, "y", { duration: 1.4, ease: "power3.out" });

    const handleMove = (e: MouseEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      quickX1(relX * 60);
      quickY1(relY * 60);
      quickX2(relX * -40);
      quickY2(relY * -40);
    };

    const el = sectionRef.current;
    el?.addEventListener("mousemove", handleMove);
    return () => el?.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-gradient pt-28"
    >
      {/* Grid + noise */}
      <div className="absolute inset-0 bg-grid mask-fade-bottom" aria-hidden="true" />
      <div className="noise absolute inset-0" aria-hidden="true" />

      {/* Glow orbs */}
      <div
        ref={orb1}
        className="absolute left-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-signal-600/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        ref={orb2}
        className="absolute right-[6%] top-[35%] h-[380px] w-[380px] rounded-full bg-ion/20 blur-[130px]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-[500px] bg-radial-fade" aria-hidden="true" />

      <Particles />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium tracking-wide text-mist sm:text-sm">
            Available for Full-Time &amp; Remote Jobs
          </span>
        </motion.div>

        <h1 className="max-w-4xl text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-frost sm:text-6xl md:text-7xl">
          {["Building Software"].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block font-serif italic text-gradient-serif"
          >
            That Feels Effortless.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-mist sm:text-lg"
        >
          Hi, I&apos;m <span className="text-frost">Ayan Saeed</span>, a passionate Full
          Stack Developer specializing in modern web applications using React,
          Next.js, TypeScript, Node.js, Express.js, and MongoDB. I build fast,
          scalable, responsive, and user-friendly web applications with clean
          architecture and modern UI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            as="button"
            onClick={() => scrollToSection("projects")}
            className="btn-primary"
          >
            View My Projects
            <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton
            as="button"
            onClick={() => scrollToSection("contact")}
            className="btn-ghost"
          >
            <Mail size={16} />
            Contact Me
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          {[
            { value: "6+", label: "Projects Shipped" },
            { value: "10+", label: "Technologies" },
            { value: "100%", label: "Commitment" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold text-frost sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-mist sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist hover:text-frost sm:flex"
      >
        <span className="text-xs uppercase tracking-widest2">Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
