"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Send,
  Loader2,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { profile, socials } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined,
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: socials[0].url },
  { icon: Github, label: "GitHub", href: socials[1].url },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate a send. Replace with a real endpoint (e.g. Formspree / API route)
    // to make the form fully functional in production.
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[420px] rounded-full bg-accent-cyan/10 blur-[150px]" />
      </div>

      <div className="container-width relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          subheading="Have a role, project or question? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: contact info */}
          <Reveal className="space-y-5">
            {contactCards.map((card) => {
              const Wrapper = card.href ? "a" : "div";
              return (
                <Wrapper
                  key={card.label}
                  {...(card.href ? { href: card.href } : {})}
                  className="flex items-center gap-4 glass glass-hover rounded-2xl p-5"
                >
                  <span className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 text-accent-cyan border border-accent-cyan/20 flex-shrink-0">
                    <card.icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {card.label}
                    </p>
                    <p className="font-medium text-slate-200">{card.value}</p>
                  </div>
                </Wrapper>
              );
            })}

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-xl grid place-items-center glass glass-hover text-slate-300"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>

            <div className="mt-4 p-5 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/[0.04] flex gap-3">
              <MessageSquare size={20} className="text-accent-cyan flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300 leading-relaxed">
                Based in Traunstein near Munich, open to remote and on-site
                roles across Germany and the EU.
              </p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 border-white/[0.1]"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm text-slate-300 font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="rounded-xl px-4 py-3 bg-white/[0.04] border border-white/[0.1] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/40 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-slate-300 font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@email.com"
                    className="rounded-xl px-4 py-3 bg-white/[0.04] border border-white/[0.1] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/40 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label
                  htmlFor="message"
                  className="text-sm text-slate-300 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about the role or project..."
                  className="rounded-xl px-4 py-3 bg-white/[0.04] border border-white/[0.1] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/40 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-night-900 bg-gradient-to-r from-accent-cyan to-accent-indigo hover:shadow-glow transition-all disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
