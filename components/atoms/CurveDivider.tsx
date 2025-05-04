import React from 'react';

interface CurveDividerProps {
  inverted?: boolean;
  fromColor: string;
  toColor: string;
  className?: string;
  height?: 'sm' | 'md' | 'lg';
}

const CurveDivider: React.FC<CurveDividerProps> = ({
  inverted = false,
  fromColor,
  toColor,
  className = '',
  height = 'md',
}) => {
  // Height values as numbers
  const heightValues = {
    sm: 48,
    md: 64,
    lg: 96,
  };
  
  const dividerHeight = heightValues[height];
  
  // Generate SVG path based on whether it's inverted or not
  const getPath = () => {
    return inverted
      ? `M0,${dividerHeight}C360,${dividerHeight*0.1},1080,${dividerHeight*0.1},1440,${dividerHeight}L1440,0L0,0Z`
      : `M0,0C360,${dividerHeight*0.9},1080,${dividerHeight*0.9},1440,0L1440,${dividerHeight}L0,${dividerHeight}Z`;
  };

  // Height classes for container
  const heightClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24',
  };

  return (
    <div 
      className={`relative ${heightClasses[height]} w-full overflow-hidden ${className}`}
      style={{ backgroundColor: toColor }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 1440 ${dividerHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          d={getPath()} 
          fill={fromColor}
        />
      </svg>
    </div>
  );
};

export default CurveDivider;