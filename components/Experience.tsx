"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });

  return (
    <section id="experience" className="relative section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Career"
          title="Experience Timeline"
          subheading="A journey from banking and education leadership into modern IT systems administration."
        />

        <div ref={timelineRef} className="relative">
          {/* Vertical track */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/[0.06]" />
          <motion.div
            style={{ scaleX }}
            className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-accent-cyan via-accent-indigo to-accent-violet"
          />

          <div className="space-y-12">
            {experience.items.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row ${
                    left ? "md:justify-start" : "md:justify-end"
                  } pl-14 md:pl-0`}
                >
                  {/* Node */}
                  <div className="absolute left-5 md:left-1/2 top-1 -translate-x-1/2 z-10">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className={`block w-5 h-5 rounded-full bg-night-900 border-2 border-accent-cyan shadow-glow ${
                        exp.current ? "ring-4 ring-accent-cyan/20" : ""
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <Reveal
                    y={30}
                    className={`w-full md:w-[calc(50%-3rem)] ${
                      left ? "" : ""
                    }`}
                  >
                    <article
                      className="group glass glass-hover rounded-2xl p-6"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[11px] font-semibold bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-slate-400 text-sm">
                        <Briefcase size={15} className="text-accent-indigo" />
                        {exp.company}
                        <span className="inline-flex items-center gap-1 text-slate-500">
                          · <MapPin size={14} />
                          {exp.location}
                        </span>
                      </p>

                      {exp.description && (
                        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                          {exp.description}
                        </p>
                      )}

                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((a, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-slate-300"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 text-accent-cyan flex-shrink-0"
                            />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.tags && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full px-2.5 py-0.5 text-[11px] bg-white/[0.04] border border-white/[0.08] text-slate-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
