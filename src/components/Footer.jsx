import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        <div className="footer-column">
          <div className="footer-logo-block">
            <img
              src="/logo-allintoai.png"
              alt="All Into AI logo"
              className="footer-logo"
            />
            <div>
              <h3>All Into AI</h3>
              <p>
                AI-as-a-Service, automation and AI infrastructure to help
                businesses think, act and scale intelligently.
              </p>
            </div>
          </div>
          <div className="footer-social">
            <button>Twitter</button>
            <button>LinkedIn</button>
            <button>GitHub</button>
          </div>
        </div>

        <div className="footer-column">
          <h4>Platform</h4>
          <ul>
            <li>
              <Link to="/services">Core AI Services</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Data &amp; AI</h4>
          <ul>
            <li>Enterprise Automation</li>
            <li>Decision Intelligence</li>
            <li>AI Infrastructure</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} All Into AI. All rights reserved.</span>
        <span className="footer-bottom-links">
          <a href="#">Terms</a>
          <span>•</span>
          <a href="#">Privacy</a>
          <span>•</span>
          <a href="#">Cookies</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
