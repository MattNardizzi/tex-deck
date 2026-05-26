import { useCallback, useEffect, useState } from 'react';
import SlideCover from './slides/SlideCover.jsx';
import SlideStakes from './slides/SlideStakes.jsx';
import SlideField from './slides/SlideField.jsx';
import SlideTex from './slides/SlideTex.jsx';
import SlideEvidence from './slides/SlideEvidence.jsx';
import SlideArchitecture from './slides/SlideArchitecture.jsx';
import SlideAskOne from './slides/SlideAskOne.jsx';
import SlideAskTwo from './slides/SlideAskTwo.jsx';
import SlideClose from './slides/SlideClose.jsx';
import { useSwipe } from './hooks/useSwipe.js';

/* =============================================================
   Tex Deck — the pager.

   Nine slides. One screen at a time. No scroll.
   ============================================================= */

const SLIDES = [
  { id: 'cover',        Component: SlideCover },
  { id: 'stakes',       Component: SlideStakes },
  { id: 'field',        Component: SlideField },
  { id: 'tex',          Component: SlideTex },
  { id: 'evidence',     Component: SlideEvidence },
  { id: 'architecture', Component: SlideArchitecture },
  { id: 'ask-one',      Component: SlideAskOne },
  { id: 'ask-two',      Component: SlideAskTwo },
  { id: 'close',        Component: SlideClose },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, SLIDES.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  // Keyboard: arrows, space, page up/down, home/end
  useEffect(() => {
    const onKey = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          goPrev();
          break;
        case 'Home':
          e.preventDefault();
          setIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setIndex(SLIDES.length - 1);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  // Touch swipe (mobile)
  useSwipe(goNext, goPrev);

  // Click anywhere on the deck advances (except links and controls)
  const onDeckClick = (e) => {
    if (e.target.closest('a')) return;
    if (e.target.closest('.tex-deck-controls')) return;
    if (e.target.closest('.tex-deck-topbar')) return;
    goNext();
  };

  return (
    <div className="tex-deck" onClick={onDeckClick}>
      {/* Top bar — matches texaegis.com signature */}
      <header className="tex-deck-topbar">
        <a href="https://texaegis.com" className="tex-brand" aria-label="Tex — home">
          <span className="tex-brand-mark">T</span>
          <span className="tex-brand-word">
            <span className="tex-brand-word-name">Tex</span>
            <span className="tex-brand-word-by"> by VortexBlack</span>
          </span>
        </a>

        <span className="tex-deck-counter">
          {String(index + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </span>
      </header>

      {/* Slides — all mounted, only the active one visible */}
      {SLIDES.map(({ id, Component }, i) => (
        <div
          key={id}
          className={`tex-slide${i === index ? ' tex-slide--active' : ''}`}
          aria-hidden={i !== index}
        >
          <Component active={i === index} />
        </div>
      ))}

      {/* Bottom controls */}
      <div className="tex-deck-controls">
        <button
          className="tex-deck-arrow"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 1 L 3 7 L 9 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="tex-deck-dots" role="tablist" aria-label="Slide indicators">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              className={`tex-deck-dot${i === index ? ' tex-deck-dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>

        <button
          className="tex-deck-arrow"
          onClick={goNext}
          disabled={index === SLIDES.length - 1}
          aria-label="Next slide"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 1 L 11 7 L 5 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
