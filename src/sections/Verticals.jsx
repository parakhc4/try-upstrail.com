import Blueprint from '../components/Blueprint';
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
    <section id="verticals" className="u-section">
      <div className="u-shell u-band">
        <SectionHead kicker="04 / Coverage" title={<>80% is already<br />built for you</>}>
          Each vertical ships as a pack: the planning model, the constraints that actually bind in
          that industry, and the reports a plant head in that industry asks for. Configuration is
          the remaining 20%: your routings, your calendars, your customer priorities.
        </SectionHead>

        <div className="u-grid-3">
          {PACKS.map((pack, i) => (
            <Blueprint className="u-pack" key={pack.title}>
              <div className="u-pack-kicker">Pack {String(i + 1).padStart(2, '0')}</div>
              <Disclosure titleClassName="u-pack-title" summary={pack.title}>
                <p className="u-pack-copy">{pack.copy}</p>
              </Disclosure>
            </Blueprint>
          ))}
        </div>

        <p className="u-footnote">
          Working on Microsoft Dynamics, Zoho, Odoo or an in-house system. Anything with a readable
          database or a regular export can be mapped.
        </p>
      </div>
    </section>
  );
}
