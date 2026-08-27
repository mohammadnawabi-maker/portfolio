"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FolderGit2, X, Star } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="relative section-padding">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-accent-violet/10 blur-[140px]" />
      </div>

      <div className="container-width relative">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subheading="Concepts and builds that reflect my infrastructure, network and development experience."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1} className="h-full">
              <article className="group relative glass glass-hover rounded-2xl p-7 flex flex-col h-full overflow-hidden">
                {/* gradient top border */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.gradient}`}
                />

                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br ${project.gradient} text-night-900 shadow-glow/40 transition-transform group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <FolderGit2 size={24} />
                  </span>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/30">
                        <Star size={12} className="fill-current" />
                        Featured
                      </span>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} on GitHub`}
                      className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-accent-cyan/40 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r flex-shrink-0 ${project.gradient}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] rounded-md px-2 py-1 bg-white/[0.04] border border-white/[0.08] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.live}
                    onClick={(e) => {
                      if (project.live === "#") {
                        e.preventDefault();
                        setActive(i);
                      }
                    }}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-accent-cyan to-accent-indigo text-night-900 hover:shadow-glow transition-all hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  {project.live === "#" && (
                    <span className="text-xs text-slate-500">
                      Coming soon
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-night-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass rounded-3xl p-8 border-white/[0.12] bg-night-800/90 shadow-card"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <span
                className={`inline-block w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br ${projects[active].gradient} text-night-900`}
              >
                <FolderGit2 size={26} />
              </span>
              <h3 className="mt-4 text-2xl font-bold">
                {projects[active].title}
              </h3>
              <p className="mt-3 text-slate-300 leading-relaxed">
                {projects[active].description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {projects[active].tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs rounded-md px-2 py-1 bg-white/[0.05] border border-white/[0.1] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={projects[active].github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold glass glass-hover"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
