import { useEffect, useState } from 'react';
import Orb from '../Orb.jsx';
import './SlideTex.css';

/* Slide 4 — Tex is here.
   "I let 4,827 through today. None needed you."
   This is the moment. Orb at the top, line below it, proof receipt
   underneath. Counter ticks for a half-second so the number arrives.
*/
export default function SlideTex({ active }) {
  const [armed, setArmed] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) { setArmed(false); setCount(0); return; }
    const armTimer = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(armTimer);
  }, [active]);

  // Ticker — 4,827 over ~700ms once the orb has settled
  useEffect(() => {
    if (!armed) return;
    const target = 4827;
    const start = Date.now();
    const duration = 700;
    const startDelay = 1400; // wait for the orb to bloom

    const delay = setTimeout(() => {
      const id = setInterval(() => {
        const elapsed = Date.now() - start - startDelay;
        const t = Math.min(1, elapsed / duration);
        // ease-out
        const eased = 1 - Math.pow(1 - t, 3);
        setCount(Math.floor(target * eased));
        if (t >= 1) clearInterval(id);
      }, 16);
    }, startDelay);

    return () => clearTimeout(delay);
  }, [armed]);

  return (
    <div className={`tex-tex${armed ? ' tex-tex--armed' : ''}`}>
      <div className="tex-tex-stage">
        <div className="tex-tex-orb">
          <Orb state="quiet" size="lg" />
        </div>

        <p className="tex-tex-line">
          <span className="tex-tex-quote">“</span>
          I let <span className="tex-tex-number">{count.toLocaleString()}</span> through today.
          <br />
          None needed you.
          <span className="tex-tex-quote">”</span>
        </p>

        <p className="tex-tex-proof">
          Last decision · 21s ago · evidence on file
        </p>

        <p className="tex-tex-aside">
          No dashboards. No alert queues. Tex tells you what happened.
        </p>
      </div>
    </div>
  );
}
