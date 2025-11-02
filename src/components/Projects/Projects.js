import React from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";

const research = [
  {
    title: "Adaptive ML for SaaS Traffic Classification",
    venue: "ICWIHI 2025",
    link: "https://drive.google.com/file/d/1B3tt_W8u3wbktvR13hm7hObToNdV87Ww/view",
  },
  {
    title: "Smart Health Monitoring using IoT & AI",
    venue: "ICoICI 2024",
    link: "https://ieeexplore.ieee.org/document/10724486",
  },
  {
    title: "Intrusion Detection in Network Traffic Using LSTM",
    venue: "IEEE ICCCNT 2024",
    link: "https://ieeexplore.ieee.org/document/10696283",
  },
];

function Projects() {
  return (
    <>
      <section className="page-section hero">
        <div className="layout-container">
          <div>
            <span className="hero-eyebrow">Projects</span>
            <h1 className="hero-title">Hands-on products and research</h1>
            <p className="hero-summary">
              I like to build focused tools that blend thoughtful UX with dependable systems. Here are a few that mattered recently.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Product builds</h2>
            <p className="section-subheading">
              Full-stack workstreams where I owned architecture, implementation, and delivery.
            </p>
          </header>
          <div className="grid two">
            {profile.projects.map((project) => (
              <article key={project.name} className="content-card">
                <div className="inline-tags">
                  <span className="tag">{project.context}</span>
                  {project.status && <span className="tag">{project.status}</span>}
                </div>
                <h3>{project.name}</h3>
                <p className="muted">{project.summary}</p>
                <ul className="list-reset project-notes">
                  <li>
                    <strong>Goal</strong> {project.goal}
                  </li>
                  <li>
                    <strong>My role</strong> {project.contribution}
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Research writing</h2>
            <p className="section-subheading">
              Publications exploring applied ML, IoT health, and SaaS observability.
            </p>
          </header>
          <div className="grid two">
            {research.map(({ title, venue, link }) => (
              <article key={title} className="content-card">
                <h3>{title}</h3>
                <p className="muted">{venue}</p>
                {link && (
                  <a className="pill" href={link} target="_blank" rel="noreferrer">
                    Read paper
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
