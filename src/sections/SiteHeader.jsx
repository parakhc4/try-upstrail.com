import Blueprint from '../components/Blueprint';

const NAV = [
  { href: '#gap', label: 'The ERP gap' },
  { href: '#how', label: 'How it works' },
  { href: '#verticals', label: 'Verticals' },
  { href: '#rollout', label: 'Rollout' },
  { href: '#pricing', label: 'Pricing' },
];

export default function SiteHeader() {
  return (
    <header className="u-header">
      <div className="u-header-inner">
        <div className="u-brand">
          <img className="u-brand-mark" src="/upstraillogo.png" alt="" />
          <span className="u-brand-name">UPSTRAIL</span>
          <span className="u-brand-tag">Planning for SMEs</span>
        </div>

        <nav className="u-nav u-hide-sm" aria-label="Sections">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <Blueprint as="a" href="#demo" className="btn btn-primary">
          Request a demo
        </Blueprint>
      </div>
    </header>
  );
}
