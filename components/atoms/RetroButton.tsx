import React, { ButtonHTMLAttributes } from 'react';

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  href?: string;
}

const RetroButton: React.FC<RetroButtonProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  icon,
  iconPosition = 'left',
  className,
  children,
  disabled,
  href,
  ...props
}) => {
  // Base classes
  const baseClasses = 'relative rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center overflow-hidden transform';
  
  // Size variations
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };
  
  // Variant styles with 3D button effect
  const variantClasses = {
    primary: `bg-teal text-white border-2 border-teal hover:bg-teal/90 active:translate-y-1 
              after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-2 after:bg-teal/50 after:translate-y-1/2 after:rounded-full`,
    
    secondary: `bg-mustard text-charcoal border-2 border-mustard hover:bg-mustard/90 active:translate-y-1
                after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-2 after:bg-mustard/50 after:translate-y-1/2 after:rounded-full`,
    
    accent: `bg-coral text-white border-2 border-coral hover:bg-coral/90 active:translate-y-1
             after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-2 after:bg-coral/50 after:translate-y-1/2 after:rounded-full`,
  };
  
  // Shadow effect with pseudo-elements
  const shadowClass = 'shadow-button-shadow hover:shadow-none';
  
  // Disabled state
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed hover:translate-y-0 active:translate-y-0 hover:shadow-button-shadow' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${shadowClass} ${disabledClass} ${className || ''}`;
  
  // Handle smooth scrolling to section when href is provided
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
    
    // Call the original onClick handler if it exists
    if (props.onClick) {
      props.onClick(e);
    }
  };
  
  return (
    <button 
      className={buttonClasses} 
      disabled={disabled} 
      onClick={handleClick}
      {...props}
    >
      {/* Add starburst effect on hover */}
      <span className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-30 transition-opacity duration-300">
        <span className="absolute left-0 top-0 h-full aspect-square bg-white rounded-full scale-0 hover:scale-100 transition-transform duration-300 origin-center opacity-20"></span>
      </span>
      
      {/* Content with proper icon positioning */}
      <span className="relative z-10 flex items-center">
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        <span>{label || children}</span>
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </span>
    </button>
  );
};

export default RetroButton;
