import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CurvedDivider from './CurvedDivider';
import useScrollReveal from '../hooks/useScrollReveal';
import cocoEspressoSplash from '../assets/coco_espresso_splash.png';
import matchaCoconut from '../assets/matcha_coconut.png';
import coconutMocha from '../assets/coconut_mocha.png';
import cocoAlmondCookies from '../assets/products/coockies.png';
import biscoffPng from '../assets/products/BISCOFF.png';
import coldCoffeePng from '../assets/products/cold coffee.png';
import './Sections.css';

export default function Products() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  useScrollReveal(ref);

  const productsList = [
    {
      id: 1,
      name: 'Coco Espresso',
      description: 'Our signature double espresso layered over fresh organic coconut water and a splash of sweetened coconut cream.',
      tag: 'Best Seller',
      image: cocoEspressoSplash,
      glow: 'rgba(194, 92, 55, 0.45)' // Terracotta
    },
    {
      id: 2,
      name: 'Coco Almond Cookies',
      description: 'Freshly baked, chewy gluten-free cookies made with organic coconut flour, toasted almond slices, and premium dark chocolate chips.',
      tag: 'Freshly Baked',
      image: cocoAlmondCookies,
      glow: 'rgba(194, 92, 55, 0.45)' // Terracotta
    },
    {
      id: 3,
      name: 'Biscoff Coconut Latte',
      description: 'A decadent blend of organic coconut milk, crushed Lotus Biscoff cookie butter, and a double shot of premium arabica espresso.',
      tag: 'New Flavor',
      image: biscoffPng,
      glow: 'rgba(194, 92, 55, 0.45)' // Terracotta
    },
    {
      id: 4,
      name: 'Coconut Cold Brew',
      description: 'Our 24-hour steep single-origin cold brew coffee blended with fresh coconut milk and topped with sweet toasted coconut flakes.',
      tag: 'Classic',
      image: cocoEspressoSplash,
      glow: 'rgba(194, 92, 55, 0.45)' // Terracotta
    },
    {
      id: 5,
      name: 'Coconut Cold Coffee',
      description: 'Rich, aromatic coffee slow-brewed and blended with chilled fresh coconut cream, served over crushed ice.',
      tag: 'Refreshing',
      image: coldCoffeePng,
      glow: 'rgba(194, 92, 55, 0.45)' // Terracotta
    },
    {
      id: 6,
      name: 'Vanilla Coco Latte',
      description: 'A smooth, aromatic blend of arabica espresso, organic coconut milk, and natural Madagascar vanilla bean syrup, served chilled.',
      tag: 'Sweet Cream',
      image: coconutMocha,
      glow: 'rgba(194, 92, 55, 0.45)' // Terracotta
    }
  ];

  const visibleProducts = isExpanded ? productsList : productsList.slice(0, 3);

  return (
    <section id="product" ref={ref} className="section-padding products-section">
      <div className="container">
        <span className="section-tagline reveal-down delay-1">Indulge Your Senses</span>
        <h2 className="section-title reveal-up delay-2">Signature Blends</h2>
        <p className="section-desc reveal-fade delay-3">
          Every blend is a meticulous pairing of rich, handpicked coffee beans or ceremonial teas with 
          the velvety, refreshing essence of high-quality organic coconuts. Find your perfect escape.
        </p>

        <div className="products-grid">
          {visibleProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card-wrapper animate-fade-in-card"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <article className="product-card">
                {/* 3D Radial Background Glow */}
                <div 
                  className="product-glow" 
                  style={{ background: `radial-gradient(circle, ${product.glow} 0%, rgba(21, 13, 10, 0) 70%)` }} 
                />

                {/* Giant Typographic Background Watermark */}
                <div className="product-bg-title">{product.name}</div>

                {/* Floating PNG Image Container */}
                <div className={`product-image-container ${
                  product.id === 1 ? 'coco-espresso-large' : 
                  product.id === 2 ? 'coco-cookies-large' : 
                  product.id === 3 ? 'coco-biscoff-large' : 
                  product.id === 5 ? 'coco-coldcoffee-large' : 
                  product.id === 6 ? 'coco-vanilla-large' : ''
                }`}>
                  <span className="product-tag">{product.tag}</span>
                  <img 
                    src={product.image} 
                    alt={`${product.name} - ${product.description}`} 
                    className="product-img"
                    loading="lazy"
                  />
                </div>
                
                {/* Foreground Product Name */}
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA Toggle */}
        <div className="view-menu-cta">
          <button 
            className="btn-pill-group btn-view-menu"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Show fewer menu items" : "Explore full menu"}
          >
            <span className="btn-pill">
              {isExpanded ? 'Show Less' : 'Explore Full Menu'}
            </span>
            <span className={`btn-arrow-circle ${isExpanded ? 'rotated' : ''}`}>
              <ArrowUpRight size={20} />
            </span>
          </button>
        </div>
      </div>

      {/* Curve Transition to the Benefits Section (bg: #FBF3E0) */}
      <div className="curved-divider-wrapper">
        <CurvedDivider type="asymmetrical-slope" fillColor="#FBF3E0" bgColor="#99432A" />
      </div>
    </section>
  );
}
