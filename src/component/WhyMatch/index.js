import React from 'react';
import { 
  FaStar, 
  FaBalanceScale, 
  FaBrain, 
  FaDrumstickBite, 
  FaUtensils, 
  FaChartPie, 
  FaLeaf, 
  FaCheckCircle 
} from 'react-icons/fa';
import './index.css';

const WhyMatch = () => {
  const features = [
    {
      icon: <FaStar />,
      title: 'Made to Match You',
      desc: 'Your nutrition starts with your body and your goals.'
    },
    {
      icon: <FaBalanceScale />,
      title: 'BMI-Based Meals',
      desc: 'Your starting point helps us understand your nutritional needs.'
    },
    {
      icon: <FaBrain />,
      title: 'Personalised Nutrition',
      desc: 'Calories and macros calculated around your lifestyle.'
    },
    {
      icon: <FaDrumstickBite />,
      title: 'High-Protein',
      desc: 'Meals designed to help you reach your protein targets.'
    },
    {
      icon: <FaUtensils />,
      title: 'Portion-Controlled',
      desc: 'No more guessing how much you should eat.'
    },
    {
      icon: <FaChartPie />,
      title: 'Macro-Friendly',
      desc: 'Know your protein, carbs, fats and calories.'
    },
    {
      icon: <FaLeaf />,
      title: 'Freshly Prepared',
      desc: 'Prepared fresh for better taste and consistency.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'No Guesswork',
      desc: 'We make the numbers simple so you can focus on staying consistent.'
    }
  ];

  return (
    <section className="why-match-section">
      <div className="why-match-container">
        
        <div className="why-match-header">
          <span className="why-match-eyebrow">THE DIFFERENCE</span>
          <h2 className="why-match-title">Why Match?</h2>
          <p className="why-match-subtitle">Food that fits your goal, not the other way around.</p>
        </div>

        <div className="why-match-grid">
          {features.map((item, index) => (
            <div key={index} className="why-match-card">
              <div className="why-match-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="why-match-card-title">{item.title}</h3>
              <p className="why-match-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyMatch;