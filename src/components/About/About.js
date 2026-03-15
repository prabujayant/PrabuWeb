import React from "react";
import { contact, profile } from "../../data/profile";

function About() {
  return (
    <>
      <section className="page-section hero">
        <div className="layout-container">
          <div className="hero-split">
            <div className="hero-panel">
              <span className="hero-eyebrow">About</span>
              <h1 className="hero-title">Building AI-assisted software with calm execution</h1>
              <p className="hero-summary">
                This page is the longer story behind the portfolio: how I work, what I optimize for, and the internships and communities that shaped my approach.
              </p>
              <div className="hero-meta">
                <span>{profile.location}</span>
                <span>{profile.education[0].degree}</span>
                <span>{profile.education[0].period}</span>
              </div>
            </div>
            <aside className="accent-panel">
              <p className="mini-heading">What shapes my approach</p>
              <div className="mini-metrics">
                <div className="mini-metric">
                  <strong>Systems-first mindset</strong>
                  <span className="muted">I like products that need good data models, clear ownership, and reliable operating behavior.</span>
                </div>
                <div className="mini-metric">
                  <strong>Applied AI bias</strong>
                  <span className="muted">I&apos;m most interested in AI where accuracy, reviewability, and trust matter in real use.</span>
                </div>
                <div className="mini-metric">
                  <strong>Full-stack comfort</strong>
                  <span className="muted">Frontend clarity, backend design, and cloud delivery all show up in the work I enjoy.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <div className="statement-grid">
            <article className="statement-panel">
              <p className="card-kicker">Current role</p>
              <h2 className="statement-title">Baker Hughes taught me how product engineering meets operational reality.</h2>
              <p className="statement-copy">
                I am working on a product classification platform used to manage enterprise request intake, regional routing, and partner-facing review loops. The work sits at the intersection of product engineering, data modeling, and applied AI.
              </p>
              <div className="statement-list">
                <div className="statement-item">
                  <strong>Workflow design</strong>
                  <span className="muted">Built the full-stack workflow with React, Flask, and PostgreSQL so teams can intake, track, and review classifications at scale.</span>
                </div>
                <div className="statement-item">
                  <strong>Data modeling</strong>
                  <span className="muted">Designed normalized schemas for requests, attachments, line items, and audit trails with optimized filtering and export paths.</span>
                </div>
                <div className="statement-item">
                  <strong>Applied AI delivery</strong>
                  <span className="muted">Integrated a hybrid BERT-CNN prediction flow with human approval steps and validated the application on Microsoft Azure.</span>
                </div>
              </div>
            </article>
            <aside className="accent-panel">
              <p className="mini-heading">What I optimize for</p>
              <div className="mini-metrics">
                <div className="mini-metric">
                  <strong>Auditability</strong>
                  <span className="muted">Operators need workflows they can understand and trust.</span>
                </div>
                <div className="mini-metric">
                  <strong>Pragmatic AI</strong>
                  <span className="muted">Predictions matter most when they fit cleanly into review loops.</span>
                </div>
                <div className="mini-metric">
                  <strong>Steady execution</strong>
                  <span className="muted">Real enterprise systems win when they are clear, durable, and easy to hand off.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header">
            <h2 className="section-heading">Earlier work at Juniper Networks</h2>
            <p className="section-subheading">
              The internship that sharpened how I think about data pipelines, validation, and production-facing ML systems.
            </p>
          </header>
          <div className="content-card">
            <p>
              At Juniper Networks I worked on SaaS traffic intelligence, where the challenge was not only building the pipeline but making its
              outputs trustworthy enough for teams downstream to rely on them.
            </p>
            <ul className="simple-list">
              <li>Engineered a high-throughput SSL proxy pipeline with Python automation for real-time SaaS traffic decryption and monitoring.</li>
              <li>Built a classification service that reached 98% accuracy for known services through backend tuning and validation work.</li>
              <li>Helped expand the validated dataset used by downstream ML systems while collaborating across a hybrid agile team.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header">
            <h2 className="section-heading">Education and community</h2>
            <p className="section-subheading">
              The academic grounding and leadership contexts that support the technical work.
            </p>
          </header>
          <div className="grid two">
            {profile.education.map((edu) => (
              <article key={edu.school} className="content-card content-card--accent">
                <div className="inline-tags">
                  <span className="tag">{edu.period}</span>
                  {edu.gpa && <span className="tag">{edu.gpa}</span>}
                </div>
                <h3>{edu.school}</h3>
                <p className="muted">{edu.degree}</p>
                {edu.coursework && <p>{edu.coursework.join(", ")}</p>}
              </article>
            ))}
            {profile.leadership.map((item) => (
              <article key={item.title} className="content-card">
                <div className="inline-tags">
                  <span className="tag">{item.period}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header section-header--inline">
            <h2 className="section-heading">Technical stack</h2>
            <p className="section-subheading">
              The tools and systems I reach for most across product engineering, ML workflows, and cloud delivery.
            </p>
          </header>
          <div className="grid two">
            {profile.skills.map((group) => (
              <article key={group.title} className="content-card">
                <h3>{group.title}</h3>
                <div className="stack-list">
                  {group.items.map((item) => (
                    <span key={item} className="stack-item">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header">
            <h2 className="section-heading">What I&apos;m looking for</h2>
            <p className="section-subheading">
              Teams where product engineering, systems thinking, and practical AI overlap in meaningful ways.
            </p>
          </header>
          <div className="content-card content-card--accent">
            <p className="muted">
              I&apos;m especially drawn to work that spans backend systems, collaborative web apps, ML-assisted workflows, and cloud delivery.
              If you are building in those spaces and want someone who can own the full stack, let&apos;s talk.
            </p>
            <div className="about-contact">
              <a className="pill pill-primary" href={contact.email} target="_blank" rel="noreferrer">
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
