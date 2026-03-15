import React from "react";
import { ArrowUpRight } from "lucide-react";
import { contact, profile } from "../../data/profile";
import resumePdf from "../../Assets/PrabuJayant_Resume.pdf";

const heroLinks = [
  { label: "LinkedIn", url: profile.links[0].url },
  { label: "GitHub", url: profile.links[1].url },
  { label: "Portfolio", url: profile.links[2].url },
];

const proofPoints = [
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
];

const signalCards = [
  {
    title: "Enterprise product work",
    body:
      "I currently work on classification tooling that combines React, Flask, PostgreSQL, human review loops, and Azure deployment.",
  },
  {
    title: "Research-backed engineering",
    body:
      "My projects and publications sit at the overlap of applied AI, SaaS observability, health monitoring, and network security.",
  },
  {
    title: "Execution under constraints",
    body:
      "I like building software that stays understandable under real operating constraints: scale, reviewability, security, and handoff clarity.",
  },
];

const workingStyle = [
  {
    title: "I build for trust, not just demos",
    body: "The systems I enjoy most are the ones that need auditability, clear operator flows, and resilient handoff between people and software.",
  },
  {
    title: "I like shipping the whole loop",
    body: "From data modeling and backend architecture to UI polish and cloud delivery, I tend to work across the full stack rather than a single layer.",
  },
  {
    title: "I care about operating reality",
    body: "Good software has to survive ambiguity, review cycles, and evolving requirements, especially in enterprise and AI-assisted products.",
  },
];

