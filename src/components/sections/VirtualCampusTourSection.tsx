import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Eye } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { CAMPUS_FACILITIES } from '../../data/schoolData';
import { Button } from '../ui/Button';

export const VirtualCampusTourSection: React.FC<{ onOpenVirtualTour: () => void }> = ({ onOpenVirtualTour }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Academics', 'Sports', 'Boarding', 'Arts', 'Campus'];

  const filteredFacilities = activeCategory === 'All'
    ? CAMPUS_FACILITIES
    : CAMPUS_FACILITIES.filter((f) => f.category === activeCategory);

  return (
    <section id="campus" className="py-20 md:py-28 bg-stone-50 dark:bg-[#0e1319] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="Interactive Campus Tour"
          badgeIcon={<Compass className="w-3.5 h-3.5" />}
          badgeVariant="gold"
          title="22-Acre Himalayan"
          highlight="Sanctuary"
          description="Immerse yourself in our pollution-free Dehradun campus featuring modern STEM labs, Olympic sports complexes, eco-friendly dorms, and open-air theaters."
          align="center"
        />

        {/* 360 Callout Banner */}
        <div className="mb-10 text-center">
          <Button
            variant="gold"
            size="lg"
            icon={<Eye className="w-4 h-4" />}
            onClick={onOpenVirtualTour}
            className="shadow-xl shadow-tis-gold/20 font-extrabold"
          >
            Launch 360° Full-Screen Virtual Experience
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-tis-crimson text-white shadow-md'
                  : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredFacilities.map((fac) => (
              <motion.div
                key={fac.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden shadow-md bg-stone-900 border border-stone-200 dark:border-stone-800 h-64 sm:h-72 cursor-pointer"
                onClick={onOpenVirtualTour}
              >
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent group-hover:from-stone-950/95 transition-all" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20">
                    {fac.category}
                  </span>
                </div>

                {/* Center 360 icon hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-tis-crimson text-white flex items-center justify-center shadow-xl">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="font-display font-bold text-sm sm:text-base leading-snug group-hover:text-tis-gold transition-colors">
                    {fac.title}
                  </h4>
                  <p className="text-[11px] text-stone-300 mt-1 line-clamp-1">
                    {fac.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
