import { SOLUTIONS } from '../nav';

export default function SiteFooter() {
  return (
    <footer className="u-footer">
      <div className="u-footer-inner">
        <div className="u-footer-brand">
          <img src="/upstraillogo.png" alt="" />
          <span className="u-footer-name">UPSTRAIL</span>
        </div>

        <nav className="u-footer-links" aria-label="Footer">
          <div className="u-footer-col">
            <div className="u-plate-label">Solutions</div>
            {SOLUTIONS.map((s) => <a key={s.key} href={s.href}>{s.label}</a>)}
          </div>
          <div className="u-footer-col">
            <div className="u-plate-label">Upstrail</div>
            <a href="/#what">What it does</a>
            <a href="/#product">The screens</a>
            <a href="/#start">How it starts</a>
            <a href="/#cost">What it costs</a>
            <a href="#demo">Talk to us</a>
          </div>
        </nav>

        <span className="u-footer-note">
          © {new Date().getFullYear()} Upstrail. Demand and supply planning for mid-sized
          manufacturers.
        </span>
      </div>
    </footer>
  );
}
