// src/components/Footer.jsx
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
                Backend, SaaS and GenAI solutions that help businesses
                automate, analyse and scale securely.
              </p>
            </div>
          </div>
          <div className="footer-social">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Platform</h4>
          <ul>
            <li>
              <Link to="/services">Core Backend & AI Services</Link>
            </li>
            <li>
              <Link to="/industries">Industry Solutions</Link>
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
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
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
