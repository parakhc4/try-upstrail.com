import { Fragment } from 'react';
import Blueprint from './Blueprint';

/**
 * A picture of the product, framed as a blueprint object. It keeps the app's
 * own light interface palette and IBM Plex rather than the page chrome —
 * see the `.u-app` scope in site.css.
 */
export default function AppPanel({ crumbs, meta, children }) {
  return (
    <Blueprint className="u-app">
      <div className="u-app-bar">
        <div className="u-app-crumbs">
          <img src="/upstraillogo.png" alt="" />
          <span className="u-app-crumb-strong">APS Core</span>
          {crumbs.map((crumb, i) => (
            <Fragment key={crumb}>
              <span className="u-app-crumb-sep">/</span>
              <span className={i === crumbs.length - 1 ? 'u-app-crumb-here' : undefined}>
                {crumb}
              </span>
            </Fragment>
          ))}
        </div>
        <span className="u-app-version u-app-mono">{meta}</span>
      </div>
      <div className="u-app-body">{children}</div>
    </Blueprint>
  );
}
