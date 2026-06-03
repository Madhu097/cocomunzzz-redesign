import React, { useRef } from 'react';
import CurvedDivider from './CurvedDivider';
import useScrollReveal from '../hooks/useScrollReveal';
import element2 from '../assets/elements/2.png';
import './Sections.css';

export default function PressMedia() {
  const ref = useRef(null);
  useScrollReveal(ref);

  const mediaFeatures = [
    {
      id: 1,
      publication: 'The Coffee Daily',
      date: 'May 2026',
      quote: 'Coco Munzzz has redefined iced coffee with its tropical pairing. The creaminess of organic coconut cream layered with rich espresso is absolute bliss.',
      articleUrl: '#'
    },
    {
      id: 2,
      publication: 'Vogue Living',
      date: 'April 2026',
      quote: 'More than a café, Coco Munzzz offers a sensory flight. The minimalist coastal design and custom blends are a welcome retreat for design and coffee lovers alike.',
      articleUrl: '#'
    },
    {
      id: 3,
      publication: 'Coastal Gazette',
      date: 'March 2026',
      quote: 'The Biscoff Coconut Latte is an instant classic. Coco Munzzz hits the sweet spot of flavor innovation and aesthetic consistency.',
      articleUrl: '#'
    }
  ];

  const delays = ['delay-2', 'delay-3', 'delay-4'];

  return (
    <section id="press" ref={ref} className="section-padding press-section">
      <div className="container">
        <span className="section-tagline reveal-down delay-1">In The News</span>
        <h2 className="section-title reveal-up delay-2">Press &amp; Media</h2>
        <p className="section-desc reveal-fade delay-3">
          See what coffee critics, lifestyle magazines, and local food guides are writing 
          about our unique coconut coffee experiences.
        </p>

        <div className="press-grid">
          {mediaFeatures.map((feat, i) => (
            <article key={feat.id} className={`press-card hover-lift reveal-left ${delays[i]}`}>
              <span className="press-publication">{feat.publication}</span>
              <span className="press-date">{feat.date}</span>
              <p className="press-quote">"{feat.quote}"</p>
              <a href={feat.articleUrl} className="press-link">
                Read Article &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Background hand-sketched coastal palms illustration */}
      <img 
        src={element2} 
        alt="Two Palms Illustration" 
        className="press-bg-illustration reveal-fade delay-5" 
      />

      {/* Curve Transition to the Gallery Section (bg-dark: #99432A) */}
      <div className="curved-divider-wrapper">
        <CurvedDivider type="asymmetrical-slope" fillColor="#99432A" bgColor="#FBF3E0" />
      </div>
    </section>
  );
}
