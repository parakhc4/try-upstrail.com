import Blueprint from '../components/Blueprint';
import SectionHead from '../components/SectionHead';

/* A real plant, anonymised. Every line on the left is something they told
   us on the floor; every line on the right is what the plan does about it. */
const ROWS = [
  {
    today: 'Customer schedules arrive on the 5th. The machine plan is ready on the 7th, after two days in Excel.',
    with: 'The plan is ready the same day. Every job on a machine, in order, with changeovers counted.',
  },
  {
    today: 'The two 450-tonne machines run at 30%. The small ones run at 90% and still miss dates.',
    with: 'Work is spread across machines by what each one can actually do: tonnage, mould, insert.',
  },
  {
    today: 'Fifteen changeovers a week. Forty-five minutes to unload, an hour to load. Twenty-six hours of machines not moulding.',
    with: 'Jobs are sequenced so black follows natural, not the other way round. Fewer changeovers, and the cheap ones.',
  },
  {
    today: 'Mid-week the customer wants more. Someone opens the sheet, sees what is done, and pushes something out.',
    with: 'One button. A new plan in minutes, and a list of exactly what moved and why.',
  },
  {
    today: 'Deliveries slip because a man was absent, a machine was down, or an insert was not there.',
    with: 'The plan knows manpower per shift, mould service during unload, and where every insert is.',
  },
  {
    today: 'Most material comes in ten days. Some takes forty-five. You guess three months ahead.',
    with: 'It tells you what to order and when, from the forecast, before the 45-day material is late.',
  },
];

export default function Familiar() {
  return (
    <section id="familiar" className="u-section u-section-tint">
      <div className="u-shell u-band">
        <SectionHead kicker="Sound familiar?" title="A moulding plant we visited">
          Twenty machines, 25 to 450 tonnes. Fifty-odd grades of granule, twenty-odd inserts. Two
          shifts of twelve hours. The machine plan is made in Excel. This is their month, and what
          changes.
        </SectionHead>

        <Blueprint className="u-compare u-plate-soft">
          <div className="u-compare-head" aria-hidden="true">
            <span>Today</span>
            <span>With Upstrail</span>
          </div>
          {ROWS.map((row) => (
            <div className="u-compare-row" key={row.today.slice(0, 30)}>
              <div className="u-compare-cell">
                <span className="u-compare-tag">Today</span>
                {row.today}
              </div>
              <div className="u-compare-cell">
                <span className="u-compare-tag">With Upstrail</span>
                {row.with}
              </div>
            </div>
          ))}
        </Blueprint>
      </div>
    </section>
  );
}
