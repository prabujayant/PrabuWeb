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
  demoHref?: string;
  goal: string;
  href?: string;
  name: string;
  outcome: string;
  stack: string[];
  status: string;
  summary: string;
};

export type PublicationItem = {
  authors?: string;
  citedBy?: string;
  href: string;
  summary: string;
  title: string;
  venue: string;
  year: string;
};

export type SkillGroup = {
  description: string;
  icon: SkillIcon;
  items: string[];
  title: string;
};

export type SkillIcon =
  | "backend"
  | "cloud"
  | "data"
  | "languages"
  | "ml"
  | "web";

export const siteConfig = {
  name: "Prabu Jayant",
  role: "Software engineer",
  location: "Bengaluru, India",
  email: "prabu.jayant2022@gmail.com",
  emailHref: "mailto:prabu.jayant2022@gmail.com",
  phone: "+91 8904261616",
  phoneHref: "tel:+918904261616",
  description:
    "Prabu Jayant is a software engineer and published ML researcher at Baker Hughes, building AI-assisted products, distributed systems, and software that actually ships.",
  tagline: "I mostly build software. Some of it ends up published.",
  intro:
    "I build AI-assisted tools at Baker Hughes: document-classification models that keep people in the loop, and platforms that quietly absorb the repetitive parts of real work. Earlier, at Juniper Networks, I worked on high-throughput network analytics. Underneath all of it, I care about software that is reliable, observable, and pleasant to work with.",
  summary:
    "Recently, I’ve been building AskMyDocs, a grounded RAG platform with hybrid search and claim-level citations, and CoLab, a real-time collaborative editor built around CRDTs. Both reflect what I enjoy most: turning complex ideas into reliable, useful software.",
  nav: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
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
    detail:
      "Software Development Engineer building AI-assisted document classification",
  },
  {
    label: "Publications",
    value: "5 papers",
    detail: "IEEE Access + IEEE conferences · 34 citations · h-index 2",
  },
  {
    label: "Recognition",
    value: "Top 1%",
    detail: "CODE RED'25, 4th of 1,000+ teams · ELCIA Next-Gen Top 10",
  },
  {
    label: "Education",
    value: "CGPA 8.87",
    detail: "B.E. Computer Science (Cybersecurity) · RV College of Engineering",
  },
] satisfies Metric[];

export const experience = [
  {
    company: "Baker Hughes",
    role: "Development Engineer",
    period: "Jan 2026 - Present",
    accomplishments: [
      "Promoted from Digital Technology Intern to Development Engineer (Jul 2026) after shipping the hybrid BERT-CNN classification platform to production.",
      "Designed and trained a hybrid BERT-CNN NLP model for automated document classification at 85% accuracy, adding human-in-the-loop validation that cut manual audit effort by 50+ hours a week.",
      "Engineered a full-stack classification platform (Python, Flask, React, PostgreSQL) with automated message queues, scaling partner intake throughput 3x across regional enterprise teams.",
      "Architected production microservices on Microsoft Azure App Service with Microsoft Entra ID RBAC and GitHub Actions CI/CD, cutting deployment cycle times by 40% under a zero-trust model.",
    ],
  },
  {
    company: "Juniper Networks",
    role: "Software Engineering Intern, Data & Analytics",
    period: "Jul 2024 - Feb 2025",
    accomplishments: [
      "Engineered a high-throughput Python processing pipeline handling 1M+ daily network packets, enabling real-time monitoring and automated labeled datasets for security analytics research.",
      "Built and statistically tuned a microservice classification platform reaching 98% accuracy on network service identification, lowering system latency by 25%.",
      "Established automated unit testing and validation frameworks in an Agile R&D workflow, reducing dataset error rates by 30% while holding production SLA compliance.",
    ],
  },
] satisfies ExperienceItem[];

export const education = [
  {
    school: "RV College of Engineering, Bengaluru",
    degree: "B.E. Computer Science and Engineering (Cybersecurity)",
    period: "2022 - 2026",
    gpa: "CGPA 8.87",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "System Design",
      "Database Systems",
      "Machine Learning",
      "Applied Statistics",
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
    status: "Shipped",
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
      "Shipped a working prototype for real-time threat demos and published the research behind the approach.",
    stack: [
      "C/C++",
      "Python",
      "PyTorch",
      "Docker",
      "Kubernetes",
      "Redis",
      "Linux/Bash",
    ],
    href: "https://github.com/prabujayant/DefenSys",
  },
  {
    name: "AskMyDocs - Grounded RAG Q&A",
    context: "Production RAG platform",
    status: "Live",
    demoHref: "https://prabu17-askmydocs.hf.space/",
    summary:
      "Retrieval-augmented Q&A over mixed-format technical documentation, with hybrid search, cross-encoder reranking, and per-claim citation grounding so unsupported claims are visible rather than hidden.",
    goal: "Answer questions from trusted documentation without letting the model invent plausible-sounding claims that no retrieved evidence supports.",
    contribution:
      "Built the hybrid retrieval path (BGE-M3 dense vectors in Qdrant fused with Postgres tsvector keyword search via reciprocal-rank fusion), reranking with a multilingual cross-encoder, and a claim-level LLM judge that labels each answer grounded, partially grounded, ungrounded, or refused.",
    outcome:
      "Shipped a FastAPI service with streaming query progress, background Celery ingestion, a RAGAs evaluation harness against a 60-question golden set with regression thresholds, and deterministic safety screening for prompt injection and PII.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Qdrant",
      "Redis",
      "Celery",
      "Docker",
      "BAAI/bge-m3",
      "sentence-transformers",
      "RAGAs",
      "Next.js",
    ],
    href: "https://github.com/prabujayant/RAG",
  },
  {
    name: "PrabuWeb - Portfolio Site",
    context: "Product engineering",
    status: "Live",
    summary:
      "This site. A single scrolling portfolio built with Next.js 16 and React 19, MDX-backed long-form content, and a typed content layer that keeps copy and layout cleanly separated.",
    goal: "Ship a fast, accessible portfolio that is easy to update without touching layout code, and that renders as static output.",
    contribution:
      "Designed the single-page scroll architecture with anchor-based navigation and a scroll-spy header, authored the design token system and component primitives, and added SEO via the Metadata API with JSON-LD, sitemap, and OpenGraph cards.",
    outcome:
      "Deployed as a fully static build with all content sourced from typed data plus MDX, so copy changes never require component edits.",
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "MDX",
      "Vercel",
    ],
    href: "https://github.com/prabujayant/PrabuWeb",
  },
] satisfies ProjectItem[];

