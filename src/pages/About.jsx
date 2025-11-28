// src/pages/About.jsx
import React from "react";

const BROCHURE_URL = "/media/brochure.pdf";

const About = () => {
  return (
    <div className="page page-about">
      {/* ====== HERO / INTRO ====== */}
      <section className="section about-hero animate-up">
        <div className="about-hero-header">
          <div>
            <span className="about-pill">Backend · SaaS · GenAI</span>
            <h1>About All Into AI</h1>
            <p>
              All Into AI focuses on backend web development, SaaS platforms
              and GenAI features for businesses that want real,
              production-ready outcomes—not just proof-of-concepts.
            </p>
          </div>

          <div className="about-hero-highlight">
            <p className="about-highlight-title">What we are known for</p>
            <ul>
              <li>Multi-tenant SaaS backends with secure APIs.</li>
              <li>B2B GenAI assistants and chatbots with guardrails.</li>
              <li>Realistic dashboards powered by open &amp; internal data.</li>
            </ul>
          </div>
        </div>

        <div className="about-grid">
          <article className="about-card about-card-main animate-up">
            <h2>Our Story</h2>
            <p>
              We started All Into AI to help teams modernise their systems
              while safely adopting AI. That means strong backends, secure
              APIs and well-designed dashboards, with AI embedded where it
              makes sense.
            </p>
            <p>
              We work with startups and enterprises, moving them from
              experiments to reliable AI systems that support everyday
              operations across support, finance, HR, operations and product.
            </p>
          </article>

          <article className="about-card about-card-main animate-up-delayed">
            <h2>Our Philosophy</h2>
            <p>
              Building this company isn&apos;t just about technology. It&apos;s
              about impact—helping others transition into the AI era with
              clarity, capability and confidence.
            </p>
            <p>
              We believe AI should be understandable, governable and aligned
              with real business outcomes, not just metrics in a notebook.
            </p>
          </article>
        </div>
      </section>

      {/* ====== FOCUS AREAS ====== */}
      <section className="section section-soft animate-up">
        <div className="section-header">
          <h2>What We Focus On</h2>
          <p>
            We combine backend engineering, SaaS design and GenAI so your
            organisation can adopt AI in a structured, secure and measurable
            way.
          </p>
        </div>

        <div className="about-focus-grid">
          <article className="about-focus-card">
            <h3>Backend Web &amp; APIs</h3>
            <p>
              Design and build secure, well-documented REST / GraphQL APIs
              powering web and mobile applications.
            </p>
          </article>
          <article className="about-focus-card">
            <h3>SaaS Platforms</h3>
            <p>
              Multi-tenant architectures with billing, access control, tenant
              isolation and observability baked in.
            </p>
          </article>
          <article className="about-focus-card">
            <h3>GenAI Experiences</h3>
            <p>
              Chatbots, assistants and generative workflows integrated directly
              into your product or internal tools.
            </p>
          </article>
          <article className="about-focus-card">
            <h3>AI Dashboards &amp; ROI</h3>
            <p>
              Realistic reporting of AI usage, adoption and ROI using a mix of
              open-source benchmarks and your internal KPIs.
            </p>
          </article>
        </div>
      </section>

      {/* ====== CLOUD / SECURITY / CHATBOT STACK ====== */}
      <section className="section animate-up">
        <div className="section-header">
          <h2>Cloud, Security &amp; Chatbot Platforms</h2>
          <p>
            Your client specifically asked which cloud, security and framework
            stack we would use. Below is a typical reference architecture we
            propose for B2B SaaS + GenAI.
          </p>
        </div>

        <div className="two-col about-stack">
          <div className="about-stack-card">
            <h3>Cloud &amp; Backend Frameworks</h3>
            <ul className="bullet-list">
              <li>
                <strong>Cloud:</strong> AWS, Azure or GCP, with containerised
                workloads (Docker, Kubernetes) or serverless where suitable.
              </li>
              <li>
                <strong>Backend:</strong> Node.js (Express / NestJS) and Python
                (FastAPI / Django) for APIs and background services.
              </li>
              <li>
                <strong>Data:</strong> PostgreSQL / MySQL, Redis, object storage
                and optional vector search stores (pgvector, Pinecone, etc.) for
                GenAI.
              </li>
            </ul>
          </div>

          <div className="about-stack-card">
            <h3>Security &amp; Open-Source Chatbot SaaS</h3>
            <ul className="bullet-list">
              <li>
                <strong>Security:</strong> OAuth2.0 / OpenID Connect, JWT, SSO
                integration, RBAC, encryption in transit (TLS) and at rest, API
                gateways and audit logging.
              </li>
              <li>
                <strong>Open-source chatbot platforms:</strong> Rasa, Botpress,
                Flowise and similar stacks when you prefer self-hosted or
                open-source SaaS-style solutions.
              </li>
              <li>
                <strong>GenAI Orchestration:</strong> LangChain or LlamaIndex to
                connect LLMs with your data sources, tools and monitoring.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====== BROCHURE & PROMOS ====== */}
      <section className="section media-section animate-up">
        <div className="section-header">
          <h2>Brochure &amp; Promo Material</h2>
          <p>
            Use these assets in your proposals and discussions—easy to share
            with decision-makers and partners.
          </p>
        </div>

        <div className="media-grid">
          <article className="media-card brochure-card">
            <div className="brochure-shell">
              <span className="media-pill">PDF · Company Brochure</span>
              <h3 className="media-title">All Into AI – Capabilities</h3>
              <p className="media-description">
                Overview of our backend, SaaS and AI services, including example
                architectures, engagement models and industries served.
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

          <article className="media-card">
            <div className="media-video-shell">
              <img
                src="/logo-allintoai.png"
                alt="All Into AI promo"
                className="about-promo-image"
              />
            </div>
            <h3 className="media-title">Short Promo Clip</h3>
            <p className="media-description">
              Placeholder for a 30–60 second explainer video. You can replace
              this with your own promo for social media or client
              presentations.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
