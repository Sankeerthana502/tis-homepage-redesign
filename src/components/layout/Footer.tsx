import React, { useState } from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';
import { Button } from '../ui/Button';

interface FooterProps {
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onOpenProspectus }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#090d12] text-stone-300 pt-16 pb-24 md:pb-12 border-t border-stone-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tis-crimson/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-tis-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Row */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-stone-900 via-tis-dark-card to-stone-900 border border-stone-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-tis-gold text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Admissions Open 2025-26
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Ready to Give Your Child the Gurukul Advantage?
            </h3>
            <p className="text-stone-400 text-sm mt-1 max-w-xl">
              Seats are limited across Class IV to Class XII. Schedule a campus tour or begin your online application today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenEnquiry}
              className="shadow-lg shadow-tis-crimson/30"
            >
              Apply for Admission
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={onOpenProspectus}
            >
              Download Brochure
            </Button>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          {/* Col 1: Brand & Ethos (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-tis-crimson to-tis-crimson-dark flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-7 h-7 text-tis-gold-light" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-xl text-white tracking-tight leading-none">
                  TULAS INTERNATIONAL SCHOOL
                </h4>
                <p className="text-xs text-tis-gold font-semibold uppercase tracking-wider mt-1">
                  The Modern Gurukul • Dehradun
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed pr-4">
              Established in 2012 under the aegis of <strong>Rishabh Educational Trust</strong>, TIS seamlessly integrates timeless Gurukul values of discipline, mindfulness, and character with world-class international STEM academics and Olympic-level sports.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/tulasinternationalschool/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800/90 hover:bg-tis-crimson text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/tulasinternationalschool/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800/90 hover:bg-tis-crimson text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/school/tulas-international-school/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800/90 hover:bg-tis-crimson text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800/90 hover:bg-tis-crimson text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              School Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-tis-gold transition-colors">About Gurukul Ethos</a></li>
              <li><a href="#academics" className="hover:text-tis-gold transition-colors">Academic Curricula</a></li>
              <li><a href="#boarding" className="hover:text-tis-gold transition-colors">Residential Life & Dining</a></li>
              <li><a href="#sports" className="hover:text-tis-gold transition-colors">16+ Sports Academies</a></li>
              <li><a href="#campus" className="hover:text-tis-gold transition-colors">Campus Virtual Tour</a></li>
              <li><a href="#admissions" className="hover:text-tis-gold transition-colors">Admissions Roadmap</a></li>
              <li><a href="#fee-estimator" className="hover:text-tis-gold transition-colors">Fee Estimator</a></li>
            </ul>
          </div>

          {/* Col 3: Academics & Accreditations */}
          <div className="space-y-3">
            <h5 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Programs & Streams
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#academics" className="hover:text-tis-gold transition-colors">Middle School (IV - VIII)</a></li>
              <li><a href="#academics" className="hover:text-tis-gold transition-colors">Secondary CBSE (IX - X)</a></li>
              <li><a href="#academics" className="hover:text-tis-gold transition-colors">Senior Science (PCM / PCB)</a></li>
              <li><a href="#academics" className="hover:text-tis-gold transition-colors">Commerce & Entrepreneurship</a></li>
              <li><a href="#academics" className="hover:text-tis-gold transition-colors">Humanities & Liberal Arts</a></li>
              <li><a href="#academics" className="hover:text-tis-gold transition-colors">AI & Robotics Lab</a></li>
              <li><a href="#academics" className="hover:text-tis-gold transition-colors">IIT-JEE & NEET Wing</a></li>
            </ul>
          </div>

          {/* Col 4: Campus Contact & Newsletter */}
          <div className="space-y-4">
            <h5 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Campus Contact
            </h5>
            <div className="space-y-2.5 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-tis-crimson shrink-0 mt-0.5" />
                <span>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011, Uttarakhand</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-tis-gold shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors">{SCHOOL_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-tis-teal shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors">{SCHOOL_INFO.email}</a>
              </p>
            </div>

            {/* Newsletter input */}
            <form onSubmit={handleNewsletter} className="pt-2">
              <p className="text-[11px] font-semibold text-stone-300 mb-1.5">
                Subscribe to School Newsletter
              </p>
              {subscribed ? (
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Thank you for subscribing!
                </p>
              ) : (
                <div className="flex gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-white text-xs outline-none focus:border-tis-crimson"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-tis-crimson hover:bg-tis-crimson-dark text-white rounded-lg text-xs font-semibold shrink-0 cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2 flex-wrap text-center md:text-left">
            <span>© {new Date().getFullYear()} Tulas International School. All Rights Reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> CBSE Affiliated & Cambridge Benchmark
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Mandatory CBSE Disclosure</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Admission</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
