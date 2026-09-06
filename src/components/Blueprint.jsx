/**
 * A hairline frame. Pass tone="dark" when the frame sits on the steel field so
 * the border lifts to paper. (The Industry system's corner registration marks
 * are deliberately not drawn here; they read as decoration on a phone.)
 */
export default function Blueprint({ as, tone, className, children, ...rest }) {
  const Tag = as || 'div';
  const classes = ['blueprint', tone === 'dark' && 'u-on-dark', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
