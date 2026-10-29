import { useState, useEffect } from 'react';
import { EMAIL } from '../data/site';

// true while the viewport is narrower than `px`
export function useIsNarrow(px = 768) {
  const query = `(max-width: ${px - 0.02}px)`;
  const [match, setMatch] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatch(mql.matches);
    onChange();
    // older Safari only has addListener
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return match;
}

// window height in px. On touch screens it only updates when the width changes (rotation),
// so the browser toolbar sliding in and out while scrolling doesn't resize anything
export function useViewportHeight() {
  const [height, setHeight] = useState(() => window.innerHeight);

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches;
    let lastWidth = window.innerWidth;
    const onResize = () => {
      if (touch && window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return height;
}

// copies the email address, falls back to mailto: when the clipboard is unavailable
export function useCopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    };
    const mailto = () => { window.location.href = `mailto:${EMAIL}`; };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(EMAIL).then(done, mailto);
    else mailto();
  };

  return [copied, copy];
}

// ticks once a second
export function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return now;
}
