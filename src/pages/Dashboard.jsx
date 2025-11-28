// src/pages/Dashboard.jsx
import React, { useState /*, useEffect */ } from "react";

/* =======================
   1. STATIC SAMPLE DATA
   (Inspired by IBM / McKinsey / OECD style reports)
   ======================= */

const aiStatsByYear = {
  "2022": [
    {
      label: "Global AI Adoption (est.)",
      value: " ~28%",
      detail: "Organisations using at least one AI capability."
    },
    {
      label: "Year-on-Year AI Spend",
      value: "+8–10%",
      detail: "Rising investment in analytics & automation."
    },
    {
      label: "GenAI Awareness",
      value: "~20%",
      detail: "Executives actively exploring GenAI."
    }
  ],
  "2023": [
    {
      label: "Global AI Adoption (est.)",
      value: " ~35%",
      detail: "Production use cases in at least one function."
    },
    {
      label: "Year-on-Year AI Spend",
      value: "+10–15%",
      detail: "More budget for copilots, automation & data."
    },
    {
      label: "GenAI Awareness",
      value: "~45%",
      detail: "Leaders experimenting with GenAI pilots."
    }
  ],
  "2024*": [
    {
      label: "Global AI Adoption (proj.)",
      value: " ~40–45%",
      detail: "Based on public surveys & analyst outlook."
    },
    {
      label: "Year-on-Year AI Spend",
      value: "+15–20%",
      detail: "Stronger focus on GenAI-driven automation."
    },
    {
      label: "GenAI Priority",
      value: "~65%",
      detail: "CX, support, and analytics top the list."
    }
  ],
  "2025*": [
    {
      label: "Global AI Adoption (proj.)",
      value: " ~48–50%",
      detail: "Almost half of organisations reporting at least one AI use case."
    },
    {
      label: "Year-on-Year AI Spend",
      value: "+18–22%",
      detail: "Sustained growth in GenAI, data platforms and automation."
    },
    {
      label: "GenAI Priority",
      value: "~75%",
      detail: "Copilots, workflow automation and decision support dominate roadmaps."
    }
  ]
};

const adoptionTimeline = [
  { year: 2020, global: 20, genai: 0, investment: 5 },
  { year: 2021, global: 24, genai: 3, investment: 7 },
  { year: 2022, global: 28, genai: 7, investment: 9 },
  { year: 2023, global: 35, genai: 18, investment: 12 },
  { year: 2024, global: 42, genai: 30, investment: 16 },
  { year: 2025, global: 48, genai: 38, investment: 20 } // 2025* projection
];

const adoptionByRegion = [
  {
    region: "North America",
    adoption: 40,
    growth: 13,
    focus: "Customer support, analytics, copilots"
  },
  {
    region: "Europe",
    adoption: 34,
    growth: 10,
    focus: "Risk, compliance, process optimisation"
  },
  {
    region: "APAC",
    adoption: 44,
    growth: 16,
    focus: "Customer experience, fintech, telco"
  },
  {
    region: "Middle East & Africa",
    adoption: 26,
    growth: 12,
    focus: "Gov, energy, smart-city use cases"
  }
];

const adoptionBySector = [
  { sector: "Financial Services", adoption: 47, maturity: "High" },
  { sector: "Retail & eCommerce", adoption: 41, maturity: "Med-High" },
  { sector: "Manufacturing", adoption: 33, maturity: "Medium" },
  { sector: "Healthcare", adoption: 30, maturity: "Medium" },
  { sector: "SMB / Other", adoption: 21, maturity: "Early" }
];

const dataSources = [
  "IBM Global AI Adoption Index (survey-based trends).",
  "McKinsey Global Survey on AI (function-wise impact).",
  "OECD AI Policy Observatory (country-level indicators).",
  "Custom ETL from public CSV / APIs pulled into your data lake."
];

/* ========== SIMPLE BUSINESS CHATBOT CONFIG ========== */

const initialMessages = [
  {
    sender: "bot",
    text:
      "Hi 👋 I’m your AI Adoption Assistant. Tell me about your business (SaaS, support, operations, etc.) and I’ll suggest realistic GenAI use cases."
  }
];

