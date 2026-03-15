import React, { useEffect, useState } from "react";
import { ArrowDownToLine, AlertCircle } from "lucide-react";
import { profile } from "../../data/profile";

// Handle missing resume PDF gracefully
let resumePdf = null;
try {
  resumePdf = require("../../Assets/PrabuJayant_Resume.pdf").default || require("../../Assets/PrabuJayant_Resume.pdf");
} catch (e) {
  console.warn("Resume PDF not found, using contact fallback");
}

const resumeSignals = [
  {
    label: "Experience",
    value: "2 internships",
    detail: "Baker Hughes and Juniper Networks",
  },
  {
    label: "Publications",
    value: `${profile.publications.length} papers`,
    detail: "IEEE Access, ICCCNT, ICWIHI, and applied AI venues",
  },
  {
    label: "Focus",
    value: "Full stack + ML",
    detail: "Systems, data modeling, cloud delivery, and applied AI",
  },
];

function ResumeNew() {
  const [canEmbed, setCanEmbed] = useState(false);
  const [previewRequested, setPreviewRequested] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      setCanEmbed(true);
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setCanEmbed(mediaQuery.matches);
    update();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  const shouldShowPreview = canEmbed || previewRequested;

  return (
    <>
      <section className="page-section hero">
        <div className="layout-container">
          <div className="hero-split">
            <div className="hero-panel">
              <span className="hero-eyebrow">Resume</span>
              <h1 className="hero-title">A recruiter-friendly snapshot of my current work</h1>
              <p className="hero-summary">
                This page is the concise version of my latest experience, projects, and research. Download the PDF for the formal record or skim the highlights below.
              </p>
              <div className="hero-actions">
                {resumePdf ? (
                  <a className="pill pill-primary" href={resumePdf} target="_blank" rel="noreferrer" download>
                    Download PDF
                    <ArrowDownToLine size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <a className="pill pill-primary" href="mailto:prabu.jayant2022@gmail.com" target="_blank" rel="noreferrer" title="PDF not available, contact directly">
                    Request Resume
                    <AlertCircle size={16} aria-hidden="true" />
                  </a>
                )}
                <a className="pill" href="#resume-summary">
                  View quick summary
                </a>
              </div>
            </div>

            <div className="proof-grid" aria-label="Resume highlights">
              {resumeSignals.map((item) => (
                <article key={item.label} className="proof-card">
                  <span className="proof-label">{item.label}</span>
                  <strong className="proof-value">{item.value}</strong>
                  <p className="proof-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="resume-summary">
        <div className="layout-container">
          <div className="resume-summary">
            <article className="resume-summary-highlight">
              <p className="card-kicker">Quick summary</p>
              <h2>The important story, without making someone dig through the PDF.</h2>
              <p className="muted">
                This is the version I would want a recruiter or hiring engineer to understand first. On mobile, it intentionally does more work than the embedded preview.
              </p>
              <div className="button-row">
                <a className="pill pill-primary" href={profile.links[0].url} target="_blank" rel="noreferrer">
                  View LinkedIn
                </a>
                {resumePdf && (
                  <a className="pill" href={resumePdf} target="_blank" rel="noreferrer" download>
                    Open PDF in a new tab
                  </a>
                )}
              </div>
            </article>
            <div className="resume-summary-columns">
              <article className="content-card">
                <h3>Experience</h3>
                <ul className="simple-list">
                  <li>
                    <strong>Baker Hughes</strong> - Built an AI-assisted product classification platform with React, Flask, PostgreSQL, and Azure-backed deployment.
                  </li>
                  <li>
                    <strong>Juniper Networks</strong> - Engineered an SSL proxy pipeline and SaaS classification service that reached 98% accuracy.
                  </li>
                </ul>
              </article>
              <article className="content-card">
                <h3>Projects</h3>
                <ul className="simple-list">
                  <li>
                    <strong>CoLab</strong> - Real-time collaboration platform built with CRDTs, WebSockets, Redis, and PostgreSQL.
                  </li>
                  <li>
                    <strong>DefenSys</strong> - Cyber defense platform with a React dashboard, Flask services, and Redis-backed defense workflows.
                  </li>
                </ul>
              </article>
              <article className="content-card">
                <h3>Academics and research</h3>
                <ul className="simple-list">
                  <li>RV College of Engineering - B.E. CSE (Cybersecurity), GPA 8.75, 2022-2026.</li>
                  <li>Hands-on with React, Next.js, Flask, Node.js, PostgreSQL, Redis, Azure, Docker, and OpenAI-era tooling.</li>
                  <li>Co-authored four peer-reviewed papers, including work in IEEE Access and on applied AI for health and network security.</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      {!shouldShowPreview && (
        <section className="page-section">
          <div className="layout-container">
            <div className="content-card resume-preview-fallback">
              <p className="muted">
                The embedded preview is disabled on smaller screens to keep the page lightweight. You can still download the PDF or load the preview manually.
              </p>
              <button type="button" className="pill" onClick={() => setPreviewRequested(true)}>
                Load embedded preview
              </button>
            </div>
          </div>
        </section>
      )}

      {shouldShowPreview && (
        <section className="page-section" id="resume-preview">
          <div className="layout-container">
            <header className="section-header">
              <h2 className="section-heading">Inline preview</h2>
              <p className="section-subheading">
                Scroll through the current resume below or open the PDF in a new tab for a closer look.
              </p>
            </header>
            <div className="resume-viewer">
              <iframe
                src={resumePdf}
                title="Prabu Jayant resume preview"
                className="resume-frame"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ResumeNew;
