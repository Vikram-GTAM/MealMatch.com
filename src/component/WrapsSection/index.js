import React from 'react';
import './index.css';

const wrapsData = [
  {
    id: 1,
    category: 'PANEER',
    name: 'Paneer Wrap',
    cals: '480 kcal',
    protein: '29g',
    carbs: '45g',
    fats: '20g',
    portion: 'Portion 260g',
    img: './assets/paneer-wrap.png'
  },
  {
    id: 2,
    category: 'EGG',
    name: 'Egg Wrap',
    cals: '440 kcal',
    protein: '27g',
    carbs: '42g',
    fats: '18g',
    portion: 'Portion 250g',
    img: './assets/egg-wrap.png'
  },
  {
    id: 3,
    category: 'CHICKEN',
    name: 'Chicken Wrap',
    cals: '460 kcal',
    protein: '38g',
    carbs: '43g',
    fats: '14g',
    portion: 'Portion 260g',
    img: './assets/chicken-wrap.png'
  }
];

export default function WrapsSection() {
  return (
    <section className="wraps-section">
      <div className="wraps-container">
        
        {/* Header Heading & Subtitle */}
        <div className="wraps-header">
          <p className="eyebrow">WRAPS</p>
          <h2 className="wraps-title">Wrapped to Match<br />Your Lifestyle</h2>
          <p className="wraps-subtitle">Portable meals with complete macros for life on the move.</p>
        </div>

        {/* Cards Grid */}
        <div className="wraps-grid">
          {wrapsData.map((item) => (
            <article key={item.id} className="group luxe-card overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  loading="lazy" 
                  className="wrap-card-img" 
                />
                <div className="wrap-card-gradient"></div>
                <span className="wrap-badge">{item.category}</span>
              </div>

              <div className="wrap-card-content">
                <div className="wrap-card-top">
                  <h3 className="wrap-card-title">{item.name}</h3>
                  <span className="wrap-calories">{item.cals}</span>
                </div>

                {/* Macros Breakdown */}
                <div className="wrap-macros-grid">
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

                
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}