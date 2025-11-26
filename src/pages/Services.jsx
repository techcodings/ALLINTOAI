import React from "react";

const services = [
  {
    title: "Custom AI Workflow Automation",
    description:
      "End-to-end design and deployment of AI-driven automated workflows tailored to specific business processes.",
    bullets: [
      "Map current processes and identify automation opportunities.",
      "Design AI-driven workflows that integrate with existing tools.",
      "Monitor, iterate and improve automation over time."
    ]
  },
  {
    title: "Scalable AI Model Development & Deployment",
    description:
      "Custom AI model building, training and fine-tuning with managed deployment for reliable, secure operation.",
    bullets: [
      "Model design, experimentation and evaluation.",
      "MLOps pipelines for training, versioning and rollout.",
      "Guardrails and monitoring for production models."
    ]
  },
  {
    title: "AI Infrastructure as a Service",
    description:
      "Cloud-based AI infrastructure provisioning across compute, storage and networking.",
    bullets: [
      "Multi-tenant, scalable environments for AI workloads.",
      "Infrastructure-as-code for repeatable environments.",
      "Support for continuous integration and delivery."
    ]
  },
  {
    title: "Decision Intelligence & Analytics",
    description:
      "Real-time AI-powered analytics dashboards and decision support systems.",
    bullets: [
      "Predictive and prescriptive analytics tailored to your industry.",
      "Executive dashboards that connect models to KPIs.",
      "Self-service analytics access for stakeholders."
    ]
  },
  {
    title: "AI Integration & API Services",
    description:
      "AI service APIs for NLP, vision and recommendation capabilities.",
    bullets: [
      "Custom API workflows and low-code automation tools.",
      "Integration into CRMs, ERPs and internal apps.",
      "Secure access control and rate limiting."
    ]
  },
  {
    title: "End-to-End AI Adoption Consulting",
    description:
      "Strategic consulting to guide your AI transformation journey.",
    bullets: [
      "AI roadmapping and capability assessment.",
      "Training for teams to work effectively with AI.",
      "Continuous improvement programs and governance."
    ]
  }
];

const Services = () => {
  return (
    <div className="page">
      <section className="section animate-up">
        <div className="section-header">
          <h1>Core AI Services</h1>
          <p>
            Six service pillars that cover the full AI lifecycle—from discovery
            to deployment.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((service) => (
            <div className="card card-service" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
