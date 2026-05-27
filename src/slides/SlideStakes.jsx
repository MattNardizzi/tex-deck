import { useEffect, useState } from 'react';
import './SlideStakes.css';

/* Slide 2 — exactly the PDF.
   One line of three verbs. A second line of consequence.
   A third line that names the deadline. A receipt at the bottom.
*/
export default function SlideStakes({ active }) {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (!active) { setArmed(false); return; }
    const t = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className={`tex-stakes${armed ? ' tex-stakes--armed' : ''}`}>
      <div className="tex-stakes-stage">
        <p className="tex-stakes-line tex-stakes-line--1">
          Agents send emails. Sign contracts. Move money.
        </p>
        <p className="tex-stakes-line tex-stakes-line--2">
          <em>No one can prove what they did.</em>
        </p>
        <p className="tex-stakes-line tex-stakes-line--3">
          In 70 days, that becomes a 7%-of-turnover problem.
        </p>
        <p className="tex-stakes-proof">
          August 2, 2026 · 7% of global turnover
        </p>
      </div>
    </div>
  );
}
