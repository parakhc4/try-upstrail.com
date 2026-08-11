import { useId, useState } from 'react';

/**
 * A titled block whose detail collapses. The heading stays visible so the page
 * is still scannable; only the prose folds away. Collapsed content keeps
 * rendering (crawlers still see it) and is sealed with `inert` so it stays out
 * of the tab order.
 */
export default function Disclosure({
  summary,
  children,
  defaultOpen = false,
  className,
  titleClassName,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={['u-disc', open && 'is-open', className].filter(Boolean).join(' ')}>
      <h4 className="u-disc-heading">
        <button
          type="button"
          className="u-disc-btn"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={titleClassName}>{summary}</span>
          <span className="u-caret" aria-hidden="true">▾</span>
        </button>
      </h4>

      <div className="u-disc-body">
        <div className="u-disc-clip" id={id} inert={!open}>
          <div className="u-disc-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}
