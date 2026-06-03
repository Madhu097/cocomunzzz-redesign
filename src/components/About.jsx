import React, { useRef } from 'react';
import CurvedDivider from './CurvedDivider';
import useScrollReveal from '../hooks/useScrollReveal';
import './Sections.css';

export default function About() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="about" ref={ref} className="section-padding about-section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <span className="section-tagline reveal-down delay-1">Crafted With Passion</span>

        <h2 className="section-title reveal-up delay-2">
          The Coco Munzzz Story
        </h2>

        <p className="section-desc reveal-fade delay-3">
          At Coco Munzzz, we believe that coffee should be an experience, not just a daily routine. 
          By marrying the rich, bold depth of single-origin espresso with the smooth, tropical sweetness 
          of hand-pressed organic coconut cream, we've created a sensory escape that brings the island atmosphere 
          straight to your cup. Every sip is designed to wow.
        </p>

        <div className="about-stats">
          <div className="stat-item reveal-zoom delay-2">
            <span className="stat-number">100%</span>
            <span className="stat-label">Organic Coconuts</span>
          </div>
          <div className="stat-item reveal-zoom delay-3">
            <span className="stat-number">A+ Grade</span>
            <span className="stat-label">Single-Origin Beans</span>
          </div>
          <div className="stat-item reveal-zoom delay-4">
            <span className="stat-number">Fresh</span>
            <span className="stat-label">Handcrafted Daily</span>
          </div>
        </div>
      </div>

      {/* Background hand-sketched tropical island scene */}
      <img 
        src="/elements/1.png" 
        alt="Tropical Island Illustration" 
        className="about-bg-illustration reveal-fade delay-5" 
      />

      {/* Curve Transition to the Products Section (bg-dark: #99432A) */}
      <div className="curved-divider-wrapper">
        <CurvedDivider type="deep-concave" fillColor="#99432A" bgColor="#FBF3E0" />
      </div>
    </section>
  );
}
