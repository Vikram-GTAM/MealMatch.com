import React from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FaArrowLeft,
  FaBolt,
} from "react-icons/fa6";

import Navbar from "../Navbar";
import Footer from "../Footer";
import MealMatchEngine from "../MealMatchEngine";

import "./index.css";


const MealMatchEnginePage = () => {

  const location = useLocation();
  const navigate = useNavigate();


  /* =========================================================
     DATA COMING FROM PLAN PAGE
  ========================================================= */

  const selectedGoal =
    location.state?.goal || "";

  const selectedPlan =
    location.state?.planTitle || "";

  const selectedPlanId =
    location.state?.planId || "";


  /* =========================================================
     BACK TO PLANS
  ========================================================= */

  const handleBackToPlans = () => {

    navigate(
      "/meal-match-plans",
      {
        state: {
          goal: selectedGoal,
        },
      }
    );
  };


  return (
    <>

      <Navbar />


      <main className="meal-engine-route-page">

        {/* ================================================
            PAGE TOP BAR
        ================================================= */}

        <section className="meal-engine-route-top">

          <div className="meal-engine-route-top-inner">

            <button
              type="button"
              className="meal-engine-route-back"
              onClick={handleBackToPlans}
            >
              <FaArrowLeft />

              Back to Plans
            </button>


            <div className="meal-engine-route-info">

              {selectedPlan && (

                <div className="meal-engine-route-chip">

                  <FaBolt />

                  <div>

                    <span>
                      SELECTED PLAN
                    </span>

                    <strong>
                      {selectedPlan}
                    </strong>

                  </div>

                </div>

              )}


              {selectedGoal && (

                <div className="meal-engine-route-chip">

                  <div>

                    <span>
                      YOUR GOAL
                    </span>

                    <strong>
                      {selectedGoal}
                    </strong>

                  </div>

                </div>

              )}

            </div>

          </div>

        </section>


        {/* ================================================
            EXISTING ENGINE COMPONENT
        ================================================= */}

        <MealMatchEngine
          initialGoal={selectedGoal}
          selectedPlan={selectedPlan}
          selectedPlanId={selectedPlanId}
        />

      </main>


      <Footer />

    </>
  );
};

export default MealMatchEnginePage;