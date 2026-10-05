
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* ==========================================
            BRAND & SOCIALS COLUMN
            ========================================== */}
        <div className="footer-brand-col">

          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              <img
                src="/logo/mealmatchlogo.png"
                alt="Meal Match"
                loading="lazy"
              />
            </div>
          </Link>

          <p className="footer-tagline">
            Meals made to match you.
          </p>

          {/* Social Media */}
          <div className="footer-socials">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mealmatch_hyderabad/"
              aria-label="Instagram"
              className="social-icon-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line
                  x1="17.5"
                  x2="17.51"
                  y1="6.5"
                  y2="6.5"
                />
              </svg>
            </a>

            {/* Facebook - currently disabled
            <a
              href="#home"
              aria-label="Facebook"
              className="social-icon-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            */}

            {/* Twitter - currently disabled
            <a
              href="#home"
              aria-label="Twitter"
              className="social-icon-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            */}

            {/* YouTube - currently disabled
            <a
              href="#home"
              aria-label="YouTube"
              className="social-icon-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <polygon
                  points="10 15 15 12 10 9 10 15"
                  fill="currentColor"
                />
              </svg>
            </a>
            */}

          </div>
        </div>


        {/* ==========================================
            EXPLORE LINKS COLUMN
            ========================================== */}
        <nav className="footer-nav-col">

          <p className="footer-eyebrow">
            EXPLORE
          </p>

          <ul className="footer-links">

            {/* How It Works - currently disabled
            <li>
              <a href="#how-it-works">
                How It Works
              </a>
            </li>
            */}

            <li>
              <a href="#menu">
                Menu
              </a>
            </li>

            <li>
              <a href="#meal-match-plans">
                Meal Plans
              </a>
            </li>

            {/* Nutrition & About Us - currently disabled
            <li>
              <a href="#why-match">
                Nutrition
              </a>
            </li>

            <li>
              <Link to="/">
                About Us
              </Link>
            </li>
            */}

            <li>
              <a href="#faq">
                FAQ
              </a>
            </li>

            {/* Contact - currently disabled
            <li>
              <Link to="/">
                Contact
              </Link>
            </li>
            */}

          </ul>
        </nav>


        {/* ==========================================
            NEWSLETTER COLUMN
            ========================================== */}
        <div className="footer-newsletter-col">

          <p className="footer-eyebrow">
            NEWSLETTER
          </p>

          <h3 className="newsletter-title">
            Get Smarter About Your Food.
          </h3>

          <div className="newsletter-form">

            <a
              href="#meal-match-plans"
              className="newsletter-submit-btn"
            >
              <span>
                Join the Match
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

          </div>

        </div>

      </div>


      {/* ==========================================
          BOTTOM FOOTER
          ========================================== */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 Meal Match. Your goals. Your macros. Your Meal Match.
          </p>

          <p>
            Nutrition estimates are guidance, not medical advice.
          </p>

        </div>

      </div>

    </footer>
  );
};
