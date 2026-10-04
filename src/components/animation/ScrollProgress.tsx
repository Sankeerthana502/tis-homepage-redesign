import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3.5px] z-[99999] bg-black/5 dark:bg-white/5 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-tis-crimson via-tis-gold to-tis-teal origin-left shadow-[0_0_12px_rgba(185,1,36,0.6)]"
        style={{ scaleX }}
      />
    </div>
  );
};
