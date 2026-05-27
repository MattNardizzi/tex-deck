import { useEffect, useState } from 'react';
import Orb from '../Orb.jsx';
import './SlideAsk.css';

/* Slide 8 — Ask, part two.
   Matches SlideAskOne in proportion. Two lines, not three.
*/
export default function SlideAskTwo({ active }) {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!active) { setArmed(false); return; }
    const t = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className={`tex-ask${armed ? ' tex-ask--armed' : ''}`}>
      <div className="tex-ask-stage">
        <div className="tex-ask-orb">
          <Orb state="asking" size="md" />
        </div>

        <p className="tex-ask-line">
          <span className="tex-ask-beat tex-ask-beat--1">Intros to investors who set the stage</span>
          <br />
          <span className="tex-ask-beat tex-ask-beat--2">
            <em>for the regulated AI era.</em>
          </span>
        </p>
      </div>
    </div>
  );
}
