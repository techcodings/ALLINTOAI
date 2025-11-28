// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* ======= DATA CONFIG ======= */

const featureStats = [
  {
    label: "Clients exploring AI",
    value: "40+",
    detail: "Across automation, analytics and infrastructure",
  },
  {
    label: "AI & GenAI use cases",
    value: "25+",
    detail: "Workflows, copilots, decision intelligence",
  },
  {
    label: "Cloud-ready deployments",
    value: "3+",
    detail: "Built for AWS · Azure · GCP",
  },
  {
    label: "Industries served",
    value: "5+",
    detail: "From SaaS to finance, retail and more",
  },
];

/* === 6 services preview (MATCHING Services.jsx) === */
const homeServices = [
  {
    title: "Custom AI Workflow Automation",
    image: "/media/services/svc-1.png",
    category: "Automation",
    points: [
      "Design and deploy AI-driven workflows tailored to your processes.",
      "Integrate with CRMs, ERPs and internal tools to reduce manual work.",
      "Track adoption and ROI with clear operational metrics.",
    ],
  },
  {
    title: "Scalable AI Model Development & Deployment",
    image: "/media/services/svc-2.png",
    category: "Models",
    points: [
      "Build, fine-tune and deploy custom AI / GenAI models.",
      "Production-ready MLOps, monitoring and versioning.",
      "Secure, low-latency endpoints for your apps and teams.",
    ],
  },
  {
    title: "AI Infrastructure as a Service",
    image: "/media/services/svc-3.png",
    category: "Infrastructure",
    points: [
      "Cloud-based AI infrastructure provisioning (compute, storage, networking).",
      "Multi-tenant, scalable environments for AI workloads.",
      "Security and governance aligned with enterprise standards.",
    ],
  },
  {
    title: "Decision Intelligence & Analytics",
    image: "/media/services/svc-4.png",
    category: "Analytics",
    points: [
      "Real-time AI-powered analytics dashboards for leaders.",
      "Predictive and prescriptive insights tailored to your industry.",
      "Explainable metrics and narrative insights, not just charts.",
    ],
  },
  {
    title: "AI Integration & API Services",
    image: "/media/services/svc-5.png",
    category: "APIs",
    points: [
      "NLP, vision and recommendation APIs integrated into your stack.",
      "Custom orchestration and low-code automation tools.",
      "Stable, well-documented, enterprise-friendly interfaces.",
    ],
  },
  {
    title: "End-to-End AI Adoption Consulting",
    image: "/media/services/svc-6.png",
    category: "Consulting",
    points: [
      "Strategic AI roadmap from idea to production.",
      "Hands-on training and change management for teams.",
      "Continuous optimisation based on usage and outcomes.",
    ],
  },
];

/* 5 industries preview – keep in sync with Industries.jsx */
const homeIndustries = [
  {
    title: "Financial Services",
    image: "/media/industries/ind-1.png",
    description:
      "Fraud detection, risk scoring, document automation and personalised client journeys.",
  },
  {
    title: "Healthcare & Life Sciences",
    image: "/media/industries/ind-2.png",
    description:
      "Patient intake automation, clinical insights, medical imaging support and care coordination.",
  },
  {
    title: "Retail & eCommerce",
    image: "/media/industries/ind-4.png",
    description:
      "Demand forecasting, recommendation engines, merchandising optimisation and chat commerce.",
  },
  {
    title: "Manufacturing & Supply Chain",
    image: "/media/industries/ind-3.png",
    description:
      "Predictive maintenance, quality inspection, planning and logistics optimisation.",
  },
  {
    title: "Technology & SaaS",
    image: "/media/industries/ind-5.png",
    description:
      "AI copilots, product analytics, support automation and platform-level AI features.",
  },
];

/* Promo media – 2 videos + brochure PDF */
const promoVideos = [
  {
    title: "All Into AI · 60s Overview",
    description:
      "A quick tour of how we help businesses think, act and scale intelligently with AI.",
    src: "/media/promo1.mp4",
    duration: "0:32",
  },
  {
    title: "Together With AI – Motion Clip",
    description:
      "Corporate motion video showcasing AI workflow automation and decision intelligence.",
    src: "/media/promo2.mp4",
    duration: "0:15",
  },
];

