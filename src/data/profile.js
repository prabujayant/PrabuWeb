const contactLinks = {
  email: "mailto:prabu.jayant2022@gmail.com",
  phone: "tel:+918904261616",
  linkedin: "https://www.linkedin.com/in/prabu-jayant-6b316b251/",
  github: "https://github.com/prabujayant",
  portfolio: "https://prabujayant.vercel.app/",
};

export const profile = {
  name: "Prabu Jayant",
  tagline: "Software developer building reliable, user-focused products",
  location: "Bengaluru, India",
  email: "prabu.jayant2022@gmail.com",
  phone: "+91 8904261616",
  links: [
    { label: "LinkedIn", url: contactLinks.linkedin },
    { label: "GitHub", url: contactLinks.github },
    { label: "Portfolio", url: contactLinks.portfolio },
  ],
  intro:
    "Hi, I'm Prabu Jayant from Bengaluru, India. I'm pursuing a B.E. in Computer Science Engineering (Cybersecurity) at RV College of Engineering, exploring how machine learning, AI, and security can work together in practical ways.",
  summary:
    "I enjoy shaping software that feels steady and thoughtful. Most days I move between full-stack web work, data pipelines, and the guardrails that keep them trustworthy. I care about humane developer experiences, clear communication, and learning in public.",
  education: [
    {
      school: "RV College of Engineering, Bengaluru",
      degree: "B.E. Computer Science (Cybersecurity)",
      period: "2022 - 2026",
      gpa: "GPA 8.75",
    },
  ],
  experience: [
    {
      company: "Juniper Networks",
      role: "Software Developer - SaaS Traffic Intelligence",
      period: "Jul 2024 - Feb 2025",
      accomplishments: [
        "Co-designed an SSL proxy pipeline that processed 1M+ SaaS events per day and supplied labelled datasets to three analytics teams.",
        "Productionised a classifier that held 98% accuracy in noisy conditions, cutting manual log triage by roughly 60% during the pilot.",
        "Set up validation dashboards and handover notes so the next rotation could ship updates without a relearn.",
      ],
    },
    {
      company: "SkySecure Ltd",
      role: "Security Engineering Intern",
      period: "Nov 2023 - Dec 2023",
      accomplishments: [
        "Built a streaming threat-detection prototype that ingested packet data, scored it with an ML model, and triggered alerts in under two seconds.",
        "Partnered with security operations to catalogue edge cases and evaluation metrics so they could iterate confidently after my internship.",
      ],
    },
  ],
  projects: [
    {
      name: "DefenSys - Intelligent Cyber Defense Platform",
      context: "Research collaboration",
      status: "Open-source repo",
      summary:
        "Full-stack platform that gives security teams real-time visibility into IoT traffic and lets them rehearse \"what if\" incidents safely.",
      goal: "Make it easy to blacklist malicious IPs and replay attacks without touching production systems.",
      contribution:
        "Led the backend and dashboard build. Shipped Dockerised services, a Flask API, and runbooks that guided operators through simulations.",
      outcome:
        "Adopted by our research lab to demonstrate 95%+ malware detection accuracy across 25 families; published in the DefenSys paper.",
      stack: ["Python", "Flask", "React", "Docker", "TensorFlow", "Redis"],
      link: "https://github.com/prabujayant/DefenSys",
    },
    {
      name: "Terra - Smart Carbon Footprint Tracker",
      context: "Personal project",
      status: "Live demo soon",
      summary:
        "Carbon tracking companion that combines OCR, third-party APIs, and playful analytics to keep sustainability habits lightweight.",
      goal: "Help users record purchases quickly and see the impact without managing spreadsheets.",
      contribution:
        "Implemented OCR ingestion, Firebase auth, and dashboard flows; wired up OpenFoodFacts and EasyOCR for automatic data capture.",
      outcome:
        "Pilot group logged 200+ receipts in two weeks; the learnings powered a campus talk on everyday sustainability.",
      stack: ["Python", "Flask", "React", "Firebase", "OCR"],
      link: "https://github.com/prabujayant/Terra",
    },
    {
      name: "OnlyCabs - Intelligent Ride-Hailing Platform",
      context: "Hackathon build",
      status: "Prototype",
      summary:
        "Ride-hailing concept that experiments with fair driver allocation, real-time tracking, and a microservices backend.",
      goal: "Reduce rider wait times during peak hours while keeping driver utilisation healthy.",
      contribution:
        "Built the driver matching microservice in Node.js, a React Native rider app, and Firebase-backed real-time updates.",
      outcome:
        "Placed in the top 10 of a 500-team hackathon; judges highlighted the clarity of the service boundaries and monitoring story.",
      stack: ["React Native", "Firebase", "Python", "Node.js", "Express.js"],
      link: "https://github.com/prabujayant",
    },
  ],
  leadership: [
    {
      title: "Event Management Lead, Google Developer Student Clubs (RVCE)",
      period: "Aug 2023 - Present",
      description:
        'Organised "Tech Tank", a university hackathon for 500+ participants and fostered inclusive, high-energy builder programs.',
    },
  ],
  achievements: [
    "4th place at CODE RED'25 Hackathon (Top 1% of 1000+ teams).",
    "Top 10 at ELCIA Next-Gen Hackathon, IIITB (500+ teams).",
    "Published research on intrusion detection in network traffic using LSTM at IEEE.",
    "Co-authored papers on smart health monitoring, SaaS traffic classification, and containerised malware defence.",
  ],
  skills: {
    languages: ["Python", "Java", "C/C++", "JavaScript", "SQL"],
    technologies: ["Flask", "Node.js", "React", "Express.js", "MongoDB", "Firebase", "Docker", "Git"],
    concepts: ["Data Structures & Algorithms", "System Design", "Operating Systems", "Computer Networks"],
  },
};

export const contact = contactLinks;
