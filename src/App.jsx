import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import ProductStories from './components/ProductStories';
import ProductStoryPage from './components/ProductStoryPage';
import Locations from './components/Locations';
import Gallery from './components/Gallery';
import PressMedia from './components/PressMedia';
import ContactUs from './components/ContactUs';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// Cards to animate on scroll-into-view on touch devices
const CARD_SELECTORS = [
  '.product-card-wrapper',
  '.benefit-card',
  '.testimonial-card',
  '.story-step-card',
  '.location-card',
  '.press-card',
  '.gallery-3d-item-wrapper',
].join(', ');

function setupScrollActivate() {
  // Only on touch/coarse-pointer devices
  if (!window.matchMedia('(pointer: coarse)').matches) return () => {};

  const cards = document.querySelectorAll(CARD_SELECTORS);
  if (!cards.length) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-active');
        } else {
          entry.target.classList.remove('scroll-active');
        }
      });
    },
    { threshold: 0.3 }   // trigger when 30% of card is visible
  );

  cards.forEach((card) => observer.observe(card));
  return () => observer.disconnect();
}

function App() {
  const [activeStory, setActiveStory] = useState(null);
  const hasVisitedStory = useRef(false);
  const observerCleanup = useRef(null);

  // Handle browser back button via popstate
  useEffect(() => {
    const handlePopState = (e) => {
      // If we go back and there's no story in state, close it
      if (!e.state || !e.state.story) {
        setActiveStory(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync state changes with browser history
  const openStory = (productId) => {
    setActiveStory(productId);
    window.history.pushState({ story: productId }, '', `#story-${productId}`);
  };

  const closeStory = () => {
    setActiveStory(null);
    // Only go back in history if we are currently on a story hash
    if (window.location.hash.startsWith('#story-')) {
      window.history.back();
    }
  };

  // Story scroll behaviour
  useEffect(() => {
    if (activeStory) {
      hasVisitedStory.current = true;
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (hasVisitedStory.current) {
      const timer = setTimeout(() => {
        const storiesSection = document.getElementById('stories');
        if (storiesSection) storiesSection.scrollIntoView({ behavior: 'instant' });
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [activeStory]);

  // Scroll-activated card effects on touch devices
  useEffect(() => {
    if (activeStory) return; // main page not mounted yet

    // Small delay so all section components are fully painted
    const t = setTimeout(() => {
      if (observerCleanup.current) observerCleanup.current();
      observerCleanup.current = setupScrollActivate();
    }, 300);

    return () => {
      clearTimeout(t);
      if (observerCleanup.current) observerCleanup.current();
    };
  }, [activeStory]);

  if (activeStory) {
    return (
      <ProductStoryPage 
        product={activeStory} 
        onBack={closeStory} 
      />
    );
  }

  return (
    <main>
      {/* 1. Hero Section (bg: Dark) */}
      <Hero />

      {/* 2. About Story Section (bg: Cream) */}
      <About />

      {/* 3. Products Section (bg: Dark) */}
      <Products />

      {/* 4. Product Stories Section (bg: Cream) */}
      <ProductStories onSelectProduct={openStory} />

      {/* 5. Locations Section (bg: Dark) */}
      <Locations />

      {/* 6. Press & Media Section (bg: Cream) */}
      <PressMedia />

      {/* 7. Gallery Section (bg: Dark) */}
      <Gallery />

      {/* 8. Benefits Section (bg: Cream) */}
      <Benefits />

      {/* 9. Testimonials Section (bg: Dark) */}
      <Testimonials />

      {/* 10. Contact Us Section (bg: Cream) */}
      <ContactUs />

      {/* 11. Footer Section (bg: Dark) */}
      <Footer />
    </main>
  );
}

export default App;
