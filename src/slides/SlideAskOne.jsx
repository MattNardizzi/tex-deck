import { useEffect, useState } from 'react';
import './SlideAsk.css';

/* Slide 7 — exactly the PDF.
   "My first seed round / to make Tex unavoidable."
*/
export default function SlideAskOne({ active }) {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (!active) { setArmed(false); return; }
    const t = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className={`tex-ask${armed ? ' tex-ask--armed' : ''}`}>
      <div className="tex-ask-stage">
        <p className="tex-ask-line">
          <span className="tex-ask-beat tex-ask-beat--1">My first seed round</span>
          <br />
          <span className="tex-ask-beat tex-ask-beat--2">
            <em>to make Tex unavoidable.</em>
          </span>
        </p>
      </div>
    </div>
  );
}
