import React, { useRef } from 'react';
import { ShieldCheck, Zap, Heart, Coffee } from 'lucide-react';
import CurvedDivider from './CurvedDivider';
import useScrollReveal from '../hooks/useScrollReveal';
import element5 from '../assets/elements/5.png';
import './Sections.css';

export default function Benefits() {
  const ref = useRef(null);
  useScrollReveal(ref);

  const benefitsList = [
    {
      id: 1,
      icon: <Zap size={28} />,
      title: 'MCT Clean Energy',
      description: 'Our organic coconut cream contains healthy Medium-Chain Triglycerides (MCTs), delivering a rapid, clean energy boost without the typical coffee crash.'
    },
    {
      id: 2,
      icon: <Heart size={28} />,
      title: 'Natural Hydration',
      description: 'Crafted with premium coconut water loaded with potassium and essential electrolytes, keeping you fully hydrated while enjoying your caffeine fix.'
    },
    {
      id: 3,
      icon: <Coffee size={28} />,
      title: 'Antioxidant Powerhouse',
      description: 'Combining single-origin arabica coffee beans and ceremonial-grade matcha with fresh coconuts yields a powerful dose of immunity-boosting antioxidants.'
    },
    {
      id: 4,
      icon: <ShieldCheck size={28} />,
      title: '100% Plant-Based',
      description: 'Lactose-free, dairy-free, and vegan-friendly by default. A lighter, cleaner alternative that is gentle on your body and highly sustainable.'
    }
  ];

  const delays = ['delay-2', 'delay-3', 'delay-4', 'delay-5'];

  return (
    <section id="benefits" ref={ref} className="section-padding benefits-section">
      <div className="container">
        <span className="section-tagline reveal-down delay-1">Why Coconut Café?</span>
        <h2 className="section-title reveal-up delay-2">The Coco Benefits</h2>
        <p className="section-desc reveal-fade delay-3">
          By combining pure coconut goodness with high-end coffee craftsmanship, 
          we deliver a healthier, more nourishing cup that powers your body and delights your senses.
        </p>

        <div className="benefits-grid">
          {benefitsList.map((benefit, i) => (
            <div key={benefit.id} className={`benefit-card reveal-up ${delays[i]}`}>
              <div className="benefit-icon-wrapper">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background hand-sketched single palm illustration */}
      <img 
        src={element5} 
        alt="Single Palm Illustration" 
        className="benefits-bg-illustration reveal-fade delay-5" 
      />

      {/* Curve Transition to the Testimonials Section (bg: #99432A) */}
      <div className="curved-divider-wrapper">
        <CurvedDivider type="smooth-wave" fillColor="#99432A" bgColor="#FBF3E0" />
      </div>
    </section>
  );
}
