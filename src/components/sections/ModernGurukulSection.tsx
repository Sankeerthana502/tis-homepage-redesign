import React from 'react';
import { Brain, HeartHandshake, Trophy, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animation/ScrollReveal';
import { GURUKUL_PILLARS } from '../../data/schoolData';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
};

interface ModernGurukulProps {
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
}

export const ModernGurukulSection: React.FC<ModernGurukulProps> = ({ onOpenEnquiry, onOpenProspectus }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-stone-50 dark:bg-[#0e1319] relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-tis-crimson/5 dark:bg-tis-crimson/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-tis-gold/5 dark:bg-tis-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="Philosophy & Heritage"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          badgeVariant="gold"
          title="The Modern Gurukul"
          highlight="Reimagined for 2026"
          description="At TIS, we unite ancient Indian traditions of discipline, mental clarity, and guru-shishya mentorship with next-generation global STEM education and Olympic sports mastery."
          align="center"
        />

        {/* 2-Column Philosophy Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Rich Story Card */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="right" duration={0.6}>
              <div className="space-y-4 text-stone-700 dark:text-stone-300 text-base leading-relaxed">
                <p className="text-xl font-display font-semibold text-stone-900 dark:text-white leading-snug">
                  “We feel supported in what we do and nudged further to do more.”
                </p>
                
                <p>
                  Established in 2012 under the aegis of <strong>Rishabh Educational Trust</strong>, Tulas International School was founded on a vision: education must not be confined to rote textbooks. It must sculpt character, ignite curiosity, and prepare leaders who thrive with empathy.
                </p>

                <p>
                  Located in the salubrious Himalayan valley of Dehradun, our students wake up to pristine mountain air, morning yoga & meditation, intensive academic discourse, and evening equestrian & shooting academies.
                </p>
              </div>

              {/* Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  '1:8 Student to Guru Mentoring',
                  'Pollution-free 22-Acre Sanctuary',
                  'Mindfulness & Daily Meditation',
                  '100% International College Placement'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-tis-crimson dark:text-tis-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Button variant="primary" size="md" onClick={onOpenEnquiry}>
                  Explore Admissions 2025-26
                </Button>
                <Button variant="outline" size="md" onClick={onOpenProspectus}>
                  Download Prospectus
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Modern Gurukul Visual Card with Collage */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" duration={0.65}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800 bg-stone-900">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
                    alt="Modern Gurukul Classroom at Tulas"
                    className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <Badge variant="gold" size="sm" className="mb-2">Heritage & Innovation</Badge>
                    <h4 className="text-xl sm:text-2xl font-bold font-display">
                      Holistic Development Rooted in Ancient Values
                    </h4>
                    <p className="text-xs text-stone-300 mt-1">
                      Cultivating intellect, emotional resilience, and lifelong moral compass.
                    </p>
                  </div>
                </div>

                {/* Floating quote badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white dark:bg-tis-dark-card border border-stone-200 dark:border-tis-dark-border p-4 rounded-2xl shadow-xl max-w-xs">
                  <p className="text-xs italic text-stone-700 dark:text-stone-300 font-medium">
                    “Tulas helped me thrive and become the absolute best version of myself.”
                  </p>
                  <p className="text-[10px] font-bold text-tis-crimson dark:text-tis-gold mt-1.5 uppercase tracking-wider">
                    — TIS Head Girl, Batch of 2024
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {GURUKUL_PILLARS.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <Card
                variant="default"
                hoverEffect={true}
                className="p-6 sm:p-7 h-full flex flex-col justify-between border-stone-200/90 dark:border-tis-dark-border group bg-white dark:bg-tis-dark-card"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-tis-crimson/10 text-tis-crimson dark:bg-tis-crimson/20 dark:text-red-400 flex items-center justify-center mb-5 group-hover:bg-tis-crimson group-hover:text-white transition-colors duration-300">
                    {ICONS_MAP[pillar.icon] || <Sparkles className="w-6 h-6" />}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-tis-gold-dark dark:text-tis-gold bg-tis-gold/10 px-2.5 py-1 rounded-full">
                    {pillar.badge}
                  </span>

                  <h4 className="text-lg font-bold font-display text-stone-900 dark:text-white mt-3 leading-snug group-hover:text-tis-crimson dark:group-hover:text-tis-gold transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs font-semibold text-stone-700 dark:text-stone-300">
                  <span>{pillar.stat}</span>
                  <ArrowRight className="w-4 h-4 text-tis-crimson dark:text-tis-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
