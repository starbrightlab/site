import React from 'react';

type ColorName = 'charcoal' | 'coral' | 'aqua' | 'teal' | 'cream' | 'mustard';

interface CurveDividerProps {
  inverted?: boolean;
  fromColor: ColorName;
  toColor: ColorName;
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
  // Map your height prop to both SVG viewBox and Tailwind H classes
  const heightValues = { sm: 48, md: 64, lg: 96 };
  const heightClasses = { sm: 'h-12', md: 'h-16', lg: 'h-24' };
  const H = heightValues[height];

  const pathD = inverted
    ? `M0,${H}C360,${H * 0.1},1080,${H * 0.1},1440,${H}L1440,0L0,0Z`
    : `M0,0C360,${H * 0.9},1080,${H * 0.9},1440,0L1440,${H}L0,${H}Z`;

  return (
    <div
      className={`
        relative w-full overflow-hidden
        ${heightClasses[height]}
        bg-${toColor}
        ${className}
      `}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 1440 ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d={pathD}
          className={`fill-current text-${fromColor}`}
        />
      </svg>
    </div>
  );
};

export default CurveDivider;