function Home() {
  return (
    <>
      <section className="page-section hero">
        <div className="layout-container">
          <div className="hero-split">
            <div className="hero-panel">
              <span className="hero-eyebrow">Available for software engineering roles</span>
              <h1 className="hero-title">{profile.tagline}</h1>
              <p className="hero-intro">{profile.intro}</p>
              <p className="hero-summary">{profile.summary}</p>

              <div className="hero-meta">
                <span>{profile.location}</span>
                <span>
                  <a href={contact.email} target="_blank" rel="noreferrer">{profile.email}</a>
                </span>
                <span>
                  <a href={contact.phone}>{profile.phone}</a>
                </span>
              </div>

              <div className="hero-actions">
                <a className="pill pill-primary" href={contact.email} target="_blank" rel="noreferrer">
                  Start a conversation
                </a>
                <a className="pill" href="/projects">
                  See selected work
                </a>
                <a className="pill" href={resumePdf} target="_blank" rel="noreferrer">
                  Download resume
                </a>
              </div>
              <p className="hero-note">
                Best fit: product-minded software engineering, AI-assisted workflows, distributed systems, and full-stack platform work.
              </p>
            </div>

            <aside className="hero-aside">
              <div>
                <p className="hero-aside__title">Why people remember this portfolio</p>
                <ul className="hero-aside__list">
                  <li>Clear proof of enterprise, research, and full-stack delivery.</li>
                  <li>Balanced for recruiters who scan fast and engineers who read deeper.</li>
                  <li>Built around outcomes, not just tool lists.</li>
                </ul>
              </div>
              <blockquote className="hero-aside__quote">
                I build software that stays calm under real constraints: review loops, security expectations, evolving requirements, and the need to hand systems off cleanly.
              </blockquote>
              <div className="button-row">
                {heroLinks.map(({ label, url }) => (
                  <a key={label} className="pill" href={url} target="_blank" rel="noreferrer">
                    {label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </aside>
          </div>

          <div className="proof-grid" aria-label="Quick proof points">
            {proofPoints.map((item) => (
              <article key={item.label} className="proof-card">
                <span className="proof-label">{item.label}</span>
                <strong className="proof-value">{item.value}</strong>
                <p className="proof-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <div className="statement-grid">
            <article className="statement-panel">
              <p className="card-kicker">How I work</p>
              <h2 className="statement-title">Technical depth with product calm.</h2>
              <p className="statement-copy">
                I enjoy problems where clear UX, dependable systems, and applied AI all need to coexist. That usually means solving for operator clarity and engineering quality at the same time.
              </p>
              <div className="statement-list">
                {workingStyle.map((item) => (
                  <div key={item.title} className="statement-item">
                    <strong>{item.title}</strong>
                    <span className="muted">{item.body}</span>
                  </div>
                ))}
              </div>
            </article>

            <aside className="accent-panel">
              <p className="mini-heading">Current momentum</p>
              <div className="mini-metrics">
                <div className="mini-metric">
                  <strong>Baker Hughes</strong>
                  <span className="muted">Building an AI-assisted classification workflow for enterprise operations.</span>
                </div>
                <div className="mini-metric">
                  <strong>4 publications</strong>
                  <span className="muted">Applied AI, cloud traffic classification, health monitoring, and network security.</span>
                </div>
                <div className="mini-metric">
                  <strong>Hackathon results</strong>
                  <span className="muted">Top 1% at CODE RED&apos;25 and Top 10 at the ELCIA Next-Gen Hackathon.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header">
            <h2 className="section-heading">Why my work tends to stick</h2>
            <p className="section-subheading">
              The common thread across my internships, projects, and papers is shipping practical systems that are easier to trust and easier to operate.
            </p>
          </header>
          <div className="grid three">
            {signalCards.map((card) => (
              <article key={card.title} className="content-card">
                <h3>{card.title}</h3>
                <p className="muted">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header section-header--inline">
            <div>
              <h2 className="section-heading">Selected work that acts as proof</h2>
              <p className="section-subheading">
                A few examples where architecture, product thinking, and implementation detail all mattered.
              </p>
            </div>
            <a className="pill project-link" href="/projects">
              Open full project page
            </a>
          </header>
          {profile.projects[0] && (
            <article className="project-featured">
              <div className="project-featured-head">
                <div>
                  <div className="inline-tags">
                    <span className="tag">{profile.projects[0].context}</span>
                    {profile.projects[0].status && <span className="tag">{profile.projects[0].status}</span>}
                  </div>
                  <h3 className="project-featured-title">{profile.projects[0].name}</h3>
                </div>
                {profile.projects[0].link && (
                  <a className="pill" href={profile.projects[0].link} target="_blank" rel="noreferrer">
                    View live proof
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
              <p className="muted">{profile.projects[0].summary}</p>
              <div className="project-outcome">
                <strong>Outcome</strong> {profile.projects[0].outcome}
              </div>
              <ul className="list-reset project-notes">
                <li>
                  <strong>Problem</strong> {profile.projects[0].goal}
                </li>
                <li>
                  <strong>System work</strong> {profile.projects[0].contribution}
                </li>
              </ul>
              <div className="stack-list">
                {profile.projects[0].stack.map((item) => (
                  <span key={item} className="stack-item">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          )}
          <div className="grid two">
            {profile.projects.slice(1).map((project) => (
              <article key={project.name} className="content-card">
                <div className="inline-tags">
                  <span className="tag">{project.context}</span>
                  {project.status && <span className="tag">{project.status}</span>}
                </div>
                <h3>{project.name}</h3>
                <p className="muted">{project.summary}</p>
                <div className="project-outcome">
                  <strong>Why it mattered</strong> {project.outcome}
                </div>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-item">
                      {item}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a className="pill" href={project.link} target="_blank" rel="noreferrer">
                    View project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
                {!project.link && <p className="muted">Project walkthrough available on request.</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header">
            <h2 className="section-heading">Experience that shaped how I build</h2>
            <p className="section-subheading">
              Recent work across enterprise workflows, SaaS observability, and production-oriented ML systems.
            </p>
          </header>
          <div className="timeline">
            {profile.experience.map((job) => (
              <article key={job.company} className="timeline-item">
                <span className="timeline-period">{job.period}</span>
                <div className="timeline-content">
                  <h3>{job.company}</h3>
                  <p className="muted">{job.role}</p>
                  <ul className="list-reset">
                    {job.accomplishments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header">
            <h2 className="section-heading">Signals recruiters and engineers care about</h2>
            <p className="section-subheading">
              Recognition, research, and leadership that back up the technical story.
            </p>
          </header>
          <div className="grid two">
            <article className="content-card">
              <h3>Selected achievements</h3>
              <ul className="simple-list">
                {profile.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
            <article className="content-card">
              <h3>Community and momentum</h3>
              <ul className="simple-list">
                {profile.leadership.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong> - {item.description}
                  </li>
                ))}
                <li>
                  <strong>Publications</strong> - {profile.publications.length} peer-reviewed papers spanning healthcare AI, network security, and SaaS traffic classification.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header">
            <h2 className="section-heading">Let&apos;s build something credible together</h2>
            <p className="section-subheading">
              I&apos;m most useful in software engineering work that combines product ownership, system depth, and pragmatic AI.
            </p>
          </header>
          <div className="content-card content-card--accent">
            <p className="muted">
              Email me at{" "}
              <a href={contact.email} target="_blank" rel="noreferrer">{profile.email}</a>{" "}
              or reach out on LinkedIn. I&apos;m happy to talk about full-stack engineering, AI-assisted workflows, collaborative systems, or research-backed product ideas.
            </p>
            <div className="button-row">
              <a className="pill pill-primary" href={contact.email} target="_blank" rel="noreferrer">
                Contact me
              </a>
              <a className="pill" href={profile.links[0].url} target="_blank" rel="noreferrer">
                Reach out on LinkedIn
              </a>
            </div>
            <div className="social-links">
              {profile.links.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer">
                  <span className="visually-hidden">{label}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
              <a href={contact.email} target="_blank" rel="noreferrer">
                <span className="visually-hidden">Email</span>@
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
