import React, { useState } from "react";

import MealMatchEngine from "../../component/MealMatchEngine";

import {
  FaCheck,
  FaBolt,
  FaCalendarDays,
  FaCrown,
  FaLeaf,
} from "react-icons/fa6";

import "./index.css";

/* =========================================================
   MEAL MATCH SUBSCRIPTION PLANS
========================================================= */

const plans = [
  {
    id: "trial",
    title: "3 Days Trial",
    subtitle: "Try Meal Match",
    description:
      "Experience personalised Meal Match nutrition before committing to a longer plan.",
    icon: <FaBolt />,
    badge: "START HERE",
  },

  {
    id: "weekly",
    title: "Weekly Plan",
    subtitle: "Stay Consistent",
    description:
      "A flexible weekly meal plan designed to help you stay consistent with your nutrition.",
    icon: <FaCalendarDays />,
    badge: "POPULAR",
  },

  {
    id: "monthly",
    title: "Monthly Plan",
    subtitle: "Build Your Routine",
    description:
      "Build a stronger nutrition routine with a long-term personalised Meal Match plan.",
    icon: <FaCrown />,
    badge: "BEST VALUE",
    recommended: true,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const MealMatchPlans = () => {
  /* =======================================================
     SELECTED PLAN
  ======================================================= */

  const [selectedPlanData, setSelectedPlanData] =
    useState(null);

  /* =======================================================
     SELECT PLAN
  ======================================================= */

  const handleSelectPlan = (plan) => {
    setSelectedPlanData({
      id: plan.id,
      title: plan.title,
      subtitle: plan.subtitle,
    });

    /* Scroll to Meal Match Engine after state updates */
    setTimeout(() => {
      const engineSection =
        document.getElementById(
          "meal-match-engine"
        );

      if (engineSection) {
        engineSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  /* =======================================================
     CHANGE SELECTED PLAN
  ======================================================= */

  const handleChangePlan = () => {
    setSelectedPlanData(null);

    setTimeout(() => {
      const plansSection =
        document.getElementById(
          "meal-match-plans"
        );

      if (plansSection) {
        plansSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <>
      {/* ===================================================
          MEAL MATCH PLANS SECTION

          IMPORTANT:
          Navbar Meal Plans button scrolls to this ID.
      =================================================== */}

      <section
        id="meal-match-plans"
        className="meal-plans-page"
      >
        {/* Decorative background glows */}
        <div className="meal-plans-glow meal-plans-glow-one" />
        <div className="meal-plans-glow meal-plans-glow-two" />

        <div className="meal-plans-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="meal-plans-header">

            <div className="meal-plans-brand-icon">
              <FaLeaf />
            </div>

            <span className="meal-plans-eyebrow">
              PERSONALISED NUTRITION
            </span>

            <h2 className="meal-plans-main-title">
              Choose Your
              <span> Meal Match Plan.</span>
            </h2>

            <p className="meal-plans-description">
              Pick a plan that fits your routine
              and stay consistent with meals
              designed around your body,
              lifestyle and goals.
            </p>

          </div>


          {/* =================================================
              PLAN CARDS
          ================================================= */}

          <div className="meal-plans-grid">

            {plans.map((plan) => {
              const isSelected =
                selectedPlanData?.id ===
                plan.id;

              return (
                <article
                  key={plan.id}
                  className={`
                    meal-plan-card
                    ${
                      plan.recommended
                        ? "meal-plan-card-featured"
                        : ""
                    }
                    ${
                      isSelected
                        ? "selected"
                        : ""
                    }
                  `}
                >

                  {/* Badge */}
                  {plan.badge && (
                    <span className="meal-plan-badge">
                      {plan.badge}
                    </span>
                  )}


                  {/* Icon */}
                  <div className="meal-plan-icon">
                    {plan.icon}
                  </div>


                  {/* Subtitle */}
                  <span className="meal-plan-subtitle">
                    {plan.subtitle}
                  </span>


                  {/* Plan name */}
                  <h3 className="meal-plan-title">
                    {plan.title}
                  </h3>


                  {/* Description */}
                  <p className="meal-plan-description">
                    {plan.description}
                  </p>


                  {/* Select plan button */}
                  <button
                    type="button"
                    className={`meal-plan-select-btn ${
                      isSelected
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSelectPlan(plan)
                    }
                  >

                    {isSelected
                      ? "Selected"
                      : `Choose ${plan.title}`}

                    {!isSelected && (
                      <span className="meal-plan-arrow">
                        →
                      </span>
                    )}

                    {isSelected && (
                      <FaCheck />
                    )}

                  </button>

                </article>
              );
            })}

          </div>


          {/* =================================================
              NOTE
          ================================================= */}

          <div className="meal-plans-note">

            <FaCheck />

            <p>
              You can upgrade or change your
              Meal Match plan anytime.
            </p>

          </div>

        </div>
      </section>


      {/* ===================================================
          MEAL MATCH ENGINE

          Still on same landing page.
      =================================================== */}

      {selectedPlanData && (
        <section
          id="meal-match-engine"
          className="landing-meal-engine-section"
        >

        {/* =================================================
            SELECTED PLAN SUMMARY
        ================================================= */}

        {selectedPlanData && (
          <div className="selected-plan-summary-wrapper">

            <div className="selected-plan-summary">

              <div className="selected-plan-summary-icon">
                <FaBolt />
              </div>


              <div className="selected-plan-summary-content">

                <span className="selected-plan-summary-label">
                  SELECTED PLAN
                </span>

                <strong className="selected-plan-summary-title">
                  {selectedPlanData.title}
                </strong>

                <span className="selected-plan-summary-subtitle">
                  {selectedPlanData.subtitle}
                </span>

              </div>


              <button
                type="button"
                className="change-plan-btn"
                onClick={handleChangePlan}
              >
                Change Plan
              </button>

            </div>

          </div>
        )}


        {/* =================================================
            MEAL MATCH ENGINE

            Engine remains directly in landing page.
        ================================================= */}

          <MealMatchEngine
            selectedPlan={selectedPlanData.title}
            selectedPlanId={selectedPlanData.id}
          />

        </section>
      )}
    </>
  );
};

export default MealMatchPlans;