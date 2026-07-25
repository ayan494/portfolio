"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/site";

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: "tel:+92031242412744" },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: siteConfig.social.github },
  { icon: FaLinkedinIn, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: FaWhatsapp, label: "WhatsApp", href: siteConfig.social.whatsapp },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const mailBody = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const mailSubject = encodeURIComponent(form.subject || "Portfolio Contact");

    window.setTimeout(() => {
      window.location.href = `mailto:${siteConfig.email}?subject=${mailSubject}&body=${mailBody}`;
      setStatus("sent");
      window.setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", subject: "", message: "" });
      }, 2600);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[280px] sm:w-[600px] -translate-x-1/2 rounded-full bg-signal-600/15 blur-[100px] sm:blur-[130px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="08"
          label="Contact"
          title="Let's build something"
          highlight="worth shipping."
          align="center"
          className="mx-auto items-center text-center"
          description="Have a role, a project, or just want to talk shop? I usually reply within a day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <GlassCard glow={false}>
                <h3 className="text-lg font-semibold text-frost">Get in touch</h3>
                <div className="mt-5 flex flex-col gap-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal-500/15 text-signal-300">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-xs text-mist">{item.label}</p>
                          <p className="text-sm font-medium text-frost">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a key={item.label} href={item.href} className="group">
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </GlassCard>

              <GlassCard glow={false} className="flex-1">
                <h3 className="text-lg font-semibold text-frost">Find me online</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <MagneticButton
                        key={social.label}
                        as="a"
                        href={social.href}
                        ariaLabel={social.label}
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-frost transition-all duration-300 hover:border-signal-400/50 hover:bg-signal-500/10 hover:text-signal-300"
                      >
                        <Icon size={18} />
                      </MagneticButton>
                    );
                  })}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-mist">
                  Prefer a quick chat? Reach out on WhatsApp — usually the
                  fastest way to get a response.
                </p>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-3">
            <GlassCard glow={false} className="relative">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-medium text-mist">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-frost placeholder:text-mist/50 outline-none transition-colors focus:border-signal-400/60"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-medium text-mist">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-frost placeholder:text-mist/50 outline-none transition-colors focus:border-signal-400/60"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-medium text-mist">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Role, project, or opportunity"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-frost placeholder:text-mist/50 outline-none transition-colors focus:border-signal-400/60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-medium text-mist">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about the role or project..."
                    className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-frost placeholder:text-mist/50 outline-none transition-colors focus:border-signal-400/60"
                  />
                </div>

                <MagneticButton
                  as="button"
                  className="btn-primary mt-1 w-full sm:w-fit"
                >
                  <span className="flex items-center gap-2">
                    {status === "sending" ? "Sending..." : "Send Message"}
                    {status !== "sending" && <Send size={16} />}
                  </span>
                </MagneticButton>
              </form>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-void-950/90 backdrop-blur-md"
                  >
                    <CheckCircle2 size={40} className="text-emerald-400" />
                    <p className="text-sm text-frost">
                      Message ready — check your email client.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
