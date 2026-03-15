import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.error("Unhandled UI error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="page-section">
          <div className="layout-container">
            <div className="content-card content-card--accent">
              <p className="card-kicker">Unexpected error</p>
              <h2 className="section-heading">This page hit a rendering issue.</h2>
              <p className="muted">
                Refresh the page or try a different section. If it keeps happening, email me and I&apos;ll sort it out quickly.
              </p>
              <a className="pill pill-primary" href="mailto:prabu.jayant2022@gmail.com">
                Contact me
              </a>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
