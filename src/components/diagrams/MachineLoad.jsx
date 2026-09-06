import Blueprint from '../Blueprint';

/* The plant's machines grouped by tonnage. Two 450-tonne machines at 30%
   while the small ones run at 90%: the work went where it had always gone
   in the sheet, not where the mould would also fit. Plain HTML so it stacks
   on a phone instead of scrolling. */

const GROUPS = [
  { label: '450 t', count: 2, today: 30, after: 72 },
  { label: '250 t', count: 6, today: 85, after: 76 },
  { label: '100 t', count: 8, today: 90, after: 74 },
  { label: '25 to 50 t', count: 4, today: 90, after: 70 },
];

function Column({ title, field }) {
  return (
    <div className="u-load-col">
      <div className="u-load-title">{title}</div>
      {GROUPS.map((g) => {
        const pct = g[field];
        return (
          <div className="u-load-row" key={g.label}>
            <span className="u-load-label">
              {g.label} <span className="u-load-count">× {g.count}</span>
            </span>
            <div className="u-load-track" aria-hidden="true">
              <div className={`u-load-bar${pct < 50 ? ' is-low' : ''}`} style={{ width: `${pct}%` }} />
            </div>
            <span className="u-load-pct">{pct}%</span>
            <span className="u-sr">{`${g.count} machines at ${g.label}: ${pct} percent loaded`}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function MachineLoad() {
  return (
    <Blueprint className="u-load u-plate-soft">
      <Column title="Today, from the sheet" field="today" />
      <Column title="With Upstrail, same jobs, same month" field="after" />
    </Blueprint>
  );
}
