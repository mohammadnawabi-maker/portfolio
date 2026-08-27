// Centralized content for the portfolio. Extracted from "Nawabi CV NEU 1.pdf"

export const profile = {
  name: "Nazir Nawabi",
  firstName: "Nazir",
  title: "IT-Systemadministrator",
  tagline:
    "Cloud Engineering · Systems & Networks · Automation · Full-Stack Development",
  shortTitle: "IT Expert & Systems Administrator",
  location: "Traunstein (München), Germany",
  email: "sardarnazir.nawabi@gmail.com",
  phone: "+49 176 57731286",
  linkedin: "https://linkedin.com/in/nazir-nawabi-1919s",
  github: "https://github.com/nazir-nawabi",
  availability: "Open to new opportunities",
};

export const heroPills = [
  "Cloud Engineering",
  "Systems & Networks",
  "Automation",
  "Full-Stack Dev",
  "Hardware",
  "IT-Support",
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "Motivated IT expert with a strong technical affinity and a solid command of PC hardware, software, operating systems, ticket systems, and network technology. With years of hands-on experience across IT-Support and system administration, I onboard quickly into any ticket or system landscape.",
    "I combine reliable service-oriented communication with deep technical knowledge of Windows Server, Active Directory, virtualization (Citrix, VMware) and cloud-focused infrastructure. From hospital IT departments to banking and educational administration, I bring stability, security and clear processes wherever I work.",
  ],
  highlights: [
    {
      icon: "Server",
      title: "Enterprise Infrastructure",
      desc: "Administering Windows Server 2016/2019, Active Directory, DHCP/DNS, Citrix & VMware environments.",
    },
    {
      icon: "Cloud",
      title: "Cloud-Ready",
      desc: "Hands-on with Microsoft 365, virtualized systems and modern IT-Service & digitalization workflows.",
    },
    {
      icon: "Headset",
      title: "IT-Service & Support",
      desc: "Deep experience with ticket systems and user-facing support in hospital, banking & education sectors.",
    },
    {
      icon: "Languages",
      title: "Multilingual",
      desc: "German (B1/B2), English (fluent) and Pashto/Dari (native) — comfortable in international teams.",
    },
  ],
  philosophy:
    "“Technology should be reliable, secure, and invisible — my job is to make sure it just works.”",
};

export const skills = {
  heading: "Core Skills & Expertise",
  subheading:
    "A broad stack spanning cloud engineering, systems, networks, automation and development.",
  categories: [
    {
      title: "Cloud & Virtualization",
      icon: "Cloud",
      gradient: "from-accent-cyan to-accent-blue",
      skills: [
        "Microsoft 365",
        "Azure Fundamentals",
        "VMware",
        "Citrix",
        "Virtualization",
      ],
    },
    {
      title: "Systems & Servers",
      icon: "Server",
      gradient: "from-accent-indigo to-accent-violet",
      skills: [
        "Windows Server 2016",
        "Windows Server 2019",
        "Windows Server 2022",
        "Active Directory",
        "Exchange Server",
        "Terminal Server",
      ],
    },
    {
      title: "Networks",
      icon: "Network",
      gradient: "from-accent-cyan to-accent-indigo",
      skills: ["CCNA", "DHCP", "DNS", "TCP/IP", "Routing & Switching"],
    },
    {
      title: "Databases",
      icon: "Database",
      gradient: "from-accent-violet to-accent-purple",
      skills: ["SQL", "Oracle 10g"],
    },
    {
      title: "Development",
      icon: "Code",
      gradient: "from-accent-blue to-accent-cyan",
      skills: ["HTML", "CSS", "Java", "Front-End Web Dev"],
    },
    {
      title: "IT-Service & Tools",
      icon: "Headset",
      gradient: "from-accent-indigo to-accent-cyan",
      skills: ["Ticket Systems", "IT-Support", "OTC-Manager", "MV-Manager", "Hardware & Software Installation"],
    },
    {
      title: "Office & Productivity",
      icon: "LayoutDashboard",
      gradient: "from-accent-blue to-accent-violet",
      skills: ["Microsoft Office", "Word", "Excel", "PowerPoint"],
    },
    {
      title: "Soft Skills",
      icon: "Users",
      gradient: "from-accent-purple to-accent-indigo",
      skills: ["Teamwork", "Communication", "Service Orientation", "Resilience"],
    },
  ],
};

