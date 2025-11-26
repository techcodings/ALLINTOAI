import React from "react";

const focusAreas = [
  {
    title: "AI-as-a-Service First",
    text: "We design AI as a utility: reliable, observable and reusable across teams, not one-off experiments."
  },
  {
    title: "Infrastructure & Governance",
    text: "From data pipelines to access control, we care about the foundations that keep AI safe and sustainable."
  },
  {
    title: "Human-Centric Intelligence",
    text: "AI should amplify people, not replace them—clear interfaces, explainable outputs and workflows that feel natural."
  }
];

const principles = [
  "Move from POCs to production systems that actually run the business.",
  "Build AI that is understandable, governable and aligned with outcomes.",
  "Help teams transition into the AI era with clarity, capability and confidence."
];

const timeline = [
  {
    step: "01",
    title: "Discovery & Vision",
    text: "We map your processes, systems and goals to find the highest-impact AI opportunities."
  },
  {
    step: "02",
    title: "Design & Build",
    text: "We co-design workflows, models and infrastructure, then ship iteratively into real environments."
  },
  {
    step: "03",
    title: "Scale & Evolve",
    text: "We stay with you to monitor, improve and expand AI capabilities as your business grows."
  }
];

const About = () => {
  return (
    <div className="page page-about">
      {/* HERO ABOUT CARD */}
      <section className="section about-hero animate-up">
        <div className="about-orbit" />

        <div className="about-header">
          <div className="about-pill-row">
            <span className="about-pill">About</span>
            <span className="about-pill ghost">Together With AI.</span>
          </div>
          <h1>About All Into AI</h1>
          <p className="about-tagline">
            An AI-as-a-Service company focused on turning AI from side projects
            into the backbone of modern operations.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card about-card-main animate-up">
            <h2>Our Story</h2>
            <p>
              All Into AI is an AI-as-a-Service startup designed to help
              businesses automate workflows, enhance decision-making and build
              resilient AI infrastructure.
            </p>
            <p>
              We work with organizations of all sizes—from fast-moving startups
              to enterprises—helping them move from experimentation to reliable
              AI systems that support everyday operations.
            </p>
          </div>

          <div className="about-card about-card-main animate-up-delayed">
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
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section section-soft animate-up">
        <div className="section-header">
          <h2>What We Stand For</h2>
          <p>
            Three principles guide everything we build, ship and maintain with
            our customers.
          </p>
        </div>

        <div className="cards-grid">
          {focusAreas.map((item) => (
            <div className="card card-focus" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPLES QUOTE STRIP */}
      <section className="section stats-strip about-quote-strip animate-up">
        <div className="about-quote-glow" />
        <div className="about-quote-main">
          <span className="about-quote-label">Guiding Principles</span>
          <ul>
            {principles.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section animate-up">
        <div className="section-header">
          <h2>How We Work With You</h2>
          <p>
            A simple, collaborative journey—from understanding your world to
            scaling AI across it.
          </p>
        </div>

        <div className="about-timeline">
          <div className="about-timeline-line" />
          {timeline.map((item, idx) => (
            <div
              className={`about-timeline-step animate-up${
                idx === 1 ? "-delayed" : ""
              }`}
              key={item.step}
            >
              <div className="about-timeline-marker">
                <span>{item.step}</span>
              </div>
              <div className="about-timeline-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
