import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    // Simulate instantaneous download trigger
    setTimeout(() => {
      // Mock download action
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/75 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg bg-white dark:bg-tis-dark-card rounded-3xl shadow-2xl border border-stone-200 dark:border-tis-dark-border overflow-hidden z-10 p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {downloaded ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-display text-stone-900 dark:text-white">
                  Prospectus Ready!
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300">
                  We have sent the high-resolution TIS 2025-26 Information Dossier and Fee Schedule to <strong>{email || phone}</strong>.
                </p>
                <div className="pt-3">
                  <Button variant="primary" onClick={onClose} className="mx-auto">
                    Close Window
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="w-12 h-12 rounded-2xl bg-tis-crimson/10 text-tis-crimson dark:bg-tis-crimson/20 dark:text-red-400 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>

                <div className="inline-flex items-center gap-1.5 text-tis-gold-dark dark:text-tis-gold text-xs font-semibold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Official Brochure 2025-26
                </div>
                <h3 className="text-2xl font-extrabold font-display text-stone-900 dark:text-white">
                  Download TIS Prospectus
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                  Get full insights into curriculum, boarding life, residential fee structures, sports academies, and academic results.
                </p>

                <form onSubmit={handleDownload} className="mt-6 space-y-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Parent's Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-tis-crimson"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Number (for instant PDF)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-tis-crimson"
                  />
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-tis-crimson"
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Download className="w-4 h-4" />}
                    className="w-full mt-2 rounded-xl"
                  >
                    Download PDF Dossier Now
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
