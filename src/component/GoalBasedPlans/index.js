import React from "react";
import "./index.css";

const plansData = [
  {
    title: "Weight Loss Match",
    features: [
      "Calorie-controlled",
      "High protein",
      "Satisfying portions",
    ],
  },
  {
    title: "Fat Loss Match",
    features: [
      "Protein-focused",
      "Macro-balanced",
      "Muscle-conscious",
    ],
  },
  {
    title: "Maintenance Match",
    features: [
      "Balanced nutrition",
      "Flexible meals",
      "Lifestyle-friendly",
    ],
  },
  {
    title: "Muscle Support Match",
    features: [
      "High protein",
      "Performance carbs",
      "Recovery-focused",
    ],
  },
];

export default function GoalBasedPlans() {
  const goToMealPlans = () => {
    document
      .getElementById("meal-match-plans")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="goal-plans"
      className="plans-section"
    >
      <div className="plans-container">

        <div className="plans-header">
          <p className="eyebrow">
            GOAL-BASED MEAL PLANS
          </p>

          <h2 className="plans-title">
            Match Your Goal.
          </h2>

          <p className="plans-subtitle">
            Eat for your goal, not your guess.
          </p>
        </div>

        <div className="plans-grid">

          {plansData.map(
            (plan, index) => (
              <div
                key={index}
                className="luxe-card plan-card"
              >
                <div className="plan-card-top">

                  <h3 className="plan-card-title">
                    {plan.title}
                  </h3>

                  <div className="gold-rule" />

                </div>

                <ul className="plan-features-list">

                  {plan.features.map(
                    (feature, idx) => (
                      <li
                        key={idx}
                        className="plan-feature-item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="check-icon"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>

                        <span>
                          {feature}
                        </span>
                      </li>
                    )
                  )}

                </ul>

                <div className="plan-card-footer">

                  <button
                    type="button"
                    className="find-match-btn"
                    onClick={goToMealPlans}
                  >
                    Find My Match
                  </button>

                </div>

              </div>
            )
          )}

        </div>
      </div>
    </section>
  );
}