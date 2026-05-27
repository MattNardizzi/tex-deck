import { useEffect, useState } from 'react';
import './SlideField.css';

/* Slide 3 — exactly the PDF.
   Eyebrow above. Six names in a 3x2 grid below. The verdict cuts.
   A receipt of the layers nobody covers.
*/
const NAMES = ['ZENITY', 'NOMA', 'MICROSOFT AGT', 'AIM', 'PROMPT SECURITY', 'WITNESSAI'];

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
          $3B+ raised across AI security. <em>Still no one sleeps.</em>
        </p>

        <div className="tex-field-grid">
          {NAMES.map((name, i) => (
            <span
              key={name}
              className="tex-field-name"
              style={{ transitionDelay: `${1.1 + i * 0.10}s` }}
            >
              {name}
            </span>
          ))}
        </div>

        <p className="tex-field-verdict">
          Each one solves a slice. <em>None covers the decision.</em>
        </p>

        <p className="tex-field-proof">
          Identity · Posture · Prompts · Runtime · None cover the verdict
        </p>
      </div>
    </div>
  );
}