export const experience = {
  heading: "Career & Experience",
  items: [
    {
      period: "Feb 2024 — Jan 2026",
      role: "Sachbearbeiter Digitalisierung / IT-Service",
      company: "Krankenhaus Traunstein",
      location: "Traunstein, Germany",
      current: true,
      description:
        "IT-Service and digitalization specialist supporting hospital operations.",
      achievements: [
        "Administer DHCP, DNS & network services across the hospital environment",
        "Manage OTC-Manager & MV-Manager systems and radio infrastructure",
        "Support Citrix environments, ticket systems and IDie-UT user provisioning",
        "Drive digitalization projects improving service reliability and uptime",
      ],
      tags: ["DHCP", "DNS", "Citrix", "Ticketsystem", "IT-Service"],
    },
    {
      period: "2018 — 2024",
      role: "Qualified Patient Transporter",
      company: "Klinikum Traunstein",
      location: "Traunstein, Germany",
      description:
        "Reliable logistics and patient transport within a clinical environment, reinforcing strong service and communication skills.",
      achievements: [
        "Coordinated timely patient transport across departments",
        "Maintained high standards of care, safety and communication",
      ],
      tags: ["Service", "Logistics", "Communication"],
    },
    {
      period: "2016 — 2018",
      role: "Employee / Assistant",
      company: "Bonum Werkzeuge",
      location: "Traunstein, Germany",
      description:
        "Hands-on operational support within a tools and manufacturing business, strengthening teamwork and process discipline.",
      achievements: [
        "Supported daily operations and order processing",
        "Collaborated across teams to meet production targets",
      ],
      tags: ["Operations", "Teamwork"],
    },
    {
      period: "Aug 2016",
      role: "Office Assistant",
      company: "Brückner Group",
      location: "Siegsdorf, Germany",
      achievements: [
        "Assisted office administration and data handling in an industrial group",
      ],
      description:
        "Short-term office role building on administrative experience.",
      tags: ["Office", "Administration"],
    },
    {
      period: "2013 — 2015",
      role: "Administrative Director",
      company: "Ministry of Education",
      location: "Kabul, Afghanistan",
      description:
        "Led administration of residential facilities for unsafe provinces under the Ministry of Education.",
      achievements: [
        "Managed budgets, staffing and facility operations",
        "Oversaw security & logistics for high-risk residential programs",
      ],
      tags: ["Leadership", "Management", "Operations"],
    },
    {
      period: "2012 — 2013",
      role: "Banker (Bankkaufmann)",
      company: "ASA Money Institution",
      location: "Kabul, Afghanistan",
      description:
        "Worked as a banker, applying financial discipline and customer service practices.",
      achievements: [
        "Handled banking operations and client transactions",
        "Delivered structured, reliable customer service",
      ],
      tags: ["Banking", "Finance", "Customer Service"],
    },
    {
      period: "2011 — 2012",
      role: "Loan Officer",
      company: "ASA Afghanistan",
      location: "Kabul, Afghanistan",
      description:
        "Evaluated and serviced microfinance loans supporting local businesses.",
      achievements: [
        "Assessed loan applications and client creditworthiness",
        "Managed portfolio follow-up and collections",
      ],
      tags: ["Finance", "Analysis", "Client Relations"],
    },
  ],
};

