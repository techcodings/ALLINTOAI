// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"; // ✅ make sure this is imported

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="nav-root">
      <div className="nav-inner nav-inner-centered">
        {/* Brand (click → Home) */}
        <div className="nav-left">
          <NavLink
            to="/"
            className="nav-brand"
            onClick={closeMobile}
          >
            <img
              src="/logo-allintoai.png"
              alt="All Into AI logo"
              className="nav-logo"
            />
            <div className="nav-brand-text">
              <span className="nav-title">ALL INTO AI</span>
              <span className="nav-subtitle">
                All in one AI solutions for businesses
              </span>
            </div>
          </NavLink>
        </div>

        {/* Centered nav links */}
        <nav
          className={
            "nav-links nav-links-centered" +
            (mobileOpen ? " nav-links-open" : "")
          }
        >
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

        {/* Right side CTA */}
        <div className="nav-cta">
          <NavLink
            to="/contact"
            className="btn btn-primary nav-cta-btn"
            onClick={closeMobile}
          >
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
