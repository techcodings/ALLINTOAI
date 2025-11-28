// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="nav-root">
      <div className="nav-inner">
        {/* Brand */}
        <div className="nav-left">
          <img
            src="/logo-allintoai.png"
            alt="All Into AI logo"
            className="nav-logo"
          />
          <div className="nav-brand-text">
            <span className="nav-title">ALL INTO AI</span>
            <span className="nav-subtitle">Together With AI.</span>
          </div>
        </div>

        {/* Desktop + mobile links */}
        <nav className={"nav-links" + (mobileOpen ? " nav-links-open" : "")}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={closeMobile}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={closeMobile}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={closeMobile}
          >
            Services
          </NavLink>

          {/* AI Adoption Dashboard */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={closeMobile}
          >
            AI Dashboard
          </NavLink>

          <NavLink
            to="/industries"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={closeMobile}
          >
            Industries
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={closeMobile}
          >
            Contact
          </NavLink>
        </nav>

        {/* Primary CTA */}
        <div className="nav-cta">
          <NavLink to="/contact" className="btn btn-primary nav-cta-btn">
            Get Consultation
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className={
            "nav-menu-toggle" + (mobileOpen ? " nav-menu-toggle-open" : "")
          }
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
