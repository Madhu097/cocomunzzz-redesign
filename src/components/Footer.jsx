import React from 'react';
import './Sections.css';
import logoImg from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImg} alt="Coco Munzzz Logo" className="logo-img" />
            </div>
            <p className="footer-brand-desc">
              Delivering the premium coconut café experience, marrying organic tropical sweetness with artisan coffee craftsmanship.
            </p>
            <div className="footer-socials">
              {/* Custom SVG Instagram */}
              <a href="#instagram" className="social-circle" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Custom SVG Facebook */}
              <a href="#facebook" className="social-circle" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Custom SVG Twitter / X */}
              <a href="#twitter" className="social-circle" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              {/* Custom SVG MessageSquare */}
              <a href="#threads" className="social-circle" aria-label="Threads">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links">
              <li><a href="#about">Our Story</a></li>
              <li><a href="#product">Signature Menu</a></li>
              <li><a href="#benefits">Health Benefits</a></li>
              <li><a href="#testimonial">Guest Reviews</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="footer-title">Hours</h3>
            <ul className="footer-links" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                <span>Mon - Fri</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>7am - 8pm</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                <span>Saturday</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>8am - 9pm</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                <span>Sunday</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>8am - 6pm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p className="newsletter-desc">
              Subscribe to unlock secret tropical recipes, premium discounts, and local event invitations.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
                required 
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn-subscribe">Join</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            &copy; 2026 Coco Munzzz Café. All rights reserved.
          </span>
          <ul className="footer-legal-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#licensing">Licensing</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
