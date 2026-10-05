import React from "react";
import "./index.css";

const MealMatchSection1 = () => {
  const handleStartMatch = () => {
    document
      .getElementById("meal-match-plans")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="personalisation"
      className="meal-match-section"
    >
      <div className="meal-match-container">

        <div className="meal-match-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
            alt="Healthy personalised meal"
            className="meal-match-img"
          />
        </div>

        <div className="meal-match-content">

          <span className="meal-match-tag">
            PERSONALISATION
          </span>

          <h2 className="meal-match-title">
            Your Body Isn't Generic.
            Your Meals Shouldn't Be Either.
          </h2>

          <p className="meal-match-description">
            A random diet plan doesn't know
            your body, your activity level
            or your goal. Meal Match starts
            with you.
          </p>

          <ul className="meal-match-checklist">

            <li>
              <span className="checkmark">
                ✓
              </span>
              Match your calories
            </li>

            <li>
              <span className="checkmark">
                ✓
              </span>
              Match your macros
            </li>

            <li>
              <span className="checkmark">
                ✓
              </span>
              Match your goal
            </li>

            <li>
              <span className="checkmark">
                ✓
              </span>
              Match your lifestyle
            </li>

            <li>
              <span className="checkmark">
                ✓
              </span>
              Match your taste
            </li>

          </ul>

          <button
            type="button"
            className="meal-match-btn"
            onClick={handleStartMatch}
          >
            Start My Match →
          </button>

        </div>

      </div>
    </section>
  );
};

export default MealMatchSection1;