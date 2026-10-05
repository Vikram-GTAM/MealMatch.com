import React from 'react';
import './index.css';

const smoothiesData = [
  {
    title: "PB Banana Protein",
    calories: "340 kcal",
    protein: "30g",
    carbs: "34g",
    fats: "10g",
    badge: "Vegetarian",
    image: "./assets/pb-banana-protein-zoomed-out.webp",
  },
  {
    title: "Chocolate PB",
    calories: "360 kcal",
    protein: "32g",
    carbs: "32g",
    fats: "12g",
    badge: "Vegetarian",
    image: "./assets/chocolate-pb.webp",
  },
  {
    title: "Strawberry Cheesecake",
    calories: "310 kcal",
    protein: "28g",
    carbs: "30g",
    fats: "8g",
    badge: "Vegetarian",
    image: "./assets/strawberry-cheesecake.webp",
  },
  {
    title: "Apple Pie",
    calories: "300 kcal",
    protein: "26g",
    carbs: "33g",
    fats: "7g",
    badge: "Vegetarian",
    image: "./assets/apple-pie.webp",
  },
];

export default function SmoothiesSection() {
  return (
    <section id="menu" className="smoothies-section" data-tsd-source="/src/components/site/Menu.tsx:47:7">
      <div className="smoothies-container">
        
        {/* Header Heading & Subtitle */}
        <div className="smoothies-header">
          <p className="eyebrow">FEATURED CATEGORIES</p>
          <h2 className="smoothies-title">Find Your Match</h2>
          <p className="smoothies-subtitle">High-protein smoothies packed with nutrition.</p>
        </div>

        {/* Cards Grid */}
        <div className="smoothies-grid">
          {smoothiesData.map((item, index) => (
            <article key={index} className="group luxe-card overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy" 
                  width="1024" 
                  height="768" 
                  className="smoothies-card-img" 
                />
                <div className="smoothies-card-gradient"></div>
                <span className="smoothies-badge">{item.badge}</span>
              </div>

              <div className="smoothies-card-content">
                <div className="smoothies-card-top">
                  <h3 className="smoothies-card-title">{item.title}</h3>
                  <span className="smoothies-calories">{item.calories}</span>
                </div>

                {/* Macros Grid */}
                <div className="smoothies-macros-grid">
                  <div className="macro-box">
                    <div className="macro-value">{item.protein}</div>
                    <div className="macro-label">PROTEIN</div>
                  </div>
                  <div className="macro-box">
                    <div className="macro-value">{item.carbs}</div>
                    <div className="macro-label">CARBS</div>
                  </div>
                  <div className="macro-box">
                    <div className="macro-value">{item.fats}</div>
                    <div className="macro-label">FATS</div>
                  </div>
                </div>

                <div className="smoothies-card-footer">
                  <span className="smoothies-portion">{item.portion}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}