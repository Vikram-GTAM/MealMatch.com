import React, { useMemo, useState } from "react";

import {
  FaArrowRight,
  FaArrowLeft,
  FaBolt,
  FaTriangleExclamation,
} from "react-icons/fa6";

import MealMatchPopup from "../../component/MealMatchPopup";
import "./index.css";


/* =====================================================
   ACTIVITY LEVELS
===================================================== */

const ACTIVITY_LEVELS = [
  {
    title: "Sedentary",
    desc: "Desk work, little movement",
    multiplier: 1.2,
  },

  {
    title: "Lightly Active",
    desc: "Light exercise 1–3 days",
    multiplier: 1.375,
  },

  {
    title: "Moderately Active",
    desc: "Exercise 3–5 days",
    multiplier: 1.55,
  },

  {
    title: "Very Active",
    desc: "Hard training 6–7 days",
    multiplier: 1.725,
  },

  {
    title: "Athlete / Highly Active",
    desc: "Twice-daily training or physical job",
    multiplier: 1.9,
  },
];


/* =====================================================
   GOALS
===================================================== */

const GOALS_LIST = [
  {
    title: "Weight Loss",
    desc:
      "Calorie-controlled meals designed to support sustainable weight loss.",
  },

  {
    title: "Fat Loss",
    desc:
      "High-protein nutrition designed to preserve muscle while reducing body fat.",
  },

  {
    title: "Maintenance",
    desc:
      "Balanced meals to help maintain your current weight and lifestyle.",
  },

  {
    title: "Muscle Support",
    desc:
      "Higher protein and performance-focused meals designed to support training and recovery.",
  },
];


/* =====================================================
   MEALS
===================================================== */

const MEALS_LIST = [

  /* ===================================================
     NON VEG
  =================================================== */

  {
    id: 1,
    category: "CHICKEN",
    diet: "nonveg",

    name: "Chipotle Chicken & Roast",

    calories: 480,
    protein: 41,
    carbs: 34,
    fats: 20,

    portion: "Portion 400g",

    img:
      "/assets/chipotle-chicken-roast.webp",
  },

  {
    id: 2,
    category: "CHICKEN",
    diet: "nonveg",

    name: "Asian Peanut Chicken",

    calories: 505,
    protein: 39,
    carbs: 36,
    fats: 23,

    portion: "Portion 400g",

    img:
      "/assets/asian-peanut-chicken.webp",
  },

  {
    id: 3,
    category: "CHICKEN",
    diet: "nonveg",

    name: "Tandoori Chicken Salad",

    calories: 440,
    protein: 44,
    carbs: 26,
    fats: 17,

    portion: "Portion 390g",

    img:
      "/assets/tandoori-chicken-salad.webp",
  },

  {
    id: 4,
    category: "CHICKEN",
    diet: "nonveg",

    name: "Avocado Chicken Salad",

    calories: 520,
    protein: 37,
    carbs: 21,
    fats: 31,

    portion: "Portion 380g",

    img:
      "/assets/avocado-chicken-salad.webp",
  },

  {
    id: 5,
    category: "FISH",
    diet: "nonveg",

    name: "Avocado Fish Salad",

    calories: 500,
    protein: 36,
    carbs: 19,
    fats: 30,

    portion: "Portion 380g",

    img:
      "/assets/avocado-fish-salad-zoomed-out.webp",
  },

  {
    id: 6,
    category: "CHICKEN",
    diet: "nonveg",

    name: "Chicken Wrap",

    calories: 460,
    protein: 38,
    carbs: 43,
    fats: 14,

    portion: "Portion 260g",

    img:
      "/assets/chicken-wrap-zoomed-out.webp",
  },


  /* ===================================================
     VEG
  =================================================== */

  {
    id: 7,
    category: "PANEER",
    diet: "veg",

    name: "Grilled Paneer Salad",

    calories: 420,
    protein: 29,
    carbs: 28,
    fats: 22,

    portion: "Portion 380g",

    img:
      "/assets/grilled-paneer-salad.png",
  },

  {
    id: 8,
    category: "PANEER",
    diet: "veg",

    name: "Paneer Shawarma Salad",

    calories: 435,
    protein: 30,
    carbs: 32,
    fats: 21,

    portion: "Portion 390g",

    img:
      "/assets/paneer-shawarma-salad.png",
  },

  {
    id: 9,
    category: "PANEER",
    diet: "veg",

    name: "Paneer Wrap",

    calories: 445,
    protein: 27,
    carbs: 42,
    fats: 19,

    portion: "Portion 270g",

    img:
      "/assets/paneer-wrap-zoomed-out.webp",
  },

  {
    id: 10,
    category: "VEG",
    diet: "veg",

    name: "Avocado Toast",

    calories: 350,
    protein: 12,
    carbs: 38,
    fats: 18,

    portion: "Portion 220g",

    img:
      "/assets/avocado-toast-zoomed-out.webp",
  },

  {
    id: 11,
    category: "VEG",
    diet: "veg",

    name: "Mushroom Cheese Toast",

    calories: 390,
    protein: 20,
    carbs: 34,
    fats: 19,

    portion: "Portion 240g",

    img:
      "/assets/mushroom-cheese-toast-zoomed-out.webp",
  },
];


