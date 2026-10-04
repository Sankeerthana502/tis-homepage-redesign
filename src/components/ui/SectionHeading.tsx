import React from 'react';
import { Badge } from './Badge';
import { ScrollReveal } from '../animation/ScrollReveal';

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  badgeVariant?: 'crimson' | 'gold' | 'teal';
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  badgeVariant = 'crimson',
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <ScrollReveal direction="down" duration={0.4} delay={0.05}>
          <Badge variant={badgeVariant} icon={badgeIcon} className="mb-3.5">
            {badge}
          </Badge>
        </ScrollReveal>
      )}

      <ScrollReveal direction="up" duration={0.5} delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-stone-900 dark:text-white leading-[1.15]">
          {title}{' '}
          {highlight && (
            <span className="relative inline-block text-tis-crimson dark:text-tis-gold">
              {highlight}
              {/* Subtle underline sketch */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2 text-tis-gold dark:text-tis-crimson overflow-visible pointer-events-none"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q 50 12 100 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          )}
        </h2>
      </ScrollReveal>

      {description && (
        <ScrollReveal direction="up" duration={0.55} delay={0.15}>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-normal max-w-2xl">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};
