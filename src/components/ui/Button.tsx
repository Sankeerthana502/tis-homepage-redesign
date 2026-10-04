import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  loading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-medium',
    md: 'text-sm px-5 py-2.5 gap-2 font-semibold',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold',
    xl: 'text-lg px-8 py-4 gap-3 font-bold',
  };

  const variantStyles = {
    primary: 'bg-tis-crimson text-white hover:bg-tis-crimson-dark shadow-md hover:shadow-glow-crimson focus:ring-tis-crimson',
    secondary: 'bg-tis-teal text-tis-dark hover:bg-tis-teal-dark hover:text-white shadow-md hover:shadow-glow-teal focus:ring-tis-teal',
    gold: 'bg-gradient-to-r from-tis-gold-dark via-tis-gold to-tis-gold-light text-stone-950 font-bold shadow-md hover:shadow-glow-gold focus:ring-tis-gold',
    outline: 'border-2 border-tis-crimson text-tis-crimson dark:text-red-400 dark:border-red-400 hover:bg-tis-crimson hover:text-white dark:hover:bg-tis-crimson focus:ring-tis-crimson',
    ghost: 'text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60 focus:ring-stone-400',
    glass: 'bg-white/10 dark:bg-black/30 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 dark:hover:bg-black/50 shadow-glass',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.025 }}
      whileTap={{ scale: disabled ? 1 : 0.975 }}
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : null}

      {icon && iconPosition === 'left' && !loading && (
        <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>
      )}
      
      <span>{children}</span>

      {icon && iconPosition === 'right' && !loading && (
        <span className="transition-transform group-hover:translate-x-1">{icon}</span>
      )}
    </motion.button>
  );
};
