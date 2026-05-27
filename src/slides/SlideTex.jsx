import { useEffect, useState } from 'react';
import './SlideTex.css';

/* Slide 4 — exactly the PDF.
   Tex speaks. The quote is the whole slide. Receipt and aside follow.
   The number ticks up so the volume registers, then settles.
*/
export default function SlideTex({ active }) {
  const [armed, setArmed] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) { setArmed(false); setCount(0); return; }
    const t = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    if (!armed) return;
    const target = 4827;
    const startDelay = 900;
    const duration = 800;

    const delay = setTimeout(() => {
      const start = Date.now();
      const id = setInterval(() => {
        const t = Math.min(1, (Date.now() - start) / duration);
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
        <p className="tex-tex-line">
          <span className="tex-tex-quote">“</span>
          I let <span className="tex-tex-number">{count.toLocaleString()}</span> through today.
          {' '}None needed you.
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
