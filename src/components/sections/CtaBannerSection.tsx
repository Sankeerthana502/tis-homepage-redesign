import React from 'react';
import { ArrowRight, Sparkles, Compass, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../animation/ScrollReveal';

interface CtaBannerSectionProps {
  onOpenEnquiry: () => void;
  onOpenVirtualTour: () => void;
  onOpenProspectus: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({
  onOpenEnquiry,
  onOpenVirtualTour,
}) => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-tis-crimson via-tis-crimson-dark to-[#55000e] text-white relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tis-gold/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <ScrollReveal direction="up" duration={0.5}>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-tis-gold-light mb-6">
            <Sparkles className="w-4 h-4 text-tis-gold" />
            Limited Seats Available For 2025-26
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.55} delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] max-w-4xl mx-auto">
            Give Your Child the Power of a{' '}
            <span className="text-tis-gold-light">Modern Gurukul</span> Education
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.6} delay={0.2}>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
            Join the TIS family in Dehradun. Experience world-class academics, Olympic-level sporting academies, and holistic life mentorship.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.65} delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="xl"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto shadow-2xl py-4 px-9 font-extrabold text-stone-950"
            >
              Apply Online Now
            </Button>

            <Button
              variant="glass"
              size="xl"
              icon={<Compass className="w-5 h-5" />}
              onClick={onOpenVirtualTour}
              className="w-full sm:w-auto py-4 px-8 border-white/30"
            >
              Explore 360° Virtual Campus
            </Button>
          </div>
        </ScrollReveal>

        {/* Footnote with Location */}
        <ScrollReveal direction="up" duration={0.5} delay={0.4}>
          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-white/75">
            <MapPin className="w-3.5 h-3.5 text-tis-gold" />
            <span>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun, Uttarakhand, India</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