export const projects = [
  {
    title: "Cloud Infrastructure Dashboard",
    description:
      "A modern operations dashboard concept for monitoring cloud and virtualized infrastructure, inspired by hands-on Windows Server & Active Directory administration.",
    gradient: "from-accent-cyan to-accent-blue",
    features: [
      "Real-time service & uptime monitoring",
      "Active Directory & DHCP/DNS health views",
      "Role-based access controls",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
    github: "https://github.com/nazir-nawabi",
    live: "#projects",
    featured: true,
  },
  {
    title: "IT-Service Ticketing UI",
    description:
      "A clean, accessible ticketing interface informed by years of IT-Support and ticket system experience in a hospital environment.",
    gradient: "from-accent-indigo to-accent-violet",
    features: [
      "Streamlined ticket creation & triage",
      "Priority and SLA management",
      "Searchable history & knowledge base",
    ],
    tags: ["Next.js", "React", "Tailwind", "Framer Motion"],
    github: "https://github.com/nazir-nawabi",
    live: "#projects",
  },
  {
    title: "Network Topology Explorer",
    description:
      "An interactive visualization for TCP/IP networks, routing and switching — a CCNA-driven tool for planning and documenting network layouts.",
    gradient: "from-accent-violet to-accent-purple",
    features: [
      "Drag-and-drop node graph editor",
      "Subnet & routing summaries",
      "Exportable topology diagrams",
    ],
    tags: ["React", "TypeScript", "D3", "Tailwind"],
    github: "https://github.com/nazir-nawabi",
    live: "#projects",
  },
  {
    title: "Multilingual Resume / Portfolio",
    description:
      "This very portfolio — an ultra-dark, glassmorphic, fully responsive React/Next.js site reflecting my multilingual IT profile.",
    gradient: "from-accent-blue to-accent-cyan",
    features: [
      "Framer Motion scroll & entry animations",
      "Glassmorphism + neon accent design system",
      "SEO-optimized, Vercel-ready output",
    ],
    tags: ["Next.js", "React", "Tailwind", "Framer Motion", "Lucide"],
    github: "https://github.com/nazir-nawabi",
    live: "#",
    featured: true,
  },
];

export const certifications = {
  heading: "Certifications & Education",
  items: [
    {
      type: "Certification",
      title: "IT-Systemadministrator (CCNA)",
      org: "DCI Digital Career Institute GmbH",
      location: "Berlin",
      period: "Mar 2026 — Sep 2026",
      status: "In Progress",
      details: [
        "Windows Server 2019 / 2022",
        "Active Directory & IT-Service & Support",
        "TCP/IP Networks, Routing & Switching",
      ],
      badge: "CCNA",
    },
    {
      type: "Certification",
      title: "CompTIA A+",
      org: "CompTIA",
      period: "Ongoing",
      status: "Pursuing",
      details: [
        "Core hardware & software certification",
        "Foundational IT operations knowledge",
      ],
      badge: "A+",
    },
    {
      type: "Certification",
      title: "Windows Server / Microsoft 365",
      org: "Microsoft",
      period: "2012 / 2016 / 2019",
      details: [
        "Windows Server 2016 / 2019 / 365 administration",
        "Microsoft Certified IT Professional track",
      ],
      badge: "M365",
    },
    {
      type: "Education",
      title: "Bachelor of Science — Computer Science",
      org: "University of Kabul",
      location: "Kabul, Afghanistan",
      period: "2011 — 2015",
      details: [
        "Completed undergraduate Computer Science studies",
        "Foundation in programming, databases & networking",
      ],
      badge: "B.Sc.",
    },
  ],
};

export const languages = [
  { name: "Pashto", level: "Native", proficiency: 100 },
  { name: "Dari", level: "Native", proficiency: 100 },
  { name: "German", level: "B1 · B2", proficiency: 60 },
  { name: "English", level: "Fluent", proficiency: 85 },
];

export const socials = [
  { name: "LinkedIn", icon: "Linkedin", url: profile.linkedin },
  { name: "GitHub", icon: "Github", url: profile.github },
  { name: "Email", icon: "Mail", url: `mailto:${profile.email}` },
];
