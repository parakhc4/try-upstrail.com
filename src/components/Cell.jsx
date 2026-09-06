import { useId, useState } from 'react';

/**
 * A card in a .u-cells frame that opens on tap. The title is always there;
 * the detail is behind it, so a page of three cards reads as three lines
 * until the reader asks for more.
 */
export default function Cell({ num, title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={`u-cell u-cell-fold${open ? ' is-open' : ''}`}>
      {num && <div className="u-cell-num">{num}</div>}
      <h3 className="u-cell-title">
        <button
          type="button"
          className="u-cell-btn"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{title}</span>
          <span className="u-fold-plus" aria-hidden="true">+</span>
        </button>
      </h3>
      <div id={id} className="u-cell-body" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
