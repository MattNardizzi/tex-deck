import { useEffect, useState } from 'react';
import Orb from '../Orb.jsx';
import './SlideStakes.css';

/* Slide 2 — The stakes.
   Three short verbs, three lines, falling like dominoes.
   Italic gut-punch underneath. Small orb as a witness, not a headline.
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

        <div className="tex-stakes-beats">
          <p className="tex-stakes-beat tex-stakes-beat--1">Agents send emails.</p>
          <p className="tex-stakes-beat tex-stakes-beat--2">They sign contracts.</p>
          <p className="tex-stakes-beat tex-stakes-beat--3">They move money.</p>
        </div>

        <div className="tex-stakes-divider" aria-hidden="true">
          <Orb state="asking" size="xs" />
        </div>

        <p className="tex-stakes-cut">
          No one can prove what they did.
        </p>

        <p className="tex-stakes-clock">
          In 70 days, that becomes a 7%-of-turnover problem.
        </p>

        <p className="tex-stakes-proof">
          August 2, 2026 · EU AI Act enforcement
        </p>
      </div>
    </div>
  );
}
