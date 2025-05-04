import React from 'react';

type ColorName = 'charcoal' | 'coral' | 'aqua' | 'teal';

interface MountainDividerProps {
  inverted?: boolean;
  fromColor: ColorName;
  toColor: ColorName;
  className?: string;
}

const MountainDivider: React.FC<MountainDividerProps> = ({
  inverted = false,
  fromColor,
  toColor,
  className = '',
}) => {
  return (
    <div
      className={`
        relative h-16 w-full overflow-hidden
        bg-${toColor}
        ${className}
      `}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {inverted ? (
          <path
            className={`fill-current text-${fromColor}`}
            d="M0,64L60,38.4L120,51.2L180,35.2L240,51.2L300,32L360,48L420,27.2L480,43.2L540,35.2L600,53.6L660,32L720,48L780,38.4L840,56L900,27.2L960,43.2L1020,35.2L1080,51.2L1140,32L1200,48L1260,38.4L1320,56L1380,35.2L1440,43.2L1440,0L0,0Z"
          />
        ) : (
          <path
            className={`fill-current text-${fromColor}`}
            d="M0,0L60,25.6L120,12.8L180,28.8L240,12.8L300,32L360,16L420,36.8L480,20.8L540,28.8L600,10.4L660,32L720,16L780,25.6L840,8L900,36.8L960,20.8L1020,28.8L1080,12.8L1140,32L1200,16L1260,25.6L1320,8L1380,28.8L1440,20.8L1440,64L0,64Z"
          />
        )}
      </svg>
    </div>
  );
};

export default MountainDivider;