// Very simple rule-based reply – just to make the demo feel “smart”.
function generateBotReply(userText) {
  const t = userText.toLowerCase();

  if (t.includes("support") || t.includes("ticket") || t.includes("helpdesk")) {
    return (
      "For support teams, common GenAI ideas are:\n" +
      "• Copilot inside your helpdesk to draft replies and summarise long threads.\n" +
      "• Auto-tagging, routing and priority scoring for incoming tickets.\n" +
      "• Self-service FAQ chatbot trained on your knowledge base.\n\n" +
      "Backend sketch: multi-tenant API (Node/FastAPI), vector search over your docs, and an LLM (OpenAI or open-source) with guardrails + logging."
    );
  }

  if (t.includes("sales") || t.includes("lead") || t.includes("rfp")) {
    return (
      "For sales / pre-sales teams, GenAI can:\n" +
      "• Draft RFP responses and tailored proposals from your templates.\n" +
      "• Summarise discovery calls into action items and risks.\n" +
      "• Surface the right case studies and references while you’re on a call.\n\n" +
      "Backend sketch: CRM integration (HubSpot / Salesforce API), embeddings for proposals + case studies, and an LLM orchestration layer."
    );
  }

  if (t.includes("operations") || t.includes("ops") || t.includes("back office")) {
    return (
      "For operations / back-office workflows, GenAI usually helps with:\n" +
      "• Reading documents (invoices, forms) and pushing data into your systems.\n" +
      "• Triggering workflows – approvals, escalations, status updates between tools.\n" +
      "• Generating periodic summaries for leadership (SLA breaches, volume, trends).\n\n" +
      "Backend sketch: integration layer for your tools (ERP, ticketing), queue + scheduler, and an LLM that reasons only on the relevant context."
    );
  }

  // Generic fallback
  return (
    "Here’s a generic GenAI adoption pattern we’ve seen:\n" +
    "1) Start with a narrow copilot (support, sales or internal knowledge search).\n" +
    "2) Connect it to your real data via embeddings + vector search.\n" +
    "3) Add analytics to measure usage, time saved and revenue impact.\n\n" +
    "From your message I’d treat this as an initial discovery input and suggest a 4–8 week PoC focused on one measurable workflow."
  );
}

/* =======================
   DASHBOARD COMPONENT
   ======================= */

const Dashboard = () => {
  // show 2025* stats by default
  const [selectedYearKey] = useState("2025*");
  const currentStats = aiStatsByYear[selectedYearKey];

  // simple chat state
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  /* 🔌 HOOK FOR REAL OPEN DATA (optional)
     ------------------------------------
     In production you can uncomment this and call your backend API that
     aggregates IBM / McKinsey / OECD data into a single JSON response.

  const [liveData, setLiveData] = useState(null);

  useEffect(() => {
    async function fetchLive() {
      try {
        const res = await fetch("/api/ai-adoption-metrics");
        const json = await res.json();
        setLiveData(json); // shape: { aiStatsByYear, adoptionTimeline, ... }
      } catch (err) {
        console.error("Failed to load live AI metrics", err);
      }
    }
    fetchLive();
  }, []);
  */

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { sender: "business", text: trimmed };
    const botMsg = { sender: "bot", text: generateBotReply(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="page page-dashboard">
      {/* ========= TOP STRIP: KEY METRICS (2025*) ========= */}
      <section className="section section-soft">
        <div className="section-header dashboard-header">
          <div>
            <h1>AI Adoption Intelligence</h1>
            <p>
              A realistic, data-driven view of how organisations are adopting
              AI worldwide. These numbers are inspired by public surveys
              (IBM / McKinsey / OECD) and can be replaced with live data from
              your own ETL pipelines.
            </p>
          </div>
        </div>

        <div className="stats-strip stats-strip-dashboard">
          {currentStats.map((card) => (
            <div key={card.label} className="stats-card">
              <div className="stats-icon stats-icon-pulse" />
              <div className="stats-main">
                <div className="stats-label">{card.label}</div>
                <div className="stats-value">{card.value}</div>
                <div className="stats-detail">{card.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========= GLOBAL TREND (BAR STYLE) ========= */}
      <section className="section dashboard-section">
        <div className="dashboard-grid trend-grid">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h2>Global AI Adoption Over Time</h2>
              <p>
                Trend of organisations reporting at least one AI use case in
                production, with GenAI share growing quickly.
              </p>
            </div>

            <div className="trend-table">
              {adoptionTimeline.map((row) => (
                <div className="trend-row" key={row.year}>
                  <div className="trend-year">{row.year}</div>

                  <div className="trend-bars">
                    <div className="trend-bar-wrapper">
                      <span className="trend-label">AI Adoption</span>
                      <div className="trend-bar-bg">
                        <div
                          className="trend-bar-fill trend-bar-primary"
                          style={{ width: `${row.global}%` }}
                        />
                      </div>
                      <span className="trend-value">{row.global}%</span>
                    </div>

                    <div className="trend-bar-wrapper">
                      <span className="trend-label">GenAI Share</span>
                      <div className="trend-bar-bg">
                        <div
                          className="trend-bar-fill trend-bar-secondary"
                          style={{ width: `${row.genai}%` }}
                        />
                      </div>
                      <span className="trend-value">{row.genai}%</span>
                    </div>

                    <div className="trend-bar-wrapper">
                      <span className="trend-label">AI Spend Index</span>
                      <div className="trend-bar-bg">
                        <div
                          className="trend-bar-fill trend-bar-tertiary"
                          style={{ width: `${row.investment * 4}%` }}
                        />
                      </div>
                      <span className="trend-value">{row.investment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="dashboard-footnote">
              * Final numbers should be replaced with your official sources and
              refreshed via scheduled ETL jobs or serverless functions.
            </p>
          </div>

          <div className="dashboard-card data-sources-card">
            <div className="dashboard-card-header">
              <h2>Open-Source Data &amp; Refresh Strategy</h2>
              <p>
                Typical sources you can integrate, and how we keep the dashboard
                up-to-date in production.
              </p>
            </div>
            <ul className="bullet-list">
              {dataSources.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="dashboard-footnote">
              Implementation example: Python ETL (Pandas / Airflow) or Node
              cron jobs load new data into a warehouse (BigQuery / Snowflake /
              Postgres). This React dashboard then calls your backend API to
              render live metrics.
            </p>
          </div>
        </div>
      </section>

      {/* ========= REGION & SECTOR VIEW ========= */}
      <section className="section dashboard-section">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h2>AI Adoption by Region</h2>
              <p>
                Example regional breakdown based on public survey averages.
                Higher bars indicate more organisations reporting live AI use
                cases.
              </p>
            </div>

            <div className="region-grid">
              {adoptionByRegion.map((row) => (
                <div key={row.region} className="region-card">
                  <div className="region-header">
                    <span className="region-name">{row.region}</span>
                    <span className="region-adoption">{row.adoption}%</span>
                  </div>

                  <div className="region-bar-bg">
                    <div
                      className="region-bar-fill"
                      style={{ width: `${row.adoption}%` }}
                    />
                  </div>

                  <div className="region-meta">
                    <span className="region-growth">+{row.growth}% YoY</span>
                    <span className="region-focus">{row.focus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h2>AI Adoption by Sector</h2>
              <p>
                Quick view of which industries are most ready for GenAI
                copilots, automation and data-driven decisions.
              </p>
            </div>

            <div className="sector-grid">
              {adoptionBySector.map((row) => (
                <div key={row.sector} className="sector-row">
                  <div className="sector-header">
                    <span className="sector-name">{row.sector}</span>
                    <span className="sector-chip">{row.maturity}</span>
                  </div>
                  <div className="sector-bar-bg">
                    <div
                      className="sector-bar-fill"
                      style={{ width: `${row.adoption}%` }}
                    />
                  </div>
                  <span className="sector-adoption">{row.adoption}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========= SIMPLE B2B CHATBOT ========= */}
      <section className="section dashboard-section">
        <div className="section-header">
          <h2>B2B AI Chatbot – Business Use-Case Explorer</h2>
          <p>
            Lightweight demo chatbot focused on business questions. In
            production this would call your backend + an LLM (OpenAI or
            open-source) with your data and playbooks.
          </p>
        </div>

        <div className="dashboard-chat-layout">
          <div className="chatbot-panel">
            <div className="chatbot-panel-header">
              <div>
                <h3>AI Adoption Assistant</h3>
                <p className="chatbot-subtitle">
                  Ask about support, sales or operations – you’ll get
                  GenAI-focused answers.
                </p>
              </div>
              <span className="chatbot-status-dot">
                Static demo · No API key
              </span>
            </div>

            <div className="chat-window">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={
                    "chat-message " +
                    (msg.sender === "business"
                      ? "chat-message-business"
                      : "chat-message-bot")
                  }
                >
                  <div className="chat-message-meta">
                    {msg.sender === "business" ? "Business" : "AI Consultant"}
                  </div>
                  <div className="chat-message-bubble">
                    {msg.text.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <form className="chat-input-row" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Describe your business or AI challenge…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>

            <p className="chat-hint">
              Live build: this input would hit{" "}
              <code>/api/chat/business</code> on your backend, which combines
              your data (vector store) + an LLM and logs usage per tenant.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
