import SiteHeader from '../sections/SiteHeader';
import SiteFooter from '../sections/SiteFooter';

/** Header, footer and the page wrapper every page shares. */
export default function PageShell({ page, children }) {
  return (
    <div className="u-page">
      <SiteHeader page={page} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
