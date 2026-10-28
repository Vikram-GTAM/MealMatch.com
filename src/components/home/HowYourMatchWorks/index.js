import React from "react";
import "./index.css";

const HowYourMatchWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell us about you",
      desc:
        "Share your age, body details and activity level.",
    },
    {
      number: "02",
      title: "Select your goal",
      desc:
        "Weight loss, fat loss, maintenance or muscle support.",
    },
    {
      number: "03",
      title: "Get your Meal Match",
      desc:
        "We calculate your calorie and macro requirements.",
    },
    {
      number: "04",
      title: "Receive fresh meals",
      desc:
        "Meals prepared fresh and portioned around your requirements.",
    },
    {
      number: "05",
      title: "Stay consistent",
      desc:
        "Keep eating meals designed to match your goal and lifestyle.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="works-section"
    >
      <div className="works-container">

        <div className="works-header">
          <span className="works-eyebrow">
            THE PROCESS
          </span>

          <h2 className="works-title">
            How Your Match Works
          </h2>
        </div>

        <div className="works-grid">

          {steps.map((step) => (
            <div
              key={step.number}
              className="works-card"
            >
              <div className="works-circle">
                {step.number}
              </div>

              <h3 className="works-card-title">
                {step.title}
              </h3>

              <p className="works-card-desc">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowYourMatchWorks;