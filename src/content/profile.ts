export type NavItem = {
  href: string;
  label: string;
};

export type ExternalLink = {
  href: string;
  label: string;
};

export type Metric = {
  detail: string;
  label: string;
  value: string;
};

export type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  accomplishments: string[];
};

export type ProjectItem = {
  context: string;
  contribution: string;
  goal: string;
  href?: string;
  name: string;
  outcome: string;
  stack: string[];
  status: string;
  summary: string;
};

export type PublicationItem = {
  citedBy?: string;
  href: string;
  summary: string;
  title: string;
  venue: string;
  year: string;
};

export type SkillGroup = {
  items: string[];
  title: string;
};

export const siteConfig = {
  name: "Prabu Jayant",
  role: "Software engineer",
  location: "Bengaluru, India",
  email: "prabu.jayant2022@gmail.com",
  emailHref: "mailto:prabu.jayant2022@gmail.com",
  phone: "+91 8904261616",
  phoneHref: "tel:+918904261616",
  description:
    "Prabu Jayant builds AI-assisted products, distributed systems, and dependable workflow software with a focus on calm execution and clear product thinking.",
  tagline:
    "Software engineer building AI-assisted products, distributed systems, and reliable workflow software",
  intro:
    "I build full-stack software that blends practical AI, dependable systems, and operator-friendly workflows for teams that need products to hold up under real constraints.",
  summary:
    "Recent work spans React and Flask applications, PostgreSQL data modeling, ML-assisted classification flows, and cloud delivery shaped by reviewability, trust, and clean handoff.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
  ] satisfies NavItem[],
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/prabu-jayant-6b316b251/",
      label: "LinkedIn",
    },
    { href: "https://github.com/prabujayant", label: "GitHub" },
  ] satisfies ExternalLink[],
} as const;

export const homeMetrics = [
  {
    label: "Current role",
    value: "Baker Hughes",
    detail: "Software Engineering Intern building AI-assisted workflows",
  },
  {
    label: "Research",
    value: "4 papers",
    detail: "Published across IEEE Access, ICCCNT, and applied AI venues",
  },
  {
    label: "Recognition",
    value: "Top 1%",
    detail: "CODE RED'25 plus Top 10 at the ELCIA Next-Gen Hackathon",
  },
  {
    label: "Strengths",
    value: "Full stack + ML",
    detail: "Systems, data modeling, product execution, and cloud delivery",
  },
] satisfies Metric[];

export const fitAreas = [
  "Product-minded software engineering",
  "AI-assisted workflows with review loops",
  "Distributed systems and collaboration tooling",
  "Full-stack platform work with strong data models",
];

export const featuredThemes = [
  "Clear proof of enterprise, research, and full-stack delivery.",
  "Balanced for recruiters who scan fast and engineers who read deeper.",
  "Built around outcomes, not just tool lists.",
];

export const experience = [
  {
    company: "Baker Hughes",
    role: "Software Engineering Intern",
    period: "Jan 2026 - Present",
    accomplishments: [
      "Engineered a full-stack AI-assisted product classification platform with React, Flask, and PostgreSQL for structured intake, regional queues, and partner-facing review loops.",
      "Designed normalized schemas for requests, attachments, line items, and audit trails with optimized filtering, search, and export paths.",
      "Integrated a hybrid BERT-CNN prediction flow with human review and approvals, then validated the application on Microsoft Azure for enterprise-ready deployment.",
    ],
  },
  {
    company: "Juniper Networks",
    role: "Software Engineering Intern",
    period: "Jul 2024 - Feb 2025",
    accomplishments: [
      "Engineered a high-throughput SSL proxy data pipeline with Python automation for real-time SaaS traffic decryption and monitoring.",
      "Built a classification service that reached 98% accuracy for known services through backend optimization and model tuning.",
      "Worked across a hybrid agile team on validation models that improved network reliability and expanded the production-quality dataset for downstream ML systems.",
    ],
  },
] satisfies ExperienceItem[];

export const education = [
  {
    school: "RV College of Engineering, Bengaluru",
    degree: "B.E. Computer Science (Cybersecurity)",
    period: "2022 - 2026",
    gpa: "GPA 8.75",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Machine Learning",
    ],
  },
];

