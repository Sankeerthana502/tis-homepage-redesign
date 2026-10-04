import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { mousePosition, isHovered, isTouchDevice, hoverText } = useMousePosition();

  // Smooth springs for smooth 60 FPS cursor tracking without layout thrashing
  const springX = useSpring(mousePosition.x, { damping: 28, stiffness: 350, mass: 0.5 });
  const springY = useSpring(mousePosition.y, { damping: 28, stiffness: 350, mass: 0.5 });

  const dotSpringX = useSpring(mousePosition.x, { damping: 40, stiffness: 800, mass: 0.1 });
  const dotSpringY = useSpring(mousePosition.y, { damping: 40, stiffness: 800, mass: 0.1 });

  useEffect(() => {
    springX.set(mousePosition.x);
    springY.set(mousePosition.y);
    dotSpringX.set(mousePosition.x);
    dotSpringY.set(mousePosition.y);
  }, [mousePosition, springX, springY, dotSpringX, dotSpringY]);

  useEffect(() => {
    if (!isTouchDevice) {
      document.body.classList.add('has-custom-cursor');
    } else {
      document.body.classList.remove('has-custom-cursor');
    }
    return () => {
      document.body.classList.remove('has-custom-cursor');
    };
  }, [isTouchDevice]);

  // Hide on touch devices
  if (isTouchDevice || (mousePosition.x === -100 && mousePosition.y === -100)) {
    return null;
  }

  return (
    <>
      {/* Outer reactive follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999] rounded-full flex items-center justify-center font-medium text-[10px] text-white backdrop-blur-[1px]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hoverText ? 72 : isHovered ? 48 : 28,
          height: hoverText ? 72 : isHovered ? 48 : 28,
          backgroundColor: hoverText
            ? 'rgba(185, 1, 36, 0.85)'
            : isHovered
            ? 'rgba(192, 157, 89, 0.25)'
            : 'rgba(185, 1, 36, 0.15)',
          borderColor: isHovered ? 'rgba(192, 157, 89, 0.9)' : 'rgba(185, 1, 36, 0.6)',
          borderWidth: isHovered ? '2px' : '1.5px',
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {hoverText && (
          <span className="uppercase tracking-wider font-semibold text-center leading-none px-1">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999] rounded-full bg-tis-crimson dark:bg-tis-gold"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 0 : 5,
          height: isHovered ? 0 : 5,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};
