import React from "react";
import { ArrowUpRight } from "lucide-react";
import { contact, profile } from "../../data/profile";
import resumePdf from "../../Assets/prabu_SG.pdf";

const heroLinks = [
  { label: "LinkedIn", url: profile.links[0].url },
  { label: "GitHub", url: profile.links[1].url },
  { label: "Portfolio", url: profile.links[2].url },
];

function Home() {
  return (
    <>
      <section className="page-section hero">
        <div className="layout-container">
          <div>
            <span className="hero-eyebrow">Hello, I&apos;m {profile.name}</span>
            <h1 className="hero-title">{profile.tagline}</h1>
            <p className="hero-intro">{profile.intro}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>
                <a href={contact.email}>{profile.email}</a>
              </span>
              <span>
                <a href={contact.phone}>{profile.phone}</a>
              </span>
            </div>

            <div className="hero-actions">
              <a className="pill pill-primary" href={contact.email}>
                Email me
              </a>
              <a className="pill" href={resumePdf} target="_blank" rel="noreferrer">
                Download resume
              </a>
              {heroLinks.map(({ label, url }) => (
                <a key={label} className="pill" href={url} target="_blank" rel="noreferrer">
                  {label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Where I&apos;ve spent my time</h2>
            <p className="section-subheading">
              Shipping end-to-end software with small, sharp teams.
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
          <header>
            <h2 className="section-heading">Projects I keep coming back to</h2>
            <p className="section-subheading">
              Quietly opinionated builds where I owned the stack end-to-end.
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
            <h2 className="section-heading">Learning with others</h2>
            <p className="section-subheading">
              Programmes where I helped teams collaborate and ship together.
            </p>
          </header>
          <div className="grid two">
            {profile.leadership.map((item) => (
              <article key={item.title} className="content-card">
                <div className="inline-tags">
                  <span className="tag">{item.period}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Moments I&apos;m grateful for</h2>
            <p className="section-subheading">
              Recognition that keeps me grounded and curious.
            </p>
          </header>
          <ul className="simple-list">
            {profile.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Let&apos;s build together</h2>
            <p className="section-subheading">
              I am open to full-stack, AI, and product roles where execution and ownership matter.
            </p>
          </header>
          <div className="content-card">
            <p className="muted">
              Email me at{" "}
              <a href={contact.email}>{profile.email}</a>{" "}
              or schedule time on LinkedIn. Happy to jam on early ideas, tech strategy, or research.
            </p>
            <div className="social-links">
              {profile.links.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer">
                  <span className="visually-hidden">{label}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
              <a href={contact.email}>
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
