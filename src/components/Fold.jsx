import { useId, useState } from 'react';

/**
 * The long tail of a list, hidden behind one button. Whatever is above the
 * Fold stays visible; the children appear when the reader asks.
 */
export default function Fold({ label, hideLabel = 'Show less', bodyClassName, children }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <div id={id} className={['u-fold-body', bodyClassName].filter(Boolean).join(' ')} hidden={!open}>
        {children}
      </div>
      <button
        type="button"
        className="u-fold-btn"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="u-fold-plus" aria-hidden="true">+</span>
        {open ? hideLabel : label}
      </button>
    </>
  );
}