const BROCHURE_URL = "/media/brochure.pdf";

/* AI Adoption dashboard data (inspired by public reports) */
const aiAdoptionMetrics = [
  {
    region: "North America",
    stat: "62%+",
    detail: "Organisations report at least one AI use case in production.",
  },
  {
    region: "Europe",
    stat: "47%+",
    detail: "Strong focus on process automation and customer experience.",
  },
  {
    region: "APAC",
    stat: "50%+",
    detail: "Fastest growth in AI investments and pilots.",
  },
  {
    region: "Global",
    stat: "30–35%",
    detail: "Year-on-year increase in GenAI interest across enterprises.",
  },
];

/* ---------- B2B CHAT WIDGET CONFIG ---------- */

const businessPrompts = [
  {
    id: "saas",
    label: "B2B SaaS product",
    prompt: "We run a B2B SaaS platform and want to embed GenAI.",
  },
  {
    id: "support",
    label: "Customer support team",
    prompt: "We want AI to assist our support agents.",
  },
  {
    id: "ops",
    label: "Operations / back office",
    prompt: "We want to automate repetitive internal processes.",
  },
  {
    id: "roadmap",
    label: "6-month AI roadmap",
    prompt: "We need a 6-month AI adoption roadmap aligned with our business goals.",
  },
  {
    id: "security",
    label: "Security & compliance",
    prompt: "How will you secure data, models and access to the AI features?",
  },
  {
    id: "dashboards",
    label: "Executive dashboards",
    prompt: "We want AI-powered dashboards for leadership and KPIs.",
  },
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
    "Security for an AI stack usually includes: SSO / OAuth2 / OpenID Connect, per-tenant data isolation, encryption in transit and at rest, secret management (KMS / Vault), role-based access control, red-team style prompt-injection testing and full audit logs. We can deploy on your cloud (AWS / Azure / GCP) and align with SOC2 / ISO27001 practices.",
  dashboards:
    "For leadership dashboards, we combine: (1) curated KPIs from your warehouse/lakehouse, (2) an AI layer that explains changes in plain language, (3) scenario simulation (what-if analysis) and (4) drill-downs into underlying events. Frontend can be custom React, while the backend can sit on top of dbt/BigQuery/Snowflake or Postgres.",
};

const initialMessages = [
  {
    role: "assistant",
    text:
      "Hi 👋 I’m your B2B AI copilot. Tell me about your business and I’ll suggest concrete AI use cases and architecture ideas.",
  },
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
      { role: "assistant", text: reply },
    ]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chat-widget-root">
      {/* Floating bubble bottom-right */}
      <button
        type="button"
        className={`chat-launcher ${isOpen ? "chat-launcher-open" : ""}`}
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Open business AI chat"
      >
        <span className="chat-launcher-icon">💬</span>
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-window-header">
            <div>
              <div className="chat-title">All Into AI · B2B Chat</div>
              <div className="chat-subtitle">
                all in one AI solutions for businesses – demo chat only.
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
              placeholder="Ask about automation, dashboards or AI roadmap…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>

          <div className="chat-footer-note">
            Built to plug into Rasa / Botpress / Flowise or a custom LLM API in
            production.
          </div>
        </div>
      )}
    </div>
  );
};