export const leadership = [
  {
    title: "Event Management Lead, Google Developer Student Clubs (RVCE)",
    period: "Aug 2023 - Present",
    description:
      "Led Tech Tank for 500+ students, owning event operations, technical infrastructure, and cross-team coordination for the GDSC-RVCE community.",
  },
];

export const projects = [
  {
    name: "CoLab - Real-time Collaborative Editor",
    context: "Distributed systems build",
    status: "Production-grade product",
    summary:
      "High-performance real-time collaborative text editor with conflict-free synchronization, live presence cursors, and deep versioning built around CRDT principles.",
    goal: "Enable instant, conflict-free collaboration with secure session handling, auto-saving persistence, and version history snapshots.",
    contribution:
      "Designed the Y.js and WebSocket architecture, engineered compressed snapshot persistence in PostgreSQL, and implemented JWT-based auth with session rotation.",
    outcome:
      "Shipped a secure, low-latency collaboration stack with a real-time observability dashboard for system metrics and active user sessions.",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "CRDTs",
      "WebSockets",
      "Docker",
    ],
    href: "https://github.com/prabujayant/CoLab",
  },
  {
    name: "DefenSys - Intelligent Cyber Defense Platform",
    context: "Applied security platform",
    status: "Research-backed prototype",
    summary:
      "Full-stack cyber defense platform with real-time threat visualization and containerized IoT simulation for attack-response workflows.",
    goal: "Give teams a safe environment to observe threats and validate automated defenses without touching production systems.",
    contribution:
      "Built the React dashboard and Flask services, containerized the simulation environment, and implemented Redis-backed queues for asynchronous defense tasks.",
    outcome:
      "Shipped a resilient prototype for real-time threat demos and published research on intelligent cyber defense workflows.",
    stack: ["Python", "Flask", "React", "Docker", "Redis"],
    href: "https://github.com/prabujayant/DefenSys",
  },
] satisfies ProjectItem[];

export const publications = [
  {
    title:
      "CASB Security Analytics for Encrypted SaaS Traffic: A Hybrid Transformer-Based Classification Framework in Enterprise Cloud Ecosystems",
    venue: "IEEE Access",
    year: "2025",
    citedBy: "Cited by 1+",
    summary:
      "Research on enterprise SaaS traffic classification using transformer-based approaches for encrypted cloud environments.",
    href: "https://scholar.google.com/citations?user=s4ldIOYAAAAJ&hl=en&oi=sra",
  },
  {
    title:
      "Adaptive ML Framework for SaaS Traffic Classification in Cloud Ecosystem",
    venue: "ICWIHI 2025",
    year: "2025",
    summary:
      "Applied ML work focused on cloud traffic classification and practical observability for SaaS ecosystems.",
    href: "https://drive.google.com/file/d/1B3tt_W8u3wbktvR13hm7hObToNdV87Ww/view",
  },
  {
    title: "Smart Health Monitoring and Anomaly Detection Using IoT and AI",
    venue: "Intelligent Cyber Physical Systems 2024",
    year: "2024",
    citedBy: "Cited by 19",
    summary:
      "IoT and AI research on health monitoring pipelines and anomaly detection in connected systems.",
    href: "https://ieeexplore.ieee.org/document/10724486",
  },
  {
    title:
      "Intrusion Detection in Network Traffic Using LSTM and Deep Learning",
    venue: "IEEE ICCCNT 2024",
    year: "2024",
    citedBy: "Cited by 5",
    summary:
      "Security research on sequence modeling for intrusion detection in network traffic using LSTM-based methods.",
    href: "https://ieeexplore.ieee.org/document/10696283",
  },
] satisfies PublicationItem[];

export const skills = [
  {
    title: "Languages",
    items: ["Python", "C/C++", "Java", "TypeScript", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "HTML5", "Tailwind CSS"],
  },
  {
    title: "Backend & systems",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "pgvector",
      "MongoDB",
      "Redis",
      "Firebase",
      "SQL modeling",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "BERT",
      "CNN",
      "LSTM",
      "LangChain",
      "LangGraph",
      "RAG",
      "OpenAI API",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Microsoft Azure",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Git",
      "Bash",
      "PowerShell",
    ],
  },
  {
    title: "Distributed systems",
    items: ["CRDTs", "WebSockets", "Redis queues", "Concurrent systems design"],
  },
  {
    title: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "System Design",
      "Operating Systems",
      "Computer Networks",
    ],
  },
] satisfies SkillGroup[];