export const publications = [
  {
    title:
      "CASB Security Analytics for Encrypted SaaS Traffic: A Hybrid Transformer-Based Classification Framework in Enterprise Cloud Ecosystems",
    venue: "IEEE Access",
    year: "2025",
    authors:
      "A. Ravi, B. Jnyanadeep, M. V. Gagana, P. Jayant, A. Pranav, and P. Siddappa",
    summary:
      "A hybrid transformer-based framework for classifying encrypted SaaS traffic in enterprise cloud ecosystems, combining contextual language modeling with convolutional features.",
    href: "https://scholar.google.com/citations?user=s4ldIOYAAAAJ&hl=en&oi=sra",
  },
  {
    title:
      "DefenSys: An Integrated Platform for Malware Detection and Containerized Attack Simulation Using Deep Learning",
    venue: "ICOSEC",
    year: "2025",
    authors: "E. Vincent, P. Jayant, and A. Chakkan",
    summary:
      "Pairs deep-learning malware detection with containerized attack simulation so security teams can exercise threat responses in a safe environment.",
    href: "https://ieeexplore.ieee.org/document/11459625/",
  },
  {
    title: "Adaptive ML Framework for SaaS Traffic Classification in Cloud Ecosystem",
    venue: "ICWIHMI",
    year: "2025",
    authors: "A. Ravi, B. Jnyanadeep, M. V. Gagana, P. Jayant, and M. Moharir",
    summary:
      "An adaptive machine-learning framework for SaaS traffic classification in cloud ecosystems, focused on practical deployment and observability.",
    href: "https://drive.google.com/file/d/1B3tt_W8u3wbktvR13hm7hObToNdV87Ww/view",
  },
  {
    title: "Smart Health Monitoring and Anomaly Detection Using IoT and AI",
    venue: "ICICPS",
    year: "2024",
    authors: "P. Jayant, E. Vincent, M. Moharir, and A. K. A. R.",
    citedBy: "Cited by 26",
    summary:
      "Uses IoT sensors with AI-based anomaly detection for continuous health monitoring in connected systems.",
    href: "https://ieeexplore.ieee.org/document/10724486",
  },
  {
    title: "Intrusion Detection in Network Traffic Using LSTM and Deep Learning",
    venue: "IEEE ICCCNT",
    year: "2024",
    authors: "P. Jayant, M. P. Shetty, S. Jeevan, M. Moharir, and A. R. A. Kumar",
    citedBy: "Cited by 7",
    summary:
      "Applies LSTM sequence models to network traffic for deep-learning based intrusion detection.",
    href: "https://ieeexplore.ieee.org/document/10696283",
  },
] satisfies PublicationItem[];

export const skills = [
  {
    title: "Core programming",
    icon: "languages",
    description: "Languages I reach for most, from systems code to scripting",
    items: [
      "C/C++",
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "SQL (query optimization, data modeling)",
    ],
  },
  {
    title: "Frontend & web",
    icon: "web",
    description: "Interfaces and the frameworks behind them",
    items: ["React", "Next.js", "HTML5", "Tailwind CSS"],
  },
  {
    title: "Backend & distributed systems",
    icon: "backend",
    description: "Services, queues, and concurrent system design",
    items: [
      "REST APIs",
      "Microservices",
      "Node.js",
      "Flask",
      "Redis queues",
      "WebSockets",
      "Concurrent systems design",
    ],
  },
  {
    title: "Databases",
    icon: "data",
    description: "Relational, document, and vector storage",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "pgvector",
      "Firebase",
      "SQL modeling",
    ],
  },
  {
    title: "AI / ML & frameworks",
    icon: "ml",
    description: "Model training, evaluation, and observability",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Transformers (BERT)",
      "CNN / LSTM",
      "Data pipelines",
      "Telemetry & observability",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    description: "Deployment, orchestration, and delivery pipelines",
    items: [
      "Docker",
      "Kubernetes",
      "Microsoft Azure",
      "AWS",
      "GitHub Actions (CI/CD)",
      "Linux / Bash",
      "Git",
    ],
  },
  {
    title: "Core CS",
    icon: "backend",
    description: "The fundamentals behind the systems I build",
    items: [
      "Operating Systems",
      "Computer Networks",
      "Data Structures & Algorithms",
      "System Design",
      "Multi-threading",
    ],
  },
] satisfies SkillGroup[];
