import React from 'react';
import './index.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner-section">
      <div className="cta-bg-overlay"></div>
      
      <div className="cta-container">
        <p className="eyebrow">NO GUESSWORK</p>
        <h2 className="cta-title">Stop Guessing. Start Matching.</h2>
        <p className="cta-subtitle">
          Tell us about yourself. We'll help you understand your nutrition and find meals made to match your goals.
        </p>

        <div className="cta-buttons-row">
          <a href="#meal-match-plans" className="primary-btn">
            Get Your Meal Match 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <a href="#menu" className="outline-btn">
            Explore the Menu
          </a>
        </div>
      </div>
    </section>
  );
}