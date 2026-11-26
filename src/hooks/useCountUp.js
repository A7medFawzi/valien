import { useEffect, useState } from 'react';

/** Animates a number from 0 to `target` once `start` becomes true. */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useCountUp(target, { start = true, duration = 1600, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const skipAnimation = prefersReducedMotion();

  useEffect(() => {
    if (!start || skipAnimation) return undefined;
    let frame;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration, skipAnimation]);

  return (skipAnimation ? target : value).toFixed(decimals);
}
