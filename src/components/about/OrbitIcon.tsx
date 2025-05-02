import React from 'react';

type OrbitIconProps = {
  type: 'planet' | 'rocket' | 'star' | 'atom' | 'satellite';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

/**
 * OrbitIcon component for displaying space-themed icons in orbital animations
 *
 * According to the Design Motifs in the Project Instructions document:
 * - Should include rockets, planets, and atomic elements
 * - Should maintain the retro-futurist aesthetic
 */
export const OrbitIcon: React.FC<OrbitIconProps> = ({
  type,
  color = 'text-retro-orange',
  size = 'md',
  className = '',
}) => {
  // Size mapping
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  // SVG content based on icon type
  const renderIcon = () => {
    switch (type) {
      case 'planet':
        return (
          <>
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <ellipse
              cx="12"
              cy="12"
              rx="12"
              ry="4"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.7"
            />
          </>
        );
      case 'rocket':
        return (
          <path
            fill="currentColor"
            d="M12,1.85a10,10,0,0,0-8.65,15L3,19l2.79-.7a10.55,10.55,0,0,0,3.7.7,8.61,8.61,0,0,0,3.7-.7L16,19l-.35-2.15A10,10,0,0,0,12,1.85Zm2.54,10.7a.49.49,0,0,1-.49.45H9.45A.47.47,0,0,1,9,12.55v-3a.47.47,0,0,1,.45-.45h4.6a.48.48,0,0,1,.49.45Z"
          />
        );
      case 'star':
        return (
          <path
            fill="currentColor"
            d="M12,2l3.09,6.26L22,9.27l-5,4.87,1.18,6.88L12,17.77l-6.18,3.25L7,14.14,2,9.27,8.91,8.26Z"
          />
        );
      case 'atom':
        return (
          <>
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              transform="rotate(120 12 12)"
            />
          </>
        );
      case 'satellite':
        return (
          <>
            <path fill="currentColor" d="M5,17l3.5-3.5L11,16l3-3,3,3V5H5V17z" />
            <path
              fill="currentColor"
              d="M18,17l3-3l-1.5-1.5L18,14l-3-3l-1.5,1.5L18,17z"
            />
          </>
        );
      default:
        return <circle cx="12" cy="12" r="8" fill="currentColor" />;
    }
  };

  return (
    <svg
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox="0 0 24 24"
      className={`${color} ${className}`}
    >
      {renderIcon()}
    </svg>
  );
};

export default OrbitIcon;
