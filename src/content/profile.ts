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
    "Prabu Jayant makes complex systems simple. I build intelligent platforms, robust distributed systems, and software that people actually want to use.",
  tagline:
    "I write software to make the complex simple.",
  intro:
    "I am an engineer who cares about the craft. I build full-stack platforms, distributed systems, and intelligent tools that solve real human problems, not just algorithmic ones. Good software should feel invisible.",
  summary:
    "Right now, I'm building AI-assisted tools at Baker Hughes. Before that, I untangled network pipelines at Juniper Networks. My goal is always the same: build reliable, beautiful systems that stand up to the real world.",
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
    detail: "Digital Technology Intern building AI-assisted workflows",
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
  "Building things people actually want",
  "Bridging AI research with real-world products",
  "Designing resilient distributed systems",
  "Sweating the details in full-stack architecture",
];

export const featuredThemes = [
  "Software should be a joy to use.",
  "Complexity belongs in the backend, not the UI.",
  "If it isn't reliable, it isn't finished.",
];

export const experience = [
    {
    company: "Baker Hughes",
    role: "Digital Technology Intern",
    period: "Jan 2026 - Present",
    accomplishments: [
      "Built a full-stack AI platform that actually makes sense for operators, seamlessly merging React, Flask, and PostgreSQL into a single cohesive experience.",
      "Untangled messy enterprise data by designing clean, normalized schemas that made searching and filtering instantly fast.",
      "Delivered a hybrid BERT-CNN model to production on Azure, proving that machine learning only matters if it ships and works reliably.",
    ],
  },
  {
    company: "Juniper Networks",
    role: "Software Engineering Intern",
    period: "Jul 2024 - Feb 2025",
    accomplishments: [
      "Engineered a high-throughput proxy pipeline to ingest and decrypt live SaaS traffic without dropping a beat.",
      "Tuned a classification service until it hit 98% accuracy—because 'good enough' isn't good enough when network reliability is on the line.",
      "Collaborated with an agile team to expand datasets and build models that laid the foundation for smarter downstream AI systems.",
    ],
  },
] satisfies ExperienceItem[];

export const education = [
  {
    school: "RV College of Engineering, Bengaluru",
    degree: "B.E. Computer Science (Cybersecurity)",
    period: "2022 - 2026",
    gpa: "GPA 8.78",
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
