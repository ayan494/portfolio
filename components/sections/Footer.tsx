"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { scrollToSection } from "@/lib/utils";

const socials = [
  { icon: FaGithub, label: "GitHub", href: siteConfig.social.github },
  { icon: FaLinkedinIn, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: FaWhatsapp, label: "WhatsApp", href: siteConfig.social.whatsapp },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-void-900/60">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-serif text-4xl italic text-gradient-blue sm:text-6xl">
              Ayan Saeed
            </p>
            <p className="mt-3 font-mono text-sm tracking-widest2 text-mist">
              FULL STACK DEVELOPER
            </p>
          </div>

          <button
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-frost transition-all duration-300 hover:border-signal-400/50 hover:bg-signal-500/10"
          >
            <ArrowUp size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <p className="section-eyebrow">Quick Links</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href.slice(1))}
                    className="text-sm text-mist transition-colors hover:text-frost"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-eyebrow">Contact</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-mist">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-frost">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href="tel:+92031242412744" className="hover:text-frost">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>

          <div>
            <p className="section-eyebrow">Elsewhere</p>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-mist transition-all duration-300 hover:border-signal-400/50 hover:text-signal-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-mist sm:flex-row">
          <p>© {year} Ayan Saeed. All rights reserved.</p>
          <p className="font-mono">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
