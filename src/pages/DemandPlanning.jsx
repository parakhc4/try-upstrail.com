import PageShell from '../components/PageShell';
import Blueprint from '../components/Blueprint';
import Cell from '../components/Cell';
import Fold from '../components/Fold';
import SectionHead from '../components/SectionHead';
import Screen from '../components/Screen';
import Demo from '../sections/Demo';
import ForecastChart from '../components/diagrams/ForecastChart';
import LeadTimes from '../components/diagrams/LeadTimes';
import { SCREENS } from '../screens';

const SPEC = [
  { key: 'Forecast', value: '3 months out' },
  { key: 'Lead times', value: '10 days and 45 days' },
  { key: 'Share of business', value: 'Honoured per supplier' },
  { key: 'Your overrides', value: 'Kept, with a reason' },
];

const THINGS = [
  {
    title: 'Reads your schedules and history',
    copy: 'The customer schedule that arrives on the 5th, and what you actually sold each month before it, straight from your ERP. Together, not one at a time.',
  },
  {
    title: 'Forecasts three months out',
    copy: 'With the seasonal peak in it, the one a three-month average finds out about in the month it happens.',
  },
  {
    title: 'Tells you what to order, from whom, and when',
    copy: 'Ten-day material when the schedule comes. Forty-five-day material from the forecast, with the date you have to order by. Each requirement split between your suppliers by the share you have agreed.',
  },
];

export default function DemandPlanning() {
  return (
    <PageShell page="demand-planning">
      <section className="u-section u-page-hero">
        <div className="u-shell u-band-hero">
          <div className="u-crumb">
            <a href="/">Upstrail</a><span aria-hidden="true">/</span>
            <span>Demand planning</span>
          </div>

          <div className="u-hero-grid">
            <div>
              <h1 className="u-h1">
                Know what to buy, <span className="u-h1-accent">and when.</span>
              </h1>
              <p className="u-hero-copy">
                Upstrail reads your customer schedules and your sales history from your ERP,
                forecasts three months ahead, and tells you what raw material to order, from which
                supplier, and by which date, so the 45-day material is never the reason a delivery
                slips.
              </p>
              <div className="u-cta-row">
                <Blueprint as="a" href="#demo" className="btn btn-primary btn-lg">
                  Talk to us
                </Blueprint>
                <a href="#material" className="btn btn-secondary btn-lg">See the two lead times</a>
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
              <p className="u-note">Item by customer by week. Refreshed every run.</p>
            </Blueprint>
          </div>
        </div>
      </section>

      <section id="what" className="u-section">
        <div className="u-shell u-band">
          <SectionHead kicker="What it does" title="Three things, before the 5th">
            Today the raw-material plan is a guess from a three-month average. This is the guess,
            done properly.
          </SectionHead>

          <Blueprint className="u-cells">
            {THINGS.map((t) => (
              <Cell key={t.title} title={t.title}>
                <p className="u-cell-copy">{t.copy}</p>
              </Cell>
            ))}
          </Blueprint>
        </div>
      </section>

      <section id="peak" className="u-section u-section-tint">
        <div className="u-shell u-band">
          <SectionHead kicker="The peak" title="The average never sees it coming">
            Eighteen months of one part. Demand climbs every autumn and the flat three-month
            average plans 99 a week into a month that needs 139. The shortfall lands on the shop
            floor as an emergency.
          </SectionHead>

          <Blueprint className="u-figure u-plate-soft">
            <div className="u-scroll-x"><ForecastChart /></div>
            <p className="u-fig-cap">
              The forecast follows the shape of last year into this one. Where a customer has sent
              a firm number, that number is used instead, and your planner can override either,
              with a reason that is kept.
            </p>
          </Blueprint>
        </div>
      </section>

      <section id="material" className="u-section">
        <div className="u-shell u-band">
          <SectionHead kicker="Raw material" title="Two kinds of material">
            The ten-day grades you can order when the schedule arrives. The 45-day ones have to be
            ordered from the forecast, six weeks before anyone knows for sure. Upstrail does the
            second one, and tells you the day you are about to be late.
          </SectionHead>
          <LeadTimes />
          <Fold label="See the fulfilment screen" hideLabel="Hide the screen" bodyClassName="u-screens u-fold-gap">
            <Screen {...SCREENS.fulfilment} />
            <p className="u-screens-note" style={{ marginTop: 0 }}>
              What the material plan is for: every customer order, and whether the month will meet
              it, known before the month starts. Demo workspace shown.
            </p>
          </Fold>
        </div>
      </section>

      <section id="suppliers" className="u-section u-section-tint">
        <div className="u-shell u-band">
          <SectionHead kicker="Suppliers" title="Two suppliers, one agreed split">
            When you have promised one supplier 60% of a part and another 40%, the purchase orders
            should say so. Upstrail splits each requirement by the share of business you have
            agreed, honours each supplier’s lead time and minimum order, and tells you when a
            share is drifting. Add an alternate supplier and it plans with that one too.
          </SectionHead>

          <Fold label="See the purchase plan" hideLabel="Hide the screen" bodyClassName="u-screens">
            <Screen {...SCREENS.inventory} />
            <p className="u-screens-note" style={{ marginTop: 0 }}>
              From the precision machining plant that runs it today. The purchase plan at the bottom
              has the same blank on two suppliers, in the split they agreed. Demo workspace shown.
            </p>
          </Fold>
        </div>
      </section>

      <Demo />
    </PageShell>
  );
}
