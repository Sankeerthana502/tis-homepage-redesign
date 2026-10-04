import React from 'react';
import { HelpCircle, PhoneCall } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { FAQS, SCHOOL_INFO } from '../../data/schoolData';
import { Button } from '../ui/Button';

export const FaqSection: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-stone-50 dark:bg-[#0e1319] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="Frequently Asked Questions"
          badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
          badgeVariant="gold"
          title="Common Questions"
          highlight="Answered"
          description="Everything parents want to know regarding admissions, CBSE curriculum, boarding life safety, nutrition, and sports programs."
          align="center"
        />

        {/* Interactive Accordion */}
        <Accordion items={FAQS} allowMultiple={false} />

        {/* Bottom Help Desk Prompt */}
        <div className="mt-12 text-center p-6 max-w-xl mx-auto rounded-2xl bg-white dark:bg-tis-dark-card border border-stone-200 dark:border-tis-dark-border shadow-md">
          <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
            Have a specific question not covered here?
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Our admissions team is available daily 9:00 AM – 6:00 PM IST.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenEnquiry}
            >
              Ask Admissions Desk
            </Button>
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-tis-crimson dark:hover:text-tis-gold"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call {SCHOOL_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
