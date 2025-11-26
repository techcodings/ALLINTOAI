// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

/* ======= DATA CONFIG ======= */

const featureStats = [
  { label: "Core AI Services", value: "6+", detail: "AIaaS, automation & infra" },
  { label: "Enterprise Data Sources", value: "50+", detail: "APIs, DBs & streams" },
  { label: "ML Models", value: "12+", detail: "Optimised for production" },
  { label: "Automation Workflows", value: "30+", detail: "End-to-end processes" }
];

/* 🔵 Home preview – 6 services (use your 6 service images here) */
const homeServices = [
  {
    title: "Custom AI / ML Solutions",
    image: "/media/services/svc-1.png",
    points: [
      "End-to-end model design, training and deployment",
      "Computer vision, NLP and predictive analytics",
      "Security, monitoring and lifecycle management"
    ]
  },
  {
    title: "Data Engineering & Platforms",
    image: "/media/services/svc-2.png",
    points: [
      "Build AI-ready data lakes and warehouses",
      "Streaming pipelines and real-time analytics",
      "Governance, quality and observability built-in"
    ]
  },
  {
    title: "AI-Powered Automation",
    image: "/media/services/svc-3.png",
    points: [
      "Workflow orchestration across apps and teams",
      "Human-in-the-loop review where it matters",
      "Measurable time-savings and error reduction"
    ]
  },
  {
    title: "Cloud & DevOps for AI",
    image: "/media/services/svc-4.png",
    points: [
      "Kubernetes, MLOps and GPU-ready infra",
      "Secure CI/CD with rollbacks and blue-green",
      "Cost optimisation for AI workloads"
    ]
  },
  {
    title: "Conversational AI & Assistants",
    image: "/media/services/svc-5.png",
    points: [
      "Domain-tuned virtual agents and copilots",
      "Omni-channel support (web, chat, voice)",
      "Analytics on intents, CSAT and deflection"
    ]
  },
  {
    title: "AI Advisory & Strategy",
    image: "/media/services/svc-6.png",
    points: [
      "Roadmaps from POC to production",
      "Use-case discovery with your business teams",
      "Risk, compliance & responsible-AI guidance"
    ]
  }
];

/* 🏭 5 industries preview (use your 5 industry images here) */
const homeIndustries = [
  {
    title: "Healthcare & Life Sciences",
    image: "/media/industries/ind-1.png",
    description:
      "Clinical insights, imaging, patient engagement and operational optimisation with AI."
  },
  {
    title: "Financial Services",
    image: "/media/industries/ind-2.png",
    description:
      "Fraud detection, risk modelling, KYC automation and AI-powered customer journeys."
  },
  {
    title: "Retail & eCommerce",
    image: "/media/industries/ind-3.png",
    description:
      "Demand forecasting, recommendation engines, pricing optimisation and chat commerce."
  },
  {
    title: "Manufacturing & Industry 4.0",
    image: "/media/industries/ind-4.png",
    description:
      "Predictive maintenance, quality control and smart factory analytics at scale."
  },
  {
    title: "Telecom & Media",
    image: "/media/industries/ind-5.png",
    description:
      "Network intelligence, churn prediction and personalised content experiences."
  }
];

/* 🔵 Promo media – 2 videos + brochure PDF */
const promoVideos = [
  {
    title: "All Into AI · 60s Overview",
    description: "A quick tour of how we blend IT services with AI-driven automation.",
    src: "/media/promo1.mp4",
    duration: "1:00"
  },
  {
    title: "Platform Walkthrough",
    description: "See the live control panel, monitoring and AI workflow orchestration.",
    src: "/media/promo2.mp4",
    duration: "1:30"
  }
];

const BROCHURE_URL = "/media/brochure.pdf";

const Home = () => {
  return (
    <div className="page page-home">
      {/* ================= HERO ================= */}
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
              systems that actually run the business—automating workflows, supercharging
              decisions and making infrastructure ready for AI workloads.
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
                  <span style={{ color: "var(--accent)" }}>0 · Stable</span>
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

      {/* ================= STATS STRIP ================= */}
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

      {/* ================= SERVICES PREVIEW (6 CARDS) ================= */}
      <section className="section animate-up">
        <div className="section-header">
          <h2>AI / ML Services We Deliver</h2>
          <p>
            From strategy and data engineering to automation and MLOps, our team
            runs the full lifecycle so your AI projects don&apos;t get stuck in POC mode.
          </p>
        </div>

        <div className="service-grid">
          {homeServices.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-media">
                <div className="service-image-shell">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/services" className="btn btn-primary">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* ================= INDUSTRIES PREVIEW (5 CARDS) ================= */}
      <section className="section section-industries animate-up">
        <div className="section-header">
          <h2>Industries We Work With</h2>
          <p>
            All Into AI brings a repeatable blueprint for applying AI across different
            sectors, tailored to your regulations, data, and customer journeys.
          </p>
        </div>

        <div className="industries-grid">
          {homeIndustries.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <div className="industry-image-shell">
                <img src={industry.image} alt={industry.title} />
              </div>
              <div className="industry-body">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= TOGETHER WITH AI – LOGO SECTION ================= */}
      <section className="section hero-secondary animate-up" id="intro-logo">
        <div className="two-col">
          <div>
            <h2>Together With AI.</h2>
            <p>
              We help businesses move from AI experiments to production systems
              that actually run the business—automating workflows, supercharging
              decisions and making infrastructure ready for AI workloads.
            </p>
            <ul className="bullet-list">
              <li>Automate complex, cross-team workflows with AI orchestration.</li>
              <li>Deploy models with observability, versioning and safe rollbacks.</li>
              <li>Build AI-ready data &amp; infrastructure foundations from day one.</li>
            </ul>
          </div>

          <div>
            <div className="video-shell">
              <img src="/logo-allintoai.png" alt="All Into AI logo" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEDIA: VIDEOS + BROCHURE ================= */}
      <section className="section media-section animate-up">
        <div className="section-header">
          <h2>See All Into AI in Action</h2>
          <p>
            Watch short promos and download the brochure to understand how we
            combine IT services, automation and AI to modernise your stack.
          </p>
        </div>

        <div className="media-grid">
          {promoVideos.map((video) => (
            <article className="media-card" key={video.title}>
              <div className="media-video-shell">
                <video src={video.src} controls preload="metadata" />
                <div className="media-video-overlay">
                  <span className="media-pill">Promo Video</span>
                  <span className="media-duration">{video.duration}</span>
                </div>
              </div>
              <h3 className="media-title">{video.title}</h3>
              <p className="media-description">{video.description}</p>
            </article>
          ))}

          {/* Brochure card */}
          <article className="media-card brochure-card">
            <div className="brochure-shell">
              <span className="media-pill">PDF · Company Brochure</span>
              <h3 className="media-title">All Into AI Capability Overview</h3>
              <p className="media-description">
                A concise, client-ready PDF that covers our services, tech stack,
                delivery model and sample use cases across industries.
              </p>
              <a
                href={BROCHURE_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Brochure
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="section section-soft animate-up">
        <div className="section-header">
          <h2>Ready to Bring AI into Your Stack?</h2>
          <p>
            Share a use-case, a dataset or just your business challenge. We&apos;ll
            respond with a concrete way to test value in weeks—not years.
          </p>
        </div>

        <div className="section-cta">
          <Link to="/contact" className="btn btn-primary">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
