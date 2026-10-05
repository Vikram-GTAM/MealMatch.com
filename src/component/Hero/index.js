import React from "react";
import {
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

import "./index.css";

const Hero = () => {
  /* =========================================
     SMOOTH SCROLL TO LANDING PAGE SECTION
  ========================================= */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* =========================================
          RIGHT SIDE BACKGROUND IMAGE
      ========================================= */}
      <div className="hero-background" />

      {/* =========================================
          GRADIENT OVERLAY
      ========================================= */}
      <div className="hero-overlay" />

      {/* =========================================
          HERO CONTAINER
      ========================================= */}
      <div className="hero-container">

        <div className="hero-content">

          {/* Small Heading */}
          <p className="hero-eyebrow">
            PERSONALISED NUTRITION, MADE SIMPLE
          </p>

          {/* Main Heading */}
          <h1 className="hero-title">
            Meals Made
            <br />
            to <span>Match You.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Tell us about your body, lifestyle and goals.
            We customize what you need and match you with
            meals customized according to your BMI.
          </p>

          {/* =========================================
              TAGS
          ========================================= */}
          <div className="hero-tags">

            <span>
              BMI-Based Meals
            </span>

            <span>
              Personalised Nutrition
            </span>

            <span>
              Macro-Friendly
            </span>

            <span>
              Freshly Prepared
            </span>

          </div>

          {/* =========================================
              BUTTONS
          ========================================= */}
          <div className="hero-buttons">

            {/* GET YOUR MEAL MATCH */}
            <button
              type="button"
              className="primary-btn"
              onClick={() =>
                scrollToSection(
                  "meal-match-plans"
                )
              }
            >
              Get Your Meal Match

              <FaArrowRight />
            </button>


            {/* EXPLORE MENU */}
            <button
              type="button"
              className="secondary-btn"
              onClick={() =>
                scrollToSection(
                  "menu"
                )
              }
            >
              Explore the Menu
            </button>

          </div>

          {/* =========================================
              BENEFITS
          ========================================= */}
          <div className="hero-benefits">

            <div>
              <FaCheck />

              <span>
                Know what's on your plate
              </span>
            </div>


            <div>
              <FaCheck />

              <span>
                No hidden calories
              </span>
            </div>


            <div>
              <FaCheck />

              <span>
                No confusing portions
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;