import React, { useRef } from 'react';
import CurvedDivider from './CurvedDivider';
import useScrollReveal from '../hooks/useScrollReveal';
import './Sections.css';

export default function Locations() {
  const ref = useRef(null);
  useScrollReveal(ref);

  const locations = [
    {
      id: 1,
      city: 'Malibu',
      name: 'Sol & Sea Café',
      address: '22800 Pacific Coast Highway, Malibu, CA',
      hours: 'Mon - Sun: 7 AM - 6 PM',
      phone: '(310) 555-0192',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      city: 'Miami Beach',
      name: 'Ocean Reef Oasis',
      address: '804 Ocean Drive, Miami Beach, FL',
      hours: 'Mon - Sun: 8 AM - 8 PM',
      phone: '(305) 555-0143',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      city: 'Tokyo',
      name: 'Shibuya Palm Hub',
      address: '1-21-1 Jinnan, Shibuya-ku, Tokyo',
      hours: 'Mon - Sun: 9 AM - 9 PM',
      phone: '+81 3-5555-0177',
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const delays = ['delay-2', 'delay-3', 'delay-4'];

  return (
    <section id="locations" ref={ref} className="section-padding locations-section">
      <div className="container">
        <span className="section-tagline reveal-down delay-1">Find Your Escape</span>
        <h2 className="section-title reveal-up delay-2">Our Locations</h2>
        <p className="section-desc reveal-fade delay-3">
          Step into our tropical beachside sanctuary or vibrant urban hubs. 
          Enjoy the slow-crafted taste of coconut and coffee in a relaxing oasis.
        </p>

        <div className="locations-grid">
          {locations.map((loc, i) => (
            <article key={loc.id} className={`location-card hover-lift reveal-up ${delays[i]}`}>
              <div className="location-image-wrapper">
                <img src={loc.image} alt={loc.name} className="location-img" loading="lazy" />
                <span className="location-badge">{loc.city}</span>
              </div>
              <div className="location-info">
                <h3 className="location-name">{loc.name}</h3>
                <p className="location-detail"><strong>Address:</strong> {loc.address}</p>
                <p className="location-detail"><strong>Hours:</strong> {loc.hours}</p>
                <p className="location-detail"><strong>Phone:</strong> {loc.phone}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Curve Transition to the Gallery Section (bg-cream: #FBF3E0) */}
      <div className="curved-divider-wrapper">
        <CurvedDivider type="smooth-wave" fillColor="#FBF3E0" bgColor="#99432A" />
      </div>
    </section>
  );
}
