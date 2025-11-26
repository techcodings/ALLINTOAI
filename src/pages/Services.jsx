// src/pages/Services.jsx
import React from "react";

const serviceItems = [
  {
    title: "Custom AI Workflow Automation",
    image: "/media/services/svc-1.png",
    points: [
      "Map current processes and identify automation opportunities.",
      "Design AI-powered workflows that integrate with existing tools.",
      "Monitor, iterate and improve automation over time."
    ]
  },
  {
    title: "AI Model Development & Deployment",
    image: "/media/services/svc-2.png",
    points: [
      "Build and fine-tune ML models tailored to your data.",
      "Deploy with CI/CD, rollback strategies and observability.",
      "Continuously retrain using production feedback loops."
    ]
  },
  {
    title: "Data & AI Infrastructure",
    image: "/media/services/svc-3.png",
    points: [
      "Modern data pipelines for real-time and batch workloads.",
      "Feature stores, vector databases and scalable storage.",
      "Security, governance and access control baked in."
    ]
  },
  {
    title: "Decision Intelligence & Analytics",
    image: "/media/services/svc-4.png",
    points: [
      "Executive dashboards and self-serve analytics.",
      "Scenario simulation and what-if impact analysis.",
      "Explainable metrics your teams can trust."
    ]
  },
  {
    title: "API Integration & Platform Services",
    image: "/media/services/svc-5.png",
    points: [
      "Connect SaaS, legacy systems and custom apps.",
      "Unified APIs for AI, data and automation endpoints.",
      "Resilient, well-documented interfaces."
    ]
  },
  {
    title: "End-to-End AI Adoption",
    image: "/media/services/svc-6.png",
    points: [
      "Strategy, discovery workshops and use-case selection.",
      "Roadmaps from MVP to full enterprise rollout.",
      "Training and change management for your teams."
    ]
  }
];

const Services = () => {
  return (
    <div className="page page-services">
      <section className="section animate-up">
        <div className="section-header">
          <h1>Core AI &amp; IT Services</h1>
          <p>
            Six service pillars that cover the full lifecycle—from discovery
            and design to deployment, monitoring and continuous improvement.
          </p>
        </div>

        <div className="service-grid">
          {serviceItems.map((svc) => (
            <article className="service-card" key={svc.title}>
              <div className="service-media">
                <div className="service-image-shell">
                  <img src={svc.image} alt={svc.title} />
                </div>
              </div>
              <div className="service-body">
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
      </section>
    </div>
  );
};

export default Services;
