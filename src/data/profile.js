const contactLinks = {
  email: "mailto:prabu.jayant2022@gmail.com",
  phone: "tel:+918904261616",
  linkedin: "https://www.linkedin.com/in/prabu-jayant-6b316b251/",
  github: "https://github.com/prabujayant",
  portfolio: "https://www.prabujayant.com/",
};

export const profile = {
  name: "Prabu Jayant",
  tagline: "Software engineer building AI-assisted products, distributed systems, and reliable workflow software",
  location: "Bangalore, India",
  email: "prabu.jayant2022@gmail.com",
  phone: "+91 8904261616",
  links: [
    { label: "LinkedIn", url: contactLinks.linkedin },
    { label: "GitHub", url: contactLinks.github },
    { label: "Portfolio", url: contactLinks.portfolio },
  ],
  intro:
    "I'm Prabu Jayant, a Computer Science (Cybersecurity) student at RV College of Engineering and a Software Engineering Intern at Baker Hughes. I build full-stack products that combine practical AI, dependable systems, and clear operator workflows.",
  summary:
    "Recent work has centered on React and Flask applications, PostgreSQL data models, ML-assisted classification flows, and cloud deployments that need to stay auditable, reviewable, and useful in real operating environments.",
  education: [
    {
      school: "RV College of Engineering, Bangalore",
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
  ],
  experience: [
    {
      company: "Baker Hughes",
      role: "Software Engineering Intern",
      period: "Jan 2026 - Present",
      accomplishments: [
        "Engineered a full-stack AI-assisted product classification platform with React, Flask, and PostgreSQL for structured intake, regional queues, and enterprise partner workflows.",
        "Designed the database model for requests, line items, attachments, and audit trails, with optimized filtering, search, and export paths.",
        "Integrated a hybrid BERT-CNN prediction flow with human review and approvals, then validated the application on Microsoft Azure for enterprise-ready deployment.",
      ],
    },
    {
      company: "Juniper Networks",
      role: "Software Engineering Intern",
      period: "Jul 2024 - Feb 2025",
      accomplishments: [
        "Engineered a high-throughput SSL proxy data pipeline with Python automation scripts for real-time SaaS traffic decryption and monitoring.",
        "Built a full-stack classification service that reached 98% accuracy for known services through backend optimization and model tuning.",
        "Worked across a hybrid agile team on validation models that improved network reliability and expanded the production-quality dataset for downstream ML systems.",
      ],
    },
  ],
  projects: [
    {
      name: "CoLab - Real-time Collaborative Editor",
      context: "Distributed systems build",
      status: "Production-grade product",
      summary:
        "High-performance real-time collaborative text editor with conflict-free synchronization, live presence cursors, and deep document versioning. Built around CRDT principles for Google Docs-like simultaneous editing.",
      goal: "Enable instant, conflict-free collaboration with secure session handling, auto-saving persistence, and version history snapshots.",
      contribution:
        "Designed the CRDT (Y.js) and WebSocket architecture, engineered Gzip-compressed snapshot persistence in PostgreSQL, and implemented JWT-based auth with session rotation.",
      outcome:
        "Shipped a secure, low-latency collaboration stack featuring a real-time observability dashboard for tracking system metrics and active user sessions.",
      stack: ["TypeScript", "React", "Node.js", "Redis", "PostgreSQL", "CRDTs", "WebSockets", "Docker"],
      link: "https://github.com/prabujayant/CoLab",
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
      link: "https://github.com/prabujayant/DefenSys",
    },
  ],
  leadership: [
    {
      title: "Event Management Lead, Google Developer Student Clubs (RVCE)",
      period: "Aug 2023 - Present",
      description:
        'Led Tech Tank for 500+ students, owning event operations, technical infrastructure, and cross-team coordination for the GDSC-RVCE community.',
    },
  ],
  achievements: [
    "4th place at CODE RED'25 Hackathon, finishing in the top 1% of 1,000+ teams.",
    "Top 10 at the ELCIA Next-Gen Hackathon at IIIT Bangalore.",
    "Co-authored four peer-reviewed papers across IEEE Access, ICCCNT, ICWIHI, and intelligent cyber-physical systems research venues.",
  ],
  skills: [
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
      items: ["Node.js", "Express.js", "Flask", "REST APIs", "GraphQL", "Microservices"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "pgvector", "MongoDB", "Redis", "Firebase", "SQL modeling"],
    },
    {
      title: "AI / ML",
      items: ["PyTorch", "TensorFlow", "BERT", "CNN", "LSTM", "LangChain", "LangGraph", "RAG", "OpenAI API"],
    },
    {
      title: "Cloud & DevOps",
      items: ["Microsoft Azure", "AWS", "Docker", "GitHub Actions", "Git", "Bash", "PowerShell"],
    },
    {
      title: "Distributed systems",
      items: ["CRDTs", "WebSockets", "Redis queues", "Concurrent systems design"],
    },
    {
      title: "Core CS",
      items: ["Data Structures & Algorithms", "System Design", "Operating Systems", "Computer Networks"],
    },
  ],
  publications: [
    {
      title:
        "CASB Security Analytics for Encrypted SaaS Traffic: A Hybrid Transformer-Based Classification Framework in Enterprise Cloud Ecosystems",
      venue: "IEEE Access",
      year: "2025",
      citedBy: "Cited by 1+",
      summary:
        "Research on enterprise SaaS traffic classification using transformer-based approaches for encrypted cloud environments.",
      link: "https://scholar.google.com/citations?user=s4ldIOYAAAAJ&hl=en&oi=sra",
    },
    {
      title: "Adaptive ML Framework for SaaS Traffic Classification in Cloud Ecosystem",
      venue: "ICWIHI 2025",
      year: "2025",
      summary:
        "Applied ML work focused on cloud traffic classification and practical observability for SaaS ecosystems.",
      link: "https://drive.google.com/file/d/1B3tt_W8u3wbktvR13hm7hObToNdV87Ww/view",
    },
    {
      title: "Smart Health Monitoring and Anomaly Detection Using IoT and AI",
      venue: "Intelligent Cyber Physical Systems 2024",
      year: "2024",
      citedBy: "Cited by 19",
      summary:
        "IoT and AI research on health monitoring pipelines and anomaly detection in connected systems.",
      link: "https://ieeexplore.ieee.org/document/10724486",
    },
    {
      title: "Intrusion Detection in Network Traffic Using LSTM and Deep Learning",
      venue: "IEEE ICCCNT 2024",
      year: "2024",
      citedBy: "Cited by 5",
      summary:
        "Security research on sequence modeling for intrusion detection in network traffic using LSTM-based methods.",
      link: "https://ieeexplore.ieee.org/document/10696283",
    },
  ],
};

export const contact = contactLinks;
