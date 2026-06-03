import React, { useRef } from 'react';
import { Quote } from 'lucide-react';
import CurvedDivider from './CurvedDivider';
import useScrollReveal from '../hooks/useScrollReveal';
import './Sections.css';

export default function Testimonials() {
  const ref = useRef(null);
  useScrollReveal(ref);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Coffee Blogger',
      initials: 'SJ',
      text: '"Coco Espresso is an absolute revelation! The bold rich espresso combined with chilled coconut water and smooth cream is the perfect tropical coffee blend. It has completely redefined my morning routine!"'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Daily Regular',
      initials: 'MC',
      text: '"Being dairy-free, finding premium café options has always been a struggle. Coco Munzzz is plant-based by default and their Matcha Coconut Latte is out of this world. It is incredibly refreshing!"'
    },
    {
      id: 3,
      name: 'Elena Rostova',
      role: 'Creative Director',
      initials: 'ER',
      text: '"The toasted coconut chocolate mocha is pure artistic indulgence. The delicate rim of toasted coconut flakes adds such a premium tactile crunch. The design, the taste, the brand—everything is 10/10."'
    }
  ];

  const delays = ['delay-2', 'delay-3', 'delay-4'];

  return (
    <section id="testimonial" ref={ref} className="section-padding testimonials-section">
      <div className="container">
        <span className="section-tagline reveal-down delay-1">Loved By Coco Lovers</span>
        <h2 className="section-title reveal-up delay-2">Guest Reviews</h2>
        <p className="section-desc reveal-fade delay-3">
          See why coffee enthusiasts and tropical foodies alike are making Coco Munzzz their absolute daily café escape.
        </p>

        <div className="testimonials-grid">
          {reviews.map((review, i) => (
            <article key={review.id} className={`testimonial-card reveal-zoom ${delays[i]}`}>
              <Quote className="quote-icon" size={60} fill="currentColor" />
              <p className="testimonial-text">{review.text}</p>
              
              <div className="testimonial-user">
                <div className="user-avatar-wrapper">
                  <div 
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(194, 92, 55, 0.1)',
                      color: 'var(--accent-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '800',
                      fontSize: '1.2rem',
                      fontFamily: 'var(--font-primary)'
                    }}
                  >
                    {review.initials}
                  </div>
                </div>
                <div className="user-info">
                  <span className="user-name">{review.name}</span>
                  <span className="user-role">{review.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Curve Transition to the Contact Us Section (bg: #FBF3E0) */}
      <div className="curved-divider-wrapper">
        <CurvedDivider type="deep-convex" fillColor="#FBF3E0" bgColor="#99432A" />
      </div>
    </section>
  );
}
