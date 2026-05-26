import { useEffect, useRef } from 'react';

/* useSwipe — detect horizontal swipes for slide navigation.
   Threshold is 50px so a stray vertical scroll doesn't fire. */
export function useSwipe(onLeft, onRight) {
  const start = useRef(null);

  useEffect(() => {
    const onTouchStart = (e) => {
      start.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        t: Date.now(),
      };
    };

    const onTouchEnd = (e) => {
      if (!start.current) return;
      const dx = e.changedTouches[0].clientX - start.current.x;
      const dy = e.changedTouches[0].clientY - start.current.y;
      const dt = Date.now() - start.current.t;
      start.current = null;

      // Reject if too slow, too vertical, or too short
      if (dt > 800) return;
      if (Math.abs(dy) > Math.abs(dx)) return;
      if (Math.abs(dx) < 50) return;

      if (dx < 0) onLeft();
      else onRight();
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [onLeft, onRight]);
}
