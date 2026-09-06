import Blueprint from '../components/Blueprint';

const SPEC = [
  { key: 'Monthly machine plan', value: 'Minutes' },
  { key: 'Replan when the customer calls', value: 'One click' },
  { key: 'Your ERP', value: 'Stays. We connect to it' },
  { key: 'Running today at', value: 'A precision machining plant' },
];

export default function Hero() {
  return (
    <section className="u-section">
      <div className="u-shell u-band-hero">
        <div className="u-hero-grid">
          <div>
            <h1 className="u-h1">
              Stop planning your factory <span className="u-h1-accent">in Excel.</span>
            </h1>
            <p className="u-hero-copy">
              Upstrail connects to the ERP you already have and does the planning it cannot: your
              monthly machine plan in minutes, and again when the customer calls. It knows your
              machines, your routings and setup times, your inserts and moulds, your shifts and
              your suppliers.
            </p>
            <div className="u-cta-row">
              <Blueprint as="a" href="#demo" className="btn btn-primary btn-lg">
                Talk to us
              </Blueprint>
              <a href="#product" className="btn btn-secondary btn-lg">See the screens</a>
            </div>
          </div>

          <Blueprint className="u-spec u-plate">
            <div className="u-plate-label">In short</div>
            {SPEC.map((row) => (
              <div className="u-spec-row" key={row.key}>
                <span className="u-spec-key">{row.key}</span>
                <span className="u-spec-val">{row.value}</span>
              </div>
            ))}
            <p className="u-note">One plant, one subscription, setup included. Live in under three months.</p>
          </Blueprint>
        </div>
      </div>
    </section>
  );
}
