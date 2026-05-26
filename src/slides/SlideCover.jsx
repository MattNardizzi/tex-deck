import { useEffect, useState } from 'react';
import './SlideCover.css';

/* Slide 1 — Cover. Absolute.
   This is the verbatim Hero from texaegis.com — same SVG layers,
   same font (Source Serif 4 @ 186 / -11 tracking), same glass
   gradients, same sweep, same staggered armed reveal. Only change:
   the bottom invitation is "Press → to continue" instead of a scroll
   arrow, because the deck is paged, not scrolled.
*/
export default function SlideCover({ active }) {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!active) {
      setArmed(false);
      return;
    }
    const t = setTimeout(() => setArmed(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className={`tex-cover${armed ? ' tex-cover--armed' : ''}`}>
      <div className="tex-cover-stage">
        <h1 className="tex-cover-word" aria-label="Absolute.">
          <svg
            className="tex-cover-glass"
            viewBox="0 0 900 240"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cover-body" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#F4F6FA" stopOpacity="0.98" />
                <stop offset="28%"  stopColor="#C8D2DE" stopOpacity="0.92" />
                <stop offset="58%"  stopColor="#5B6E84" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#1D2733" stopOpacity="1"    />
              </linearGradient>

              <linearGradient id="cover-rim" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"  stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="14%" stopColor="#FFFFFF" stopOpacity="0"    />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"   />
              </linearGradient>

              <radialGradient id="cover-floor" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#0E1620" stopOpacity="0.10" />
                <stop offset="60%"  stopColor="#0E1620" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#0E1620" stopOpacity="0"    />
              </radialGradient>

              <mask id="cover-mask">
                <text
                  x="450" y="178"
                  textAnchor="middle"
                  fontFamily="var(--tex-serif)"
                  fontSize="186"
                  fontWeight="400"
                  letterSpacing="-11"
                  fill="#FFFFFF"
                >Absolute.</text>
              </mask>
            </defs>

            <ellipse cx="450" cy="210" rx="320" ry="14" fill="url(#cover-floor)" />

            <text
              x="450" y="178"
              textAnchor="middle"
              fontFamily="var(--tex-serif)"
              fontSize="186"
              fontWeight="400"
              letterSpacing="-11"
              fill="url(#cover-body)"
            >Absolute.</text>

            <text
              x="450" y="178"
              textAnchor="middle"
              fontFamily="var(--tex-serif)"
              fontSize="186"
              fontWeight="400"
              letterSpacing="-11"
              fill="url(#cover-rim)"
            >Absolute.</text>

            <text
              x="450" y="178"
              textAnchor="middle"
              fontFamily="var(--tex-serif)"
              fontSize="186"
              fontWeight="400"
              letterSpacing="-11"
              fill="none"
              stroke="#5B6E84"
              strokeOpacity="0.32"
              strokeWidth="0.6"
            >Absolute.</text>

            <g mask="url(#cover-mask)">
              <rect
                className="tex-cover-sweep"
                x="-200" y="0"
                width="280" height="240"
                fill="#E6F0FF"
                opacity="0.85"
              />
            </g>
          </svg>
        </h1>

        <p className="tex-cover-byline">
          <span className="tex-cover-beat tex-cover-beat--1">Matthew Nardizzi</span>
          <span className="tex-cover-sep"> · </span>
          <span className="tex-cover-beat tex-cover-beat--2">VortexBlack</span>
        </p>
      </div>
    </div>
  );
}
