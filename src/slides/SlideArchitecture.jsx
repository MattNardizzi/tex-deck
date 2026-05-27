import { useEffect, useState } from 'react';
import './SlideArchitecture.css';

/* Slide 6 — Architecture.
   A real visual stack. Seven rows, top to bottom, each one a layer
   in the chain. The top row (bundle.zip) is what leaves; everything
   below it is the apparatus that signs it. A vertical spine runs
   down the left so it reads as a chain, not a list.
*/
const LAYERS = [
  { n: '07', name: 'Bundle.zip',   desc: 'the file that leaves',     emphasis: true  },
  { n: '06', name: 'Learning',     desc: 'sharper, only by hand' },
  { n: '05', name: 'Ecosystem',    desc: 'sees the whole' },
  { n: '04', name: 'Verification', desc: 'proves it without us' },
  { n: '03', name: 'Evidence',     desc: 'signs the verdict' },
  { n: '02', name: 'Adjudication', desc: 'permit · abstain · forbid' },
  { n: '01', name: 'Discovery',    desc: 'every agent, every action' },
];

export default function SlideArchitecture({ active }) {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!active) { setArmed(false); return; }
    const t = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className={`tex-arch${armed ? ' tex-arch--armed' : ''}`}>
      <div className="tex-arch-stage">

        <p className="tex-arch-title">
          Seven layers.{' '}
          <em>Each signs the one above.</em>
        </p>

        <div className="tex-arch-stack" role="figure" aria-label="Architecture stack">
          {LAYERS.map((layer, i) => (
            <div
              key={layer.name}
              className={`tex-arch-row${layer.emphasis ? ' tex-arch-row--top' : ''}`}
              style={{ transitionDelay: `${0.8 + i * 0.13}s` }}
            >
              <span className="tex-arch-num">{layer.n}</span>
              <span className="tex-arch-spine" aria-hidden="true" />
              <span className="tex-arch-name">{layer.name}</span>
              <span className="tex-arch-desc">{layer.desc}</span>
            </div>
          ))}
        </div>

        <p className="tex-arch-aside">
          One signed chain. No verdict reaches the world unsealed.
        </p>
      </div>
    </div>
  );
}
