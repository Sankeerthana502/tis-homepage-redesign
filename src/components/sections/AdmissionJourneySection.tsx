import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ADMISSION_STEPS } from '../../data/schoolData';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { StaggerContainer, StaggerItem } from '../animation/ScrollReveal';

export const AdmissionJourneySection: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  return (
    <section id="admissions" className="py-20 md:py-28 bg-white dark:bg-[#0c1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeading
          badge="Admissions Roadmap 2025-26"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          badgeVariant="crimson"
          title="Your 4-Step Journey to"
          highlight="Tulas International"
          description="A transparent, frictionless onboarding experience designed to discover your child's innate strengths and welcome your family into our community."
          align="center"
        />

        {/* 4 Steps Timeline Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          {ADMISSION_STEPS.map((step, idx) => (
            <StaggerItem key={step.step}>
              <Card
                variant="default"
                hoverEffect={true}
                className="p-6 sm:p-7 h-full flex flex-col justify-between relative bg-stone-50/70 dark:bg-tis-dark-card border-stone-200/90 dark:border-tis-dark-border group"
              >
                <div>
                  {/* Step Number Top */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-display text-tis-crimson/30 dark:text-tis-gold/30 group-hover:text-tis-crimson dark:group-hover:text-tis-gold transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 bg-stone-200/60 dark:bg-stone-800 px-2.5 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-display text-stone-900 dark:text-white group-hover:text-tis-crimson dark:group-hover:text-tis-gold transition-colors">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between text-xs font-semibold text-stone-500 dark:text-stone-400">
                  <span>Step {idx + 1} of 4</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA Center */}
        <div className="text-center">
          <Button
            variant="primary"
            size="xl"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={onOpenEnquiry}
            className="shadow-xl shadow-tis-crimson/25 px-8"
          >
            Start Step 1: Submit Online Inquiry
          </Button>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-3">
            Applications processed on rolling basis • Rolling academic intakes for 2025-26
          </p>
        </div>

      </div>
    </section>
  );
};
