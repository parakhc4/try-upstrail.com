import Blueprint from '../Blueprint';

/* Two kinds of raw material. The ten-day grades can be ordered when the
   schedule arrives on the 5th. The 45-day ones have to be ordered from the
   forecast, six weeks before anyone knows for sure. */

const ROWS = [
  {
    label: 'Most granules and grades',
    sub: 'black, natural, masterbatch',
    days: 10,
    note: 'Order when the schedule comes',
  },
  {
    label: 'Some grades and inserts',
    sub: 'imported, or made to order',
    days: 45,
    note: 'Order from the forecast, six weeks before',
    long: true,
  },
];

const SCALE = 50;

export default function LeadTimes() {
  return (
    <Blueprint className="u-lt u-plate-soft">
      <div className="u-lt-axis" aria-hidden="true">
        <span>Days from order to gate</span>
        <div className="u-lt-ticks"><span>0</span><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span></div>
      </div>
      {ROWS.map((r) => (
        <div className="u-lt-row" key={r.label}>
          <div>
            <div className="u-lt-label">{r.label}</div>
            <div className="u-lt-sub">{r.sub}</div>
          </div>
          <div className="u-lt-track">
            <div className={`u-lt-bar${r.long ? ' is-long' : ''}`} style={{ width: `${(r.days / SCALE) * 100}%` }}>
              {r.days} days
            </div>
            <div className="u-lt-note">{r.note}</div>
          </div>
        </div>
      ))}
    </Blueprint>
  );
}
