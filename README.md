<div align="center">

# Nazir Nawabi · Portfolio

### IT-Systemadministrator · Cloud Engineering · Systems & Networks · Full-Stack Development

[![Next.js](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

A production-ready, **ultra-dark minimalist** personal portfolio. Built with the Next.js App Router, animated with Framer Motion, and styled with a glassmorphism + neon-cyan design system. All content is sourced from the CV (`Nawabi CV NEU 1.pdf`).

</div>

---

## ✨ Features

| Section | Highlights |
| --- | --- |
| **Hero** | Live availability badge · animated gradient headline · competency pills · primary CTAs |
| **About** | Professional narrative · personal philosophy quote · key-highlight cards |
| **Skills** | Categorized grid — Cloud, Systems, Networks, Databases, Development, IT-Service, Office, Soft Skills |
| **Experience** | Scroll-animated vertical timeline with a progress-fill line and current-role badge |
| **Projects** | Interactive cards · tech-stack tags · features · GitHub + Live Demo · detail modal |
| **Certifications** | Credential grid (CCNA, CompTIA A+, Microsoft 365, B.Sc.) · animated language bars |
| **Contact** | Glass contact cards · functional form UI · LinkedIn / GitHub / email |

**Design system**

- Ultra-dark palette (`#090d16` / `#0F172A`) with electric-cyan & indigo/violet accents
- Glassmorphism surfaces, subtle gradients, and glowing micro-interactions
- Clean, highly-readable sans-serif (Inter) + monospace (JetBrains Mono) typography
- Fully responsive — mobile, tablet, and desktop
- Scroll-triggered Framer Motion entry effects throughout

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build   # compiles, lints, type-checks, statically prerenders
npm start       # serve the optimized build
```

---

## ☁️ Deploy to Vercel

This project is fully configured for seamless Vercel deployment — no extra options required.

1. Push this repository to GitHub.
2. In Vercel, click **New Project → Import** the repository.
   - Framework preset **Next.js** is auto-detected.
3. Click **Deploy**. ✨

The build output is fully static and edge-cacheable.

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Assembles all sections
│   └── globals.css         # Tailwind + design tokens + utilities
├── components/
│   ├── Navbar.tsx          # Scroll-aware glass navbar + mobile menu
│   ├── Hero.tsx            # Hero with animated glows & pill badges
│   ├── About.tsx           # About narrative & highlight cards
│   ├── Skills.tsx          # Categorized skill grid
│   ├── Experience.tsx      # Animated vertical timeline
│   ├── Projects.tsx        # Interactive project cards + modal
│   ├── Certifications.tsx  # Credentials grid + language bars
│   ├── Contact.tsx         # Contact info + form UI
│   ├── Footer.tsx
│   ├── SectionHeading.tsx  # Shared section header
│   └── motion/
│       └── Reveal.tsx      # Scroll-triggered reveal primitive
├── lib/
│   └── data.ts             # ◀ ALL portfolio content lives here
└── ...
```

---

## ✏️ Customizing Content

All text, roles, skills, projects, and certifications are centralized in **`lib/data.ts`** — edit it to keep the site in sync with your CV.

| What you might change | Where |
| --- | --- |
| Name, title, email, links | `profile` object |
| Hero pills & tagline | `heroPills`, `profile.tagline` |
| Career roles & achievements | `experience.items` |
| Featured projects | `projects` array |
| Credentials & languages | `certifications.items`, `languages` |

> **Note:** the contact form currently simulates a send (fully working UI). To deliver real messages, wire `setStatus` in `components/Contact.tsx` to a service such as Formspree, Resend, or a custom API route.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router) · React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter · JetBrains Mono (self-hosted via `next/font`)

---

## 📄 License

This project is available for personal and professional use. All personal CV data belongs to Nazir Nawabi.
