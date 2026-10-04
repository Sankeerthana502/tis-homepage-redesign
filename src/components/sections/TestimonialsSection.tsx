import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { TESTIMONIALS, ALUMNI_STATS } from '../../data/testimonialsData';
import { StaggerContainer, StaggerItem, ScrollReveal } from '../animation/ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0c1015] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-tis-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeading
          badge="Parent & Alumni Voices"
          badgeIcon={<Quote className="w-3.5 h-3.5" />}
          badgeVariant="crimson"
          title="Stories of Transformation &"
          highlight="Success"
          description="Hear from families who chose Tulas International School for its nurturing Gurukul ethos, exceptional academic mentorship, and world-class sports."
          align="center"
        />

        {/* Alumni Top Metrics Bar */}
        <ScrollReveal direction="up" duration={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-3xl bg-stone-50 dark:bg-tis-dark-card border border-stone-200 dark:border-tis-dark-border text-center">
            {ALUMNI_STATS.map((stat, i) => (
              <div key={i} className="p-2">
                <p className="text-2xl sm:text-3xl font-extrabold font-display text-tis-crimson dark:text-tis-gold">
                  {stat.metric}
                </p>
                <p className="text-xs font-semibold text-stone-600 dark:text-stone-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials 4-Card Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id}>
              <Card
                variant="default"
                hoverEffect={true}
                className="p-6 sm:p-8 h-full flex flex-col justify-between bg-stone-50/70 dark:bg-tis-dark-card border-stone-200/90 dark:border-tis-dark-border group"
              >
                <div>
                  {/* Rating + Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-tis-gold/40 group-hover:text-tis-gold transition-colors" />
                  </div>

                  {/* Highlight pill */}
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-tis-crimson dark:text-tis-gold mb-2">
                    {t.highlight}
                  </span>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 italic leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-stone-200/70 dark:border-stone-800/80 flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-tis-crimson/20"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-stone-900 dark:text-white leading-snug">
                      {t.name}
                    </h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
