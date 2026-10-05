import React, { useState } from 'react';
import './index.css';

const saladsData = {
  'Chicken Salads': {
    description: 'Premium grilled chicken with fresh vegetables and protein-rich dips.',
    items: [
      {
        id: 1,
        category: 'CHICKEN',
        name: 'Classic Chicken Caesar',
        calories: '420 kcal',
        protein: '38g',
        carbs: '22g',
        fats: '19g',
        portion: 'Portion 380g',
        image: './assets/classic-chicken-caesar.webp'
      },
      {
        id: 2,
        category: 'CHICKEN',
        name: 'Chipotle Chicken & Roast',
        calories: '480 kcal',
        protein: '41g',
        carbs: '34g',
        fats: '20g',
        portion: 'Portion 400g',
        image: './assets/chipotle-chicken-roast.webp'
      },
      {
        id: 3,
        category: 'CHICKEN',
        name: 'Healthy Chilli Chicken',
        calories: '395 kcal',
        protein: '40g',
        carbs: '24g',
        fats: '14g',
        portion: 'Portion 370g',
        image: './assets/healthy-chilli-chicken.webp'
      },
      {
        id: 4,
        category: 'CHICKEN',
        name: 'Asian Peanut Chicken',
        calories: '505 kcal',
        protein: '39g',
        carbs: '36g',
        fats: '23g',
        portion: 'Portion 400g',
        image: './assets/asian-peanut-chicken.webp'
      },
      {
        id: 5,
        category: 'CHICKEN',
        name: 'Tandoori Chicken Salad',
        calories: '440 kcal',
        protein: '44g',
        carbs: '26g',
        fats: '17g',
        portion: 'Portion 390g',
        image: './assets/tandoori-chicken-salad.webp'
      },
      {
        id: 6,
        category: 'CHICKEN',
        name: 'Avocado Chicken Salad',
        calories: '520 kcal',
        protein: '37g',
        carbs: '21g',
        fats: '31g',
        portion: 'Portion 380g',
        image: './assets/avocado-chicken-salad.webp'
      }
    ]
  },
  'Fish Salads': {
    description: 'Omega-3-rich grilled fish with fresh vegetables and light dips.',
    items: [
      {
        id: 7,
        category: 'FISH',
        name: 'Grilled Fish with Garlic Yogurt',
        calories: '410 kcal',
        protein: '40g',
        carbs: '20g',
        fats: '18g',
        portion: 'Portion 370g',
        image: './assets/grilled-fish-garlic-yogurt.png'
      },
      {
        id: 8,
        category: 'FISH',
        name: 'Tandoori Fish with Mint',
        calories: '395 kcal',
        protein: '42g',
        carbs: '17g',
        fats: '16g',
        portion: 'Portion 360g',
        image: './assets/tandoori-fish-mint.png'
      },
      {
        id: 9,
        category: 'FISH',
        name: 'Green Fish with Roasted Veggies',
        calories: '430 kcal',
        protein: '38g',
        carbs: '28g',
        fats: '17g',
        portion: 'Portion 390g',
        image: './assets/green-fish-roasted-veggies.png'
      }
    ]
  },
  'Egg Salads': {
    description: 'Complete protein with vibrant vegetables and aromatic dips.',
    items: [
      {
        id: 10,
        category: 'EGG',
        name: 'Avocado & Egg Bowl',
        calories: '460 kcal',
        protein: '27g',
        carbs: '22g',
        fats: '30g',
        portion: 'Portion 350g',
        image: './assets/avocado-egg-bowl.png'
      },
      {
        id: 11,
        category: 'EGG',
        name: 'Indian Egg Chaat Salad',
        calories: '380 kcal',
        protein: '25g',
        carbs: '30g',
        fats: '17g',
        portion: 'Portion 340g',
        image: './assets/indian-egg-chaat-salad.png'
      },
      {
        id: 12,
        category: 'EGG',
        name: 'Peri Peri Egg Crunch Salad',
        calories: '400 kcal',
        protein: '28g',
        carbs: '24g',
        fats: '21g',
        portion: 'Portion 350g',
        image: './assets/peri-peri-egg-crunch-salad.png'
      }
    ]
  },
  'Paneer Salads': {
    description: 'Indian cottage cheese with grilled vegetables and traditional dips.',
    items: [
      {
        id: 13,
        category: 'PANEER',
        name: 'Grilled Paneer Salad with Veggies',
        calories: '470 kcal',
        protein: '30g',
        carbs: '26g',
        fats: '27g',
        portion: 'Portion 370g',
        image: './assets/grilled-paneer-salad.png'
      },
      {
        id: 14,
        category: 'PANEER',
        name: 'Paneer Shawarma Salad',
        calories: '510 kcal',
        protein: '32g',
        carbs: '31g',
        fats: '28g',
        portion: 'Portion 390g',
        image: './assets/paneer-shawarma-salad.png'
      }
    ]
  }
};

const Salads = () => {
  const [activeTab, setActiveTab] = useState('Chicken Salads');
  const currentCategoryData = saladsData[activeTab];

  return (
    <section className="salads-section">
      <div className="salads-container">
        
        {/* Section Header */}
        <div className="salads-header">
          <span className="salads-tagline">SALADS</span>
          <h2 className="salads-main-title">High Protein Salads</h2>
        </div>

        {/* Category Tabs */}
        <div className="salads-tabs">
          {Object.keys(saladsData).map((tab) => (
            <button
              key={tab}
              className={`salads-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Subtitle Description */}
        <p className="salads-description">{currentCategoryData.description}</p>

        {/* Cards Grid */}
        <div className="salads-grid">
          {currentCategoryData.items.map((item) => (
            <div className="salad-card" key={item.id}>
              
              <div className="salad-image-wrapper">
                <span className="salad-card-badge">{item.category}</span>
                <img src={item.image} alt={item.name} className="salad-image" />
              </div>

              <div className="salad-card-content">
                <div className="salad-card-top">
                  <h3 className="salad-item-name">{item.name}</h3>
                  <span className="salad-item-cals">{item.calories}</span>
                </div>

                <div className="salad-macros-grid">
                  <div className="macro-box">
                    <span className="macro-value">{item.protein}</span>
                    <span className="macro-label">PROTEIN</span>
                  </div>
                  <div className="macro-box">
                    <span className="macro-value">{item.carbs}</span>
                    <span className="macro-label">CARBS</span>
                  </div>
                  <div className="macro-box">
                    <span className="macro-value">{item.fats}</span>
                    <span className="macro-label">FATS</span>
                  </div>
                </div>

                
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Salads;