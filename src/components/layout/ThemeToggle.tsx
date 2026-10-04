import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2 rounded-full border border-stone-300/80 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-200 shadow-sm backdrop-blur-md hover:border-tis-crimson dark:hover:border-tis-gold transition-colors cursor-pointer flex items-center justify-center ${className}`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Sun className="w-4 h-4 text-amber-500" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : -180,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Moon className="w-4 h-4 text-tis-gold" />
      </motion.div>

      <span className="w-4 h-4 opacity-0 pointer-events-none" />
    </motion.button>
  );
};
