import React, { useState, useEffect } from 'react';
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

  // Scroll to top when switching to a story; scroll to stories section when returning to main page
  useEffect(() => {
    if (activeStory) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // Wait a short frame for the components to mount, then scroll to stories section
      const timer = setTimeout(() => {
        const storiesSection = document.getElementById('stories');
        if (storiesSection) {
          storiesSection.scrollIntoView({ behavior: 'instant' });
        }
      }, 20);
      return () => clearTimeout(timer);
    }
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
