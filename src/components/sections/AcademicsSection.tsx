import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, BookOpen, Layers } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { CURRICULA } from '../../data/schoolData';

interface AcademicsSectionProps {
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenEnquiry, onOpenProspectus }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="academics" className="py-20 md:py-28 bg-white dark:bg-[#0c1015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeading
          badge="Academic Rigor & Curricula"
          badgeIcon={<BookOpen className="w-3.5 h-3.5" />}
          badgeVariant="crimson"
          title="World-Class Pedagogy"
          highlight="Class IV to XII"
          description="Affiliated with CBSE, New Delhi and aligned with Cambridge international benchmarks, we offer personalized pathways across STEM, Commerce, and Humanities."
          align="center"
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CURRICULA.map((curriculum, idx) => (
            <button
              key={curriculum.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-tis-crimson text-white shadow-lg shadow-tis-crimson/25 scale-105'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              <span>{curriculum.title.split('—')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <div className="bg-gradient-to-br from-stone-50 to-white dark:from-tis-dark-card dark:to-stone-900 border border-stone-200/90 dark:border-tis-dark-border rounded-3xl p-6 sm:p-10 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-tis-gold/15 text-tis-gold-dark dark:text-tis-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      <Layers className="w-3.5 h-3.5" />
                      {CURRICULA[activeTab].board}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-stone-900 dark:text-white">
                      {CURRICULA[activeTab].title}
                    </h3>
                    <p className="text-sm font-semibold text-tis-crimson dark:text-tis-gold">
                      {CURRICULA[activeTab].subtitle}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {CURRICULA[activeTab].features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-stone-900/80 border border-stone-200/70 dark:border-stone-800 shadow-2xs"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <Button variant="primary" size="md" onClick={onOpenEnquiry}>
                      Apply for {CURRICULA[activeTab].grades}
                    </Button>
                    <Button variant="outline" size="md" onClick={onOpenProspectus}>
                      Curriculum Syllabus (PDF)
                    </Button>
                  </div>
                </div>

                {/* Right Visual / Lab Focus */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-stone-200 dark:border-stone-800">
                    <img
                      src={
                        activeTab === 0
                          ? 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop'
                          : activeTab === 1
                          ? 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop'
                          : activeTab === 2
                          ? 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop'
                          : 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop'
                      }
                      alt={CURRICULA[activeTab].title}
                      className="w-full h-[320px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase font-bold text-tis-gold">Integrated Labs & Faculty</p>
                      <p className="text-sm font-bold mt-0.5">Hands-on Experiential Education</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
