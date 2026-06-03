import React, { useEffect } from 'react';
import CurvedDivider from './CurvedDivider';
import Footer from './Footer';
import coldCoffeePng from '../assets/products/cold coffee.png';
import biscoffPng from '../assets/products/BISCOFF.png';
import cookiesPng from '../assets/products/coockies.png';
import './Sections.css';

export default function ProductStoryPage({ product, onBack }) {
  // Auto-scroll to top when story page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  // Product database
  const storiesData = {
    'cold-coffee': {
      title: 'Coco Brew Cold Coffee',
      subtitle: 'Pure Espresso & Chilled Coco Cream',
      watermark: 'COCO BREW',
      image: coldCoffeePng,
      steps: [
        {
          num: 'Step 01',
          subtitle: 'Sourced from Coastal Groves',
          title: 'Hand-Harvesting Palms',
          text: 'We select only organic, young coconuts from family-owned coastal estates. Pressing the fresh meat in small batches preserves natural electrolytes and delivers an incredibly smooth, milky creaminess.'
        },
        {
          num: 'Step 02',
          subtitle: 'Artisanal Roasting Process',
          title: 'Slow-Batch Roasting',
          text: 'Our A+ grade single-origin Arabica beans are slow-roasted in micro-batches. This precise roasting process develops deep cocoa notes and a full body that perfectly balances tropical coconut sweetness.'
        },
        {
          num: 'Step 03',
          subtitle: 'Precision Brew Craft',
          title: 'The Artisanal Layering',
          text: 'Every signature drink is assembled in layers. We float rich, hot espresso over chilled organic coconut cream, creating a visual and sensory escape that transitions with every sip.'
        }
      ],
      promiseTitle: 'Our Pure Promise',
      promiseText: '100% Organic Coconuts. Vegan & Plant-Based by default. No artificial sweeteners. Just pure tropical delight in every single pour.',
      badgeText: '100% Organic'
    },
    'biscoff': {
      title: 'Lotus Biscoff Latte',
      subtitle: 'Caramelized Biscuit & Coco Blend',
      watermark: 'BISCOFF LATTE',
      image: biscoffPng,
      steps: [
        {
          num: 'Step 01',
          subtitle: 'Belgian Speculoos Infusion',
          title: 'Caramelized Blending',
          text: 'We slowly dissolve premium Belgian Biscoff cookie butter into warm, velvety organic coconut milk. This creates a sweet, spiced base with notes of cinnamon, brown sugar, and toasted nutmeg.'
        },
        {
          num: 'Step 02',
          subtitle: 'Micro-Roast Extraction',
          title: 'Espresso Pull',
          text: 'A double shot of our house Arabica blend is pulled at a precise 9 bars of pressure. The dark, intense espresso cuts through the cookie butter, creating a harmonious balance of roasted bitterness.'
        },
        {
          num: 'Step 03',
          subtitle: 'Golden Cookie Crown',
          title: 'Drizzle & Crumble',
          text: 'Each latte is finished with crispy crushed Biscoff cookies and a beautiful spiral drizzle of caramelized speculoos spread, giving you a wonderful crunch in every single sip.'
        }
      ],
      promiseTitle: 'Caramelized Sweetness',
      promiseText: 'Crafted with authentic Lotus Biscoff cookie spread. Plant-based coconut milk base. Balanced sweetness without artificial additives.',
      badgeText: 'Authentic Speculoos'
    },
    'cookies': {
      title: 'Cookies & Coco Cream',
      subtitle: 'Crunchy Dark Cocoa & Cloud Cream',
      watermark: 'COOKIES & CREAM',
      image: cookiesPng,
      steps: [
        {
          num: 'Step 01',
          subtitle: 'Crushed Cocoa Biscuits',
          title: 'Biscuit Preparation',
          text: 'We hand-crush premium dark cocoa biscuits into coarse crumbs, ensuring that they retain their crispy texture when combined with our signature liquid base.'
        },
        {
          num: 'Step 02',
          subtitle: 'Whipped Coconut Cloud',
          title: 'Milk Aeration',
          text: 'Our barista-blend coconut cream is whipped to a light, airy foam, infused with organic Madagascar vanilla pods for a sweet, marshmallow-like cloud texture.'
        },
        {
          num: 'Step 03',
          subtitle: 'The Decadent Cascade',
          title: 'Layered Pouring',
          text: 'We construct this drink in repeating layers of vanilla-coconut foam and dark cookie crumble, ending with a heavy dusting of cocoa cookies on the crown.'
        }
      ],
      promiseTitle: 'Zero Compromise',
      promiseText: 'Vegan chocolate cookies. Organic vanilla infusion. Premium coconut whipping cream with zero hydrogenated fats.',
      badgeText: 'Vegan Dessert'
    }
  };

  const story = storiesData[product] || storiesData['cold-coffee'];

  return (
    <div className="story-page-container">
      {/* Top Header Navigation */}
      <header className="story-page-header">
        <div className="container header-flex">
          <button onClick={onBack} className="story-page-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="back-arrow">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Home</span>
          </button>
          <span className="story-header-logo">Coco Munzzz</span>
        </div>
      </header>

      {/* Main Story Content */}
      <section className="story-page-content-sec">
        <div className="container">
          <div className="story-page-title-area">
            <span className="section-tagline">How It's Crafted</span>
            <h1 className="story-page-title">{story.title}</h1>
            <p className="story-page-subtitle">{story.subtitle}</p>
          </div>

          <div className="story-page-layout">
            {/* Left Column: Step 1 and Step 2 */}
            <div className="story-page-col-left">
              <div className="story-page-step-card hover-lift">
                <span className="story-page-step-num">{story.steps[0].num}</span>
                <span className="story-page-step-subtitle">{story.steps[0].subtitle}</span>
                <h3 className="story-page-step-title">{story.steps[0].title}</h3>
                <p className="story-page-step-text">{story.steps[0].text}</p>
              </div>
              <div className="story-page-step-card hover-lift">
                <span className="story-page-step-num">{story.steps[1].num}</span>
                <span className="story-page-step-subtitle">{story.steps[1].subtitle}</span>
                <h3 className="story-page-step-title">{story.steps[1].title}</h3>
                <p className="story-page-step-text">{story.steps[1].text}</p>
              </div>
            </div>

            {/* Middle Column: Central Product Showcase with Watermark */}
            <div className="story-page-col-middle">
              <div className="story-page-product-showcase">
                {/* Giant Background Watermark Text */}
                <div className="story-page-watermark">{story.watermark}</div>
                
                {/* Radial Backdrop Glow */}
                <div className="story-page-glow" />
                
                {/* Dashed Ring */}
                <div className="story-page-ring animate-spin-slow" />
                
                {/* Main Product Image */}
                <div className="story-page-image-wrapper">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="story-page-product-img animate-float" 
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Step 3 and the Promise Badge */}
            <div className="story-page-col-right">
              <div className="story-page-step-card hover-lift">
                <span className="story-page-step-num">{story.steps[2].num}</span>
                <span className="story-page-step-subtitle">{story.steps[2].subtitle}</span>
                <h3 className="story-page-step-title">{story.steps[2].title}</h3>
                <p className="story-page-step-text">{story.steps[2].text}</p>
              </div>
              
              <div className="story-page-promise-card hover-lift">
                <h4 className="story-page-promise-title">{story.promiseTitle}</h4>
                <p className="story-page-promise-text">{story.promiseText}</p>
                <div className="story-page-promise-badge">{story.badgeText}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Curve Transition to the Footer Section */}
        <div className="curved-divider-wrapper story-page-divider-wrapper">
          <CurvedDivider type="deep-concave" fillColor="#99432A" bgColor="#FBF3E0" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
