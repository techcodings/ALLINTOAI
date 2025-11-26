import React from "react";

const TO_EMAIL = "allintoai.ai@gmail.com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = `All Into AI enquiry from ${name || "website visitor"}`;

    const body = `
Name: ${name || "-"}
Company: ${company || "-"}
Email: ${email || "-"}
Phone: ${phone || "-"}

Service of Interest: ${service || "-"}

Message:
${message || "-"}
    `.trim();

    const mailtoUrl = `mailto:${encodeURIComponent(
      TO_EMAIL
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    e.target.reset();
  };

  return (
    <div className="page">
      <section className="section animate-up">
        <div className="section-header">
          <h1>Ready to go All Into AI?</h1>
          <p>
            Tell us about your organization and how you’d like AI to help you
            think, act and scale intelligently.
          </p>
        </div>

        <div className="contact-grid">
          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name*
                <input type="text" name="name" required />
              </label>
              <label>
                Company*
                <input type="text" name="company" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email*
                <input type="email" name="email" required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" />
              </label>
            </div>

            <div className="form-row single">
              <label>
                Service of Interest
                <select name="service">
                  <option value="">Select a service</option>
                  <option>Custom AI Workflow Automation</option>
                  <option>Scalable AI Model Development & Deployment</option>
                  <option>AI Infrastructure as a Service</option>
                  <option>Decision Intelligence & Analytics</option>
                  <option>AI Integration & API Services</option>
                  <option>End-to-End AI Adoption Consulting</option>
                </select>
              </label>
            </div>

            <div className="form-row single">
              <label>
                Message
                <textarea name="message" rows={5} />
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Submit via Email
            </button>
          </form>

          {/* ASIDE PANEL */}
          <div className="contact-aside">
            <h3>Contact Details</h3>
            <ul>
              <li>We’ll review your message and respond within 1–2 business days.</li>
              <li>You can also reach us directly using the details below.</li>
            </ul>

            <p className="contact-note">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${TO_EMAIL}`}
                className="contact-link contact-link-accent"
              >
                {TO_EMAIL}
              </a>
            </p>

            <p className="contact-note">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919663501526"
                className="contact-link contact-phone"
              >
                9663501526
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
