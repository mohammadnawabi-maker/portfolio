"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Clock, MapPin } from "lucide-react";
import { certifications, languages } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-accent-blue/10 blur-[140px]" />
      </div>

      <div className="container-width relative">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Education"
          subheading="Continuous learning across systems administration, networking and computer science."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.items.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 0.1}
              className="glass glass-hover rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`w-11 h-11 rounded-xl grid place-items-center border ${
                    cert.type === "Education"
                      ? "bg-accent-violet/15 text-accent-violet border-accent-violet/30"
                      : "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30"
                  }`}
                >
                  {cert.type === "Education" ? (
                    <GraduationCap size={22} />
                  ) : (
                    <Award size={22} />
                  )}
                </span>
                <span
                  className={`font-mono text-sm font-bold px-3 py-1 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 text-accent-cyan ${
                    cert.status ? "animate-pulse-slow" : ""
                  }`}
                >
                  {cert.badge}
                </span>
              </div>

              <h3 className="mt-4 font-bold leading-snug">{cert.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{cert.org}</p>

              {cert.location && (
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
                  <MapPin size={12} /> {cert.location}
                </p>
              )}

              <ul className="mt-4 space-y-1.5 flex-1">
                {cert.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-white/[0.06] inline-flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={13} className="text-accent-indigo" />
                {cert.period}
                {cert.status && (
                  <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-semibold bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25">
                    {cert.status}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Languages */}
        <Reveal className="mt-16">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award size={20} className="text-accent-cyan" />
              Languages
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-200">
                      {lang.name}
                    </span>
                    <span className="font-mono text-xs text-accent-cyan">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-indigo"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
