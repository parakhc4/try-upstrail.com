/* The page's whole claim, drawn once.
 *
 * The point is that one line STOPS and the other STARTS, at the same moment —
 * so the ERP lane ends in a blunt terminal at today rather than continuing
 * dashed, the empty ground to its right is drawn as an explicitly empty box,
 * and Upstrail's lane exists only where it actually works. Coordinates are
 * laid out at the size the figure is shown, so the type stays legible. */

const NOW = 470;
const LEFT = 60;
const RIGHT = 1100;
const ERP_Y = 122;
const UPS_Y = 224;

const RECORDED = [
  { x: 122, label: 'orders' },
  { x: 210, label: 'receipts' },
  { x: 298, label: 'issues' },
  { x: 386, label: 'invoices' },
];

const PLANNED = [
  { x: 566, label: 'forecast' },
  { x: 706, label: 'capacity & material' },
  { x: 846, label: 'sequence' },
  { x: 986, label: 'commit' },
];

const VOID_X = NOW + 28;

export default function RecordVsPlan() {
  return (
    <svg
      className="u-fig-svg"
      viewBox="0 0 1160 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="fig-rvp-t fig-rvp-d"
    >
      <title id="fig-rvp-t">Where the ERP record stops and planning begins</title>
      <desc id="fig-rvp-d">
        A timeline divided at today. To the left, the ERP records orders, receipts, issues and
        invoices, and its line stops dead at today. To the right of that line it holds nothing. That
        is where Upstrail works: forecast, then capacity and material constraints, then sequence,
        then a commitment — built from the history the ERP already has.
      </desc>

      {/* the two grounds */}
      <rect x={LEFT} y="56" width={NOW - LEFT} height="200" fill="var(--color-text)" fillOpacity="0.04" />
      <rect x={NOW} y="56" width={RIGHT - NOW} height="200" fill="var(--color-accent)" fillOpacity="0.09" />

      {/* region headings */}
      <text className="u-fig-h" x={LEFT} y="40">Recorded</text>
      <text className="u-fig-sub" x={LEFT + 112} y="40">what already happened</text>
      <text className="u-fig-h u-fig-h-accent" x={NOW + 20} y="40">Planned</text>
      <text className="u-fig-sub" x={NOW + 118} y="40">what happens next — every decision you are paid to make</text>

      {/* today — the division everything else hangs off */}
      <line x1={NOW} y1="48" x2={NOW} y2="268" stroke="var(--color-text)" strokeWidth="3" />
      <text className="u-fig-now" x={NOW} y="288" textAnchor="middle">TODAY</text>

      {/* ── the ERP's lane: runs, then hits a wall ── */}
      <text className="u-fig-lane" x={LEFT} y={ERP_Y - 32}>Your ERP</text>
      <line x1={LEFT} y1={ERP_Y} x2={NOW} y2={ERP_Y} stroke="var(--color-neutral-800)" strokeWidth="2.5" />
      {RECORDED.map((p) => (
        <g key={p.label}>
          <rect x={p.x - 5} y={ERP_Y - 5} width="10" height="10" fill="var(--color-neutral-800)" />
          <text className="u-fig-tick" x={p.x} y={ERP_Y + 24} textAnchor="middle">{p.label}</text>
        </g>
      ))}
      {/* the blunt terminal */}
      <line x1={NOW - 2} y1={ERP_Y - 15} x2={NOW - 2} y2={ERP_Y + 15} stroke="var(--color-neutral-800)" strokeWidth="4" />

      {/* and the nothing past it */}
      <rect
        x={VOID_X} y={ERP_Y - 30} width={RIGHT - VOID_X} height="60"
        fill="none" stroke="var(--color-neutral-400)" strokeWidth="1" strokeDasharray="5 6"
      />
      <text className="u-fig-void" x={(VOID_X + RIGHT) / 2} y={ERP_Y - 4} textAnchor="middle">
        MRP lists planned orders and stops
      </text>
      <text className="u-fig-void-sub" x={(VOID_X + RIGHT) / 2} y={ERP_Y + 18} textAnchor="middle">
        no forecast · no capacity · no sequence · no reason
      </text>

      {/* history feeds the forecast */}
      <path
        d={`M210 ${ERP_Y + 34} L210 ${UPS_Y} L${NOW - 20} ${UPS_Y}`}
        fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="4 5" strokeOpacity="0.6"
      />
      <path d={`M${NOW - 20} ${UPS_Y - 5} L${NOW - 8} ${UPS_Y} L${NOW - 20} ${UPS_Y + 5} Z`} fill="var(--color-accent)" fillOpacity="0.6" />
      <text className="u-fig-note-dim" x="222" y={UPS_Y - 10}>reads the history it already has</text>

      {/* ── the lane Upstrail works in ── */}
      <text className="u-fig-lane u-fig-lane-accent" x={NOW + 20} y={UPS_Y - 32}>Upstrail</text>
      <line x1={NOW} y1={UPS_Y} x2={RIGHT} y2={UPS_Y} stroke="var(--color-accent)" strokeWidth="3" />
      {PLANNED.map((p) => (
        <g key={p.label}>
          <rect x={p.x - 5} y={UPS_Y - 5} width="10" height="10" fill="var(--color-accent)" />
          <text className="u-fig-tick u-fig-tick-accent" x={p.x} y={UPS_Y + 24} textAnchor="middle">
            {p.label}
          </text>
        </g>
      ))}
      <line x1={RIGHT} y1={UPS_Y} x2={RIGHT + 22} y2={UPS_Y} stroke="var(--color-accent)" strokeWidth="3" />
      <path d={`M${RIGHT + 20} ${UPS_Y - 7} L${RIGHT + 36} ${UPS_Y} L${RIGHT + 20} ${UPS_Y + 7} Z`} fill="var(--color-accent)" />
    </svg>
  );
}
