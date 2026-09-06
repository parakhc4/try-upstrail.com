/* Eighteen months of history with a seasonal shape, six months of forecast
   with a widening band, and the flat three-month average most plants use
   drawn across it, which is how you miss the peak. */

const HISTORY = [92, 84, 78, 82, 95, 104, 112, 121, 130, 128, 112, 98, 96, 88, 82, 86, 101, 110];
const FORECAST = [120, 130, 139, 136, 120, 105];
const BAND = [8, 10, 12, 14, 15, 16];
const AVERAGE = Math.round((86 + 101 + 110) / 3); // last three months

const X0 = 70;
const X1 = 1110;
const Y0 = 282;
const Y1 = 44;
const V_MIN = 60;
const V_MAX = 150;
const N = HISTORY.length + FORECAST.length;
const STEP = (X1 - X0) / (N - 1);

const px = (i) => X0 + i * STEP;
const py = (v) => Y0 - ((v - V_MIN) / (V_MAX - V_MIN)) * (Y0 - Y1);
const TODAY_X = px(HISTORY.length - 0.5);

const MONTHS = [
  [0, 'Apr 25'], [3, 'Jul'], [6, 'Oct'], [9, 'Jan 26'], [12, 'Apr'], [15, 'Jul'], [18, 'Oct'], [21, 'Jan 27'],
];

const histPath = HISTORY.map((v, i) => `${i ? 'L' : 'M'}${px(i)} ${py(v)}`).join(' ');
const fcstPath = [HISTORY.at(-1), ...FORECAST]
  .map((v, i) => `${i ? 'L' : 'M'}${px(HISTORY.length - 1 + i)} ${py(v)}`)
  .join(' ');
const bandTop = FORECAST.map((v, i) => `${px(HISTORY.length + i)} ${py(v + BAND[i])}`);
const bandBot = FORECAST.map((v, i) => `${px(HISTORY.length + i)} ${py(v - BAND[i])}`).reverse();
const bandPath = `M${px(HISTORY.length - 1)} ${py(HISTORY.at(-1))} L${bandTop.join(' L')} L${bandBot.join(' L')} Z`;

export default function ForecastChart() {
  return (
    <svg
      className="u-fig-svg u-fig-svg-chart"
      viewBox="0 0 1160 340"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby="fig-fc-t fig-fc-d"
    >
      <title id="fig-fc-t">Eighteen months of history, six months of forecast, and the three-month average</title>
      <desc id="fig-fc-d">
        Demand rises through the autumn peak each year and falls through spring. The forecast
        follows that shape into next autumn with a widening confidence band. The flat three-month
        average sits at 99 and misses the peak of 139 by forty units.
      </desc>

      {/* gridlines and axis */}
      {[60, 90, 120, 150].map((v) => (
        <g key={v}>
          <line x1={X0} y1={py(v)} x2={X1} y2={py(v)} stroke="var(--color-text)" strokeOpacity="0.08" />
          <text className="u-fig-axis" x={X0 - 10} y={py(v) + 4} textAnchor="end">{v}</text>
        </g>
      ))}
      {MONTHS.map(([i, label]) => (
        <text key={label} className="u-fig-axis" x={px(i)} y={Y0 + 22} textAnchor="middle">{label}</text>
      ))}

      {/* the forecast ground */}
      <rect x={TODAY_X} y={Y1 - 10} width={X1 - TODAY_X} height={Y0 - Y1 + 10} fill="var(--color-accent)" fillOpacity="0.06" />
      <line x1={TODAY_X} y1={Y1 - 10} x2={TODAY_X} y2={Y0} stroke="var(--color-text)" strokeWidth="2" />
      <text className="u-fig-now" x={TODAY_X} y={Y1 - 18} textAnchor="middle">Today</text>

      {/* band, history, forecast */}
      <path d={bandPath} fill="var(--color-accent)" fillOpacity="0.14" />
      <path d={histPath} fill="none" stroke="var(--color-neutral-800)" strokeWidth="2.25" strokeLinejoin="round" />
      <path d={fcstPath} fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinejoin="round" />

      {/* the three-month average, flat across the horizon */}
      <line x1={TODAY_X} y1={py(AVERAGE)} x2={X1} y2={py(AVERAGE)} stroke="var(--color-text)" strokeWidth="1.5" strokeDasharray="5 6" />
      <text className="u-fig-note" x={X1} y={py(AVERAGE) + 18} textAnchor="end">3-month average, {AVERAGE}</text>

      {/* the peak the average misses */}
      <line x1={px(HISTORY.length + 2)} y1={py(139)} x2={px(HISTORY.length + 2)} y2={py(AVERAGE)} stroke="var(--color-accent-800)" strokeWidth="1" strokeDasharray="2 3" />
      <rect x={px(HISTORY.length + 2) - 5} y={py(139) - 5} width="10" height="10" fill="var(--color-accent)" />
      <text className="u-fig-note" x={px(HISTORY.length + 2) + 12} y={py(139) - 6}>peak 139</text>
      <text className="u-fig-leg" x={px(HISTORY.length + 2) + 8} y={(py(139) + py(AVERAGE)) / 2 - 6}>+40</text>

      {/* a customer's firm release overriding the model */}
      <rect x={px(HISTORY.length) - 5} y={py(124) - 5} width="10" height="10" fill="var(--color-bg)" stroke="var(--color-accent-800)" strokeWidth="1.5" />
      <text className="u-fig-note-dim" x={px(HISTORY.length) + 14} y={py(124) + 32}>customer said 124, used as is</text>

      {/* legend */}
      <line x1={X0} y1="318" x2={X0 + 26} y2="318" stroke="var(--color-neutral-800)" strokeWidth="2.25" />
      <text className="u-fig-legend" x={X0 + 34} y="322">history</text>
      <line x1={X0 + 112} y1="318" x2={X0 + 138} y2="318" stroke="var(--color-accent)" strokeWidth="3" />
      <text className="u-fig-legend" x={X0 + 146} y="322">forecast</text>
      <rect x={X0 + 228} y="312" width="26" height="12" fill="var(--color-accent)" fillOpacity="0.14" />
      <text className="u-fig-legend" x={X0 + 262} y="322">confidence band</text>
      <line x1={X0 + 392} y1="318" x2={X0 + 418} y2="318" stroke="var(--color-text)" strokeWidth="1.5" strokeDasharray="5 6" />
      <text className="u-fig-legend" x={X0 + 426} y="322">three-month average</text>
    </svg>
  );
}
