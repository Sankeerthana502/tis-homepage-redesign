import React, { useState } from 'react';
import { Calculator, CheckCircle, ShieldCheck, Download } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface FeeStructureTier {
  gradeRange: string;
  name: string;
  tuitionFee: string;
  boardingFee: string;
  sportsIncluded: string;
  features: string[];
}

const TIERS: FeeStructureTier[] = [
  {
    gradeRange: 'Class IV - V',
    name: 'Primary Boarding Program',
    tuitionFee: '₹1,95,000 / yr',
    boardingFee: '₹2,65,000 / yr',
    sportsIncluded: '12+ Basic Sports & Arts',
    features: [
      'Comprehensive Academic Tuition & NCERT Syllabus',
      'All-inclusive 4-Meal Organic Dining & Snacks',
      'Air-conditioned Residential Dorms & House Parent Care',
      'Full Medical & 24/7 Infirmary Coverage'
    ]
  },
  {
    gradeRange: 'Class VI - VIII',
    name: 'Middle School Residential',
    tuitionFee: '₹2,25,000 / yr',
    boardingFee: '₹2,85,000 / yr',
    sportsIncluded: '16+ Olympic Sports & Horse Riding',
    features: [
      'STEAM, Robotics & AI Lab Workstations',
      'Horse Riding, Shooting, Swimming & Squash Included',
      'Foreign Language Electives (French/German)',
      'Inter-school Competitions & Study Expeditions'
    ]
  },
  {
    gradeRange: 'Class IX - X',
    name: 'Secondary CBSE Excellence',
    tuitionFee: '₹2,65,000 / yr',
    boardingFee: '₹3,05,000 / yr',
    sportsIncluded: 'Full Olympic Access & Tournaments',
    features: [
      'CBSE Board Exam Intensive Coaching',
      'National Olympiad, NTSE & Quiz Prep',
      'Career Profiling & Personality Conclaves',
      'Leadership Camps & Model United Nations (MUN)'
    ]
  },
  {
    gradeRange: 'Class XI - XII',
    name: 'Senior Secondary Career Launchpad',
    tuitionFee: '₹2,95,000 / yr',
    boardingFee: '₹3,35,000 / yr',
    sportsIncluded: 'Elite Sports & Gym Facilities',
    features: [
      'Specialized Streams: Science (PCM/PCB), Commerce, Arts',
      'Integrated In-House JEE, NEET, SAT & CUET Mentoring',
      'Global Ivy League / UK / US University Counseling',
      'Alumni Mentorship & Internship Exposure'
    ]
  }
];

export const FeeCalculatorSection: React.FC<{
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
}> = ({ onOpenEnquiry, onOpenProspectus }) => {
  const [selectedTierIndex, setSelectedTierIndex] = useState(2);
  const tier = TIERS[selectedTierIndex];

  return (
    <section id="fee-estimator" className="py-20 md:py-28 bg-stone-50 dark:bg-[#0e1319] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="Fee Structure & Calculator"
          badgeIcon={<Calculator className="w-3.5 h-3.5" />}
          badgeVariant="gold"
          title="Transparent Value &"
          highlight="Investment"
          description="Everything your child needs to flourish — academic rigor, Olympic sports coaching, nutritious gourmet dining, and residential care — in one transparent schedule."
          align="center"
        />

        {/* Grade Selector Strip */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {TIERS.map((t, idx) => (
            <button
              key={t.gradeRange}
              onClick={() => setSelectedTierIndex(idx)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedTierIndex === idx
                  ? 'bg-tis-crimson text-white shadow-lg shadow-tis-crimson/25 scale-105'
                  : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {t.gradeRange}
            </button>
          ))}
        </div>

        {/* Selected Tier Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-tis-dark-card border border-stone-200 dark:border-tis-dark-border rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Fee Breakdown */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-tis-gold-dark dark:text-tis-gold">
                  Selected Grade Tier
                </span>
                <h3 className="text-2xl font-extrabold font-display text-stone-900 dark:text-white mt-1">
                  {tier.name}
                </h3>
              </div>

              <div className="space-y-3 p-4 bg-stone-50 dark:bg-stone-900/60 rounded-2xl border border-stone-200 dark:border-stone-800">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-600 dark:text-stone-400">Academic Tuition Fee:</span>
                  <span className="font-bold text-stone-900 dark:text-white">{tier.tuitionFee}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-600 dark:text-stone-400">Boarding & Dining (All-Inclusive):</span>
                  <span className="font-bold text-stone-900 dark:text-white">{tier.boardingFee}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-600 dark:text-stone-400">Sports & Lab Facilities:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">Included (100%)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                <ShieldCheck className="w-4 h-4 text-tis-crimson shrink-0" />
                <span>Scholarships available for academic toppers & state/national sports medalists.</span>
              </div>
            </div>

            {/* Right Inclusions & CTA */}
            <div className="md:col-span-6 space-y-5 md:border-l md:border-stone-200 dark:md:border-stone-800 md:pl-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white">
                Everything Included In Fee:
              </h4>

              <div className="space-y-2.5">
                {tier.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <Button variant="primary" size="md" onClick={onOpenEnquiry} className="w-full">
                  Apply for {tier.gradeRange}
                </Button>
                <Button variant="outline" size="md" onClick={onOpenProspectus} icon={<Download className="w-4 h-4" />} className="w-full">
                  Detailed Fee PDF
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
