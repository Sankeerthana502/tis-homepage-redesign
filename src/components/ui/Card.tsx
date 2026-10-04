import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'glass' | 'gradient' | 'bordered';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverEffect = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 relative overflow-hidden';

  const variantStyles = {
    default: 'bg-white dark:bg-tis-dark-card border border-stone-200/80 dark:border-tis-dark-border shadow-md',
    glass: 'glass-panel-light dark:glass-panel-dark shadow-glass dark:shadow-glass-dark',
    gradient: 'bg-gradient-to-br from-white via-stone-50 to-stone-100 dark:from-tis-dark-card dark:to-tis-dark border border-stone-200 dark:border-tis-dark-border shadow-lg',
    bordered: 'bg-transparent border-2 border-dashed border-stone-300 dark:border-stone-700',
  };

  const hoverClasses = hoverEffect
    ? 'hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-glow-crimson/10 hover:border-tis-crimson/40 dark:hover:border-tis-gold/40'
    : '';

  return (
    <motion.div
      className={twMerge(clsx(baseStyles, variantStyles[variant], hoverClasses, className))}
      {...props}
    >
      {children}
    </motion.div>
  );
};
