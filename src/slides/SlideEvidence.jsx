import { useEffect, useState } from 'react';
import './SlideEvidence.css';

/* Slide 5 — Evidence.
   The whole slide IS the artifact. A bordered receipt card holding
   the signed chain. Header, ledger rows with sequence numbers and
   timestamps, crypto-standards footer. The punchline sits above
   the card as a title, not floating to the side.
*/
const CHAIN = [
  { seq: '001', hash: '7f3a9b2c4e8d1f06', kind: 'permit' },
  { seq: '002', hash: 'a2c5b9184e7d3a02', kind: 'permit' },
  { seq: '003', hash: '91bf6e5dc3a8f274', kind: 'abstain' },
  { seq: '004', hash: '0b6d4e1a8e2f9c53', kind: 'permit' },
  { seq: '005', hash: '5a7c1b40d8f2e716', kind: 'forbid' },
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

        <p className="tex-evid-title">
          Every action. Signed.{' '}
          <em>Verifiable without us.</em>
        </p>

        <div className="tex-evid-card" role="figure" aria-label="Signed evidence bundle">
          <div className="tex-evid-card-head">
            <span className="tex-evid-card-label">bundle.zip</span>
            <span className="tex-evid-card-meta">SHA-256 · ML-DSA-65</span>
          </div>

          <div className="tex-evid-ledger">
            {CHAIN.map((row, i) => (
              <div
                key={row.seq}
                className="tex-evid-row"
                style={{ transitionDelay: `${1.0 + i * 0.14}s` }}
              >
                <span className="tex-evid-seq">{row.seq}</span>
                <span className="tex-evid-hash">{row.hash}</span>
                <span className={`tex-evid-kind tex-evid-kind--${row.kind}`}>
                  {row.kind}
                </span>
              </div>
            ))}
          </div>

          <div className="tex-evid-card-foot">
            <span className="tex-evid-foot-label">signed</span>
            <span className="tex-evid-foot-value">C2PA 2.4 · SCITT · RFC 3161</span>
          </div>
        </div>

        <p className="tex-evid-aside">
          A regulator with a laptop replays any decision deterministically.
        </p>
      </div>
    </div>
  );
}
