import { useEffect, useState } from 'react';
import './SlideEvidence.css';

/* Slide 5 — exactly the PDF.
   SIGNED RECORD CHAIN label. Nine hashes in a 3x3 grid. BUNDLE.ZIP
   beneath. Then the punchline, then the regulator aside, then the
   crypto standards receipt. No card, no shadow, no header bar.
*/
const HASHES = [
  '7f3a9b2c', 'd84e1f06', 'a2c5b918',
  '4e7d3a02', '91bf6e5d', 'c3a8f274',
  '0b6d4e1a', '8e2f9c53', '5a7c1b40',
];

export default function SlideEvidence({ active }) {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (!active) { setArmed(false); return; }
    const t = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className={`tex-evid${armed ? ' tex-evid--armed' : ''}`}>
      <div className="tex-evid-stage">
        <p className="tex-evid-label">Signed record chain</p>

        <div className="tex-evid-chain">
          {HASHES.map((h, i) => (
            <span
              key={i}
              className="tex-evid-hash"
              style={{ transitionDelay: `${0.9 + i * 0.08}s` }}
            >
              {h}
            </span>
          ))}
        </div>

        <p className="tex-evid-bundle">bundle.zip</p>

        <p className="tex-evid-line">
          Every action. Signed. <em>Verifiable without us.</em>
        </p>

        <p className="tex-evid-aside">
          A regulator with a laptop replays any decision deterministically.
        </p>

        <p className="tex-evid-proof">
          ML-DSA-65 · C2PA 2.4 · SCITT · RFC 3161
        </p>
      </div>
    </div>
  );
}
