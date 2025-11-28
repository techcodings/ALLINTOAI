// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ======= DATA CONFIG ======= */

const featureStats = [
  {
    label: "Backend & API Projects",
    value: "40+",
    detail: "SaaS, microservices & integrations"
  },
  {
    label: "AI & GenAI Use Cases",
    value: "25+",
    detail: "Assistants, copilots & automation"
  },
  {
    label: "Cloud Deployments",
    value: "3+",
    detail: "AWS · Azure · GCP ready"
  },
  {
    label: "Industries Served",
    value: "5+",
    detail: "B2B focus across verticals"
  }
];

/* === 6 services preview (MATCHING Services.jsx) === */
const homeServices = [
  {
    title: "Backend & API Engineering",
    image: "/media/services/svc-1.png",
    category: "SaaS Backend",
    points: [
      "Design and build REST / GraphQL APIs for web and mobile.",
      "Multi-tenant SaaS architectures with proper tenancy isolation.",
      "PostgreSQL / MySQL, Redis, caching and observability."
    ]
  },
  {
    title: "AI Model Development & GenAI Features",
    image: "/media/services/svc-2.png",
    category: "GenAI & ML",
    points: [
      "Classical ML and GenAI features integrated into your product.",
      "Use OpenAI or open-source LLMs depending on your constraints.",
      "Guardrails, logging and evaluation loops built in."
    ]
  },
  {
    title: "Data & AI Infrastructure",
    image: "/media/services/svc-3.png",
    category: "Data Platform",
    points: [
      "Modern data pipelines for real-time and batch workloads.",
      "Feature stores, vector databases and scalable storage.",
      "Security, governance and access control baked in."
    ]
  },
  {
    title: "Decision Intelligence & Dashboards",
    image: "/media/services/svc-4.png",
    category: "Analytics",
    points: [
      "Executive dashboards with AI-driven insights.",
      "Scenario simulation and what-if impact analysis.",
      "Explainable metrics your teams can trust."
    ]
  },
  {
    title: "API Integration & Platform Services",
    image: "/media/services/svc-5.png",
    category: "Integrations",
    points: [
      "Connect SaaS, legacy systems and custom apps.",
      "Unified APIs for AI, data and automation endpoints.",
      "Resilient, well-documented interfaces."
    ]
  },
  {
    title: "End-to-End AI Adoption",
    image: "/media/services/svc-6.png",
    category: "Strategy",
    points: [
      "Strategy, discovery workshops and use-case selection.",
      "Roadmaps from MVP to full enterprise rollout.",
      "Training and change management for your teams."
    ]
  }
];

/* 5 industries preview – keep in sync with Industries.jsx */
const homeIndustries = [
  {
    title: "Financial Services",
    image: "/media/industries/ind-1.png",
    description:
      "Fraud detection, risk scoring, document automation and personalised client journeys."
  },
  {
    title: "Healthcare & Life Sciences",
    image: "/media/industries/ind-2.png",
    description:
      "Patient intake automation, clinical insights, medical imaging support and care coordination."
  },
  {
    title: "Retail & eCommerce",
    image: "/media/industries/ind-4.png",
    description:
      "Demand forecasting, recommendation engines, merchandising optimisation and chat commerce."
  },
  {
    title: "Manufacturing & Supply Chain",
    image: "/media/industries/ind-3.png",
    description:
      "Predictive maintenance, quality inspection, planning and logistics optimisation."
  },
  {
    title: "Technology & SaaS",
    image: "/media/industries/ind-5.png",
    description:
      "AI copilots, product analytics, support automation and platform-level AI features."
  }
];

/* Promo media – 2 videos + brochure PDF */
const promoVideos = [
  {
    title: "All Into AI · 60s Overview",
    description:
      "A quick tour of how we blend backend, SaaS and GenAI for B2B teams.",
    src: "/media/promo1.mp4",
    duration: "0:32"
  },
  {
    title: "Platform Walkthrough",
    description:
      "See the live control panel, monitoring and AI workflow orchestration.",
    src: "/media/promo2.mp4",
    duration: "0:15"
  }
];

const BROCHURE_URL = "/media/brochure.pdf";

/* AI Adoption dashboard data (inspired by public reports) */
const aiAdoptionMetrics = [
  {
    region: "North America",
    stat: "62%+",
    detail: "Organisations report at least one AI use case in production."
  },
  {
    region: "Europe",
    stat: "47%+",
    detail: "Strong focus on process automation and customer experience."
  },
  {
    region: "APAC",
    stat: "50%+",
    detail: "Fastest growth in AI investments and pilots."
  },
  {
    region: "Global",
    stat: "30–35%",
    detail: "Year-on-year increase in GenAI interest across enterprises."
  }
];

/* ---------- B2B CHAT WIDGET CONFIG ---------- */

