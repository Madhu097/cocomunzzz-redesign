import React, { useRef, useEffect, useState } from 'react';
import CurvedDivider from './CurvedDivider';
import './Sections.css';

export default function Gallery() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    let rAF;
    let current = 0;
    let target = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      target = Math.max(0, Math.min(1, scrolled / scrollable));
    };

    const tick = () => {
      current += (target - current) * 0.06;
      setScrollProgress(current);
      rAF = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rAF = requestAnimationFrame(tick);
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rAF);
    };
  }, []);

  // 5×3 grid
  const images = [
    { id: 1,  col: 0, row: 0, url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80', caption: 'Sustainable Beans' },
    { id: 2,  col: 1, row: 0, url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80', caption: 'Barista Crafting' },
    { id: 3,  col: 2, row: 0, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', caption: 'Tropical Shoreline' },
    { id: 4,  col: 3, row: 0, url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80', caption: 'Miami Cafe Oasis' },
    { id: 5,  col: 4, row: 0, url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80', caption: 'Coconut Milk Foam' },
    { id: 6,  col: 0, row: 1, url: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80', caption: 'Tropical Palms' },
    { id: 7,  col: 1, row: 1, url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80', caption: 'Beach Hammock' },
    { id: 8,  col: 2, row: 1, url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80', caption: 'Coco Latte', isCenter: true },
    { id: 9,  col: 3, row: 1, url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80', caption: 'Artisanal Blend' },
    { id: 10, col: 4, row: 1, url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80', caption: 'Slow Brew Bar' },
    { id: 11, col: 0, row: 2, url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80', caption: 'Coconut Shaving' },
    { id: 12, col: 1, row: 2, url: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=600&q=80', caption: 'Cozy Roastery' },
    { id: 13, col: 2, row: 2, url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80', caption: 'Tropical Horizon' },
    { id: 14, col: 3, row: 2, url: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=600&q=80', caption: 'Artisanal Brewing' },
    { id: 15, col: 4, row: 2, url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80', caption: 'Latte Art Detail' },
  ];

  const p = scrollProgress;

  // ── Phase thresholds ─────────────────────────────────────────────────────
  // Phase 1 (0 → 0.35): grid tilts in + cards fade in row by row
  // Phase 2 (0.35 → 1): locked, fully visible (65% of 300vh track = ~195vh visible)

  const revealEnd = 0.90;
  const t1 = Math.min(1, Math.max(0, p / revealEnd)); // 0 → 1 during reveal

  // Grid-level: tilt from flat (0) to angled (22deg)
  const gridRotX = !isMobile ? t1 * 22 : 0;
  const gridRotZ = !isMobile ? t1 * -5 : 0;

  // Grid-level: translateY from 100vh (pushed down off-screen) to 0vh (aligned bottom)
  const gridTranslateY = !isMobile ? (1 - t1) * 100 : 0;

  // Title fades out in first 25% of scroll
  const textOpacity = Math.max(0, 1 - p / 0.25);

  return (
    <section ref={containerRef} id="gallery" className="gallery-scroll-container">
      <div className="gallery-sticky-viewport">

        {/* Scroll prompt */}
        <div className="gallery-reveal-text" style={{ opacity: textOpacity, pointerEvents: 'none' }}>
          <span className="gallery-title-sub">SCROLL</span>
          <h2 className="gallery-title-main">DOWN TO REVEAL</h2>
          <span className="gallery-title-sub italic">Gallery</span>
        </div>

        {/*
          The grid is bottom-aligned in the sticky viewport.
          It rises up from the bottom (translateY) and rotates.
        */}
        <div
          className="gallery-3d-grid"
          style={isMobile ? {} : {
            transform: `translateY(${gridTranslateY}vh) rotateX(${gridRotX}deg) rotateZ(${gridRotZ}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {images.map((img) => {
            // Each ROW fades in slowly (staggered display)
            const rowDelay = img.row * 0.15;
            const fadeStart = 0.05 + rowDelay;
            const fadeEnd   = fadeStart + 0.35;
            const opacity = !isMobile
              ? Math.min(1, Math.max(0, (p - fadeStart) / (fadeEnd - fadeStart)))
              : 1;

            // Cards slide up slightly as they fade in
            const slideY = !isMobile ? Math.max(0, 1 - opacity) * 60 : 0; // px

            return (
              <div
                key={img.id}
                className={`gallery-3d-item-wrapper ${img.isCenter ? 'gallery-center-item' : ''}`}
                style={isMobile ? {} : {
                  opacity,
                  transform: `translateY(${slideY}px)`,
                  pointerEvents: opacity > 0.8 ? 'auto' : 'none',
                }}
              >
                <img src={img.url} alt={img.caption} className="gallery-img" loading="lazy" />
              </div>
            );
          })}
        </div>

      </div>
      {/* Curved divider positioned OUTSIDE the sticky track */}
      <div className="gallery-bottom-divider">
        <CurvedDivider type="deep-convex" fillColor="#FBF3E0" bgColor="#99432A" />
      </div>
    </section>
  );
}
