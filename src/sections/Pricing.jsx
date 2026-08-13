import Blueprint from '../components/Blueprint';
import Positioning from '../components/diagrams/Positioning';
import SectionHead from '../components/SectionHead';

const INCLUDED = [
  'Demand forecasting and constrained supply planning',
  'AI schema mapping to your ERP, re run whenever it changes',
  'Your vertical pack, configured to your routings and calendars',
  'Planner onboarding and the explainer layer for change management',
];

const ALTERNATIVES = [
  { name: 'Enterprise APS suite', cost: '12 to 24 months, seven figure programme' },
  { name: 'Low-cost planning add-on', cost: 'Cheap, but no constraint model and no configurability' },
  { name: 'Custom build', cost: 'Two developers and a solver you now have to maintain' },
  { name: 'The Excel file', cost: 'Free, until the planner resigns' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="u-section u-section-tint">
      <div className="u-shell u-band" data-reveal>
        <SectionHead kicker="06 / Price" title={<>Built to be<br />affordable</>}>
          The good planning tools were priced for companies a hundred times your size, and the
          affordable ones cannot be bent to fit your process. Upstrail is an annual subscription per
          plant with the vertical pack and the implementation included, sized against what a
          planner&apos;s time is already costing you. We will put a number on the table in the first
          call.
        </SectionHead>

        <div className="u-grid-2">
          <Blueprint className="u-price u-plate">
            <div className="u-price-kicker">Single plant, one vertical pack</div>
            <div className="u-price-headline">One subscription.<br />Implementation included.</div>
            <p className="u-price-copy">
              Not a separate seven figure engagement bolted onto a licence. It scales by plant and
              by planner seat, and you can walk away after the first quarter if the plan is not
              better than the one you build in Excel.
            </p>
            <div className="u-list">
              {INCLUDED.map((item) => (
                <div className="u-list-item" key={item}>
                  <span className="u-plus" aria-hidden="true">+</span>{item}
                </div>
              ))}
            </div>
          </Blueprint>

          {/* The comparison as a position, not a list of four sentences. */}
          <Blueprint className="u-figure">
            <div className="u-plate-label">What you are comparing against</div>
            <div className="u-scroll-x">
              <Positioning />
            </div>
          </Blueprint>
        </div>
      </div>
    </section>
  );
}
