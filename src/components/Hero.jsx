import React, { useState } from 'react';
import { ArrowUpRight, Play, Menu, X } from 'lucide-react';
import './Hero.css';
import cocoEspressoSplash from '../assets/coco_espresso_splash.png';
import heroVideo from '../assets/hero 2.mp4';
import logoImg from '../assets/Logo.png';
import CurvedDivider from './CurvedDivider';

// Smooth scroll helper
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeAndScroll = (id) => {
    setMenuOpen(false);
    setTimeout(() => scrollTo(id), 50);
  };

  return (
    <section className="hero-banner">
      {/* Video Background */}
      <video className="hero-video-bg" autoPlay loop muted playsInline src={heroVideo} />
      <div className="hero-video-overlay" />
      <div className="hero-bottom-fade" />

      {/* Premium Glass Header / Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={logoImg} alt="Coco Munzzz Logo" className="logo-img" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('about'); }}>About Us</a></li>
            <li><a href="#product" onClick={e => { e.preventDefault(); scrollTo('product'); }}>Product</a></li>
            <li><a href="#benefits" onClick={e => { e.preventDefault(); scrollTo('benefits'); }}>Benefits</a></li>
            <li><a href="#testimonial" onClick={e => { e.preventDefault(); scrollTo('testimonial'); }}>Testimonial</a></li>
          </ul>
        </nav>
        
        {/* Desktop CTA */}
        <div className="nav-cta-container">
          <div className="btn-pill-group" onClick={() => scrollTo('contact')} style={{ cursor: 'pointer' }}>
            <button className="btn-pill">Order Now</button>
            <button className="btn-arrow-circle" aria-label="Go to ordering page">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Hamburger Toggle (Mobile/Tablet View) — shows X when open */}
        <button 
          className={`mobile-menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Backdrop to close drawer on outside tap */}
      {menuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Premium Glass Mobile Drawer Overlay */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        {/* Close button INSIDE the drawer at the top */}
        <button
          className="drawer-close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <ul className="mobile-drawer-links">
          <li onClick={() => closeAndScroll('about')}><a href="#about" onClick={e => e.preventDefault()}>About Us</a></li>
          <li onClick={() => closeAndScroll('product')}><a href="#product" onClick={e => e.preventDefault()}>Product</a></li>
          <li onClick={() => closeAndScroll('benefits')}><a href="#benefits" onClick={e => e.preventDefault()}>Benefits</a></li>
          <li onClick={() => closeAndScroll('testimonial')}><a href="#testimonial" onClick={e => e.preventDefault()}>Testimonial</a></li>
        </ul>
        <div className="mobile-drawer-cta">
          <div className="btn-pill-group" style={{ justifyContent: 'center' }} onClick={() => closeAndScroll('contact')}>
            <button className="btn-pill" style={{ width: 'auto' }}>Order Now</button>
            <button className="btn-arrow-circle">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Body */}
      <div className="container hero-content">
        {/* Left Column: Heading and Tagline */}
        <div className="hero-left">
          <div className="hero-badge-container">
            <span className="hero-badge-text">Premium Coconut Café Experience</span>
            <div className="hero-badge-line"></div>
          </div>
          
          <h1 className="hero-title">
            <span className="accent block">COCO MUNZZZ</span>
            <span className="serif-italic block">Life's</span>
            <span className="block">BEGINNING</span>
          </h1>

          <p className="hero-description">
            Did you know that the ultimate café sensation is hiding inside a fresh coconut? 
            Take our premium coco-espresso pairing quiz to discover the perfect blend tailored to your palate.
          </p>

          <div className="hero-ctas">
            <div className="btn-pill-group" onClick={() => scrollTo('product')} style={{ cursor: 'pointer' }}>
              <button className="btn-pill">Our Products</button>
              <button className="btn-arrow-circle" aria-label="View our products">
                <ArrowUpRight size={20} />
              </button>
            </div>
            
            <button className="btn-video" onClick={() => scrollTo('gallery')}>
              <span className="video-play-circle">
                <Play size={18} fill="currentColor" />
              </span>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right Column: Kept empty to showcase the premium background video */}
        <div className="hero-right"></div>
      </div>

      {/* Structural bottom divider connecting to About (bg: #FBF3E0) */}
      <div className="curved-divider-wrapper">
        <CurvedDivider type="ripped-paper" fillColor="#FBF3E0" bgColor="transparent" />
      </div>
    </section>
  );
}
