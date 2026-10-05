import React, { useState } from 'react';
import './index.css';

const faqData = [
  {
    question: "How does Meal Match personalise my meals?",
    answer: "You share your age, gender, height, weight, activity level and goal. We calculate your BMI, BMR and daily calorie target, then match you with meals whose calories and macros fit that target."
  },
  {
    question: "Is the BMI calculator medically accurate?",
    answer: "Our BMI calculator provides standard general health guidance based on your height and weight metrics, but it is not a formal medical diagnosis."
  },
  {
    question: "Can I choose vegetarian meals?",
    answer: "Yes, you can filter and choose from our wide variety of delicious vegetarian meal options designed around your macro targets."
  },
  {
    question: "Can I select my preferred meals?",
    answer: "Yes, our platform lets you build and customize your meal plan matching your preferences while staying within your target calories."
  },
  {
    question: "How are calories and macros calculated?",
    answer: "We use established scientific formulas like the Mifflin-St Jeor equation combined with your activity level and fitness goal to calculate precise daily totals."
  },
  {
    question: "Are meals freshly prepared?",
    answer: "Yes, all our meals and power bowls are freshly prepared daily using high-quality clean ingredients."
  },
  {
    question: "Can I change my fitness goal later?",
    answer: "You can update your fitness goal at any time through your dashboard, and your meal matches will adapt instantly."
  },
  {
    question: "Can I pause my meal plan?",
    answer: "Yes, you have full flexibility to pause or reschedule your meal deliveries whenever your routine changes."
  },
  {
    question: "Do you show calories and macros for every meal?",
    answer: "Every single meal card displays precise calorie, protein, carb, and fat breakdowns for complete transparency."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null); // All closed by default, or set to 0 for first open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        {/* Section Header */}
        <div className="faq-header">
          <p className="eyebrow">FAQ</p>
          <h2 className="faq-title">Questions, Answered Honestly.</h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button 
                  type="button" 
                  className="faq-question-btn" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="faq-arrow-icon"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer-collapse">
                  <div className="faq-answer-content">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}