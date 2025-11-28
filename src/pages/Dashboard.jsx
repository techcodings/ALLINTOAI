// src/pages/Dashboard.jsx
import React from "react";

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
      detail:
        "Almost half of organisations reporting at least one AI use case."
    },
    {
      label: "Year-on-Year AI Spend",
      value: "+18–22%",
      detail: "Sustained growth in GenAI, data platforms and automation."
    },
    {
      label: "GenAI Priority",
      value: "~75%",
      detail:
        "Copilots, workflow automation and decision support dominate roadmaps."
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

/* =======================
   DASHBOARD COMPONENT
   ======================= */

const Dashboard = () => {
  // show latest 2025* stats
  const selectedYearKey = "2025*";
  const currentStats = aiStatsByYear[selectedYearKey];

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
    </div>
  );
};

export default Dashboard;
