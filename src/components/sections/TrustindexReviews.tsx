'use client';

/*
  Smile Concepts: Trustindex Google reviews block for the All on 4 page.

  How to add it:
  1. Save this file in your components folder as TrustindexReviews.tsx
     (plain JavaScript project: save as TrustindexReviews.jsx and change
     useRef<HTMLDivElement>(null) to useRef(null)).
  2. In the About Us section (the section with id="team"), import it and add
     <TrustindexReviews /> straight after the paragraph that starts
     "Together, Dr Manish Shah and Dr Kinnar Shah have trained on...",
     inside the same container.
  3. Do not add the Trustindex script anywhere else on the page, and do not add
     any review schema for this widget.

  This uses Trustindex's own method for React sites (a placeholder div plus
  their loader). It is added only after the page has loaded and only when the
  visitor scrolls near it, so it works with the static export, never clashes
  with React, and does not slow the page down.
*/

import { useEffect, useRef } from 'react';

// Text above the widget
const HEADLINE = 'Our Patients Have the Final Say';
const SUBLINE = '4.8 stars from 600+ reviews, straight from Google.';

// Smile Concepts Trustindex widget
const WIDGET_URL = 'https://cdn.trustindex.io/loader.js?b71948b403e3003e4476b145a2f';
const LOADER_URL = 'https://cdn.trustindex.io/loader.js';

// Space kept for the widget so the page does not jump when the reviews appear.
// Measured from the rendered widget: about 351px on desktop, 429px on phones
// (one review card at a time, with the rating badge stacked above it).
const RESERVED_HEIGHT = 360;
const RESERVED_HEIGHT_MOBILE = 430;

export default function TrustindexReviews() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const loadWidget = () => {
      if (box.dataset.loaded) return; // only ever load once
      box.dataset.loaded = 'true';

      // Placeholder where Trustindex draws the widget
      const placeholder = document.createElement('div');
      placeholder.setAttribute('data-src', WIDGET_URL);
      placeholder.setAttribute('src', WIDGET_URL);
      box.appendChild(placeholder);

      // Trustindex loader, which finds the placeholder and fills it
      const script = document.createElement('script');
      script.src = LOADER_URL;
      script.async = true;
      box.appendChild(script);
    };

    // Load when the visitor is getting close to the reviews
    if (!('IntersectionObserver' in window)) {
      loadWidget();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          loadWidget();
        }
      },
      { rootMargin: '600px 0px' },
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="google-reviews" className="sc-reviews">
      <style>{`
        .sc-reviews {
          margin-top: clamp(3.5rem, 7vw, 6rem);
          width: 100%;
          max-width: 100%;
        }
        .sc-reviews-title {
          text-align: center;
          font-family: var(--font-prata), 'Playfair Display', Georgia, serif;
          font-weight: 400;
          font-size: var(--fs-section-title);
          color: #E86337;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0 0 0.65rem;
        }
        .sc-reviews-sub {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 1.5rem;
          color: #5E616B;
          font-size: var(--fs-body);
          line-height: 1.6;
          font-family: var(--font-assistant), sans-serif;
        }
        .sc-reviews-rule {
          width: 3rem;
          height: 2px;
          background: #F47A4A;
          margin: 0 auto clamp(1.5rem, 3vw, 2.5rem);
        }
        .sc-reviews-box {
          width: 100%;
          max-width: 100%;
          min-height: ${RESERVED_HEIGHT}px;
          overflow-x: clip;
        }
        /* Trustindex only shows its prev/next arrows from 1024px up; keep them on tablets and phones too */
        @media (max-width: 1023px) {
          #google-reviews .ti-widget:not(.ti-disable-nav) .ti-controls {
            display: block !important;
          }
        }
        @media (max-width: 767px) {
          .sc-reviews {
            margin-top: 2.5rem;
          }
          .sc-reviews-title {
            padding: 0 0.5rem;
          }
          .sc-reviews-sub {
            margin-bottom: 1rem;
            padding: 0 0.75rem;
            font-size: 0.95rem;
          }
          .sc-reviews-rule {
            margin-bottom: 1.25rem;
          }
          .sc-reviews-box {
            min-height: ${RESERVED_HEIGHT_MOBILE}px;
          }
        }
      `}</style>
      <h3 className="sc-reviews-title">{HEADLINE}</h3>
      <p className="sc-reviews-sub">{SUBLINE}</p>
      <div aria-hidden="true" className="sc-reviews-rule" />
      <div ref={boxRef} className="sc-reviews-box" />
    </div>
  );
}