/* more than 3 quick prompts – looks richer & more dynamic */
const businessPrompts = [
  {
    id: "saas",
    label: "B2B SaaS product",
    prompt: "We run a B2B SaaS platform and want to embed GenAI."
  },
  {
    id: "support",
    label: "Customer support team",
    prompt: "We want AI to assist our support agents."
  },
  {
    id: "ops",
    label: "Operations / back office",
    prompt: "We want to automate repetitive internal processes."
  },
  {
    id: "roadmap",
    label: "6-month AI roadmap",
    prompt: "We need a 6-month AI adoption roadmap aligned with our business goals."
  },
  {
    id: "security",
    label: "Security & compliance",
    prompt: "How will you secure data, models and access to the AI features?"
  },
  {
    id: "dashboards",
    label: "Executive dashboards",
    prompt: "We want AI-powered dashboards for leadership and KPIs."
  }
];

const responsesByIntent = {
  saas:
    "For B2B SaaS, we usually start with: (1) in-app AI copilot for your users, (2) AI-assisted onboarding and documentation search, (3) product analytics summaries for your leadership. Backend: multi-tenant Node.js / Python APIs, Postgres, Redis and vector search, deployed on AWS/Azure/GCP with proper auth (OAuth2 / SSO).",
  support:
    "For support teams, common GenAI use cases are: summarising long tickets, suggesting replies, intent detection and routing, and FAQ-style self-service chat. We keep a human-in-the-loop, log all generations and provide an audit trail so quality and compliance are maintained.",
  ops:
    "For operations teams, we usually automate: document extraction, approvals, status updates between tools and periodic reporting. We connect to CRMs/ERPs via APIs and use GenAI only where unstructured text or decisions are involved, with guardrails and review.",
  roadmap:
    "A typical 6-month roadmap: Month 1–2: discovery, data audit and priority use-case shortlist. Month 3–4: build 1–2 pilot solutions (e.g., support copilot + analytics summaries). Month 5–6: harden security, add monitoring, roll out to more teams and measure ROI. Everything is backed by clear success metrics and training plans.",
  security:
    "Security for an AI SaaS stack usually includes: SSO / OAuth2 / OpenID Connect, per-tenant data isolation, encryption in transit and at rest, secret management (KMS / Vault), role-based access control, red-team style prompt-injection testing and full audit logs. We can deploy on your cloud (AWS / Azure / GCP) and align with SOC2 / ISO27001 practices.",
  dashboards:
    "For leadership dashboards, we combine: (1) curated KPIs from your warehouse/lakehouse, (2) an AI layer that explains changes in plain language, (3) scenario simulation (what-if analysis) and (4) drill-downs into underlying events. Frontend can be custom React, while the backend can sit on top of dbt/BigQuery/Snowflake or Postgres."
};

const initialMessages = [
  {
    role: "assistant",
    text:
      "Hi 👋 I’m your B2B AI copilot. Tell me about your business (SaaS, support, operations, etc.) and I’ll suggest concrete AI use cases and architecture ideas."
  }
];

const genericResponse =
  "In a full build, this chatbot would run on an open-source SaaS chatbot stack (e.g., Rasa, Botpress, Flowise) or an LLM API like OpenAI/Llama 3, using your own business data. This demo just shows the type of B2B answers clients can expect – no API key required here.";

/* ---------- FLOATING B2B CHAT WIDGET COMPONENT ---------- */

