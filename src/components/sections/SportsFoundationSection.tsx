import React, { useState } from 'react';
import { Trophy, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { SPORTS_LIST } from '../../data/schoolData';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const SportsFoundationSection: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSportIndex, setActiveSportIndex] = useState<number>(0);

  const categories = ['All', 'Olympic', 'Modern', 'Traditional'];

  const filteredSports = selectedCategory === 'All'
    ? SPORTS_LIST
    : SPORTS_LIST.filter(s => s.category === selectedCategory);

  const currentSport = filteredSports[activeSportIndex] || filteredSports[0];

  const handleNext = () => {
    setActiveSportIndex((prev) => (prev + 1) % filteredSports.length);
  };

  const handlePrev = () => {
    setActiveSportIndex((prev) => (prev - 1 + filteredSports.length) % filteredSports.length);
  };

  return (
    <section id="sports" className="py-20 md:py-28 bg-stone-100/70 dark:bg-[#090d12] relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-tis-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core TIS Brand Quote Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="crimson" icon={<Trophy className="w-3.5 h-3.5" />} className="mb-3">
            Olympic Sports Foundation
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-stone-900 dark:text-white leading-tight">
            Sports? It’s not just a facility.{' '}
            <br />
            At Tulas it’s the <span className="text-tis-teal-dark dark:text-tis-teal">Foundation!</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300">
            <strong>16+ certified sports</strong> curated with NIS-qualified national coaches to forge grit, physical resilience, and athletic championships.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveSportIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-950 shadow-md'
                  : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              {cat} Disciplines
            </button>
          ))}
        </div>

        {/* Featured Sport Hero Display */}
        <div className="bg-white dark:bg-tis-dark-card border border-stone-200 dark:border-tis-dark-border rounded-3xl p-6 sm:p-10 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Box */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-lg h-[320px] sm:h-[400px] group">
              <img
                src={currentSport.image}
                alt={currentSport.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <Badge variant="gold" size="sm">
                  {currentSport.category} Sport
                </Badge>
              </div>

              {/* Navigation Arrows on image */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous sport"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next sport"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Info Box */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-tis-crimson dark:text-tis-gold">
                  Sport Highlight {activeSportIndex + 1} of {filteredSports.length}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-stone-900 dark:text-white mt-1">
                  {currentSport.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                {currentSport.description}
              </p>

              <div className="space-y-2 pt-1">
                {currentSport.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-tis-teal-dark dark:text-tis-teal shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Button variant="primary" size="md" onClick={onOpenEnquiry}>
                  Inquire Sports Admission
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {filteredSports.map((sport, idx) => (
            <button
              key={sport.id}
              onClick={() => setActiveSportIndex(idx)}
              className={`rounded-2xl overflow-hidden p-1.5 border transition-all text-center cursor-pointer group ${
                activeSportIndex === idx
                  ? 'border-tis-crimson dark:border-tis-gold bg-white dark:bg-stone-800 shadow-md ring-2 ring-tis-crimson/20'
                  : 'border-transparent bg-white/70 dark:bg-stone-800/40 hover:bg-white dark:hover:bg-stone-800'
              }`}
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-16 sm:h-20 object-cover rounded-xl group-hover:scale-105 transition-transform"
              />
              <p className="text-[11px] font-bold text-stone-800 dark:text-stone-200 mt-1.5 truncate">
                {sport.name.split('&')[0]}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
