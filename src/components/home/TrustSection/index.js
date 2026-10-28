import React from 'react';
import './index.css';

const testimonialsData = [
  {
    stars: 5,
    quote: "The biggest difference is I don't have to think about my meals anymore. I know exactly what I'm eating.",
    initials: "AR",
    name: "Aditi R.",
    goal: "Fat Loss"
  },
  {
    stars: 5,
    quote: "Finally, healthy food that actually tastes good and fits my macros.",
    initials: "KM",
    name: "Karan M.",
    goal: "Muscle Support"
  },
  {
    stars: 5,
    quote: "Meal Match made consistency easier than motivation.",
    initials: "NS",
    name: "Neha S.",
    goal: "Weight Loss"
  }
];

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="trust-container">
        
        {/* Section Header */}
        <div className="trust-header">
          <p className="eyebrow">TRUST</p>
          <h2 className="trust-title">Real People. Real Consistency.</h2>
        </div>

        {/* 3 Columns Grid */}
        <div className="trust-grid">
          {testimonialsData.map((item, index) => (
            <figure key={index} className="luxe-card trust-card">
              
              {/* Star Rating */}
              <div className="star-rating">
                {[...Array(item.stars)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="star-icon">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="trust-quote">
                "{item.quote}"
              </blockquote>

              {/* Author Info */}
              <figcaption className="trust-author">
                <div className="author-avatar">{item.initials}</div>
                <div className="author-info">
                  <span className="author-name">{item.name}</span>
                  <span className="author-goal">{item.goal}</span>
                </div>
              </figcaption>

            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}