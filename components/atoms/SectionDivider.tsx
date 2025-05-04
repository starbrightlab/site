import React from 'react';

interface SectionDividerProps {
  type?: 'wave' | 'angle' | 'curve' | 'atomic' | 'mountains';
  inverted?: boolean;
  className?: string;
  fillColor?: 'cream' | 'aqua' | 'mustard' | 'coral' | 'teal' | 'charcoal';
  toColor?: 'cream' | 'aqua' | 'mustard' | 'coral' | 'teal' | 'charcoal';
  height?: 'sm' | 'md' | 'lg';
  position?: 'top' | 'bottom';
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  type = 'wave',
  inverted = false,
  className = '',
  fillColor = 'cream',
  toColor,
  height = 'md',
  position = 'bottom',
}) => {
  // Height values as numbers
  const heightValues = {
    sm: 48,
    md: 64,
    lg: 96,
  };
  
  const dividerHeight = heightValues[height];
  
  // Generate SVG path based on type
  const getPath = () => {
    switch (type) {
      case 'wave':
        return inverted
          ? `M0,${dividerHeight}L48,${dividerHeight*0.83}C96,${dividerHeight*0.67},192,${dividerHeight*0.5},288,${dividerHeight*0.58}C384,${dividerHeight*0.67},480,${dividerHeight*0.83},576,${dividerHeight*0.92}C672,${dividerHeight},768,${dividerHeight},864,${dividerHeight*0.92}C960,${dividerHeight*0.83},1056,${dividerHeight*0.67},1152,${dividerHeight*0.5}C1248,${dividerHeight*0.33},1344,${dividerHeight*0.17},1392,${dividerHeight*0.08}L1440,0L1440,${dividerHeight}L1392,${dividerHeight}C1344,${dividerHeight},1248,${dividerHeight},1152,${dividerHeight}C1056,${dividerHeight},960,${dividerHeight},864,${dividerHeight}C768,${dividerHeight},672,${dividerHeight},576,${dividerHeight}C480,${dividerHeight},384,${dividerHeight},288,${dividerHeight}C192,${dividerHeight},96,${dividerHeight},48,${dividerHeight}L0,${dividerHeight}Z`
          : `M0,0L48,${dividerHeight*0.17}C96,${dividerHeight*0.33},192,${dividerHeight*0.5},288,${dividerHeight*0.42}C384,${dividerHeight*0.33},480,${dividerHeight*0.17},576,${dividerHeight*0.08}C672,0,768,0,864,${dividerHeight*0.08}C960,${dividerHeight*0.17},1056,${dividerHeight*0.33},1152,${dividerHeight*0.5}C1248,${dividerHeight*0.67},1344,${dividerHeight*0.83},1392,${dividerHeight*0.92}L1440,${dividerHeight}L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z`;
      case 'angle':
        return inverted
          ? `M0,${dividerHeight}L1440,0L1440,${dividerHeight}L0,${dividerHeight}Z`
          : `M0,0L1440,${dividerHeight}L1440,0L0,0Z`;
      case 'curve':
        return inverted
          ? `M0,${dividerHeight}C360,${dividerHeight*0.1},1080,${dividerHeight*0.1},1440,${dividerHeight}L1440,0L0,0Z`
          : `M0,0C360,${dividerHeight*0.9},1080,${dividerHeight*0.9},1440,0L1440,${dividerHeight}L0,${dividerHeight}Z`;
      case 'mountains':
        return inverted
          ? `M0,${dividerHeight}L60,${dividerHeight*0.6}L120,${dividerHeight*0.8}L180,${dividerHeight*0.65}L240,${dividerHeight*0.85}L300,${dividerHeight*0.65}L360,${dividerHeight*0.75}L420,${dividerHeight*0.55}L480,${dividerHeight*0.7}L540,${dividerHeight*0.6}L600,${dividerHeight*0.85}L660,${dividerHeight*0.65}L720,${dividerHeight*0.8}L780,${dividerHeight*0.7}L840,${dividerHeight*0.9}L900,${dividerHeight*0.6}L960,${dividerHeight*0.75}L1020,${dividerHeight*0.65}L1080,${dividerHeight*0.8}L1140,${dividerHeight*0.6}L1200,${dividerHeight*0.75}L1260,${dividerHeight*0.65}L1320,${dividerHeight*0.8}L1380,${dividerHeight*0.7}L1440,${dividerHeight*0.85}L1440,0L0,0Z`
          : `M0,0L60,${dividerHeight*0.4}L120,${dividerHeight*0.2}L180,${dividerHeight*0.35}L240,${dividerHeight*0.15}L300,${dividerHeight*0.35}L360,${dividerHeight*0.25}L420,${dividerHeight*0.45}L480,${dividerHeight*0.3}L540,${dividerHeight*0.4}L600,${dividerHeight*0.15}L660,${dividerHeight*0.35}L720,${dividerHeight*0.2}L780,${dividerHeight*0.3}L840,${dividerHeight*0.1}L900,${dividerHeight*0.4}L960,${dividerHeight*0.25}L1020,${dividerHeight*0.35}L1080,${dividerHeight*0.2}L1140,${dividerHeight*0.4}L1200,${dividerHeight*0.25}L1260,${dividerHeight*0.35}L1320,${dividerHeight*0.2}L1380,${dividerHeight*0.3}L1440,${dividerHeight*0.15}L1440,${dividerHeight}L0,${dividerHeight}Z`;
      case 'atomic':
        // A more complex atomic-age inspired divider
        return inverted
          ? `M0,${dividerHeight} L60,${dividerHeight*0.4} L120,${dividerHeight*0.7} L180,${dividerHeight*0.3} L240,${dividerHeight*0.8} L300,${dividerHeight*0.2} L360,${dividerHeight*0.6} L420,${dividerHeight*0.1} L480,${dividerHeight*0.5} L540,${dividerHeight*0.3} L600,${dividerHeight*0.7} L660,${dividerHeight*0.2} L720,${dividerHeight*0.6} L780,${dividerHeight*0.4} L840,${dividerHeight*0.8} L900,${dividerHeight*0.1} L960,${dividerHeight*0.5} L1020,${dividerHeight*0.3} L1080,${dividerHeight*0.7} L1140,${dividerHeight*0.2} L1200,${dividerHeight*0.6} L1260,${dividerHeight*0.4} L1320,${dividerHeight*0.8} L1380,${dividerHeight*0.3} L1440,${dividerHeight*0.5} L1440,0 L0,0 Z`
          : `M0,0 L60,${dividerHeight*0.6} L120,${dividerHeight*0.3} L180,${dividerHeight*0.7} L240,${dividerHeight*0.2} L300,${dividerHeight*0.8} L360,${dividerHeight*0.4} L420,${dividerHeight*0.9} L480,${dividerHeight*0.5} L540,${dividerHeight*0.7} L600,${dividerHeight*0.3} L660,${dividerHeight*0.8} L720,${dividerHeight*0.4} L780,${dividerHeight*0.6} L840,${dividerHeight*0.2} L900,${dividerHeight*0.9} L960,${dividerHeight*0.5} L1020,${dividerHeight*0.7} L1080,${dividerHeight*0.3} L1140,${dividerHeight*0.8} L1200,${dividerHeight*0.4} L1260,${dividerHeight*0.6} L1320,${dividerHeight*0.2} L1380,${dividerHeight*0.7} L1440,${dividerHeight*0.5} L1440,${dividerHeight} L0,${dividerHeight} Z`;
      default:
        return '';
    }
  };

  // Get fill color class
  const getFillColor = () => {
    switch (fillColor) {
      case 'cream':
        return 'fill-cream';
      case 'aqua':
        return 'fill-aqua';
      case 'mustard':
        return 'fill-mustard';
      case 'coral':
        return 'fill-coral';
      case 'teal':
        return 'fill-teal';
      case 'charcoal':
        return 'fill-charcoal';
      default:
        return 'fill-cream';
    }
  };

  // Generate gradient if toColor is provided
  const getGradientId = () => `gradient-${fillColor}-${toColor}`;
  
  const getGradient = () => {
    if (!toColor || toColor === fillColor) return null;
    
    return (
      <defs>
        <linearGradient id={getGradientId()} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" className={`stop-${fillColor}`} style={{ stopColor: `var(--color-${fillColor})` }} />
          <stop offset="100%" className={`stop-${toColor}`} style={{ stopColor: `var(--color-${toColor})` }} />
        </linearGradient>
      </defs>
    );
  };
  
  // Get fill attribute value
  const getFill = () => {
    if (toColor && toColor !== fillColor) {
      return `url(#${getGradientId()})`;
    }
    return undefined;
  };

  // Height classes
  const heightClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24',
  };

  // Position classes
  const positionClasses = {
    top: '-mt-px mb-0',
    bottom: 'mt-0 -mb-px',
  };

  return (
    <div className={`section-divider ${heightClasses[height]} ${positionClasses[position]} ${className}`}>
      <svg
        className={`w-full h-full ${toColor ? '' : getFillColor()}`}
        preserveAspectRatio="none"
        viewBox={`0 0 1440 ${dividerHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }} // Ensure no gaps
      >
        {getGradient()}
        <path d={getPath()} fill={getFill()} />
      </svg>
    </div>
  );
};

export default SectionDivider;
