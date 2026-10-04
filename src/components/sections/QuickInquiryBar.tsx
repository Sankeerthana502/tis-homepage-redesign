import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../ui/Button';

export const QuickInquiryBar: React.FC<{ onOpenEnquiry?: () => void }> = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [grade, setGrade] = useState('Class IX');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) return;
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#B90124', '#C09D59', '#60BAB1']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div id="inquire" className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 mb-16">
      <div className="bg-gradient-to-r from-tis-crimson via-tis-crimson-dark to-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 text-white relative overflow-hidden">
        
        {/* Ambient Gold Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-tis-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          
          {/* Left Title & Value Prop */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-tis-gold/20 text-tis-gold-light border border-tis-gold/30 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> 2025-26 Session
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Instant Admission Inquiry
            </h3>
            <p className="text-xs text-white/80 mt-1">
              Connect directly with our Dehradun campus admission officers in 2 minutes.
            </p>
          </div>

          {/* Right Fast Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 text-stone-950 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base font-display">Inquiry Received!</h4>
                    <p className="text-xs text-white/85">Our admissions counsellor will call <strong>+91 {mobile}</strong> shortly.</p>
                  </div>
                </div>

                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-4">
                  <input
                    type="text"
                    required
                    placeholder="Parent's Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/25 text-white placeholder-white/65 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-tis-gold focus:bg-white/20 transition-all"
                  />
                </div>

                <div className="sm:col-span-4">
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="Mobile No. (WhatsApp)"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/25 text-white placeholder-white/65 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-tis-gold focus:bg-white/20 transition-all"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4 flex gap-2">
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-1/2 sm:w-full px-3 py-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm outline-none focus:ring-2 focus:ring-tis-gold cursor-pointer"
                  >
                    <option value="Class IV" className="text-stone-900">Class IV</option>
                    <option value="Class V" className="text-stone-900">Class V</option>
                    <option value="Class VI" className="text-stone-900">Class VI</option>
                    <option value="Class VII" className="text-stone-900">Class VII</option>
                    <option value="Class VIII" className="text-stone-900">Class VIII</option>
                    <option value="Class IX" className="text-stone-900">Class IX</option>
                    <option value="Class X" className="text-stone-900">Class X</option>
                    <option value="Class XI" className="text-stone-900">Class XI</option>
                    <option value="Class XII" className="text-stone-900">Class XII</option>
                  </select>

                  <Button
                    type="submit"
                    variant="gold"
                    size="md"
                    className="w-1/2 sm:w-auto shrink-0 rounded-2xl font-extrabold text-xs sm:text-sm px-4 shadow-lg shadow-black/30"
                  >
                    Get Info
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
