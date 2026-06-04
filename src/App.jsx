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

function App() {
  const [activeStory, setActiveStory] = useState(null);
  // Track if user has actually opened a story (skip scroll on first load)
  const hasVisitedStory = useRef(false);

  useEffect(() => {
    if (activeStory) {
      // User opened a story — scroll to top and mark as visited
      hasVisitedStory.current = true;
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (hasVisitedStory.current) {
      // User returned from a story — scroll back to stories section
      const timer = setTimeout(() => {
        const storiesSection = document.getElementById('stories');
        if (storiesSection) {
          storiesSection.scrollIntoView({ behavior: 'instant' });
        }
      }, 20);
      return () => clearTimeout(timer);
    }
    // On initial page load (hasVisitedStory.current = false, activeStory = null)
    // → do nothing, stay at top (Hero section)
  }, [activeStory]);

  if (activeStory) {
    return (
      <ProductStoryPage 
        product={activeStory} 
        onBack={() => setActiveStory(null)} 
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
      <ProductStories onSelectProduct={setActiveStory} />

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
