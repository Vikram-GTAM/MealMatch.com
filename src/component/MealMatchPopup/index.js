import React, { useState } from "react";
import {
  FaXmark,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaLeaf,
  FaCheck,
} from "react-icons/fa6";

import "./index.css";

/* =========================================================
   GOOGLE APPS SCRIPT WEB APP URL

   IMPORTANT:
   Paste the URL you copied from:

   Apps Script
   → Deploy
   → Web app
   → URL

   It must end with /exec
========================================================= */

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwZoUI9onZwPsqgr-LI_oKhs9-Gb2ngPE3Zl6bcAYTuhrK5MWh49BrUF2rSh16KCj9pOA/exec";

const MealMatchPopup = () => {
  /* =========================================================
     STATES
  ========================================================= */

  const [showPopup, setShowPopup] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    mealPlan: "",
  });

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    /* Contact number - numbers only */

    if (name === "contact") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setError("");
  };

  /* =========================================================
     OPEN / CLOSE POPUP
  ========================================================= */

  const handlePopupToggle = () => {
    if (showPopup) {
      setShowPopup(false);

      setTimeout(() => {
        setSubmitted(false);
        setError("");
      }, 300);
    } else {
      setSubmitted(false);
      setError("");
      setShowPopup(true);
    }
  };

  const handleDone = () => {
    setShowPopup(false);
    setSubmitted(false);
    setError("");

    document
      .getElementById("meal-match-plans")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleClose = () => {
    setShowPopup(false);

    setTimeout(() => {
      setSubmitted(false);
      setError("");
    }, 300);
  };

  /* =========================================================
     FORM SUBMIT
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    /* Basic validation */

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (formData.contact.length !== 10) {
      setError("Please enter a valid 10-digit contact number.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email ID.");
      return;
    }

    if (!formData.mealPlan) {
      setError("Please select a meal plan.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      /* ============================================
         CREATE DATA FOR GOOGLE SHEET
      ============================================ */

      const formBody = new URLSearchParams();

      formBody.append("name", formData.name.trim());

      formBody.append("contact", formData.contact.trim());

      formBody.append("email", formData.email.trim());

      formBody.append("mealPlan", formData.mealPlan);

      /* ============================================
         SEND TO GOOGLE APPS SCRIPT
      ============================================ */

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",

        body: formBody,

        mode: "no-cors",
      });

      /* ============================================
         SUCCESS SCREEN
      ============================================ */

      setSubmitted(true);

      /* Clear form */

      setFormData({
        name: "",
        contact: "",
        email: "",
        mealPlan: "",
      });
    } catch (err) {
      console.error("Meal Match submission error:", err);

      setError(
        "Unable to submit your details. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =====================================================
          POPUP FORM
      ====================================================== */}

      {showPopup && (
        <div className="meal-popup">
          {/* CLOSE BUTTON */}

          <button
            type="button"
            className="meal-popup-close"
            onClick={handleClose}
            aria-label="Close meal match form"
          >
            <FaXmark />
          </button>

          {/* =================================================
              SUCCESS SCREEN
          ================================================= */}

          {submitted ? (
            <div className="meal-success">
              {/* RIGHT TICK */}

              <div className="meal-success-icon">
                <FaCheck />
              </div>

              <span className="meal-success-small-title">
                REQUEST RECEIVED
              </span>

              <h2>Thank You!</h2>

              <p>
                Your details have been submitted successfully.
              </p>

              <h4>
                Our team will contact you shortly.
              </h4>

              <button
                type="button"
                className="meal-success-btn"
                onClick={handleDone}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* =================================================
                  HEADER
              ================================================= */}

              <div className="meal-popup-header">
                <span className="meal-popup-label">
                  PERSONALISED NUTRITION
                </span>

                <h2>
                  Find Your Perfect
                  <span> Meal Match.</span>
                </h2>

                <p>
                  Tell us a little about yourself and we'll help
                  you choose the right meal plan.
                </p>
              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                className="meal-popup-form"
                onSubmit={handleSubmit}
              >
                {/* NAME */}

                <div className="meal-form-group">
                  <label htmlFor="meal-name">
                    Your Name
                  </label>

                  <div className="meal-input-wrapper">
                    <FaUser className="meal-input-icon" />

                    <input
                      id="meal-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>
                </div>

                {/* CONTACT NUMBER */}

                <div className="meal-form-group">
                  <label htmlFor="meal-contact">
                    Contact Number
                  </label>

                  <div className="meal-input-wrapper">
                    <FaPhone className="meal-input-icon" />

                    <input
                      id="meal-contact"
                      type="tel"
                      name="contact"
                      placeholder="Enter 10-digit number"
                      value={formData.contact}
                      onChange={handleChange}
                      inputMode="numeric"
                      maxLength={10}
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                {/* EMAIL */}

                <div className="meal-form-group">
                  <label htmlFor="meal-email">
                    Email ID
                  </label>

                  <div className="meal-input-wrapper">
                    <FaEnvelope className="meal-input-icon" />

                    <input
                      id="meal-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                {/* MEAL PLAN */}

                <div className="meal-form-group">
                  <label htmlFor="meal-plan">
                    Meal Plan
                  </label>

                  <div className="meal-input-wrapper meal-select-wrapper">
                    <select
                      id="meal-plan"
                      name="mealPlan"
                      value={formData.mealPlan}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select your goal
                      </option>

                      <option value="Fat Loss">
                        Fat Loss
                      </option>

                      <option value="Weight Loss">
                        Weight Loss
                      </option>

                      <option value="Muscle Gain">
                        Muscle Gain
                      </option>

                      <option value="Transformation">
                        Transformation
                      </option>

                      <option value="Keto">
                        Keto
                      </option>
                    </select>

                    <FaChevronDown className="meal-select-icon" />
                  </div>
                </div>

                {/* ERROR */}

                {error && (
                  <p className="meal-form-error">
                    {error}
                  </p>
                )}

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  className="meal-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="meal-loader"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Meal Plan

                      <span className="meal-submit-arrow">
                        →
                      </span>
                    </>
                  )}
                </button>

                <p className="meal-privacy-note">
                  Your information is safe with us.
                </p>
              </form>
            </>
          )}
        </div>
      )}

      {/* =====================================================
          FLOATING BUTTON
      ====================================================== */}

      <button
        type="button"
        className={`meal-floating-icon ${
          showPopup ? "meal-floating-icon-active" : ""
        }`}
        onClick={handlePopupToggle}
        aria-label={
          showPopup
            ? "Close meal match form"
            : "Open meal match form"
        }
      >
        {showPopup ? <FaXmark /> : <FaLeaf />}

        {!showPopup && (
          <span className="meal-icon-tooltip">
            Find Your Meal
          </span>
        )}
      </button>
    </>
  );
};

export default MealMatchPopup;