// src/pages/Industries.jsx
import React from "react";

const industryItems = [
  {
    name: "Financial Services",
    image: "/media/industries/ind-1.png",
    summary:
      "Fraud detection, risk scoring, document automation and personalised client journeys."
  },
  {
    name: "Healthcare & Life Sciences",
    image: "/media/industries/ind-2.png",
    summary:
      "Patient intake automation, clinical insights, medical imaging support and care coordination."
  },
  {
    name: "Retail & eCommerce",
    image: "/media/industries/ind-4.png",
    summary:
      "Demand forecasting, recommendation engines, merchandising optimisation and chat commerce."
  },
  {
    name: "Manufacturing & Supply Chain",
    image: "/media/industries/ind-3.png",
    summary:
      "Predictive maintenance, quality inspection, planning and logistics optimisation."
  },
  {
    name: "Technology & SaaS",
    image: "/media/industries/ind-5.png",
    summary:
      "AI copilots, product analytics, support automation and platform-level AI features."
  }
];

const Industries = () => {
  return (
    <div className="page page-industries">
      <section className="section section-industries animate-up">
        <div className="section-header">
          <h1>Industries We Serve</h1>
          <p>
            All Into AI combines IT engineering and applied AI to solve
            industry-specific problems, with reusable patterns and accelerators
            for faster time-to-value.
          </p>
        </div>

        <div className="industries-grid">
          {industryItems.map((ind) => (
            <article className="industry-card" key={ind.name}>
              <div className="industry-image-shell">
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                />
              </div>
              <div className="industry-body">
                <h3>{ind.name}</h3>
                <p>{ind.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Industries;
