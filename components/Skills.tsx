"use client";

import {
  Cloud,
  Server,
  Network,
  Database,
  Code,
  Headset,
  LayoutDashboard,
  Users,
  Check,
} from "lucide-react";
import { skills } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Cloud,
  Server,
  Network,
  Database,
  Code,
  Headset,
  LayoutDashboard,
  Users,
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      {/* subtle bg glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent-indigo/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[130px]" />
      </div>

      <div className="container-width relative">
        <SectionHeading
          eyebrow="Expertise"
          title="Core Skills & Expertise"
          subheading={skills.subheading}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code;
            return (
              <Reveal
                key={cat.title}
                delay={i * 0.08}
                className="group glass glass-hover rounded-2xl p-6 flex flex-col gap-4 h-full"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br ${cat.gradient} text-night-900 shadow-glow/40 transition-transform group-hover:scale-110`}
                  >
                    <Icon size={22} />
                  </span>
                  <h3 className="font-semibold leading-tight">{cat.title}</h3>
                </div>

                <ul className="mt-1 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:border-accent-cyan/30 transition-colors"
                    >
                      <Check size={12} className="text-accent-cyan" />
                      {skill}
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-auto h-1 w-12 rounded-full bg-gradient-to-r ${cat.gradient} opacity-60 transition-all duration-500 group-hover:w-full`}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
