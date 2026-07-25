"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navLinks } from "@/data/nav";
import { scrollToSection } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { isHidden, isScrolled } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  const handleNav = (href: string) => {
    scrollToSection(href.slice(1));
    setMenuOpen(false);
  };

  return (
    <motion.header
      animate={{ y: isHidden && !menuOpen ? -110 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 px-4 py-3 transition-all duration-300 sm:px-6",
          isScrolled
            ? "glass-strong shadow-glass"
            : "bg-white/[0.02] backdrop-blur-md"
        )}
      >
        <button
          onClick={() => handleNav("#home")}
          className="font-mono text-base font-bold tracking-tight text-white transition-colors duration-300 hover:text-[#4F7EFF] sm:text-lg"
        >
          AYANSAEED
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive ? "text-frost" : "text-mist hover:text-frost"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.06] ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/Ayan-Saeed-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-frost transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06]"
          >
            <Download size={15} />
            Resume
          </a>
          <button
            onClick={() => handleNav("#contact")}
            className="btn-primary !px-5 !py-2 text-sm"
          >
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-frost lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-strong absolute inset-x-4 top-[72px] rounded-2xl border border-white/10 p-4 shadow-glass lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      "w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                      activeId === link.href.slice(1)
                        ? "bg-white/[0.06] text-frost"
                        : "text-mist hover:bg-white/[0.04] hover:text-frost"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <a
                href="/Ayan-Saeed-Resume.pdf"
                download
                className="btn-ghost w-full !py-2.5 text-sm"
              >
                <Download size={15} />
                Download Resume
              </a>
              <button
                onClick={() => handleNav("#contact")}
                className="btn-primary w-full !py-2.5 text-sm"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
