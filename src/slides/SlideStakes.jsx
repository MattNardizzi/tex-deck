import { useEffect, useState } from 'react';
import Orb from '../Orb.jsx';
import './SlideStakes.css';

/* Slide 2 — The stakes.
   "Agents send emails. Sign contracts. Move money.
    No one can prove what they did.
    In 70 days, that becomes a 7%-of-turnover problem."
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
      <div className="tex-stakes-orb">
        <Orb state="asking" size="md" />
      </div>

      <div className="tex-stakes-stage">
        <p className="tex-stakes-line">
          <span className="tex-stakes-beat tex-stakes-beat--1">Agents send emails. </span>
          <span className="tex-stakes-beat tex-stakes-beat--2">Sign contracts. </span>
          <span className="tex-stakes-beat tex-stakes-beat--3">Move money.</span>
        </p>

        <p className="tex-stakes-line tex-stakes-line--2">
          <span className="tex-stakes-beat tex-stakes-beat--4">No one can prove what they did.</span>
        </p>

        <p className="tex-stakes-aside">
          <span className="tex-stakes-beat tex-stakes-beat--5">
            In 70 days, that becomes a 7%-of-turnover problem.
          </span>
        </p>

        <p className="tex-stakes-proof">
          <span className="tex-stakes-beat tex-stakes-beat--6">
            August 2, 2026 · 7% of global turnover
          </span>
        </p>
      </div>
    </div>
  );
}
