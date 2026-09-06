import Blueprint from '../Blueprint';

/* Where Upstrail sits. The ERP on the left keeps doing what it does; Upstrail
   reads from it and hands back plans. Drawn, not a screenshot, because the
   point is the shape of the arrangement, not any one screen. */

const ERP_HOLDS = [
  'Items, bills of material, routings',
  'Stock, work in progress, orders',
  'Machines, shifts, calendars',
  'Suppliers, lead times, share of business',
];

const PLANS = [
  'Machine plan, every operation in order',
  'Purchase plan, split by supplier',
  'Subcontract plan, what goes out and when',
  'Which orders will be late, and why',
];

function Arrow({ label }) {
  return (
    <div className="u-flow-arrow" aria-hidden="true">
      <span className="u-flow-arrow-label">{label}</span>
      <svg viewBox="0 0 64 20" className="u-flow-arrow-svg">
        <line x1="2" y1="10" x2="54" y2="10" />
        <polyline points="46,3 56,10 46,17" />
      </svg>
    </div>
  );
}

export default function ConnectFlow() {
  return (
    <Blueprint className="u-flow u-plate-soft">
      <div className="u-flow-node">
        <div className="u-flow-label">Your ERP</div>
        <div className="u-flow-title">Tally, Busy, Zoho, SAP Business One, Dynamics, or your own</div>
        <ul className="u-flow-list">
          {ERP_HOLDS.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <p className="u-flow-note">Keeps recording orders, stock and invoices. Nothing changes here.</p>
      </div>

      <Arrow label="reads, every run" />

      <div className="u-flow-node is-core">
        <div className="u-flow-label">Upstrail</div>
        <div className="u-flow-title">Makes the plan</div>
        <ul className="u-flow-list">
          <li>Constrained MRP</li>
          <li>Setup times and changeovers</li>
          <li>Forecast three months out</li>
          <li>Replan in one click</li>
        </ul>
        <p className="u-flow-note">Nothing is written back until you ask.</p>
      </div>

      <Arrow label="gives you" />

      <div className="u-flow-node">
        <div className="u-flow-label">The plans</div>
        <div className="u-flow-title">On screen, or as the Excel your team already shares</div>
        <ul className="u-flow-list">
          {PLANS.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <p className="u-flow-note">Every version kept, so last week and this week can be compared.</p>
      </div>
    </Blueprint>
  );
}
