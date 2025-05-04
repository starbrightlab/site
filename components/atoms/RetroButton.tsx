import React, { ButtonHTMLAttributes } from 'react';

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}

const RetroButton: React.FC<RetroButtonProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  icon,
  className,
  children,
  ...props
}) => {
  // Base classes
  const baseClasses = 'rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  // Shadow and hover effects
  const effectClasses = 'shadow-retro-pop hover:shadow-none hover:-translate-x-1 hover:-translate-y-1';
  
  // Size variations
  const sizeClasses = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  };
  
  // Variant styles
  const variantClasses = {
    primary: 'bg-teal text-white hover:bg-coral',
    secondary: 'bg-mustard text-charcoal hover:bg-gold',
  };
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${effectClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className || ''}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {label || children}
    </button>
  );
};

export default RetroButton;
