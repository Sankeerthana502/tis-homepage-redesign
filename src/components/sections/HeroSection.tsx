import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Award, ArrowRight, ShieldCheck, CheckCircle2, Compass } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../animation/ScrollReveal';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onOpenVirtualTour: () => void;
  onOpenProspectus: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnquiry,
  onOpenVirtualTour,
  onOpenProspectus,
}) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16 lg:py-20">
      {/* Background with subtle gradient & ambient mesh lights */}
      <div className="absolute inset-0 bg-stone-100/60 dark:bg-[#0c1015] pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-br from-tis-crimson/15 via-tis-gold/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[450px] h-[450px] bg-tis-teal/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & High-Converting CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Admissions Badge */}
            <ScrollReveal direction="down" duration={0.45} delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-tis-crimson/10 via-tis-gold/15 to-tis-crimson/10 border border-tis-crimson/25 px-4 py-1.5 rounded-full text-xs font-bold text-tis-crimson dark:text-tis-gold mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-tis-gold shrink-0 animate-spin-slow" />
                <span>ADMISSIONS OPEN 2025-26 • CLASS IV TO XII</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" duration={0.6} delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-extrabold font-display text-stone-900 dark:text-white leading-[1.08] tracking-tight">
                Where <span className="text-tis-crimson">Gurukul Values</span> Meet Modern{' '}
                <span className="relative inline-block">
                  <span className="gold-gradient-text">Global Excellence</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-tis-gold pointer-events-none"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 6 Q 100 12 200 6"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle / Value Proposition */}
            <ScrollReveal direction="up" duration={0.6} delay={0.3}>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-300 font-normal leading-relaxed max-w-2xl">
                Nestled in the serene foothills of <strong>Dehradun</strong>, TIS empowers young minds through CBSE & Cambridge pedagogy, 16+ Olympic sports, 1:8 student-mentor ratio, and holistic character building.
              </p>
            </ScrollReveal>

            {/* Trust Badges Row */}
            <ScrollReveal direction="up" duration={0.5} delay={0.35}>
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-600 dark:text-stone-300 font-medium">
                <span className="flex items-center gap-1.5 bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 px-3 py-1 rounded-full shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% University Placement
                </span>
                <span className="flex items-center gap-1.5 bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 px-3 py-1 rounded-full shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-tis-crimson" /> 22-Acre Safe Eco-Campus
                </span>
                <span className="flex items-center gap-1.5 bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 px-3 py-1 rounded-full shadow-xs">
                  <Award className="w-3.5 h-3.5 text-tis-gold" /> #1 Co-Ed Boarding School
                </span>
              </div>
            </ScrollReveal>

            {/* High-Converting CTA Buttons */}
            <ScrollReveal direction="up" duration={0.55} delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="xl"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto shadow-xl shadow-tis-crimson/30 hover:shadow-glow-crimson py-4 px-8 text-base"
                >
                  Apply for Admission
                </Button>

                <Button
                  variant="glass"
                  size="xl"
                  icon={<Compass className="w-5 h-5 text-tis-gold" />}
                  onClick={onOpenVirtualTour}
                  className="w-full sm:w-auto text-stone-900 dark:text-white border-stone-300 dark:border-stone-700 hover:border-tis-gold py-4 px-7 text-base bg-white/80 dark:bg-stone-800/80"
                >
                  360° Virtual Campus Tour
                </Button>
              </div>
            </ScrollReveal>

            {/* Quick Micro-CTA */}
            <ScrollReveal direction="up" duration={0.5} delay={0.45}>
              <div className="mt-5 text-xs text-stone-500 dark:text-stone-400 flex items-center gap-2">
                <span>Looking for details?</span>
                <button
                  onClick={onOpenProspectus}
                  className="text-tis-crimson dark:text-tis-gold font-bold underline hover:no-underline cursor-pointer"
                >
                  Download Free 2025-26 Prospectus (PDF)
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hero Visual Showcase with Floating Trust Pills & Video Trigger */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" duration={0.7} delay={0.25}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Visual Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800 bg-stone-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                    alt="Tulas International School Students Campus"
                    className="w-full h-[430px] sm:h-[490px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  {/* Center Play Button for Reel */}
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenVirtualTour}
                    className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-tis-crimson/90 hover:bg-tis-crimson text-white flex items-center justify-center shadow-2xl shadow-tis-crimson/50 backdrop-blur-md cursor-pointer group/play"
                    aria-label="Play Campus Reel"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1 transition-transform group-hover/play:scale-110" />
                  </motion.button>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="gold" size="sm">Modern Gurukul</Badge>
                      <span className="text-[11px] text-stone-300 font-medium">Dehradun Foothills</span>
                    </div>
                    <p className="font-display font-bold text-base sm:text-lg leading-snug">
                      Nurturing Tomorrow’s Global Scholars, Athletes & Visionary Leaders
                    </p>
                  </div>
                </div>

                {/* Floating Stat Pill 1: Top Left */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-5 -left-4 sm:-left-8 bg-white/95 dark:bg-tis-dark-card/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-stone-200/80 dark:border-tis-dark-border flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900 dark:text-white leading-tight">Rank #1 in Uttarakhand</p>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400">EducationWorld Boarding Survey</p>
                  </div>
                </motion.div>

                {/* Floating Stat Pill 2: Bottom Right */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 dark:bg-tis-dark-card/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-stone-200/80 dark:border-tis-dark-border flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900 dark:text-white leading-tight">1:8 Faculty Ratio</p>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400">Personalized Pastoral Mentoring</p>
                  </div>
                </motion.div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
