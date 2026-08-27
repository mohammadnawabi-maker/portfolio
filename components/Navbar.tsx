"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-night-900/80 backdrop-blur-md border-b border-white/[0.06] py-3 shadow-card"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-width flex items-center justify-between px-5 sm:px-8 lg:px-16">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-lg grid place-items-center bg-gradient-to-br from-accent-cyan to-accent-indigo text-night-900 shadow-glow group-hover:scale-105 transition-transform">
            <Terminal size={18} strokeWidth={2.5} />
          </span>
          <span className="font-bold text-lg tracking-tight">
            Nazir<span className="text-accent-cyan">.</span>Nawabi
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link font-medium after:content-[''] after:block after:h-px after:bg-accent-cyan after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-night-900 bg-gradient-to-r from-accent-cyan to-accent-indigo hover:shadow-glow transition-shadow"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg glass text-slate-200"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-white/[0.06]"
          >
            <ul className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-slate-200 hover:text-accent-cyan transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block mt-2 text-center rounded-full px-5 py-2.5 font-semibold text-night-900 bg-gradient-to-r from-accent-cyan to-accent-indigo"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
