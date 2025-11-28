// src/components/Layout.jsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-root">
        <div className="splash-inner">
          <div className="splash-logo">
            <img src="/logo-allintoai.png" alt="All Into AI logo" />
          </div>
          <div className="splash-title">ALL INTO AI</div>
          <div className="splash-subtitle">
            Backend · SaaS · GenAI for businesses
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
