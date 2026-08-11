export default function SiteFooter() {
  return (
    <footer className="u-footer">
      <div className="u-footer-inner">
        <div className="u-footer-brand">
          <img src="/upstraillogo.png" alt="" />
          <span className="u-footer-name">UPSTRAIL</span>
        </div>
        <span className="u-footer-note">
          © {new Date().getFullYear()} Upstrail. Demand and supply planning for mid-sized
          manufacturers.
        </span>
      </div>
    </footer>
  );
}
