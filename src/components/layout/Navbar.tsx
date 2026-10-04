import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, GraduationCap, PhoneCall, Download } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigationData';
import { SCHOOL_INFO } from '../../data/schoolData';
import { Button } from '../ui/Button';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenVirtualTour: () => void;
  onOpenProspectus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  onOpenVirtualTour,
  onOpenProspectus,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0c1015]/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200/80 dark:border-stone-800'
          : 'bg-white/80 dark:bg-[#0c1015]/80 backdrop-blur-sm py-4 border-b border-stone-200/40 dark:border-stone-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-tis-crimson to-tis-crimson-dark flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-tis-gold-light" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-stone-900 dark:text-white leading-none">
                  TULAS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-tis-crimson px-1.5 py-0.5 rounded leading-none">
                  TIS
                </span>
              </div>
              <span className="text-[11px] font-semibold text-tis-crimson dark:text-tis-gold tracking-wider uppercase leading-tight mt-0.5">
                International School
              </span>
              <span className="text-[9px] text-stone-500 dark:text-stone-400 font-medium leading-none">
                Dehradun • The Modern Gurukul
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isVirtualTour = item.label === 'Virtual Tour';

              if (isVirtualTour) {
                return (
                  <button
                    key={item.label}
                    onClick={onOpenVirtualTour}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-stone-700 dark:text-stone-200 hover:text-tis-crimson dark:hover:text-tis-gold rounded-xl hover:bg-stone-100/80 dark:hover:bg-stone-800/80 transition-all cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <span className="bg-tis-gold/20 text-tis-gold-dark dark:text-tis-gold text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                      360°
                    </span>
                  </button>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-stone-700 dark:text-stone-200 hover:text-tis-crimson dark:hover:text-tis-gold rounded-xl hover:bg-stone-100/80 dark:hover:bg-stone-800/80 transition-all"
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180 text-tis-crimson' : 'text-stone-400'
                        }`}
                      />
                    )}
                  </a>

                  {/* Mega Dropdown Menu */}
                  {hasChildren && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-1 w-72 bg-white dark:bg-tis-dark-card border border-stone-200 dark:border-tis-dark-border rounded-2xl shadow-xl p-2 z-50"
                        >
                          {item.children?.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800/90 transition-colors group"
                            >
                              <p className="text-xs font-bold text-stone-800 dark:text-stone-100 group-hover:text-tis-crimson dark:group-hover:text-tis-gold transition-colors">
                                {sub.label}
                              </p>
                              {sub.description && (
                                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                                  {sub.description}
                                </p>
                              )}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action CTAs & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenProspectus}
              title="Download Prospectus"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-tis-crimson dark:hover:text-tis-gold border border-stone-300 dark:border-stone-700 rounded-full hover:border-tis-crimson transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Prospectus</span>
            </button>

            <ThemeToggle className="hidden sm:flex" />

            <Button
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5" />}
              onClick={onOpenEnquiry}
              className="font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5"
            >
              Apply Now
            </Button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-tis-dark-card/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex items-center justify-between py-2 border-b border-stone-100 dark:border-stone-800">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Appearance Theme</span>
              <ThemeToggle />
            </div>

            <div className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-stone-100 dark:border-stone-800/60 pb-1">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold text-stone-800 dark:text-stone-100"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] bg-tis-gold/20 text-tis-gold-dark dark:text-tis-gold px-2 py-0.5 rounded-full font-bold">
                        {item.badge}
                      </span>
                    )}
                  </a>

                  {item.children && (
                    <div className="pl-3 py-1 space-y-1 bg-stone-50/60 dark:bg-stone-900/40 rounded-xl mb-2">
                      {item.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-xs text-stone-600 dark:text-stone-300 hover:text-tis-crimson"
                        >
                          • {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full justify-center"
              >
                Apply for Admission 2025-26
              </Button>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVirtualTour();
                  }}
                  className="w-full justify-center text-xs"
                >
                  360° Virtual Tour
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProspectus();
                  }}
                  className="w-full justify-center text-xs border border-stone-300 dark:border-stone-700"
                >
                  Download Prospectus
                </Button>
              </div>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-tis-crimson dark:text-tis-gold"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Call Admissions: {SCHOOL_INFO.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
