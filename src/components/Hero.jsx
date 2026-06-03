import React, { useState } from 'react';
import { ArrowUpRight, Play, Menu, X } from 'lucide-react';
import './Hero.css';
import cocoEspressoSplash from '../assets/coco_espresso_splash.png';
import heroVideo from '../assets/hero 2.mp4';
import logoImg from '../assets/Logo.png';
import CurvedDivider from './CurvedDivider';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <li><a href="#about">About Us</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
          </ul>
        </nav>
        
        {/* Desktop CTA */}
        <div className="nav-cta-container">
          <div className="btn-pill-group">
            <button className="btn-pill">Order Now</button>
            <button className="btn-arrow-circle" aria-label="Go to ordering page">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Hamburger Toggle (Mobile/Tablet View) */}
        <button 
          className={`mobile-menu-toggle ${menuOpen ? 'fixed-toggle' : ''}`} 
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
        <ul className="mobile-drawer-links">
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="#product" onClick={() => setMenuOpen(false)}>Product</a></li>
          <li><a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a></li>
          <li><a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonial</a></li>
        </ul>
        <div className="mobile-drawer-cta" onClick={() => setMenuOpen(false)}>
          <div className="btn-pill-group" style={{ justifyContent: 'center' }}>
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
            <div className="btn-pill-group">
              <button className="btn-pill">Our Products</button>
              <button className="btn-arrow-circle" aria-label="View our products">
                <ArrowUpRight size={20} />
              </button>
            </div>
            
            <button className="btn-video">
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
