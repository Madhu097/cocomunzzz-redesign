import React, { useRef } from 'react';
import CurvedDivider from './CurvedDivider';
import useScrollReveal from '../hooks/useScrollReveal';
import coldCoffeePng from '../assets/products/cold coffee.png';
import biscoffPng from '../assets/products/BISCOFF.png';
import cookiesPng from '../assets/products/coockies.png';
import './Sections.css';

export default function ProductStories({ onSelectProduct }) {
  const ref = useRef(null);
  useScrollReveal(ref);

  const sampleProducts = [
    {
      slug: 'cold-coffee',
      name: 'Coco Brew Cold Coffee',
      tagline: 'Pure Espresso & Chilled Coco Cream',
      desc: 'Our signature double-layered masterwork. Discover how coastal palms and organic single-origin Arabica roast come together in a gorgeous dual-tone pour.',
      image: coldCoffeePng
    },
    {
      slug: 'biscoff',
      name: 'Lotus Biscoff Latte',
      tagline: 'Caramelized Biscuit & Coco Blend',
      desc: 'A spiced, caramelized escape. Experience how warm speculoos cookie butter is infused into velvety double-shot espresso and creamy coconut milk.',
      image: biscoffPng
    },
    {
      slug: 'cookies',
      name: 'Cookies & Coco Cream',
      tagline: 'Crunchy Cocoa & Cloud Cream',
      desc: 'A decadent plant-based dessert in a cup. Learn how crushed cocoa cookies meet light, whipped vanilla-infused coconut cream for the ultimate treat.',
      image: cookiesPng
    }
  ];

  const delays = ['delay-2', 'delay-4', 'delay-6'];

  return (
    <section id="stories" ref={ref} className="section-padding stories-section">
      <div className="container">
        <span className="section-tagline reveal-down delay-1">Behind the Cup</span>
        <h2 className="section-title reveal-up delay-2">Product Stories</h2>
        <p className="section-desc reveal-fade delay-3">
          Every cup of Coco Munzzz coffee is a result of a meticulous artisanal process.
          Click on any of our signature creations below to discover the step-by-step story of how it is crafted.
        </p>

        <div className="stories-grid">
          {sampleProducts.map((p, idx) => (
            <div
              key={p.slug}
              className={`story-teaser-card hover-lift reveal-zoom ${delays[idx]}`}
            >
              <div className="story-teaser-image-container">
                <div className="story-teaser-glow" />
                <img src={p.image} alt={p.name} className="story-teaser-img" />
              </div>
              <div className="story-teaser-info">
                <span className="story-teaser-tagline">{p.tagline}</span>
                <h3 className="story-teaser-title">{p.name}</h3>
                <p className="story-teaser-desc">{p.desc}</p>
                <button
                  className="btn-story-teaser"
                  onClick={() => onSelectProduct(p.slug)}
                >
                  <span>Discover the Story</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background hand-sketched coastal palms scene */}
      <img 
        src="/elements/3.png" 
        alt="Beach Palms Illustration" 
        className="stories-bg-illustration reveal-fade delay-5" 
      />

      {/* Curve Transition to the Locations Section (bg-dark: #99432A) */}
      <div className="curved-divider-wrapper">
        <CurvedDivider type="deep-concave" fillColor="#99432A" bgColor="#FBF3E0" />
      </div>
    </section>
  );
}
