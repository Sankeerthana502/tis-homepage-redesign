import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, FileText, Phone } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';

interface FloatingQuickActionsProps {
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
}

export const FloatingQuickActions: React.FC<FloatingQuickActionsProps> = ({
  onOpenEnquiry,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Sticky Floating Right Badges */}
      <div className="fixed right-5 bottom-8 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-auto">
        <motion.a
          href="https://wa.me/919837983791?text=Hello%20TIS%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%20school%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-full shadow-xl shadow-emerald-500/25 font-semibold text-xs transition-all cursor-pointer"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat on WhatsApp</span>
        </motion.a>

        <motion.button
          onClick={onOpenEnquiry}
          whileHover={{ scale: 1.08, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 bg-tis-crimson hover:bg-tis-crimson-dark text-white px-4 py-2.5 rounded-full shadow-xl shadow-tis-crimson/35 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Quick Enquire</span>
        </motion.button>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-stone-900/80 dark:bg-stone-800/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg border border-white/10 hover:bg-tis-gold hover:text-stone-950 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-[#0c1015]/95 backdrop-blur-lg border-t border-stone-200 dark:border-stone-800 py-2.5 px-3 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${SCHOOL_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white rounded-xl text-xs font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-tis-crimson" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/919837983791?text=Hello%20TIS%2C%20I%20am%20interested%20in%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-500 text-white rounded-xl text-xs font-bold active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenEnquiry}
          className="flex-[1.4] flex items-center justify-center gap-1 py-2.5 px-3 bg-tis-crimson text-white rounded-xl text-xs font-extrabold active:scale-95 transition-transform shadow-md shadow-tis-crimson/30"
        >
          <span>Apply Online</span>
        </button>
      </div>
    </>
  );
};
