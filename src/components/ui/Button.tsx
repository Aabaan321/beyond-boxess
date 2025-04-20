import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-amber-700 text-white hover:bg-amber-800 focus:ring-amber-500',
    secondary: 'bg-amber-100 text-amber-900 hover:bg-amber-200 focus:ring-amber-400',
    outline: 'border border-amber-300 text-amber-700 hover:bg-amber-50 focus:ring-amber-400'
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combined styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;