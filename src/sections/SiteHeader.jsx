import { useEffect, useRef, useState } from 'react';
import Blueprint from '../components/Blueprint';

import { LINKS, SOLUTIONS } from '../nav';



export default function SiteHeader({ page = 'home' }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropRef = useRef(null);
  const headerRef = useRef(null);

  const home = page === 'home';
  const linkTo = (hash) => (home ? hash : `/${hash}`);

  // Escape closes whichever is open; a press outside closes them too.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setSolutionsOpen(false);
      setMenuOpen(false);
    };
    const onPointer = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setSolutionsOpen(false);
      if (headerRef.current && !headerRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, []);

  return (
    <header className="u-header" ref={headerRef}>
      <div className="u-header-inner">
        <a className="u-brand" href="/" aria-label="Upstrail home">
          <img className="u-brand-mark" src="/upstraillogo.png" alt="" />
          <span className="u-brand-name">UPSTRAIL</span>
          <span className="u-brand-tag">Planning for SMEs</span>
        </a>

        <nav className="u-nav u-hide-sm" aria-label="Site">
          <div
            className="u-nav-drop"
            ref={dropRef}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className={`u-nav-drop-btn${home ? '' : ' is-current'}`}
              aria-expanded={solutionsOpen}
              aria-controls="solutions-panel"
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              Solutions <span className="u-caret" aria-hidden="true">▾</span>
            </button>
            <Blueprint id="solutions-panel" className="u-nav-panel" hidden={!solutionsOpen}>
              {SOLUTIONS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  className={`u-nav-item${page === s.key ? ' is-current' : ''}`}
                  aria-current={page === s.key ? 'page' : undefined}
                >
                  <span className="u-nav-item-label">{s.label}</span>
                  <span className="u-nav-item-blurb">{s.blurb}</span>
                </a>
              ))}
            </Blueprint>
          </div>

          {LINKS.map((l) => (
            <a key={l.hash} href={linkTo(l.hash)}>{l.label}</a>
          ))}
        </nav>

        <Blueprint as="a" href="#demo" className="btn btn-primary u-header-cta">
          Request a demo
        </Blueprint>

        <button
          type="button"
          className="u-burger"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" className="u-mobile" hidden={!menuOpen}>
        <div className="u-mobile-group">
          <div className="u-plate-label">Solutions</div>
          {SOLUTIONS.map((s) => (
            <a
              key={s.key}
              href={s.href}
              className={`u-mobile-link${page === s.key ? ' is-current' : ''}`}
              aria-current={page === s.key ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span className="u-nav-item-label">{s.label}</span>
              <span className="u-nav-item-blurb">{s.blurb}</span>
            </a>
          ))}
        </div>
        <div className="u-mobile-group">
          {LINKS.map((l) => (
            <a
              key={l.hash}
              href={linkTo(l.hash)}
              className="u-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="u-nav-item-label">{l.label}</span>
            </a>
          ))}
        </div>
        <Blueprint
          as="a"
          href="#demo"
          className="btn btn-primary btn-block btn-lg"
          onClick={() => setMenuOpen(false)}
        >
          Request a demo
        </Blueprint>
      </div>
    </header>
  );
}
