// components/atoms/RetroLoader.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface RetroLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'rocket' | 'countdown' | 'radar';
  text?: string;
  className?: string;
}

const RetroLoader: React.FC<RetroLoaderProps> = ({
  size = 'md',
  variant = 'rocket',
  text = 'Loading...',
  className = '',
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      wrapper: 'w-32 h-32',
      text: 'text-sm',
      iconSize: 'w-12 h-12',
    },
    md: {
      wrapper: 'w-48 h-48',
      text: 'text-base',
      iconSize: 'w-16 h-16',
    },
    lg: {
      wrapper: 'w-64 h-64',
      text: 'text-lg',
      iconSize: 'w-24 h-24',
    },
  };

  // Render the appropriate loader variant
  const renderLoader = () => {
    switch (variant) {
      case 'rocket':
        return <RocketLoader size={sizeConfig[size].iconSize} />;
      case 'countdown':
        return <CountdownLoader size={sizeConfig[size].iconSize} />;
      case 'radar':
        return <RadarLoader size={sizeConfig[size].iconSize} />;
      default:
        return <RocketLoader size={sizeConfig[size].iconSize} />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${sizeConfig[size].wrapper} ${className}`}>
      {renderLoader()}
      
      <motion.p 
        className={`mt-6 font-retroSans text-teal ${sizeConfig[size].text} font-bold tracking-wider`}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        {text}
      </motion.p>
    </div>
  );
};

// Rocket loader animation
const RocketLoader: React.FC<{ size: string }> = ({ size }) => {
  return (
    <div className={`relative ${size}`}>
      {/* Stars background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="w-2 h-2 bg-aqua rounded-full absolute"
          style={{ top: '20%', left: '30%' }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div 
          className="w-1 h-1 bg-coral rounded-full absolute"
          style={{ top: '70%', left: '20%' }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
        />
        <motion.div 
          className="w-2 h-2 bg-mustard rounded-full absolute"
          style={{ top: '40%', left: '80%' }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1.3 }}
        />
      </div>

      {/* Rocket */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-12 h-16">
          {/* Rocket body */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-14 bg-teal rounded-t-full"></div>
          
          {/* Rocket window */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-aqua border-2 border-white rounded-full"></div>
          
          {/* Rocket fins */}
          <div className="absolute bottom-2 left-0 w-3 h-5 bg-coral -skew-x-12"></div>
          <div className="absolute bottom-2 right-0 w-3 h-5 bg-coral skew-x-12"></div>
          
          {/* Rocket flame */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 0.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-6 h-6 bg-orange rounded-full"></div>
            <div className="w-4 h-4 bg-mustard rounded-full absolute top-1 left-1"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// Countdown loader animation
const CountdownLoader: React.FC<{ size: string }> = ({ size }) => {
  const countVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1.2,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  const [count, setCount] = React.useState(3);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCount(prev => (prev > 0 ? prev - 1 : 3));
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className={`relative ${size} bg-charcoal/10 rounded-full flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 border-4 border-teal/30 rounded-full"></div>
      
      <motion.div 
        className="absolute inset-0 border-4 border-teal rounded-full"
        style={{ borderRightColor: 'transparent', borderTopColor: 'transparent' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      
      <motion.div
        key={count}
        className="text-4xl font-bold text-teal font-retroSans"
        variants={countVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {count || "GO!"}
      </motion.div>
    </div>
  );
};

// Radar loader animation
const RadarLoader: React.FC<{ size: string }> = ({ size }) => {
  return (
    <div className={`relative ${size} bg-charcoal/10 rounded-full flex items-center justify-center overflow-hidden`}>
      {/* Concentric circles */}
      <div className="absolute inset-2 border border-dashed border-teal/20 rounded-full"></div>
      <div className="absolute inset-8 border border-dashed border-teal/20 rounded-full"></div>
      <div className="absolute inset-14 border border-dashed border-teal/20 rounded-full"></div>
      
      {/* Spinning radar line */}
      <motion.div 
        className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-teal to-transparent origin-bottom"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      
      {/* Blips */}
      <motion.div 
        className="absolute w-3 h-3 bg-coral rounded-full"
        style={{ top: '30%', left: '60%' }}
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: 1,
          ease: "easeOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute w-2 h-2 bg-mustard rounded-full"
        style={{ top: '70%', left: '40%' }}
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: 2.5,
          ease: "easeOut"
        }}
      ></motion.div>
    </div>
  );
};

export default RetroLoader;