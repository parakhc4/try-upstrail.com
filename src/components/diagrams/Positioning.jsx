/* The pricing section's argument as a plot: the good tools fit but cost a
   programme, the cheap ones cost little but cannot be bent. Drawn as bare
   hairline axes with square markers — no quadrant shading, no labelled
   corners, because this is a position chart and not a consulting slide. */

const X0 = 96;
const X1 = 836;
const Y0 = 396; // cost = 0
const Y1 = 62; // cost = 100

const px = (fit) => X0 + (fit / 100) * (X1 - X0);
const py = (cost) => Y0 - (cost / 100) * (Y0 - Y1);

const POINTS = [
  {
    name: 'Enterprise APS suite',
    note: '12 to 24 months, seven figures',
    fit: 86, cost: 94, anchor: 'end', dx: -18, dy: 5,
  },
  {
    name: 'Custom build',
    note: 'two developers and a solver to maintain',
    fit: 90, cost: 66, anchor: 'end', dx: -18, dy: 5,
  },
  {
    name: 'Low-cost add-on',
    note: 'no constraint model, no configurability',
    fit: 14, cost: 22, anchor: 'start', dx: 18, dy: 5,
  },
  {
    name: 'The Excel file',
    note: 'free, until the planner resigns',
    fit: 44, cost: 5, anchor: 'start', dx: 18, dy: 5,
  },
  {
    name: 'Upstrail',
    note: 'one subscription, implementation included',
    fit: 80, cost: 28, anchor: 'end', dx: -20, dy: 5, us: true,
  },
];

export default function Positioning() {
  return (
    <svg
      className="u-fig-svg u-fig-svg-plot"
      viewBox="0 0 900 460"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="fig-pos-t fig-pos-d"
    >
      <title id="fig-pos-t">What you are comparing against</title>
      <desc id="fig-pos-d">
        A plot of how well each option fits your process against what it costs to get there. An
        enterprise APS suite and a custom build fit well but cost a programme. A low-cost add-on is
        cheap but cannot be configured. The Excel file is free and fits moderately until the planner
        leaves. Upstrail sits high on fit and low on cost.
      </desc>

      {/* axes */}
      <line x1={X0} y1={Y0} x2={X1 + 30} y2={Y0} stroke="var(--color-text)" strokeOpacity="0.35" strokeWidth="1" />
      <line x1={X0} y1={Y0} x2={X0} y2={Y1 - 26} stroke="var(--color-text)" strokeOpacity="0.35" strokeWidth="1" />
      <path d={`M${X1 + 30} ${Y0 - 4} L${X1 + 40} ${Y0} L${X1 + 30} ${Y0 + 4} Z`} fill="var(--color-text)" fillOpacity="0.35" />
      <path d={`M${X0 - 4} ${Y1 - 26} L${X0} ${Y1 - 36} L${X0 + 4} ${Y1 - 26} Z`} fill="var(--color-text)" fillOpacity="0.35" />

      <text className="u-fig-axis" x={X1 + 40} y={Y0 + 26} textAnchor="end">Fits how you actually plan →</text>
      <text className="u-fig-axis" x={X0 - 12} y={Y1 - 30} textAnchor="start" transform={`rotate(-90 ${X0 - 12} ${Y1 - 30})`}>
        What it costs to get there →
      </text>

      {POINTS.map((p) => {
        const x = px(p.fit);
        const y = py(p.cost);
        const size = p.us ? 13 : 9;
        return (
          <g key={p.name}>
            <rect
              x={x - size / 2} y={y - size / 2} width={size} height={size}
              fill={p.us ? 'var(--color-accent)' : 'var(--color-neutral-500)'}
            />
            <text
              className={`u-fig-point${p.us ? ' u-fig-point-us' : ''}`}
              x={x + p.dx} y={y + p.dy - 8} textAnchor={p.anchor}
            >
              {p.name}
            </text>
            <text className="u-fig-point-note" x={x + p.dx} y={y + p.dy + 10} textAnchor={p.anchor}>
              {p.note}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
