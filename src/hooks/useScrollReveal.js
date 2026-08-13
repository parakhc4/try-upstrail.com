import { useLayoutEffect } from 'react';

const FAILSAFE_MS = 2500;

/**
 * Lets sections arrive one at a time instead of the page presenting as one
 * wall. Deliberately understated: a short rise, once per block, never
 * replayed.
 *
 * Blocks opt out with data-reveal="eager" — the hero and the console are
 * above the fold and must never be hidden. Everything else is veiled by CSS
 * behind the `reveal-on` root class, which this hook adds synchronously
 * before paint, so there is no measuring and nothing to race with stylesheet
 * timing. Two escape hatches keep a blank page impossible: with JS off the
 * class is never added, and if the observer never delivers a callback the
 * failsafe drops the class and reveals everything.
 */
export default function useScrollReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const root = document.documentElement;
    const lazy = [...document.querySelectorAll('[data-reveal]')]
      .filter((el) => el.dataset.reveal !== 'eager');
    if (!lazy.length) return undefined;

    root.classList.add('reveal-on');
    let delivered = false;

    const io = new IntersectionObserver(
      (entries) => {
        delivered = true;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    lazy.forEach((el) => io.observe(el));

    const failsafe = setTimeout(() => {
      if (!delivered) root.classList.remove('reveal-on');
    }, FAILSAFE_MS);

    return () => {
      clearTimeout(failsafe);
      io.disconnect();
      root.classList.remove('reveal-on');
    };
  }, []);
}
