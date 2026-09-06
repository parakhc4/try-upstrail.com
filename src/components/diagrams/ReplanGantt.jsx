import Blueprint from '../Blueprint';

/* One 450-tonne machine, one week, before and after the customer calls on
   Wednesday morning. The extra work goes in, one job slides a day and
   finishes on another machine that has the mould, nothing goes late, and
   the plan says so. Plain HTML so it reflows. */

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const BEFORE = [
  { label: 'Housing, black, 5,000', start: 1, span: 3 },
  { label: 'Cover, natural, 3,000', start: 4, span: 3 },
];

const AFTER = [
  { label: 'Housing, black, 5,000', start: 1, span: 3 },
  { label: '+2,000 housing', start: 4, span: 1, kind: 'new' },
  { label: 'Cover, natural, 2,400', start: 5, span: 2, kind: 'moved' },
];

function Row({ label, blocks }) {
  return (
    <div className="u-replan-row">
      <span className="u-replan-label">{label}</span>
      <div className="u-replan-lane">
        {blocks.map((b) => (
          <span
            key={b.label}
            className={`u-replan-block${b.kind ? ` is-${b.kind}` : ''}`}
            style={{ gridColumn: `${b.start} / span ${b.span}` }}
          >
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ReplanGantt() {
  return (
    <Blueprint className="u-replan u-plate-soft">
      <div className="u-scroll-x">
        <div className="u-replan-inner">
          <div className="u-replan-scale" aria-hidden="true">
            <span>450 t, machine 17</span>
            {DAYS.map((d) => <span key={d}>{d}</span>)}
          </div>

          <Row label="Before" blocks={BEFORE} />

          <div className="u-replan-event">
            <span className="u-mono">Wed 11:10</span>
            <span>
              The customer wants <strong>2,000 more housings by Saturday</strong>. The planner
              presses Replan.
            </span>
          </div>

          <Row label="After" blocks={AFTER} />

          <div className="u-replan-foot">
            <span>
              The housings go in on Thursday. The covers slide a day, and their last 600 finish on
              machine 12, which has the mould and the insert free. Nothing is late.
            </span>
            <span className="u-replan-stat">3 moves, none late, 4 minutes</span>
          </div>
        </div>
      </div>
    </Blueprint>
  );
}
