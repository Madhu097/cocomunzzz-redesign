import React from 'react';

/**
 * CurvedDivider: A highly customizable, fluid SVG component to render premium, 
 * organic curved dividers between sections to create a gorgeous wavy website flow.
 * Adjusted to feature balanced responsive curve lines driven by CSS variables.
 */
export default function CurvedDivider({ type = 'smooth-wave', fillColor, bgColor = 'transparent', height }) {
  const renderPath = () => {
    switch (type) {
      case 'smooth-wave':
        // A balanced, elegant sweeping tropical ocean double-wave curve
        return (
          <path d="M-2,40 C300,140 580,-20 900,100 C1150,160 1300,50 1442,30 L1442,125 L-2,125 Z" />
        );
      case 'asymmetrical-slope':
        // A sophisticated rolling wave that slopes dynamically to the right
        return (
          <path d="M-2,20 C450,180 900,-50 1442,70 L1442,125 L-2,125 Z" />
        );
      case 'deep-concave':
        // A balanced U-shaped concave hanging curve dipping smoothly in the center
        return (
          <path d="M-2,0 Q720,150 1442,0 L1442,125 L-2,125 Z" />
        );
      case 'deep-convex':
        // A balanced convex curve arching smoothly in the center
        return (
          <path d="M-2,110 Q720,-20 1442,110 L1442,125 L-2,125 Z" />
        );
      case 'ripped-paper':
        // A pronounced torn paper line with balanced waves
        return (
          <path d="M-2,80 C100,50 180,90 280,60 C380,40 460,95 560,70 C660,40 760,90 860,60 C960,30 1060,95 1160,70 C1260,45 1340,80 1442,55 L1442,125 L-2,125 Z" />
        );
      default:
        return (
          <path d="M-2,35 Q720,130 1442,35 L1442,125 L-2,125 Z" />
        );
    }
  };

  // Determine height: prioritize explicit prop, otherwise fall back to responsive CSS variable
  const inlineHeight = height ? (typeof height === 'number' ? `${height}px` : height) : 'var(--curve-height, 110px)';

  return (
    <div 
      className="curved-divider" 
      style={{
        width: '100%',
        height: inlineHeight,
        overflow: 'hidden',
        lineHeight: 0,
        backgroundColor: bgColor,
        position: 'relative',
        zIndex: 10,
        pointerEvents: 'none',
        transition: 'height 0.3s ease'
      }}
    >
      <svg 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none" 
        style={{
          width: '100%',
          height: '100%',
          fill: fillColor,
          display: 'block'
        }}
      >
        {renderPath()}
      </svg>
    </div>
  );
}
