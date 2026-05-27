import { useEffect, useState } from 'react';
import './SlideField.css';

/* Slide 3 — The field.
   Competitors laid out as a list with numerals — like an obituary.
   Each one gets equal billing. The verdict cuts below.
*/
const COMPETITORS = [
  { n: '01', name: 'Zenity',          covers: 'identity' },
  { n: '02', name: 'Noma',            covers: 'posture' },
  { n: '03', name: 'Microsoft AGT',   covers: 'identity' },
  { n: '04', name: 'AIM',             covers: 'posture' },
  { n: '05', name: 'Prompt Security', covers: 'prompts' },
  { n: '06', name: 'WitnessAI',       covers: 'runtime' },
];

export default function SlideField({ active }) {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!active) { setArmed(false); return; }
    const t = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className={`tex-field${armed ? ' tex-field--armed' : ''}`}>
      <div className="tex-field-stage">

        <p className="tex-field-eyebrow">
          $3B+ raised across AI security.<br />
          <span className="tex-field-eyebrow-soft">Still no one sleeps.</span>
        </p>

        <div className="tex-field-list" aria-label="Competitors in the AI security space">
          {COMPETITORS.map((c, i) => (
            <div
              key={c.name}
              className="tex-field-row"
              style={{ transitionDelay: `${1.2 + i * 0.13}s` }}
            >
              <span className="tex-field-num">{c.n}</span>
              <span className="tex-field-name">{c.name}</span>
              <span className="tex-field-covers">{c.covers}</span>
            </div>
          ))}
        </div>

        <div className="tex-field-rule" aria-hidden="true" />

        <p className="tex-field-verdict">
          Each one solves a slice.{' '}
          <em>None covers the verdict.</em>
        </p>
      </div>
    </div>
  );
}
