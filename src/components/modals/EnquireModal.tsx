import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, Mail, User, BookOpen, MapPin, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../ui/Button';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGrade?: string;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose, defaultGrade = '' }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [grade, setGrade] = useState(defaultGrade || 'Class IX');
  const [state, setState] = useState('Uttarakhand');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendOtp = () => {
    if (!mobile || mobile.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setOtpSent(true);
    setOtp('5824'); // Mock auto-fill for frictionless UX
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Fire celebration confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B90124', '#C09D59', '#60BAB1', '#DFBE7C']
        });
      } catch {
        // ignore if fails
      }
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setOtpSent(false);
    setFullName('');
    setEmail('');
    setMobile('');
    setOtp('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/75 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white dark:bg-tis-dark-card rounded-3xl shadow-2xl border border-stone-200 dark:border-tis-dark-border overflow-hidden z-10"
          >
            {/* Header pattern */}
            <div className="bg-gradient-to-r from-tis-crimson via-tis-crimson-dark to-stone-950 p-6 sm:p-8 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 bg-tis-gold/20 text-tis-gold-light border border-tis-gold/40 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Admissions Open 2025-26
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                Apply & Enquire Now
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Tulas International School, Dehradun • Co-Ed Residential & Day Boarding
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900 dark:text-white font-display">
                    Application Received!
                  </h4>
                  <p className="text-stone-600 dark:text-stone-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-stone-900 dark:text-white">{fullName}</strong>! Our Senior Admissions Dean will connect with you at <span className="font-semibold text-tis-crimson dark:text-tis-gold">{mobile}</span> within 2 hours with the fee prospectus and campus visit schedule.
                  </p>
                  <div className="pt-4">
                    <Button variant="primary" onClick={handleReset} className="mx-auto">
                      Done & Return to Homepage
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                      Parent / Guardian's Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/60 text-stone-900 dark:text-white focus:ring-2 focus:ring-tis-crimson focus:border-transparent outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone + OTP Button */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                      Mobile Number (WhatsApp Enabled) *
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="9876543210"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/60 text-stone-900 dark:text-white focus:ring-2 focus:ring-tis-crimson focus:border-transparent outline-none text-sm transition-all"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="px-4 py-2 bg-stone-900 dark:bg-stone-800 hover:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer"
                      >
                        {otpSent ? 'Resend OTP' : 'Send OTP'}
                      </button>
                    </div>
                  </div>

                  {/* OTP verify row */}
                  {otpSent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl"
                    >
                      <p className="text-xs text-emerald-800 dark:text-emerald-300 mb-2">
                        Verification code sent to <strong>+91 {mobile}</strong>. (Auto-filled mock OTP)
                      </p>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 4-digit OTP"
                        className="w-full px-3 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white text-sm"
                      />
                    </motion.div>
                  )}

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rajesh.sharma@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/60 text-stone-900 dark:text-white focus:ring-2 focus:ring-tis-crimson focus:border-transparent outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Grade + State grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                        Seeking Admission In *
                      </label>
                      <div className="relative">
                        <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                        <select
                          value={grade}
                          onChange={(e) => setGrade(e.target.value)}
                          className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/60 text-stone-900 dark:text-white focus:ring-2 focus:ring-tis-crimson focus:border-transparent outline-none text-sm appearance-none cursor-pointer"
                        >
                          <option value="Class IV">Class IV (Grade 4)</option>
                          <option value="Class V">Class V (Grade 5)</option>
                          <option value="Class VI">Class VI (Grade 6)</option>
                          <option value="Class VII">Class VII (Grade 7)</option>
                          <option value="Class VIII">Class VIII (Grade 8)</option>
                          <option value="Class IX">Class IX (Grade 9)</option>
                          <option value="Class X">Class X (Grade 10)</option>
                          <option value="Class XI (Science)">Class XI (Science)</option>
                          <option value="Class XI (Commerce/Arts)">Class XI (Commerce/Arts)</option>
                          <option value="Class XII (Senior)">Class XII (Senior)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                        State / Country *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                        <select
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/60 text-stone-900 dark:text-white focus:ring-2 focus:ring-tis-crimson focus:border-transparent outline-none text-sm appearance-none cursor-pointer"
                        >
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="Delhi NCR">Delhi NCR</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Punjab & Haryana">Punjab & Haryana</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="West Bengal & North East">West Bengal & North East</option>
                          <option value="Karnataka & South India">Karnataka & South India</option>
                          <option value="International / NRI">International / NRI</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent-check"
                      required
                      defaultChecked
                      className="mt-1 rounded text-tis-crimson focus:ring-tis-crimson"
                    />
                    <label htmlFor="consent-check" className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed cursor-pointer">
                      I agree to receive the official prospectus, fee details, and campus visit appointment from TIS Dehradun.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                      className="w-full rounded-xl py-3.5 shadow-lg shadow-tis-crimson/25"
                    >
                      Submit Application Now
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
