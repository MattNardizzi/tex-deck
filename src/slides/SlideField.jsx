import { useEffect, useState } from 'react';
import './SlideField.css';

/* Slide 3 — The field.
   Six competitor names laid out as a ghost grid. Each is faint,
   tracked-out, in mono. The bottom sentence is the closing line:
   "Each one solves a slice. None covers the decision."
*/
const COMPETITORS = [
  'ZENITY',
  'NOMA',
  'MICROSOFT AGT',
  'AIM',
  'PROMPT SECURITY',
  'WITNESSAI',
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
          $3B+ raised across AI security.
          <br />
          Still no one sleeps.
        </p>

        <div className="tex-field-grid" aria-label="Competitors in the AI security space">
          {COMPETITORS.map((name, i) => (
            <span
              key={name}
              className="tex-field-name"
              style={{ transitionDelay: `${1.4 + i * 0.12}s` }}
            >
              {name}
            </span>
          ))}
        </div>

        <p className="tex-field-line">
          Each one solves a slice.
          <br />
          <em>None covers the decision.</em>
        </p>

        <p className="tex-field-proof">
          Identity · Posture · Prompts · Runtime · None cover the verdict
        </p>
      </div>
    </div>
  );
}
