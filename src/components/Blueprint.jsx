/**
 * The wireframe frame every card, figure and primary button wears in the
 * Industry system: a square hairline box with `+` registration marks at the
 * corners. Pass tone="dark" when the frame sits on the steel field so the
 * hairline and marks lift to paper.
 */
export default function Blueprint({ as, tone, className, children, ...rest }) {
  const Tag = as || 'div';
  const classes = ['blueprint', tone === 'dark' && 'u-on-dark', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
      <i className="corner tl" aria-hidden="true" />
      <i className="corner tr" aria-hidden="true" />
      <i className="corner bl" aria-hidden="true" />
      <i className="corner br" aria-hidden="true" />
    </Tag>
  );
}
