import React from 'react';
import { KEY_STATS } from '../../data/schoolData';
import { CounterAnimation } from '../animation/CounterAnimation';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animation/ScrollReveal';
import { Card } from '../ui/Card';

export const KeyStatsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro text */}
        <ScrollReveal direction="up" duration={0.5}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-tis-crimson dark:text-tis-gold">
              TIS Distinction At A Glance
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-stone-900 dark:text-white mt-1">
              Excellence Built on Measurable Outcomes
            </h3>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {KEY_STATS.map((stat) => (
            <StaggerItem key={stat.id}>
              <Card
                variant="default"
                hoverEffect={true}
                className="p-5 sm:p-6 text-center flex flex-col items-center justify-between h-full bg-white/90 dark:bg-tis-dark-card/90 backdrop-blur-md border border-stone-200/80 dark:border-tis-dark-border group"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-tis-crimson dark:text-tis-gold tracking-tight group-hover:scale-105 transition-transform">
                    {stat.id === 'ratio' ? (
                      <span>1:8</span>
                    ) : stat.id === 'rank' ? (
                      <span>#1</span>
                    ) : (
                      <CounterAnimation value={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white mt-2 leading-snug">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-2 leading-normal">
                  {stat.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
