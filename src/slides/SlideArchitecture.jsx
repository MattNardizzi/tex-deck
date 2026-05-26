import { useEffect, useState } from 'react';
import './SlideArchitecture.css';

/* Slide 6 — Architecture.
   Six layers, stacked. bundle.zip floats at top. Each layer name
   in mono caps, descriptor in serif. The whole stack arrives layer
   by layer so the structure reads as a chain, not a list.
*/
const LAYERS = [
  { name: 'BUNDLE.ZIP',     desc: 'the file that leaves' },
  { name: 'LEARNING',       desc: 'sharper, only by hand' },
  { name: 'ECOSYSTEM',      desc: 'sees the whole' },
  { name: 'VERIFICATION',   desc: 'proves it without us' },
  { name: 'EVIDENCE',       desc: 'signs the verdict' },
  { name: 'ADJUDICATION',   desc: 'permit · abstain · forbid' },
  { name: 'DISCOVERY',      desc: 'every agent, every action' },
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
        <p className="tex-arch-eyebrow">Six layers under every bundle.</p>

        <div className="tex-arch-stack" aria-label="Six-layer architecture">
          {LAYERS.map((layer, i) => (
            <div
              key={layer.name}
              className="tex-arch-row"
              style={{ transitionDelay: `${0.9 + i * 0.18}s` }}
            >
              <span className="tex-arch-name">{layer.name}</span>
              <span className="tex-arch-rule" />
              <span className="tex-arch-desc">{layer.desc}</span>
            </div>
          ))}
        </div>

        <p className="tex-arch-aside">
          Every layer signs the one above it.
        </p>
      </div>
    </div>
  );
}
