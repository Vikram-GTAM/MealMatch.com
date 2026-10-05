import React from 'react';
import './index.css';

const NutritionTransparency = () => {
  return (
    <section className="nutrition-section">
      <div className="nutrition-container">
        
        {/* Section Header */}
        <div className="nutrition-header">
          <span className="nutrition-eyebrow">NUTRITION TRANSPARENCY</span>
          <h2 className="nutrition-title">Know What's on Your Plate.</h2>
          <p className="nutrition-subtitle">No hidden calories. No confusing portions.</p>
        </div>

        {/* Card Container */}
        <div className="nutrition-card">
          <div className="nutrition-image-side">
            <img 
              src="./assets/tandoori-chicken-power-bowl.png" 
              alt="Tandoori chicken power bowl" 
              loading="lazy" 
            />
          </div>

          <div className="nutrition-content-side">
            <h3 className="bowl-title">Tandoori Chicken Power Bowl</h3>

            {/* Macros 2x2 Grid */}
            <div className="nutrition-macros-grid">
              <div className="macro-stat-box">
                <div className="macro-stat-value">450 kcal</div>
                <div className="macro-stat-label">CALORIES</div>
              </div>
              <div className="macro-stat-box">
                <div className="macro-stat-value">42g</div>
                <div className="macro-stat-label">PROTEIN</div>
              </div>
              <div className="macro-stat-box">
                <div className="macro-stat-value">38g</div>
                <div className="macro-stat-label">CARBS</div>
              </div>
              <div className="macro-stat-box">
                <div className="macro-stat-value">14g</div>
                <div className="macro-stat-label">FATS</div>
              </div>
            </div>

            <p className="bowl-ingredients">
              Grilled chicken • brown rice • roasted vegetables • yogurt dressing
            </p>

            {/* Tags */}
            <div className="nutrition-tags-row">
              <span className="nutrition-tag">High Protein</span>
              <span className="nutrition-tag">High Fibre</span>
              <span className="nutrition-tag">Calorie Controlled</span>
              <span className="nutrition-tag">Clean Ingredients</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NutritionTransparency;