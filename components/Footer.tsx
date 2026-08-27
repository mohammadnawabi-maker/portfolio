import { Terminal, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="container-width px-5 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg grid place-items-center bg-gradient-to-br from-accent-cyan to-accent-indigo text-night-900">
            <Terminal size={16} />
          </span>
          <div>
            <p className="font-semibold">Nazir Nawabi</p>
            <p className="text-xs text-slate-500">{profile.title}</p>
          </div>
        </div>

        <p className="text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          Tailwind & Framer Motion.
        </p>

        <a
          href="#top"
          aria-label="Back to top"
          className="w-11 h-11 rounded-xl grid place-items-center glass glass-hover text-slate-300"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
}