const B2BChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const resetChat = () => {
    setMessages(initialMessages);
    setInput("");
  };

  const sendMessage = (text, intentId) => {
    const trimmed = (text || "").trim();
    if (!trimmed) return;

    const reply =
      intentId && responsesByIntent[intentId]
        ? responsesByIntent[intentId]
        : genericResponse;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "assistant", text: reply }
    ]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chat-widget-root">
      {/* Floating bubble */}
      <button
        type="button"
        className={`chat-launcher ${isOpen ? "chat-launcher-open" : ""}`}
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Open business AI chat"
      >
        <span className="chat-launcher-icon">💬</span>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-window-header">
            <div>
              <div className="chat-title">All Into AI · B2B Chat</div>
              <div className="chat-subtitle">
                Business-first Q&amp;A – demo only, no data stored.
              </div>
            </div>
            <div className="chat-header-actions">
              <button
                type="button"
                className="chat-icon-btn"
                onClick={resetChat}
                title="Reset conversation"
              >
                ⟳
              </button>
              <button
                type="button"
                className="chat-icon-btn"
                onClick={() => setIsOpen(false)}
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="chat-window-body">
            <div className="b2b-chat-messages">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={
                    "b2b-message " +
                    (m.role === "assistant"
                      ? "b2b-message-assistant"
                      : "b2b-message-user")
                  }
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="b2b-chat-quick">
              {businessPrompts.map((bp) => (
                <button
                  key={bp.id}
                  type="button"
                  className="b2b-quick-btn"
                  onClick={() => sendMessage(bp.prompt, bp.id)}
                >
                  {bp.label}
                </button>
              ))}
            </div>
          </div>

          <form className="b2b-chat-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask about your SaaS, support team or AI roadmap…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>

          <div className="chat-footer-note">
            Built with an open-source-friendly architecture – can plug into
            Rasa / Botpress / Flowise or a custom LLM API.
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------- HOME PAGE ---------- */

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
                Backend · SaaS · GenAI Services
              </span>
            </div>

            <h1 className="hero-title">
              Backend, SaaS &amp;
              <span className="hero-title-accent"> GenAI for B2B teams.</span>
            </h1>

            <p className="hero-subtitle">
              All Into AI builds secure backends, SaaS platforms and GenAI
              features so your business can adopt AI with real dashboards, real
              data and production-grade engineering.
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
                <h3>Live SaaS &amp; AI Control</h3>
                <span className="hero-status-dot">Healthy</span>
              </div>

              <p className="hero-panel-text">
                A single view of your backend services, cloud deployments and AI
                features—exactly how a modern SaaS + AI platform should behave.
              </p>

              <div className="hero-panel-tabs">
                <span className="tab active">Cloud Deployments</span>
                <span className="tab">API Health</span>
                <span className="tab">AI Workflows</span>
              </div>

              <div className="hero-panel-metrics">
                <div className="metric-row">
                  <span>Backend Services</span>
                  <span>18</span>
                </div>
                <div className="metric-row">
                  <span>AI Endpoints</span>
                  <span>9</span>
                </div>
                <div className="metric-row">
                  <span>Incidents</span>
                  <span style={{ color: "var(--accent)" }}>0 · Stable</span>
                </div>
              </div>

              <p className="hero-footer-note">
                This demo is static. In production, these tiles connect to real
                metrics from your cloud and monitoring stack.
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

      {/* ================= AI ADOPTION DASHBOARD ================= */}
      <section className="section section-soft animate-up">
        <div className="section-header">
          <h2>AI Adoption Dashboard (Global View)</h2>
          <p>
            A sample dashboard using open-data-inspired metrics. In a live
            project, we connect to public datasets and your internal systems to
            track AI adoption and impact across regions and business lines.
          </p>
        </div>

        <div className="ai-dashboard-grid">
          {aiAdoptionMetrics.map((m) => (
            <article className="ai-dashboard-card" key={m.region}>
              <h3>{m.region}</h3>
              <p className="ai-dashboard-stat">{m.stat}</p>
              <p className="ai-dashboard-detail">{m.detail}</p>
            </article>
          ))}
        </div>

        <p className="ai-dashboard-note">
          In production we can pull from open reports (e.g., industry surveys)
          and your own KPIs to build a realistic AI adoption dashboard.
        </p>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="section animate-up">
        <div className="section-header">
          <h2>Backend &amp; AI Services We Deliver</h2>
          <p>
            From backend engineering and data platforms to GenAI chatbots and
            dashboards, we cover the full SaaS lifecycle from idea to
            production.
          </p>
        </div>

        <div className="service-grid">
          {homeServices.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-media">
                <div className="service-image-shell">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="service-body">
                {service.category && (
                  <span className="service-pill">{service.category}</span>
                )}
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

      {/* ================= INDUSTRIES PREVIEW ================= */}
      <section className="section section-industries animate-up">
        <div className="section-header">
          <h2>Industries We Work With</h2>
          <p>
            All Into AI brings a repeatable blueprint for applying AI across
            sectors, tailored to your regulations, data and customer journeys.
          </p>
        </div>

        <div className="industries-grid">
          {homeIndustries.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <div className="industry-image-shell">
                <img
                  src={industry.image}
                  alt={industry.title}
                  loading="lazy"
                />
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
              <li>
                Automate complex, cross-team workflows with AI orchestration.
              </li>
              <li>
                Deploy models with observability, versioning and safe rollbacks.
              </li>
              <li>
                Build AI-ready data &amp; infrastructure foundations from day
                one.
              </li>
            </ul>
          </div>

          <div>
            <div className="video-shell">
              <img
                src="/logo-allintoai.png"
                alt="All Into AI logo"
                loading="lazy"
              />
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
            combine backend, SaaS and AI to modernise your stack.
          </p>
        </div>

        <div className="media-grid">
          {promoVideos.map((video) => (
            <article className="media-card" key={video.title}>
              <div className="media-video-shell">
                <video src={video.src} controls preload="metadata" />
                <div className="media-video-overlay">
                 
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
                A concise, client-ready PDF that covers our backend services, AI
                stack, delivery model and sample use cases across industries.
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

      {/* 🔹 Floating B2B chatbot widget */}
      <B2BChatWidget />
    </div>
  );
};

export default Home;
