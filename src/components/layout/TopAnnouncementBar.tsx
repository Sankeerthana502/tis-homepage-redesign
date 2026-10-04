import React from 'react';
import { Phone, Mail, Award, Compass, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';
import { ThemeToggle } from './ThemeToggle';

interface TopAnnouncementBarProps {
  onOpenVirtualTour: () => void;
  onOpenEnquiry: () => void;
}

export const TopAnnouncementBar: React.FC<TopAnnouncementBarProps> = ({
  onOpenVirtualTour,
  onOpenEnquiry,
}) => {
  return (
    <header className="bg-tis-crimson text-white text-xs font-medium border-b border-tis-crimson-dark/40 relative z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Accreditations & Tag */}
        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1 bg-white/15 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-white/95">
            <Sparkles className="w-3 h-3 text-tis-gold-light" /> Admissions Open 2025-26 (Class IV - XII)
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-white/85 text-[11px]">
            <Award className="w-3.5 h-3.5 text-tis-gold-light" /> Top Ranked Co-Ed Boarding School in Dehradun
          </span>
        </div>

        {/* Right: Helpline & Actions */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end text-[11px]">
          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-tis-gold-light transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-tis-gold-light" />
            <span>Helpline: {SCHOOL_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${SCHOOL_INFO.email}`}
            className="hidden lg:flex items-center gap-1 hover:text-tis-gold-light transition-colors text-white/80"
          >
            <Mail className="w-3 h-3 text-tis-gold-light" />
            <span>{SCHOOL_INFO.email}</span>
          </a>

          <button
            onClick={onOpenVirtualTour}
            className="flex items-center gap-1 bg-tis-gold/25 hover:bg-tis-gold/40 text-white px-2.5 py-0.5 rounded-full font-semibold transition-colors cursor-pointer"
          >
            <Compass className="w-3 h-3 text-tis-gold-light" />
            <span>Virtual Tour 360°</span>
          </button>

          <button
            onClick={onOpenEnquiry}
            className="hidden sm:inline-flex bg-white text-tis-crimson font-bold px-2.5 py-0.5 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Quick Enquire
          </button>

          <div className="sm:hidden">
            <ThemeToggle className="p-1 scale-75" />
          </div>
        </div>
      </div>
    </header>
  );
};