/* =====================================================
   STEPS
===================================================== */

const STEPS = [
  {
    num: 1,
    label: "TELL US ABOUT YOURSELF",
  },

  {
    num: 2,
    label: "CHOOSE YOUR GOAL",
  },

  {
    num: 3,
    label: "YOUR REQUIREMENTS",
  },

  {
    num: 4,
    label: "YOUR MEAL MATCH",
  },
];


/* =====================================================
   COMPONENT
===================================================== */

const MealMatchEngine = () => {

  /* =====================================================
     STEPS
  ===================================================== */

  const [
    currentStep,
    setCurrentStep,
  ] = useState(1);

  const [
    highestStep,
    setHighestStep,
  ] = useState(1);


  /* =====================================================
     USER VALUES
  ===================================================== */

  const [
    unit,
    setUnit,
  ] = useState("metric");


  const [
    age,
    setAge,
  ] = useState(28);


  const [
    gender,
    setGender,
  ] = useState("Female");


  const [
    height,
    setHeight,
  ] = useState(168);


  const [
    weight,
    setWeight,
  ] = useState(66);


  const [
    activity,
    setActivity,
  ] = useState(
    "Moderately Active"
  );


  const [
    goal,
    setGoal,
  ] = useState("");


  /* =====================================================
     SELECTED MEALS
  ===================================================== */

  const [
    addedMeals,
    setAddedMeals,
  ] = useState({});


  /* =====================================================
     MEAL FILTER
  ===================================================== */

  const [
    mealFilter,
    setMealFilter,
  ] = useState("all");


  /* =====================================================
     UNIT CHANGE
  ===================================================== */

  const handleUnitChange = (
    newUnit
  ) => {

    if (
      newUnit === unit
    ) {
      return;
    }


    if (
      newUnit === "imperial"
    ) {

      setHeight(
        Math.round(
          Number(height) /
          2.54
        )
      );


      setWeight(
        Math.round(
          Number(weight) *
          2.20462
        )
      );

    } else {

      setHeight(
        Math.round(
          Number(height) *
          2.54
        )
      );


      setWeight(
        Math.round(
          Number(weight) /
          2.20462
        )
      );
    }


    setUnit(newUnit);
  };


  /* =====================================================
     CONVERT TO METRIC
  ===================================================== */

  const metricValues =
    useMemo(() => {

      if (
        unit === "metric"
      ) {

        return {

          heightCm:
            Number(height),

          weightKg:
            Number(weight),
        };
      }


      return {

        heightCm:
          Number(height) *
          2.54,

        weightKg:
          Number(weight) *
          0.453592,
      };

    }, [
      unit,
      height,
      weight,
    ]);


  /* =====================================================
     BMI
  ===================================================== */

  const bmi =
    useMemo(() => {

      const heightMeters =
        metricValues.heightCm /
        100;


      if (
        heightMeters <= 0 ||
        metricValues.weightKg <= 0
      ) {

        return 0;
      }


      return (
        metricValues.weightKg /
        (
          heightMeters *
          heightMeters
        )
      );

    }, [
      metricValues.heightCm,
      metricValues.weightKg,
    ]);


  const getBmiStatus = (
    value
  ) => {

    if (
      value < 18.5
    ) {
      return "Underweight";
    }


    if (
      value < 25
    ) {
      return "Healthy Range";
    }


    if (
      value < 30
    ) {
      return "Overweight";
    }


    return "Higher Range";
  };


  const bmiStatus =
    getBmiStatus(bmi);


  /* =====================================================
     BMR
     MIFFLIN ST JEOR
  ===================================================== */

  const bmr =
    useMemo(() => {

      const base =
        10 *
          metricValues.weightKg +
        6.25 *
          metricValues.heightCm -
        5 *
          Number(age);


      if (
        gender === "Male"
      ) {

        return base + 5;
      }


      return base - 161;

    }, [
      metricValues.weightKg,
      metricValues.heightCm,
      age,
      gender,
    ]);


  /* =====================================================
     ACTIVITY MULTIPLIER
  ===================================================== */

  const activityMultiplier =
    useMemo(() => {

      const selected =
        ACTIVITY_LEVELS.find(
          (item) =>
            item.title ===
            activity
        );


      return (
        selected?.multiplier ||
        1.2
      );

    }, [
      activity,
    ]);


  /* =====================================================
     MAINTENANCE
  ===================================================== */

  const maintenanceCalories =
    useMemo(() => {

      return (
        bmr *
        activityMultiplier
      );

    }, [
      bmr,
      activityMultiplier,
    ]);


  /* =====================================================
     TARGET CALORIES
  ===================================================== */

  const targetCalories =
    useMemo(() => {

      switch (goal) {

        case "Weight Loss":

          return (
            maintenanceCalories *
            0.8
          );


        case "Fat Loss":

          return (
            maintenanceCalories *
            0.85
          );


        case "Muscle Support":

          return (
            maintenanceCalories *
            1.1
          );


        case "Maintenance":
        default:

          return (
            maintenanceCalories
          );
      }

    }, [
      maintenanceCalories,
      goal,
    ]);


  /* =====================================================
     PROTEIN
  ===================================================== */

  const protein =
    useMemo(() => {

      let multiplier = 1.6;


      if (
        goal ===
        "Weight Loss"
      ) {

        multiplier = 1.8;
      }


      if (
        goal ===
        "Fat Loss"
      ) {

        multiplier = 2;
      }


      if (
        goal ===
        "Muscle Support"
      ) {

        multiplier = 2;
      }


      return (
        metricValues.weightKg *
        multiplier
      );

    }, [
      metricValues.weightKg,
      goal,
    ]);


  /* =====================================================
     FATS
  ===================================================== */

  const fats =
    useMemo(() => {

      return (
        (
          targetCalories *
          0.25
        ) /
        9
      );

    }, [
      targetCalories,
    ]);


  /* =====================================================
     CARBS
  ===================================================== */

  const carbs =
    useMemo(() => {

      const proteinCalories =
        protein *
        4;


      const fatCalories =
        fats *
        9;


      const remaining =
        targetCalories -
        proteinCalories -
        fatCalories;


      return Math.max(
        remaining /
        4,
        0
      );

    }, [
      targetCalories,
      protein,
      fats,
    ]);


  /* =====================================================
     NUTRITION REQUIREMENTS
  ===================================================== */

  const nutritionRequirements =
    useMemo(() => {

      return {

        bmi:
          bmi.toFixed(1),

        bmiStatus,

        bmr:
          Math.max(
            Math.round(bmr),
            0
          ),

        maintenance:
          Math.max(
            Math.round(
              maintenanceCalories
            ),
            0
          ),

        calories:
          Math.max(
            Math.round(
              targetCalories
            ),
            0
          ),

        protein:
          Math.max(
            Math.round(
              protein
            ),
            0
          ),

        carbs:
          Math.max(
            Math.round(
              carbs
            ),
            0
          ),

        fats:
          Math.max(
            Math.round(
              fats
            ),
            0
          ),
      };

    }, [
      bmi,
      bmiStatus,
      bmr,
      maintenanceCalories,
      targetCalories,
      protein,
      carbs,
      fats,
    ]);


  /* =====================================================
     SLIDER PROGRESS
  ===================================================== */

  const getProgressPercent = (
    value,
    min,
    max
  ) => {

    return (
      (
        (
          Number(value) -
          min
        ) /
        (
          max -
          min
        )
      ) *
      100
    );
  };


  /* =====================================================
     STEP NAVIGATION
  ===================================================== */

  const goToStep = (
    step
  ) => {

    if (
      step <=
      highestStep
    ) {

      setCurrentStep(
        step
      );
    }
  };


  const handleChooseGoal = () => {

    setHighestStep(
      (prev) =>
        Math.max(
          prev,
          2
        )
    );


    setCurrentStep(2);
  };


  const handleCalculate = () => {

    if (
      !goal
    ) {
      return;
    }


    setHighestStep(
      (prev) =>
        Math.max(
          prev,
          3
        )
    );


    setCurrentStep(3);
  };


  const handleFindMeals = () => {

    setHighestStep(
      (prev) =>
        Math.max(
          prev,
          4
        )
    );


    setCurrentStep(4);
  };


  /* =====================================================
     ADD / REMOVE MEAL
  ===================================================== */

  const toggleMealAdd = (
    id
  ) => {

    setAddedMeals(
      (prev) => ({

        ...prev,

        [id]:
          !prev[id],
      })
    );
  };


  const selectedMealsCount =
    Object.values(
      addedMeals
    ).filter(Boolean).length;


  /* =====================================================
     MATCH MEALS
  ===================================================== */

  const matchedMeals =
    useMemo(() => {

      const meals =
        [
          ...MEALS_LIST,
        ];


      if (
        goal ===
          "Weight Loss" ||
        goal ===
          "Fat Loss"
      ) {

        return meals.sort(
          (
            a,
            b
          ) => {

            const scoreA =
              a.protein *
              5 -
              a.calories;


            const scoreB =
              b.protein *
              5 -
              b.calories;


            return (
              scoreB -
              scoreA
            );
          }
        );
      }


      if (
        goal ===
        "Muscle Support"
      ) {

        return meals.sort(
          (
            a,
            b
          ) =>
            b.protein -
            a.protein
        );
      }


      return meals;

    }, [
      goal,
    ]);


  /* =====================================================
     ALL / VEG / NON VEG FILTER
  ===================================================== */

  const filteredMeals =
    useMemo(() => {

      if (
        mealFilter === "veg"
      ) {

        return matchedMeals.filter(
          (meal) =>
            meal.diet ===
            "veg"
        );
      }


      if (
        mealFilter ===
        "nonveg"
      ) {

        return matchedMeals.filter(
          (meal) =>
            meal.diet ===
            "nonveg"
        );
      }


      return matchedMeals;

    }, [
      matchedMeals,
      mealFilter,
    ]);


  /* =====================================================
     JSX
  ===================================================== */

  return (

    <section className="engine-section">
      <MealMatchPopup />

      <div className="engine-container">

        {/* =================================================
            HEADER
        ================================================= */}
        <div className="engine-header">
          <span className="engine-eyebrow">
            THE MEAL MATCH ENGINE
          </span>

          <h2 className="engine-title">
            Let's Find Your Match.
          </h2>
          <p className="engine-subtitle engine-warning-text">
            <FaTriangleExclamation className="engine-warning-icon" />

            <span>
              This is not a fixed menu! We are into customisation.
            </span>
          </p>

        </div>


        {/* =================================================
            STEP INDICATOR
        ================================================= */}

        <div className="engine-steps">

          {STEPS.map(
            (
              step,
              index
            ) => {

              const isActive =
                currentStep ===
                step.num;


              const isCompleted =
                step.num <
                currentStep;


              const isAvailable =
                step.num <=
                highestStep;


              return (

                <React.Fragment
                  key={
                    step.num
                  }
                >

                  {index > 0 && (

                    <div
                      className={`
                        step-line
                        ${
                          step.num <=
                          currentStep
                            ? "completed"
                            : ""
                        }
                      `}
                    />

                  )}


                  <div
                    className={`
                      step-item

                      ${
                        isActive
                          ? "active"
                          : ""
                      }

                      ${
                        isCompleted
                          ? "completed"
                          : ""
                      }

                      ${
                        !isAvailable
                          ? "locked"
                          : ""
                      }
                    `}
                    onClick={() => {

                      if (
                        isAvailable
                      ) {

                        goToStep(
                          step.num
                        );
                      }
                    }}
                    style={{
                      cursor:
                        isAvailable
                          ? "pointer"
                          : "default",
                    }}
                  >

                    <div className="step-circle">

                      {String(
                        step.num
                      ).padStart(
                        2,
                        "0"
                      )}

                    </div>


                    <span className="step-label">

                      {
                        step.label
                      }

                    </span>

                  </div>

                </React.Fragment>
              );
            }
          )}

        </div>


        {/* =================================================
            MAIN CARD
        ================================================= */}

        <div className="engine-card">


          {/* =================================================
              STEP 1
          ================================================= */}

          {currentStep === 1 && (

            <div className="step-content-wrapper">

              <div className="card-header-row">

                <h3 className="card-step-title">

                  <span>
                    01
                  </span>

                  Tell us about yourself

                </h3>


                <div className="unit-toggle">

                  <button
                    type="button"
                    className={`
                      unit-btn
                      ${
                        unit ===
                        "metric"
                          ? "active"
                          : ""
                      }
                    `}
                    onClick={() =>
                      handleUnitChange(
                        "metric"
                      )
                    }
                  >
                    Metric
                  </button>


                  <button
                    type="button"
                    className={`
                      unit-btn
                      ${
                        unit ===
                        "imperial"
                          ? "active"
                          : ""
                      }
                    `}
                    onClick={() =>
                      handleUnitChange(
                        "imperial"
                      )
                    }
                  >
                    Imperial
                  </button>

                </div>

              </div>


              {/* INPUTS */}

              <div className="engine-inputs-grid">


                {/* AGE */}

                <div className="engine-input-box">

                  <div className="input-label-row">

                    <span className="box-label">
                      AGE
                    </span>

                    <span className="box-value">
                      {age} yrs
                    </span>

                  </div>


                  <input
                    type="range"
                    min="15"
                    max="100"
                    value={age}
                    onChange={(e) =>
                      setAge(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="custom-slider"
                    style={{
                      backgroundSize:
                        `${getProgressPercent(
                          age,
                          15,
                          100
                        )}% 100%`,
                    }}
                  />

                </div>


                {/* GENDER */}

                <div className="engine-input-box">

                  <div className="input-label-row">

                    <span className="box-label">
                      GENDER
                    </span>

                    <span className="box-value">
                      {gender}
                    </span>

                  </div>


                  <div className="gender-options">

                    <button
                      type="button"
                      className={`
                        gender-btn
                        ${
                          gender ===
                          "Female"
                            ? "active"
                            : ""
                        }
                      `}
                      onClick={() =>
                        setGender(
                          "Female"
                        )
                      }
                    >
                      Female
                    </button>


                    <button
                      type="button"
                      className={`
                        gender-btn
                        ${
                          gender ===
                          "Male"
                            ? "active"
                            : ""
                        }
                      `}
                      onClick={() =>
                        setGender(
                          "Male"
                        )
                      }
                    >
                      Male
                    </button>

                  </div>

                </div>


                {/* HEIGHT */}

                <div className="engine-input-box">

                  <div className="input-label-row">

                    <span className="box-label">
                      HEIGHT
                    </span>


                    <span className="box-value">

                      {height}

                      {unit ===
                      "metric"
                        ? " cm"
                        : " in"}

                    </span>

                  </div>


                  <input
                    type="range"
                    min={
                      unit ===
                      "metric"
                        ? 120
                        : 48
                    }
                    max={
                      unit ===
                      "metric"
                        ? 220
                        : 86
                    }
                    value={height}
                    onChange={(e) =>
                      setHeight(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="custom-slider"
                    style={{
                      backgroundSize:
                        `${getProgressPercent(
                          height,
                          unit ===
                            "metric"
                            ? 120
                            : 48,
                          unit ===
                            "metric"
                            ? 220
                            : 86
                        )}% 100%`,
                    }}
                  />

                </div>


                {/* WEIGHT */}

                <div className="engine-input-box">

                  <div className="input-label-row">

                    <span className="box-label">
                      WEIGHT
                    </span>


                    <span className="box-value">

                      {weight}

                      {unit ===
                      "metric"
                        ? " kg"
                        : " lbs"}

                    </span>

                  </div>


                  <input
                    type="range"
                    min={
                      unit ===
                      "metric"
                        ? 40
                        : 88
                    }
                    max={
                      unit ===
                      "metric"
                        ? 150
                        : 330
                    }
                    value={weight}
                    onChange={(e) =>
                      setWeight(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="custom-slider"
                    style={{
                      backgroundSize:
                        `${getProgressPercent(
                          weight,
                          unit ===
                            "metric"
                            ? 40
                            : 88,
                          unit ===
                            "metric"
                            ? 150
                            : 330
                        )}% 100%`,
                    }}
                  />

                </div>

              </div>


              {/* ACTIVITY */}

              <div className="activity-section">

                <span className="box-label">
                  ACTIVITY LEVEL
                </span>


                <div className="activity-grid">

                  {ACTIVITY_LEVELS.map(
                    (item) => (

                      <div
                        key={
                          item.title
                        }
                        className={`
                          activity-card
                          ${
                            activity ===
                            item.title
                              ? "active"
                              : ""
                          }
                        `}
                        onClick={() =>
                          setActivity(
                            item.title
                          )
                        }
                      >

                        <h4 className="activity-title">

                          {
                            item.title
                          }

                        </h4>


                        <p className="activity-desc">

                          {
                            item.desc
                          }

                        </p>

                      </div>

                    )
                  )}

                </div>

              </div>


              {/* BMI */}

              <div className="bmi-preview-banner">

                <div className="bmi-left">

                  <div className="bmi-icon-wrapper">

                    <FaBolt />

                  </div>


                  <div>

                    <span className="bmi-eyebrow">

                      BMI PREVIEW

                    </span>


                    <div className="bmi-stat">

                      {
                        nutritionRequirements.bmi
                      }


                      <span className="bmi-status">

                        {
                          nutritionRequirements.bmiStatus
                        }

                      </span>

                    </div>

                  </div>

                </div>


                <button
                  type="button"
                  className="choose-goal-btn"
                  onClick={
                    handleChooseGoal
                  }
                >

                  Choose my goal

                  <FaArrowRight />

                </button>

              </div>

            </div>

          )}


          {/* =================================================
              STEP 2
          ================================================= */}

          {currentStep === 2 && (

            <div className="step-content-wrapper">

              <div className="card-header-row">

                <h3 className="card-step-title">

                  <span>
                    02
                  </span>

                  Choose your goal

                </h3>

              </div>


              <div className="activity-grid goal-grid">

                {GOALS_LIST.map(
                  (item) => (

                    <div
                      key={
                        item.title
                      }
                      className={`
                        activity-card
                        ${
                          goal ===
                          item.title
                            ? "active"
                            : ""
                        }
                      `}
                      onClick={() =>
                        setGoal(
                          item.title
                        )
                      }
                    >

                      <h4 className="activity-title">

                        {
                          item.title
                        }

                      </h4>


                      <p className="activity-desc">

                        {
                          item.desc
                        }

                      </p>

                    </div>

                  )
                )}

              </div>


              <div className="nav-buttons-row">

                <button
                  type="button"
                  className="back-btn"
                  onClick={() =>
                    setCurrentStep(1)
                  }
                >

                  <FaArrowLeft />

                  Back

                </button>


                <button
                  type="button"
                  className="choose-goal-btn"
                  onClick={
                    handleCalculate
                  }
                  disabled={
                    !goal
                  }
                >

                  Calculate my numbers

                  <FaArrowRight />

                </button>

              </div>

            </div>

          )}


          {/* =================================================
              STEP 3
          ================================================= */}

          {currentStep === 3 && (

            <div className="step-content-wrapper">

              <div className="card-header-row">

                <h3 className="card-step-title">

                  <span>
                    03
                  </span>

                  Your calculated requirements

                </h3>

              </div>


              <div className="requirements-grid">

                <div className="requirements-main-box">

                  <span className="req-eyebrow">

                    YOUR DAILY MATCH

                  </span>


                  <div className="req-big-cals">

                    {
                      nutritionRequirements.calories
                    }

                    <span>
                      {" "}KCAL
                    </span>

                  </div>


                  <div className="req-macros-row">

                    <div className="macro-box">

                      <span className="macro-val">

                        {
                          nutritionRequirements.protein
                        }g

                      </span>

                      <span className="macro-lbl">
                        PROTEIN
                      </span>

                    </div>


                    <div className="macro-box">

                      <span className="macro-val">

                        {
                          nutritionRequirements.carbs
                        }g

                      </span>

                      <span className="macro-lbl">
                        CARBS
                      </span>

                    </div>


                    <div className="macro-box">

                      <span className="macro-val">

                        {
                          nutritionRequirements.fats
                        }g

                      </span>

                      <span className="macro-lbl">
                        FATS
                      </span>

                    </div>

                  </div>

                </div>


                <div className="requirements-list-side">

                  <div className="req-info-row">

                    <span>
                      BMI
                    </span>

                    <span className="req-info-val">

                      {
                        nutritionRequirements.bmi
                      }

                      {" — "}

                      {
                        nutritionRequirements.bmiStatus
                      }

                    </span>

                  </div>


                  <div className="req-info-row">

                    <span>
                      BMR (Mifflin–St Jeor)
                    </span>


                    <span className="req-info-val">

                      {
                        nutritionRequirements.bmr
                      } kcal

                    </span>

                  </div>


                  <div className="req-info-row">

                    <span>
                      Estimated maintenance
                    </span>


                    <span className="req-info-val">

                      {
                        nutritionRequirements.maintenance
                      } kcal

                    </span>

                  </div>


                  <div className="req-info-row">

                    <span>
                      Goal target
                    </span>


                    <span className="req-info-val">

                      {
                        nutritionRequirements.calories
                      } kcal · {goal}

                    </span>

                  </div>


                  <p className="req-disclaimer">

                    These estimates are for
                    general nutrition guidance
                    only and are not a medical
                    diagnosis or individualized
                    clinical nutrition plan.

                  </p>

                </div>

              </div>


              <div className="nav-buttons-row">

                <button
                  type="button"
                  className="back-btn"
                  onClick={() =>
                    setCurrentStep(2)
                  }
                >

                  <FaArrowLeft />

                  Back

                </button>


                <button
                  type="button"
                  className="choose-goal-btn"
                  onClick={
                    handleFindMeals
                  }
                >

                  Show My Nutrition Match

                  <FaArrowRight />

                </button>

              </div>

            </div>

          )}


          {/* =================================================
              STEP 4
          ================================================= */}

          {currentStep === 4 && (

            <div className="step-content-wrapper">

              {/* =============================================
                  STEP 4 HEADER
              ============================================= */}

              <div className="card-header-row step-four-header">

                {/* LEFT */}

                <div className="step-four-title-area">

                  <h3 className="card-step-title">

                    <span>
                      04
                    </span>

                    Here's Your Nutrition Match

                  </h3>


                  <p className="engine-subtitle match-summary">

                    Your estimated daily
                    target is{" "}

                    <strong>
                      {
                        nutritionRequirements.calories
                      } kcal
                    </strong>

                    {" "}with{" "}

                    <strong>
                      {
                        nutritionRequirements.protein
                      }g protein
                    </strong>

                    ,{" "}

                    <strong>
                      {
                        nutritionRequirements.carbs
                      }g carbs
                    </strong>

                    {" "}and{" "}

                    <strong>
                      {
                        nutritionRequirements.fats
                      }g fats
                    </strong>.

                  </p>

                </div>


                {/* =========================================
                    FILTER BUTTONS
                ========================================= */}

                <div className="meal-diet-filter">

                  <button
                    type="button"
                    className={`
                      meal-filter-btn
                      ${
                        mealFilter ===
                        "all"
                          ? "active"
                          : ""
                      }
                    `}
                    onClick={() =>
                      setMealFilter(
                        "all"
                      )
                    }
                  >
                    ALL
                  </button>


                  <button
                    type="button"
                    className={`
                      meal-filter-btn
                      ${
                        mealFilter ===
                        "veg"
                          ? "active"
                          : ""
                      }
                    `}
                    onClick={() =>
                      setMealFilter(
                        "veg"
                      )
                    }
                  >

                    <span className="diet-dot diet-dot-veg" />

                    VEG

                  </button>


                  <button
                    type="button"
                    className={`
                      meal-filter-btn
                      ${
                        mealFilter ===
                        "nonveg"
                          ? "active"
                          : ""
                      }
                    `}
                    onClick={() =>
                      setMealFilter(
                        "nonveg"
                      )
                    }
                  >

                    <span className="diet-dot diet-dot-nonveg" />

                    NON-VEG

                  </button>

                </div>

              </div>


              {/* =============================================
                  MEALS
              ============================================= */}

              <div className="meals-grid">

                {filteredMeals.length >
                0 ? (

                  filteredMeals.map(
                    (meal) => {

                      const isSelected =
                        !!addedMeals[
                          meal.id
                        ];


                      return (

                        <div
                          key={
                            meal.id
                          }
                          className={`
                            meal-card
                            ${
                              isSelected
                                ? "selected"
                                : ""
                            }
                          `}
                          onClick={() =>
                            toggleMealAdd(
                              meal.id
                            )
                          }
                        >

                          {/* IMAGE */}

                          <div className="meal-img-container">

                            <img
                              src={
                                meal.img
                              }
                              alt={
                                meal.name
                              }
                              loading="lazy"
                            />


                            <span className="meal-badge">

                              {
                                meal.category
                              }

                            </span>


                            {/* VEG / NON VEG BADGE */}

                            <span
                              className={`
                                meal-diet-badge
                                ${
                                  meal.diet ===
                                  "veg"
                                    ? "veg"
                                    : "nonveg"
                                }
                              `}
                            >

                              <span />


                              {
                                meal.diet ===
                                "veg"
                                  ? "VEG"
                                  : "NON-VEG"
                              }

                            </span>

                          </div>


                          {/* CONTENT */}

                          <div className="meal-card-content">

                            <div className="meal-title-row">

                              <h4 className="meal-name">

                                {
                                  meal.name
                                }

                              </h4>


                              <span className="meal-cals">

                                {
                                  meal.calories
                                } kcal

                              </span>

                            </div>


                            {/* MACROS */}

                            <div className="meal-macros-grid">

                              <div className="meal-macro-box">

                                <span className="m-val">

                                  {
                                    meal.protein
                                  }g

                                </span>


                                <span className="m-lbl">

                                  PROTEIN

                                </span>

                              </div>


                              <div className="meal-macro-box">

                                <span className="m-val">

                                  {
                                    meal.carbs
                                  }g

                                </span>


                                <span className="m-lbl">

                                  CARBS

                                </span>

                              </div>


                              <div className="meal-macro-box">

                                <span className="m-val">

                                  {
                                    meal.fats
                                  }g

                                </span>


                                <span className="m-lbl">

                                  FATS

                                </span>

                              </div>

                            </div>

                          </div>

                        </div>
                      );
                    }
                  )

                ) : (

                  <div className="meal-filter-empty">

                    <h4>

                      No meals available

                    </h4>


                    <p>

                      We don't currently have
                      meals available under
                      this category.

                    </p>


                    <button
                      type="button"
                      onClick={() =>
                        setMealFilter(
                          "all"
                        )
                      }
                    >

                      View All Meals

                    </button>

                  </div>

                )}

              </div>


              {/* =============================================
                  FINAL NAVIGATION
              ============================================= */}

              <div className="nav-buttons-row final-nav-row">

                <button
                  type="button"
                  className="back-btn"
                  onClick={() =>
                    setCurrentStep(3)
                  }
                >

                  <FaArrowLeft />

                  Back

                </button>


                <span className="selected-meals-counter">

                  {
                    selectedMealsCount
                  }{" "}
                  meals in your match

                </span>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  );
};


export default MealMatchEngine;