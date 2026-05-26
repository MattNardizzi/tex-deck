import { useEffect, useState } from 'react';
import './SlideClose.css';

/* Slide 9 — Close.
   The Steve Jobs quote, then the signature.
*/
export default function SlideClose({ active }) {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!active) { setArmed(false); return; }
    const t = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className={`tex-close${armed ? ' tex-close--armed' : ''}`}>
      <div className="tex-close-stage">
        <blockquote className="tex-close-quote">
          <p className="tex-close-quote-body">
            <span className="tex-close-mark">“</span>
            Design is not just what it looks like and feels like.
            <br />
            Design is how it works.
            <span className="tex-close-mark">”</span>
          </p>
          <footer className="tex-close-cite">— Steve Jobs</footer>
        </blockquote>

        <div className="tex-close-sig">
          <p className="tex-close-name">Matthew Nardizzi · VortexBlack</p>
          <p className="tex-close-contact">
            <a href="mailto:matt@vortexblack.ai">matt@vortexblack.ai</a>
            <span className="tex-close-dot"> · </span>
            <a href="https://vortexblack.ai" target="_blank" rel="noreferrer">vortexblack.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
}
