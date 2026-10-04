import React from 'react';
import { Home, Utensils, HeartPulse, ShieldAlert } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { StaggerContainer, StaggerItem } from '../animation/ScrollReveal';

const RESIDENTIAL_HIGHLIGHTS = [
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Modern Residential Houses',
    desc: 'Spacious, air-conditioned rooms with ergonomic study bays, high-speed Wi-Fi, and dedicated resident housemasters.',
    tags: ['Co-Ed Separate Wings', 'Study Desks', 'Lounge Rooms']
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: 'Nutritious 4-Meal Dining',
    desc: 'Hygienic multicuisine dining hall supervised by pediatric nutritionists serving wholesome North & South Indian and Continental meals.',
    tags: ['Organic Produce', 'FSSAI Certified', 'Custom Diets']
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: '24/7 Health Care & Infirmary',
    desc: 'Fully-equipped medical wing with resident doctors, registered nurses, and round-the-clock emergency hospital liaison.',
    tags: ['Resident Doctor', 'Dedicated Ambulance', 'Health Records']
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    title: 'Gated Biometric Security',
    desc: 'Complete peace of mind with 24/7 CCTV surveillance, perimeter patrols, biometric access control, and strict visitor verification.',
    tags: ['100% Gated', 'CCTV Network', 'Zero Tolerance Ragging']
  }
];

export const BoardingLifeSection: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  return (
    <section id="boarding" className="py-20 md:py-28 bg-white dark:bg-[#0c1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Residential Life & Pastoral Care"
          badgeIcon={<Home className="w-3.5 h-3.5" />}
          badgeVariant="teal"
          title="A Home Away"
          highlight="From Home"
          description="Life at TIS goes far beyond the classroom. We provide a warm, nurturing environment where students forge lifelong bonds, emotional resilience, and independent self-discipline."
          align="center"
        />

        {/* 4 Feature Cards */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RESIDENTIAL_HIGHLIGHTS.map((item, idx) => (
            <StaggerItem key={idx}>
              <Card
                variant="default"
                hoverEffect={true}
                className="p-6 sm:p-7 h-full flex flex-col justify-between bg-stone-50/80 dark:bg-tis-dark-card border-stone-200/90 dark:border-tis-dark-border group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-tis-teal/15 text-tis-teal-dark dark:text-tis-teal flex items-center justify-center mb-5 group-hover:bg-tis-teal-dark group-hover:text-white transition-colors">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-bold font-display text-stone-900 dark:text-white group-hover:text-tis-crimson dark:group-hover:text-tis-gold transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 space-y-1.5">
                  {item.tags.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-stone-700 dark:text-stone-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-tis-teal" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Daily Schedule Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-tis-dark-card to-stone-900 text-white p-8 sm:p-10 border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-tis-gold">
                The Disciplined Routine
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display">
                A Day in the Life of a TIS Boarder
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                From morning Himalayan Pranayama to evening sports coaching, structured study prep, and healthy dining, every hour is mindfully curated to optimize growth and joy.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center lg:justify-end gap-4">
              <div className="text-center sm:text-right">
                <p className="text-2xl font-extrabold text-tis-gold">1:8 Ratio</p>
                <p className="text-xs text-stone-400">Mentor to Student Care</p>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto"
              >
                Schedule Boarding Tour
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
