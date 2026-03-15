import React from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";

function Projects() {
  return (
    <>
      <section className="page-section hero">
        <div className="layout-container">
          <div className="hero-split">
            <div className="hero-panel">
              <span className="hero-eyebrow">Projects</span>
              <h1 className="hero-title">Product work, systems thinking, and research evidence</h1>
              <p className="hero-summary">
                This page is the proof layer: the projects I built, the systems problems they addressed, and the publications that reinforce where I go deep.
              </p>
              <div className="hero-actions">
                <a className="pill pill-primary" href="/resume">
                  View recruiter summary
                </a>
                <a className="pill" href="mailto:prabu.jayant2022@gmail.com" target="_blank" rel="noreferrer">
                  Discuss a role
                </a>
              </div>
            </div>
            <aside className="accent-panel">
              <p className="mini-heading">What this page proves</p>
              <div className="mini-metrics">
                <div className="mini-metric">
                  <strong>Architecture ownership</strong>
                  <span className="muted">The projects show system decisions, not just interface screenshots.</span>
                </div>
                <div className="mini-metric">
                  <strong>Research credibility</strong>
                  <span className="muted">Publications reinforce the technical areas I consistently work in.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header">
            <h2 className="section-heading">Product builds</h2>
            <p className="section-subheading">
              Full-stack workstreams where architecture, implementation, and operating constraints all mattered.
            </p>
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
                    Open project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
              <p className="muted">{profile.projects[0].summary}</p>
              <ul className="list-reset project-notes">
                <li>
                  <strong>Problem</strong> {profile.projects[0].goal}
                </li>
                <li>
                  <strong>System work</strong> {profile.projects[0].contribution}
                </li>
              </ul>
              <div className="project-outcome">
                <strong>Outcome</strong> {profile.projects[0].outcome}
              </div>
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
                <ul className="list-reset project-notes">
                  <li>
                    <strong>Problem</strong> {project.goal}
                  </li>
                  <li>
                    <strong>System work</strong> {project.contribution}
                  </li>
                  <li>
                    <strong>Outcome</strong> {project.outcome}
                  </li>
                </ul>
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
                {!project.link && <p className="muted">Private build. Happy to walk through the architecture on request.</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header className="section-header">
            <h2 className="section-heading">Publications as credibility</h2>
            <p className="section-subheading">
              Four peer-reviewed publications that reinforce my work in applied AI, security, cloud traffic classification, and systems-oriented research.
            </p>
          </header>
          <div className="grid two">
            {profile.publications.map(({ title, venue, year, citedBy, summary, link }) => (
              <article key={title} className="content-card publication-card">
                <div className="inline-tags">
                  {venue && <span className="tag">{venue}</span>}
                  {year && <span className="tag">{year}</span>}
                  {citedBy && <span className="tag">{citedBy}</span>}
                </div>
                <h3>{title}</h3>
                {summary && <p className="muted">{summary}</p>}
                <a className="pill" href={link} target="_blank" rel="noreferrer">
                  View publication
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
