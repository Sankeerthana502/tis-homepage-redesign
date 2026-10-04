import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../../types';

interface AccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev => (prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]));
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id || idx}
            className="rounded-2xl border border-stone-200/90 dark:border-tis-dark-border bg-white dark:bg-tis-dark-card overflow-hidden transition-all duration-300 hover:border-tis-crimson/40 dark:hover:border-tis-gold/40 shadow-sm"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left font-semibold text-base sm:text-lg text-stone-900 dark:text-stone-100 gap-4 group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-tis-crimson dark:bg-tis-gold shrink-0 transition-transform group-hover:scale-125" />
                <span className="group-hover:text-tis-crimson dark:group-hover:text-tis-gold transition-colors">
                  {item.question}
                </span>
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0 text-stone-600 dark:text-stone-300 group-hover:bg-tis-crimson group-hover:text-white dark:group-hover:bg-tis-gold dark:group-hover:text-stone-950 transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800/80">
                    <p className="mt-2">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
