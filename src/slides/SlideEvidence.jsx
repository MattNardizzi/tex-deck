import { useEffect, useState } from 'react';
import Orb from '../Orb.jsx';
import './SlideEvidence.css';

/* Slide 5 — Evidence.
   The signed chain. Nine hex hashes, mono. Bundle.zip floating
   above. Orb held very still in the proof state — the chain is
   doing the talking.
*/
const HASHES = [
  '7f3a9b2c',
  'd84e1f06',
  'a2c5b918',
  '4e7d3a02',
  '91bf6e5d',
  'c3a8f274',
  '0b6d4e1a',
  '8e2f9c53',
  '5a7c1b40',
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
        <div className="tex-evid-orb">
          <Orb state="proof" size="sm" />
        </div>

        <p className="tex-evid-bundle">bundle.zip</p>

        <div className="tex-evid-chain" aria-label="Signed record chain">
          {HASHES.map((h, i) => (
            <span
              key={h}
              className="tex-evid-hash"
              style={{ transitionDelay: `${1.4 + i * 0.09}s` }}
            >
              {h}
            </span>
          ))}
        </div>

        <p className="tex-evid-line">
          Every action. Signed. Verifiable without us.
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