/* ---------- HOME PAGE WITH SPLASH / LOADING ANIMATION ---------- */

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [phase, setPhase] = useState(0); // 0: icon, 1: +AllIntoAI, 2: +TogetherWithAI, 3: 100% loaded

  useEffect(() => {
    // sequence: icon -> logo text -> tagline -> 100% -> hide
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setPhase(step);
      if (step === 4) {
        clearInterval(interval);
        // small delay so 100% is visible
        setTimeout(() => setShowSplash(false), 400);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page page-home">
      {/* ===== SPLASH / LOADING OVERLAY ===== */}
      {showSplash && (
        <div className="splash-root">
          <div className="splash-inner">
            <div className="splash-logo-block">
              {/* Logo icon – big */}
              <img
                src="/logo-allintoai.png"
                alt="All Into AI logo"
                className="splash-logo-icon"
                style={{ width: "130px", height: "auto" }}
              />

              {/* Step 2: brand name */}
              {phase >= 1 && (
                <div className="splash-brand">
                  <span className="splash-brand-text">ALL INTO AI</span>
                </div>
              )}

              {/* Step 3: tagline 'Together With AI.' */}
              {phase >= 2 && (
                <div className="splash-tagline-main">Together With AI.</div>
              )}

              {/* Step 4: 100% loaded */}
              {phase >= 3 && (
                <div className="splash-progress">
                  <div className="splash-progress-bar">
                    <div className="splash-progress-fill" />
                  </div>
                  <span className="splash-progress-label">100% loaded</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="hero-wrap hero-neon">
        <div className="hero-background-grid" />

        <div className="hero-content">
          {/* LEFT TEXT – updated narrative */}
          <div className="hero-left animate-up">
            <div className="hero-tag-row hero-tag-centered">
              <span className="hero-pill">Together With AI.</span>
            </div>

            <h1 className="hero-title hero-title-centered">
              Think, Act, and Scale{" "}
              <span className="hero-title-accent">Intelligently with AI.</span>
            </h1>

            <p className="hero-subtitle hero-subtitle-centered">
              We help businesses automate workflows, enhance decision-making and
              build scalable AI infrastructure — so AI becomes the core engine
              of your growth.
            </p>

            <p className="hero-tagline hero-subtitle-centered">
              <strong>all in one AI solutions for businesses.</strong>
            </p>

            <div className="hero-cta-row hero-cta-centered">
              <Link to="/contact" className="btn btn-primary hero-cta-main">
                Get Started
              </Link>
              <Link to="/services" className="btn btn-ghost">
                Transform Your Business
              </Link>
            </div>
          </div>

          {/* RIGHT – AI control panel card */}
          <div className="hero-right animate-up-delayed">
            <div className="hero-panel hero-panel-neon">
              <div className="hero-panel-header">
                <h3>AI-as-a-Service Control</h3>
                <span className="hero-status-dot">Live</span>
              </div>

              <p className="hero-panel-text">
                A single view of your automated workflows, AI models and
                decision dashboards — exactly how a modern AI-powered business
                should operate.
              </p>

              <div className="hero-panel-tabs">
                <span className="tab active">Workflows</span>
                <span className="tab">Models</span>
                <span className="tab">Dashboards</span>
              </div>

              <div className="hero-panel-metrics">
                <div className="metric-row">
                  <span>Automated Workflows</span>
                  <span>24</span>
                </div>
                <div className="metric-row">
                  <span>Active AI Models</span>
                  <span>11</span>
                </div>
                <div className="metric-row">
                  <span>Decisions / Day</span>
                  <span>10k+</span>
                </div>
              </div>

              <p className="hero-footer-note">
                In production, these tiles connect to your cloud, data
                warehouse and monitoring stack to show real-time AI impact.
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
          In production we can pull from open reports and your own KPIs to build
          a realistic AI adoption dashboard that updates automatically.
        </p>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="section animate-up">
        <div className="section-header">
          <h2>Core AI Services We Deliver</h2>
          <p>
            From workflow automation and model deployment to AI infrastructure
            and decision intelligence, All Into AI covers the full AI lifecycle
            for your business.
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
              All Into AI is an AI-as-a-Service partner designed to help
              businesses automate workflows and enhance decision-making with
              scalable AI infrastructure.
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
            Watch short clips and download the brochure to understand how we
            combine automation, analytics and AI infrastructure for business
            impact.
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
                A concise, client-ready PDF that covers our AI services,
                infrastructure stack, delivery model and sample use cases across
                industries.
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
          <h2>Ready to go All Into AI?</h2>
          <p>
            Share a use-case, a dataset or just your business challenge. We’ll
            respond with a concrete way to test value in weeks — not years.
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
