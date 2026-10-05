import React from 'react';
import './index.css';

const items = [
  {
    id: 1,
    category: 'VEGETARIAN',
    name: 'PB Banana Choco Crunch',
    calories: '390 kcal',
    protein: '18g',
    carbs: '44g',
    fats: '16g',
    portion: 'Portion 180g',
    image: './assets/pb-banana-choco-crunch.png'
  },
  {
    id: 2,
    category: 'VEGETARIAN',
    name: 'Coffee PB Toast',
    calories: '350 kcal',
    protein: '17g',
    carbs: '38g',
    fats: '15g',
    portion: 'Portion 170g',
    image: './assets/coffee-pb-toast.png'
  },
  {
    id: 3,
    category: 'VEGETARIAN',
    name: 'Avocado Toast',
    calories: '330 kcal',
    protein: '12g',
    carbs: '32g',
    fats: '18g',
    portion: 'Portion 180g',
    image: './assets/avocado-toast.png'
  },
  {
    id: 4,
    category: 'VEGETARIAN',
    name: 'Mushroom Cheese Toast',
    calories: '360 kcal',
    protein: '19g',
    carbs: '33g',
    fats: '19g',
    portion: 'Portion 190g',
    image: './assets/mushroom-cheese-toast.png'
  }
];

const ToastAndSandwiches = () => {
  return (
    <section className="toast-section">
      <div className="toast-container">
        
        {/* Header */}
        <div className="toast-header">
          <span className="toast-tagline">TOAST & SANDWICHES</span>
          <h2 className="toast-main-title">Quick Matches for Busy Days</h2>
          <p className="toast-description">Protein-packed options for quick, satisfying meals.</p>
        </div>

        {/* Horizontal Scrolling Wrapper */}
        <div className="toast-scroll-container">
          <div className="toast-grid">
            {items.map((item) => (
              <div className="toast-card" key={item.id}>
                
                <div className="toast-image-wrapper">
                  <span className="toast-card-badge">{item.category}</span>
                  <img src={item.image} alt={item.name} className="toast-image" />
                </div>

                <div className="toast-card-content">
                  <div className="toast-card-top">
                    <h3 className="toast-item-name">{item.name}</h3>
                    <span className="toast-item-cals">{item.calories}</span>
                  </div>

                  <div className="toast-macros-grid">
                    <div className="toast-macro-box">
                      <span className="toast-macro-value">{item.protein}</span>
                      <span className="toast-macro-label">PROTEIN</span>
                    </div>
                    <div className="toast-macro-box">
                      <span className="toast-macro-value">{item.carbs}</span>
                      <span className="toast-macro-label">CARBS</span>
                    </div>
                    <div className="toast-macro-box">
                      <span className="toast-macro-value">{item.fats}</span>
                      <span className="toast-macro-label">FATS</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ToastAndSandwiches;