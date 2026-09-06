import { useState } from 'react';
import Blueprint from './Blueprint';

/**
 * A real screen from the product, framed, with a one-line caption. If the
 * file is not there yet the frame shows the title instead of a broken image,
 * so the page never looks half-built while assets are being added.
 */
export default function Screen({ src, alt, title, caption, ratio = '2000 / 1100' }) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="u-screen">
      <Blueprint className={`u-screen-frame${missing ? ' is-missing' : ''}`}>
        {missing ? (
          <div className="u-screen-missing" style={{ aspectRatio: ratio }}>
            <span>{title}</span>
            <span className="u-screen-missing-note">screenshot to follow</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            style={{ aspectRatio: ratio }}
            onError={() => setMissing(true)}
          />
        )}
      </Blueprint>
      <figcaption className="u-screen-cap">
        <strong>{title}.</strong> {caption}
      </figcaption>
    </figure>
  );
}
