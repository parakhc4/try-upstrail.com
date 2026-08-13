import Blueprint from '../components/Blueprint';
import ConstraintMatrix from '../components/diagrams/ConstraintMatrix';
import Disclosure from '../components/Disclosure';
import SectionHead from '../components/SectionHead';

const PACKS = [
  {
    title: 'Auto components',
    copy: 'Customer schedule volatility, tiered delivery windows, line-side sequencing and PPAP-constrained supplier switching.',
  },
  {
    title: 'Food & beverage / FMCG',
    copy: 'Shelf life and FEFO lot planning, promotion lift, seasonality, and campaign runs with changeover penalties.',
  },
  {
    title: 'Chemicals',
    copy: 'Batch and campaign scheduling, co-products and yields, tank and reactor capacity, and grade-change sequencing.',
  },
  {
    title: 'Electronics / EMS',
    copy: 'Long-lead component allocation, clear-to-build by kit, alternate parts, and NPI ramp against shared SMT lines.',
  },
  {
    title: 'Engineering & fabrication',
    copy: 'Make-to-order projects, multi-level subcontracting, drawing-driven BOMs and shared bottleneck machines.',
  },
  {
    title: 'Packaging',
    copy: 'Reel and sheet conversion, trim and waste optimisation, print changeovers and customer-specific artwork SKUs.',
  },
];

export default function Verticals() {
  return (
    <section id="verticals" className="u-section u-section-tint">
      <div className="u-shell u-band-sm" data-reveal>
        <SectionHead kicker="04 / Coverage" title={<>80% is already<br />built for you</>}>
          Each vertical ships as a pack: the planning model, the constraints that actually bind in
          that industry, and the reports a plant head in that industry asks for. Configuration is
          the remaining 20%: your routings, your calendars, your customer priorities.
        </SectionHead>

        {/* The section's real point, as a grid: every vertical is a different
            planning problem. The packs below carry the prose. */}
        <Blueprint className="u-figure" style={{ marginBottom: 24 }}>
          <ConstraintMatrix />
        </Blueprint>

        {/* One frame with hairline rules, not six — the six separate framed
            cards were most of the visual noise on this screen. */}
        <Blueprint className="u-packs">
          {PACKS.map((pack, i) => (
            <div className="u-pack" key={pack.title}>
              <div className="u-pack-kicker">Pack {String(i + 1).padStart(2, '0')}</div>
              <Disclosure titleClassName="u-pack-title" summary={pack.title}>
                <p className="u-pack-copy">{pack.copy}</p>
              </Disclosure>
            </div>
          ))}
        </Blueprint>

        <p className="u-footnote">
          Working on Microsoft Dynamics, Zoho, Odoo or an in-house system. Anything with a readable
          database or a regular export can be mapped.
        </p>
      </div>
    </section>
  );
}
