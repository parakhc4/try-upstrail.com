import Blueprint from '../components/Blueprint';

const SPEC = [
  { key: 'Time to first live plan', value: '< 3 months' },
  { key: 'Configured out of the box', value: '80%' },
  { key: 'ERP schema mapping', value: 'AI, not ETL' },
  { key: 'Planner up to speed', value: '2 to 3 weeks' },
];

export default function Hero() {
  return (
    <section className="u-section u-grid-bg">
      <div className="u-shell u-band-hero" data-reveal="eager">
        <div className="u-eyebrow">
          <span className="u-eyebrow-dot" aria-hidden="true" />
          <span className="u-eyebrow-text">For manufacturers still planning in Excel</span>
        </div>

        <div className="u-hero-grid">
          <div>
            <h1 className="u-h1">
              Your ERP records<br />what already happened.<br />
              <span className="u-h1-accent">It does not plan<br />what happens next.</span>
            </h1>
            <p className="u-hero-copy">
              That is why the real plan still lives in one planner&apos;s Excel file. Upstrail is
              advanced demand and supply planning built for mid-sized manufacturers. It reads your
              existing ERP as it is, ships 80% configured for your vertical, and is running your
              plan in under three months.
            </p>
            <div className="u-cta-row">
              <Blueprint as="a" href="#demo" className="btn btn-primary btn-lg">
                Request a demo
              </Blueprint>
              <a href="#gap" className="btn btn-secondary btn-lg">See the ERP gap</a>
            </div>
          </div>

          <Blueprint className="u-spec u-plate">
            <div className="u-plate-label">Spec sheet</div>
            {SPEC.map((row) => (
              <div className="u-spec-row" key={row.key}>
                <span className="u-spec-key">{row.key}</span>
                <span className="u-spec-val">{row.value}</span>
              </div>
            ))}
            <p className="u-note">
              Figures describe a standard single-plant rollout on a supported ERP.
            </p>
          </Blueprint>
        </div>
      </div>
    </section>
  );
}
