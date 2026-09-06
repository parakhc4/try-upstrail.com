import { useRef, useState } from 'react';
import Blueprint from './Blueprint';

/**
 * A real screen from the product, framed, with a one-line caption. If the
 * file is not there yet the frame shows the title instead of a broken image,
 * so the page never looks half-built while assets are being added.
 *
 * Tapping the frame opens the screen full size in a viewer. On a desktop it
 * fits the window; on a phone it is wide enough to read and pans both ways.
 */
export default function Screen({ src, alt, title, caption, ratio = '2000 / 1100' }) {
  const [missing, setMissing] = useState(false);
  const dialogRef = useRef(null);

  const open = () => {
    const d = dialogRef.current;
    if (!d || d.open) return;
    document.body.style.overflow = 'hidden';
    d.showModal();
  };
  const close = () => dialogRef.current?.close();
  const onClosed = () => { document.body.style.overflow = ''; };
  const onPanClick = (e) => { if (e.target === e.currentTarget) close(); };

  return (
    <figure className="u-screen">
      <Blueprint className={`u-screen-frame${missing ? ' is-missing' : ''}`}>
        {missing ? (
          <div className="u-screen-missing" style={{ aspectRatio: ratio }}>
            <span>{title}</span>
            <span className="u-screen-missing-note">screenshot to follow</span>
          </div>
        ) : (
          <button type="button" className="u-screen-open" onClick={open} aria-label={`Open ${title} full size`}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              style={{ aspectRatio: ratio }}
              onError={() => setMissing(true)}
            />
            <span className="u-screen-zoom" aria-hidden="true">Tap to enlarge</span>
          </button>
        )}
      </Blueprint>
      <figcaption className="u-screen-cap">
        <strong>{title}.</strong> {caption}
      </figcaption>

      {!missing && (
        <dialog ref={dialogRef} className="u-lightbox" onClose={onClosed} aria-label={title}>
          <div className="u-lightbox-pan" onClick={onPanClick}>
            <img src={src} alt={alt} decoding="async" />
          </div>
          <button type="button" className="u-lightbox-close" onClick={close} aria-label="Close">
            Close
          </button>
        </dialog>
      )}
    </figure>
  );
}
