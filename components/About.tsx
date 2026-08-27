"use client";

import { Server, Cloud, Headset, Languages, Quote } from "lucide-react";
import { about } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Server,
  Cloud,
  Headset,
  Languages,
};

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="About"
          title="Behind the Terminal"
          subheading={
            "A reliable IT professional who makes systems secure, stable and effortless to use."
          }
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Narrative */}
          <Reveal className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-300 leading-relaxed text-[1.05rem]">
                {p}
              </p>
            ))}

            {/* Philosophy quote */}
            <div className="relative mt-8 glass border-l-2 border-l-accent-cyan rounded-r-xl p-6">
              <Quote
                size={28}
                className="absolute -top-3 left-5 text-accent-cyan bg-night-900 px-1"
              />
              <p className="text-slate-200 italic leading-relaxed">
                {about.philosophy}
              </p>
            </div>
          </Reveal>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {about.highlights.map((h, i) => {
              const Icon = iconMap[h.icon] ?? Server;
              return (
                <Reveal
                  key={h.title}
                  delay={i * 0.1}
                  className="glass glass-hover rounded-2xl p-6 flex flex-col gap-3"
                >
                  <span className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 text-accent-cyan border border-accent-cyan/20">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-semibold text-lg">{h.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {h.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
