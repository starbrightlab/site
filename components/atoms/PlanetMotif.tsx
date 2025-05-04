// components/PlanetMotif.tsx
import React from 'react';

interface PlanetMotifProps {
  /** Size in pixels (both width and height) */
  size?: number;
  /** Additional wrapper classes */
  className?: string;
  /** Fill color for the planet core (any valid CSS color) */
  planetColor?: string;
}

const PlanetMotif: React.FC<PlanetMotifProps> = ({
  size = 48,
  className,
  planetColor = 'teal'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="rotate(-25 24 22)">
      {/* Ring behind */}
      <path
        d="M4,22 A18,5 0 0,1 44,22"
        className="stroke-charcoal stroke-[2]"
        strokeLinecap="round"
        fill="none"
      />

      {/* Planet core with configurable fill */}
      <circle
        cx="24"
        cy="22"
        r="15"
        fill={planetColor}
      />

      {/* Ring front */}
      <path
        d="M4,22 A18,5 0 0,0 44,22"
        className="stroke-charcoal stroke-[2]"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  </svg>
);

export default PlanetMotif;
