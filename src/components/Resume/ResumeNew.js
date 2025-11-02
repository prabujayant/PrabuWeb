import React, { useEffect, useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import resumePdf from "../../Assets/prabu_SG.pdf";

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
          <div>
            <span className="hero-eyebrow">Resume</span>
            <h1 className="hero-title">A snapshot of my work</h1>
            <p className="hero-summary">
              Here is the written version of my experience, projects, and research. Download the PDF for deeper context or skim the highlights below.
            </p>
            <div className="hero-actions">
              <a className="pill pill-primary" href={resumePdf} target="_blank" rel="noreferrer">
                Download PDF
                <ArrowDownToLine size={16} aria-hidden="true" />
              </a>
              <a className="pill" href="#resume-summary">
                View quick summary
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="resume-summary">
        <div className="layout-container">
          <header>
            <h2 className="section-heading">Quick summary</h2>
            <p className="section-subheading">
              Key highlights from my resume. On mobile, this section replaces the embedded PDF for a smoother experience.
            </p>
          </header>
          <div className="resume-summary">
            <article className="content-card">
              <h3>Experience</h3>
              <ul className="simple-list">
                <li>
                  <strong>Juniper Networks</strong> – Shipped an SSL proxy data pipeline and SaaS classifier that cut manual triage by ~60%.
                </li>
                <li>
                  <strong>SkySecure Ltd</strong> – Prototyped real-time threat detection and documented the validation workflow for analysts.
                </li>
              </ul>
            </article>
            <article className="content-card">
              <h3>Projects</h3>
              <ul className="simple-list">
                <li>
                  <strong>DefenSys</strong> – Research collaboration; Dockerised cyber defence platform used in published work.
                </li>
                <li>
                  <strong>Terra</strong> – Personal project; OCR-based carbon tracker with Firebase auth and analytics.
                </li>
                <li>
                  <strong>OnlyCabs</strong> – Hackathon prototype; microservices ride-hailing concept that placed top 10/500.
                </li>
              </ul>
            </article>
            <article className="content-card">
              <h3>Academics & skills</h3>
              <ul className="simple-list">
                <li>RV College of Engineering – B.E. CSE (Cybersecurity), GPA 8.75, 2022–2026.</li>
                <li>Comfortable with Python, Java, JavaScript/TypeScript, React, Flask, Node.js, Firebase, Docker.</li>
                <li>Interests: ML pipelines, platform security, developer experience.</li>
              </ul>
            </article>
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
            <header>
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
