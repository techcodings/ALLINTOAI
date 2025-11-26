import React from "react";
import { Link } from "react-router-dom";

/* ======= DATA CONFIG ======= */

const featureStats = [
  { label: "Core AI Services", value: "6+", detail: "AIaaS, automation & infra" },
  { label: "Enterprise Data Sources", value: "50+", detail: "APIs, DBs & streams" },
  { label: "ML Models", value: "12+", detail: "Optimised for production" },
  { label: "Automation Workflows", value: "30+", detail: "End-to-end processes" }
];

const Home = () => {
  return (
    <div className="page page-home">
      {/* HERO */}
      <section className="hero-wrap hero-neon">
        <div className="hero-background-grid" />

        <div className="hero-content">
          {/* LEFT TEXT */}
          <div className="hero-left animate-up">
            <div className="hero-tag-row">
              <span className="hero-pill">
                IT Services · AI-as-a-Service · Automation
              </span>
            </div>

            <h1 className="hero-title">
              The Future of
              <span className="hero-title-accent"> Intelligent IT &amp; AI.</span>
            </h1>

            <p className="hero-subtitle">
              All Into AI helps businesses move from AI experiments to production
              systems that actually run the business—automating workflows,
              supercharging decisions and making infrastructure ready for AI workloads.
            </p>

            <div className="hero-cta-row">
              <Link to="/contact" className="btn btn-primary hero-cta-main">
                Get a Consultation
              </Link>
              <Link to="/services" className="btn btn-ghost">
                View Services
              </Link>
            </div>
          </div>

          {/* RIGHT – CONTROL PANEL CARD */}
          <div className="hero-right animate-up-delayed">
            <div className="hero-panel hero-panel-neon">
              <div className="hero-panel-header">
                <h3>Live IT &amp; AI Control</h3>
                <span className="hero-status-dot">Healthy</span>
              </div>
              <p className="hero-panel-text">
                A single view of your apps, infrastructure and AI automations—
                exactly how an IT &amp; AI company should monitor your stack.
              </p>

              <div className="hero-panel-tabs">
                <span className="tab active">Cloud Deployments</span>
                <span className="tab">API Health</span>
                <span className="tab">AI Workflows</span>
              </div>

              <div className="hero-panel-metrics">
                <div className="metric-row">
                  <span>Active Services</span>
                  <span>24</span>
                </div>
                <div className="metric-row">
                  <span>Deployments Today</span>
                  <span>18</span>
                </div>
                <div className="metric-row">
                  <span>Incident Status</span>
                  <span style={{ color: "#4ade80" }}>0 · Stable</span>
                </div>
              </div>

              <div className="hero-mini-strip">
                <div className="mini-card">
                  <span className="mini-label">DevOps Pipeline</span>
                  <span className="mini-value">Running · 6 stages</span>
                  <span className="mini-bar mini-bar-green" />
                </div>
                <div className="mini-card">
                  <span className="mini-label">Support Queue</span>
                  <span className="mini-value">Handled · 92%</span>
                  <span className="mini-bar mini-bar-yellow" />
                </div>
              </div>

              <p className="hero-footer-note">
                This is how we think about IT &amp; AI: observable, automated and
                always-on.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span className="scroll-dot" />
          <span>Scroll to explore All Into AI</span>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section stats-strip animate-up">
        {featureStats.map((item) => (
          <div className="stats-card" key={item.label}>
            <div className="stats-icon" />
            <div className="stats-main">
              <span className="stats-value">{item.value}</span>
              <span className="stats-label">{item.label}</span>
              <span className="stats-detail">{item.detail}</span>
            </div>
          </div>
        ))}
      </section>

      {/* TOGETHER WITH AI – LOGO IMAGE SECTION */}
      <section className="section hero-secondary animate-up" id="intro-logo">
        <div className="two-col">
          {/* LEFT */}
          <div>
            <h2>Together With AI.</h2>
            <p>
              We help businesses move from AI experiments to production systems
              that actually run the business—automating workflows, supercharging
              decisions and making infrastructure ready for AI workloads.
            </p>
            <ul className="bullet-list">
              <li>
                Automate complex, cross-team workflows with AI orchestration.
              </li>
              <li>
                Deploy models with observability, versioning and safe rollbacks.
              </li>
              <li>
                Build AI-ready data &amp; infrastructure foundations from day one.
              </li>
            </ul>
          </div>

          {/* RIGHT – YOUR UPLOADED LOGO AS IMAGE CARD */}
          <div>
            <div className="video-shell">
              <img
                src="/logo-allintoai.png"
                alt="All Into AI logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LINK TO SERVICES */}
      <section className="section section-soft animate-up">
        <div className="section-header">
          <h2>Core IT &amp; AI Services</h2>
          <p>
            Six service pillars that cover the full lifecycle—from discovery to
            deployment and ongoing optimisation.
          </p>
        </div>

        <div className="section-cta">
          <Link to="/services" className="btn btn-primary">
            Explore All Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
