import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'crimson' | 'gold' | 'teal' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'crimson',
  size = 'md',
  icon,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide uppercase';

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3.5 py-1 gap-1.5',
    lg: 'text-sm px-4 py-1.5 gap-2',
  };

  const variantStyles = {
    crimson: 'bg-tis-crimson/10 text-tis-crimson dark:bg-tis-crimson/20 dark:text-red-400 border border-tis-crimson/30',
    gold: 'bg-tis-gold/15 text-tis-gold-dark dark:text-tis-gold border border-tis-gold/40',
    teal: 'bg-tis-teal/15 text-tis-teal-dark dark:text-tis-teal-light border border-tis-teal/40',
    outline: 'bg-transparent text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700',
    glass: 'bg-white/20 dark:bg-black/30 backdrop-blur-md text-white border border-white/30',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
