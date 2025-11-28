// src/pages/Services.jsx
import React from "react";

const serviceItems = [
  {
    title: "Backend & API Engineering",
    image: "/media/services/svc-1.png",
    category: "SaaS Backend",
    points: [
      "Multi-tenant SaaS backends with Node.js / Python.",
      "REST / GraphQL APIs designed for web and mobile clients.",
      "PostgreSQL / MySQL, Redis, caching and observability (logs, metrics, traces)."
    ]
  },
  {
    title: "AI Model Development & GenAI Features",
    image: "/media/services/svc-2.png",
    category: "GenAI & ML",
    points: [
      "Classical ML and GenAI features integrated into your product workflows.",
      "Use OpenAI or open-source LLMs (Llama, Mistral, etc.) based on your constraints.",
      "Guardrails, prompt policies, logging and evaluation loops built in from day one."
    ]
  },
  {
    title: "Data & AI Infrastructure",
    image: "/media/services/svc-3.png",
    category: "Data Platform",
    points: [
      "Modern data pipelines for both real-time events and batch workloads.",
      "Feature stores, vector databases and scalable object storage.",
      "Security, governance, fine-grained access control and auditing baked in."
    ]
  },
  {
    title: "Decision Intelligence & Dashboards",
    image: "/media/services/svc-4.png",
    category: "Analytics",
    points: [
      "Executive dashboards showing AI adoption and business impact by region / sector.",
      "Scenario simulation and what-if impact analysis for leadership teams.",
      "Explainable metrics and narratives business users can trust."
    ]
  },
  {
    title: "API Integration & Platform Services",
    image: "/media/services/svc-5.png",
    category: "Integrations",
    points: [
      "Connect SaaS apps, legacy systems and custom services into one platform.",
      "Unified APIs for AI, data and automation endpoints with clear SLAs.",
      "Resilient error handling, retries, circuit breakers and documentation."
    ]
  },
  {
    title: "End-to-End AI Adoption",
    image: "/media/services/svc-6.png",
    category: "Strategy",
    points: [
      "Strategy and discovery workshops to prioritise high-ROI AI use cases.",
      "Roadmaps from MVP to full enterprise rollout with clear milestones.",
      "Playbooks, training and change-management support for your teams."
    ]
  }
];

const Services = () => {
  return (
    <div className="page page-services">
      <section className="section animate-up">
        <div className="section-header">
          <h1>Backend &amp; GenAI Services for SaaS Products</h1>
          <p>
            We focus on the backbone of your SaaS: multi-tenant backends, data
            platforms, GenAI features and decision dashboards that are secure,
            observable and ready for production.
          </p>
        </div>

        <div className="service-grid">
          {serviceItems.map((svc) => (
            <article className="service-card" key={svc.title}>
              <div className="service-media">
                <div className="service-image-shell">
                  <img src={svc.image} alt={svc.title} loading="lazy" />
                </div>
              </div>

              <div className="service-body">
                {svc.category && (
                  <span className="service-pill">{svc.category}</span>
                )}
                <h3>{svc.title}</h3>
                <ul>
                  {svc.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Cloud, security and frameworks overview */}
        <div className="services-stack">
          <h2>Cloud, Security &amp; Frameworks We Typically Use</h2>
          <ul className="bullet-list">
            <li>
              <strong>Cloud:</strong> AWS, Azure or GCP — using managed
              databases (RDS, Cloud SQL), storage (S3 / Blob), queues, serverless
              functions or Kubernetes depending on your scale and budget.
            </li>
            <li>
              <strong>Backend frameworks:</strong> Node.js (Express / NestJS),
              Python (FastAPI / Django) with PostgreSQL / MySQL, Redis, and
              modern logging / metrics stacks (OpenTelemetry, Prometheus,
              Grafana).
            </li>
            <li>
              <strong>GenAI &amp; B2B chatbots:</strong> OpenAI API where
              available, plus open-source LLMs (Llama, Mistral, etc.) orchestrated
              via LangChain or LlamaIndex. For open-source SaaS chatbot
              platforms we can deploy Rasa, Botpress or Flowise so you fully own
              the stack.
            </li>
            <li>
              <strong>Security:</strong> OAuth2.0 / OpenID Connect, JWT /
              session-based auth, API gateways, rate limiting, encryption in
              transit (TLS 1.2+) and at rest, role-based access control (RBAC)
              and detailed audit logs per tenant.
            </li>
          </ul>
          <p className="section-note">
            This demo website uses mocked data and static components only, so no
            API keys are required. In a real engagement, these patterns are
            wired to your cloud account, data sources and security model.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
