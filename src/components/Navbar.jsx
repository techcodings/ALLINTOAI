import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="nav-root">
      <div className="nav-inner">
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

        {/* Desktop links + CTA (hidden on small screens via CSS) */}
        <nav
          className={
            "nav-links" + (mobileOpen ? " nav-links-open" : "")
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
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={closeMobile}
          >
            Contact
          </NavLink>
        </nav>

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
          onClick={() => setMobileOpen((o) => !o)}
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
