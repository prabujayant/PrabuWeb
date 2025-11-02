import React from "react";
import { contact, profile } from "../../data/profile";

function About() {
  return (
    <>
      <section className="page-section hero">
        <div className="layout-container">
          <div>
            <span className="hero-eyebrow">About</span>
            <h1 className="hero-title">Building thoughtful, useful software</h1>
            <p className="hero-summary">
              Away from the quick snapshots on the home page, here&apos;s the longer version of my story--how I pick up new domains quickly,
              keep teams in the loop, and bring a calm bias for getting things done.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Internship snapshot</h2>
            <p className="section-subheading">
              A closer look at the Juniper Networks project that shaped how I approach software today.
            </p>
          </header>
          <div className="content-card">
            <p>
              During my Jul 2024 – Feb 2025 stint at Juniper Networks I helped build an SSL proxy pipeline so our teams could finally see what
              SaaS traffic looked like in the wild. I paired with data scientists to understand the semantics, collaborated with platform engineers
              on deployment, and kept product managers posted through weekly show-and-tells.
            </p>
            <ul className="simple-list">
              <li>Designed the ingest and labelling flow that now feeds three analytics teams with fresh, trustworthy datasets.</li>
              <li>Productionised a classifier that sustains 98% accuracy, trimming manual log triage for the pilot group by around 60%.</li>
              <li>Documented validation playbooks and on-call notes so the next student rotation could iterate without hand-holding.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Collaborating at SkySecure</h2>
            <p className="section-subheading">
              How a short internship taught me to balance fast iteration with the guardrails security teams expect.
            </p>
          </header>
          <div className="content-card">
            <p>
              At SkySecure I joined a compact team for six weeks, working directly with security analysts who needed faster signal on live traffic.
              I owned a small streaming prototype, but more importantly I learned how to keep everyone confident in the results.
            </p>
            <ul className="simple-list">
              <li>Met daily with analysts to understand what “actionable” meant for them and folded their feedback into the model loop.</li>
              <li>Documented edge cases and alert thresholds so analyst teams could continue experimenting after I handed the project over.</li>
              <li>Left with a better instinct for designing developer tooling that respects both speed and safety.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Education</h2>
            <p className="section-subheading">
              Grounded in computer science fundamentals with a bias for applied projects.
            </p>
          </header>
          <div className="grid">
            {profile.education.map((edu) => (
              <article key={edu.school} className="content-card">
                <div className="inline-tags">
                  <span className="tag">{edu.period}</span>
                  {edu.gpa && <span className="tag">{edu.gpa}</span>}
                </div>
                <h3>{edu.school}</h3>
                <p className="muted">{edu.degree}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Technical stack</h2>
            <p className="section-subheading">
              Tools I reach for when designing responsive product experiences and dependable services.
            </p>
          </header>
          <div className="grid two">
            <article className="content-card">
              <h3>Languages</h3>
              <div className="stack-list">
                {profile.skills.languages.map((item) => (
                  <span key={item} className="stack-item">
                    {item}
                  </span>
                ))}
              </div>
            </article>
            <article className="content-card">
              <h3>Frameworks & tooling</h3>
              <div className="stack-list">
                {profile.skills.technologies.map((item) => (
                  <span key={item} className="stack-item">
                    {item}
                  </span>
                ))}
              </div>
            </article>
            <article className="content-card">
              <h3>Core concepts</h3>
              <div className="stack-list">
                {profile.skills.concepts.map((item) => (
                  <span key={item} className="stack-item">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">What&apos;s next</h2>
            <p className="section-subheading">
              I am actively looking for roles that combine full-stack build cycles, AI-assisted tooling, and product storytelling.
            </p>
          </header>
          <div className="content-card">
            <p className="muted">
              If you are building in these spaces or want a collaborator who can own the full stack, let&apos;s talk. I am especially excited
              about teams shipping pragmatic AI products, developer tooling, and platform experiences for builders.
            </p>
            <p className="muted">
              Current availability: open to Software Engineer roles focused on AI, platform security, or SDE internships starting Summer 2025.
            </p>
            <div className="about-contact">
              <a className="pill pill-primary" href={contact.email}>
                Drop me an email
              </a>
              <a className="pill" href={profile.links[0].url} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
