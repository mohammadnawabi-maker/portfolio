"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Code2,
  Cloud,
  ShieldCheck,
} from "lucide-react";
import { profile, heroPills } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const quickIcons = [
  { icon: Cloud, label: "Cloud" },
  { icon: ShieldCheck, label: "Security" },
  { icon: Code2, label: "Dev" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden section-padding pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent-indigo/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-accent-cyan/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-accent-violet/15 blur-[140px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-width relative text-center"
      >
        {/* Availability pill */}
        <motion.div variants={item} className="flex justify-center mb-7">
          <span className="badge gap-2.5 !border-accent-cyan/30 !bg-accent-cyan/10 text-accent-cyan">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan" />
            </span>
            {profile.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          <span className="block text-slate-300">Hi, I&apos;m</span>
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(129,140,248,0.35)]">
            {profile.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-2xl font-medium text-slate-300"
        >
          {profile.title}
          <span className="block text-slate-400 font-normal mt-2 text-base md:text-lg">
            {profile.tagline}
          </span>
        </motion.p>

        {/* Badges / pills */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {heroPills.map((pill) => (
            <span
              key={pill}
              className="badge text-sm !px-4 !py-1.5 hover:!border-accent-cyan/50 hover:!text-accent-cyan hover:-translate-y-0.5 transition-transform"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Location + socials */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={16} className="text-accent-cyan" />
            {profile.location}
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-night-900 bg-gradient-to-r from-accent-cyan to-accent-indigo hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold glass glass-hover"
          >
            <Mail size={18} className="text-accent-cyan" />
            Get in Touch
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold glass glass-hover"
          >
            <Download size={18} className="text-accent-violet" />
            Download CV
          </a>
        </motion.div>

        {/* Quick icon cluster */}
        <motion.div
          variants={item}
          className="mt-14 flex items-center justify-center gap-8 text-slate-500"
        >
          {quickIcons.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center gap-2 group"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <span className="p-3 rounded-2xl glass group-hover:text-accent-cyan group-hover:border-accent-cyan/40 transition-colors">
                <Icon size={22} />
              </span>
              <span className="text-xs font-mono">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <Reveal
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        delay={1}
        y={-10}
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-9 rounded-full border-2 border-slate-600 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-accent-cyan" />
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
