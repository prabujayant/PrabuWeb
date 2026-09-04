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
  authors?: string;
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
    "Prabu Jayant is a software engineer and published ML researcher at Baker Hughes, building AI-assisted products, distributed systems, and software that actually ships.",
  tagline: "I mostly build software. Some of it ends up published.",
  intro:
    "I build AI-assisted tools at Baker Hughes: document-classification models that keep people in the loop, and platforms that quietly absorb the repetitive parts of real work. Earlier, at Juniper Networks, I worked on high-throughput network analytics. Underneath all of it, I care about software that is reliable, observable, and pleasant to work with.",
  summary:
    "Away from shipping, I spend a lot of time on applied machine learning and security. I've co-authored five peer-reviewed papers on encrypted-traffic classification, intrusion detection, and cyber defense, and I'm most at home in the space where a research idea turns into something people actually use.",
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
    detail: "Development Engineer building AI-assisted document classification",
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

export const fitAreas = [
  "Applied ML that actually ships",
  "Distributed systems you can rely on",
  "Full-stack product engineering",
  "Security & published research",
];

export const featuredThemes = [
  "Software should be a joy to use.",
  "Complexity belongs in the backend, not the UI.",
  "If it isn't reliable, it isn't finished.",
];

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
    items: ["React", "Next.js", "HTML5", "Tailwind CSS"],
  },
  {
    title: "Backend & distributed systems",
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
    items: [
      "Operating Systems",
      "Computer Networks",
      "Data Structures & Algorithms",
      "System Design",
      "Multi-threading",
    ],
  },
] satisfies SkillGroup[];
