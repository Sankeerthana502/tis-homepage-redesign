import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if target or parent has interactive roles or data attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea, .interactive-hover');
      const customHoverText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (interactive) {
        setIsHovered(true);
        setHoverText(customHoverText || null);
      } else {
        setIsHovered(false);
        setHoverText(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkTouch);
    };
  }, [isTouchDevice]);

  return { mousePosition, isHovered, isTouchDevice, hoverText };
}
