import { Fragment, useRef, useState } from 'react';
import AppPanel from '../components/AppPanel';

/* ────────────────────────────────────────────────────────────────────────
   One order, walked through five screens. The arithmetic is the point, so
   it reconciles across all of them:

     OP-20 on CNC-LATHE-02 runs PIN-7742 at 0.35 h/unit
     900 units ordered            → 315 h required
     CNC-LATHE-02 week 34         → 315 h capacity, 441 h requested (140%)
     SO-4471 holds priority       → 126 h, leaving 189 h
     189 h / 0.35                 → 540 units built, 360 short
     360 units                    → 126 h, exactly the week's deficit
   ──────────────────────────────────────────────────────────────────────── */

const ORDER_ID = 'SO-4468';

const DEMAND_FACTS = [
  { key: 'Item', value: 'PIN-7742' },
  { key: 'Customer', value: 'Meridian Drives' },
  { key: 'Priority', value: 'Tier 1' },
  { key: 'Due date', value: '2026-08-21', mono: true },
  { key: 'Quantity', value: '900', mono: true },
  { key: 'Bucket', value: 'Week 34', mono: true },
];

/* Bars scale against 150% so the overload has somewhere to go. */
const LOAD_SCALE = 150;
const LOAD = [
  { week: 'W32', pct: 74 },
  { week: 'W33', pct: 92 },
  { week: 'W34', pct: 140 },
  { week: 'W35', pct: 96 },
  { week: 'W36', pct: 68 },
];

const INVENTORY = [
  { bucket: 'W33', open: '180', receipts: '240', demand: '420', close: '0' },
  { bucket: 'W34', open: '0', receipts: '540', demand: '900', close: '−360', short: true },
  { bucket: 'W35', open: '−360', receipts: '700', demand: '340', close: '0' },
  { bucket: 'W36', open: '0', receipts: '260', demand: '260', close: '0' },
];

const CAL_DAYS = ['Mon 17', 'Tue 18', 'Wed 19', 'Thu 20', 'Fri 21'];
const CAL_ROWS = [
  {
    machine: 'CNC-LATHE-02',
    note: '315 h capacity · full',
    blocks: [
      { start: 1, span: 2, label: 'SO-4471 · HSG-2209 · 126 h' },
      { start: 3, span: 3, label: 'SO-4468 · PIN-7742 · 540 units · 189 h', traced: true },
    ],
  },
  {
    machine: 'CNC-LATHE-05',
    note: 'no PIN-7742 tooling',
    blocks: [{ start: 1, span: 3, label: 'SO-4455 · BRKT-1180' }],
  },
  {
    machine: 'HOB-11',
    note: '',
    blocks: [{ start: 2, span: 3, label: 'SO-4501 · GEAR-8820' }],
  },
];

const CONSTRAINT = [
  { key: 'Resource', value: 'CNC-LATHE-02' },
  { key: 'Bucket', value: 'Week 34', mono: true },
  { key: 'Capacity', value: '315 h', mono: true },
  { key: 'Requested', value: '441 h', mono: true },
  { key: 'Deficit', value: '126 h', mono: true, bad: true },
  { key: 'At 0.35 h/unit', value: '360 units', mono: true, bad: true },
];

const ACTIONS = [
  { action: 'Add a Saturday shift on CNC-LATHE-02', lever: '+63 h', impact: 'recovers 180 of 360' },
  {
    action: 'Move SO-4471 to week 35',
    lever: 'frees 126 h',
    impact: 'recovers 360 of 360',
    best: true,
  },
  { action: 'Subcontract OP-20 for 360 units', lever: '+₹1.9 L', impact: 'recovers 360 of 360' },
];

/* ── the five panels ──────────────────────────────────────────────────── */

function DemandPanel() {
  return (
    <AppPanel crumbs={['Demand', ORDER_ID]} meta="v3 · tier 1 · firm">
      <div className="u-app-facts">
        {DEMAND_FACTS.map((fact) => (
          <div className="u-app-fact" key={fact.key}>
            <div className="u-app-fact-k">{fact.key}</div>
            <div className={`u-app-fact-v${fact.mono ? ' u-app-mono' : ''}`}>{fact.value}</div>
          </div>
        ))}
      </div>
      <div className="u-app-result">
        <span className="u-app-chip u-app-chip-warn">Partial</span>
        <span className="u-app-result-figure u-app-mono">
          540 <span className="u-app-result-of">of 900</span>
        </span>
        <div className="u-app-fill-track u-app-fill-track-wide">
          <div className="u-app-fill-bar" style={{ width: '60%' }} />
        </div>
        <span className="u-app-result-note">360 units short of the 21 Aug commitment</span>
      </div>
      <p className="u-app-caption">
        The order as the ERP holds it. Everything after this is the plan reasoning about it.
      </p>
    </AppPanel>
  );
}

function LoadPanel() {
  return (
    <AppPanel crumbs={['Resources', 'CNC-LATHE-02']} meta="load · weeks 32–36">
      <div className="u-app-load">
        <span className="u-app-load-week" />
        <span className="u-app-load-cap-label">100% capacity</span>
        <span />
        {LOAD.map((week) => (
          <Fragment key={week.week}>
            <span className="u-app-load-week u-app-mono">{week.week}</span>
            <div className="u-app-load-track">
              <div
                className="u-app-load-in"
                style={{ width: `${(Math.min(week.pct, 100) / LOAD_SCALE) * 100}%` }}
              />
              {week.pct > 100 && (
                <div
                  className="u-app-load-over"
                  style={{ width: `${((week.pct - 100) / LOAD_SCALE) * 100}%` }}
                />
              )}
              <span className="u-app-load-cap" style={{ left: `${(100 / LOAD_SCALE) * 100}%` }} />
            </div>
            <span className={`u-app-load-val u-app-mono${week.pct > 100 ? ' u-app-neg' : ''}`}>
              {week.pct}%
            </span>
          </Fragment>
        ))}
      </div>
      <p className="u-app-caption">
        Week 34 asks for 441 h against 315 h of capacity. Your ERP would have planned all of it
        anyway — MRP assumes the machine is infinite.
      </p>
    </AppPanel>
  );
}

function InventoryPanel() {
  return (
    <AppPanel crumbs={['Inventory', 'PIN-7742']} meta="projected on hand · units">
      <div className="u-app-table-wrap">
        <table className="u-app-table">
          <thead>
            <tr>
              <th>Bucket</th>
              <th className="u-app-num">Opening</th>
              <th className="u-app-num">Planned receipts</th>
              <th className="u-app-num">Demand</th>
              <th className="u-app-num">Projected close</th>
            </tr>
          </thead>
          <tbody>
            {INVENTORY.map((row) => (
              <tr key={row.bucket} className={row.short ? 'u-app-row-hot' : undefined}>
                <td className="u-app-mono u-app-item">{row.bucket}</td>
                <td className="u-app-mono u-app-num">{row.open}</td>
                <td className="u-app-mono u-app-num">{row.receipts}</td>
                <td className="u-app-mono u-app-num">{row.demand}</td>
                <td className={`u-app-mono u-app-num${row.short ? ' u-app-neg' : ''}`}>
                  {row.close}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="u-app-caption">
        Only 540 of the 900 arrive in time, so projected stock goes 360 negative in week 34. The
        balance is recovered in week 35 — two weeks after the customer needed it.
      </p>
    </AppPanel>
  );
}

function ProductionPanel() {
  return (
    <AppPanel crumbs={['Production', 'Week 34']} meta="17–21 Aug 2026 · OP-20 turning">
      <div className="u-scroll-x">
        <div className="u-app-cal">
          <div className="u-app-cal-row">
            <span />
            <div className="u-app-cal-lane u-app-cal-lane-head">
              {CAL_DAYS.map((day) => (
                <span className="u-app-cal-day" key={day}>{day}</span>
              ))}
            </div>
          </div>

          {CAL_ROWS.map((row) => (
            <div className="u-app-cal-row" key={row.machine}>
              <div>
                <div className="u-app-cal-machine">{row.machine}</div>
                {row.note && <div className="u-app-cal-note">{row.note}</div>}
              </div>
              <div className="u-app-cal-lane">
                {row.blocks.map((block) => (
                  <span
                    key={block.label}
                    className={`u-app-cal-block${block.traced ? ' is-traced' : ''}`}
                    style={{ gridColumn: `${block.start} / span ${block.span}` }}
                  >
                    {block.label}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="u-app-cal-row u-app-cal-spill">
            <span className="u-app-cal-machine">Unplaced</span>
            <div className="u-app-cal-lane">
              <span className="u-app-cal-block is-unplaced" style={{ gridColumn: '3 / span 3' }}>
                SO-4468 · PIN-7742 · 360 units · 126 h → week 35
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="u-app-caption">
        SO-4471 holds priority and takes the first 126 h, which leaves 189 h — exactly 540 units.
        CNC-LATHE-05 is free on Thursday but has no PIN-7742 tooling, so the solver could not move
        the work there.
      </p>
    </AppPanel>
  );
}

function ExceptionPanel() {
  return (
    <AppPanel crumbs={['Results', `Exception · ${ORDER_ID}`]} meta="root cause · capacity">
      <div className="u-app-rootcause">
        <span className="u-app-chip u-app-chip-warn">Capacity Bottleneck</span>
        <span className="u-app-rootcause-text">
          <span className="u-app-item">CNC-LATHE-02</span> bound in week 34. Nothing upstream was
          short and no material was missing.
        </span>
      </div>

      <div className="u-app-facts">
        {CONSTRAINT.map((fact) => (
          <div className="u-app-fact" key={fact.key}>
            <div className="u-app-fact-k">{fact.key}</div>
            <div
              className={`u-app-fact-v${fact.mono ? ' u-app-mono' : ''}${fact.bad ? ' u-app-neg' : ''}`}
            >
              {fact.value}
            </div>
          </div>
        ))}
      </div>

      <div className="u-app-actions">
        {ACTIONS.map((row) => (
          <div className="u-app-action-row" key={row.action}>
            <span className="u-app-action-name">
              {row.action}
              {row.best && <span className="u-app-chip u-app-chip-ok">Recommended</span>}
            </span>
            <span className="u-app-action-impact">
              <span className="u-app-mono u-app-ink">{row.lever}</span>
              <span className="u-app-action-arrow" aria-hidden="true">→</span>
              <span>{row.impact}</span>
            </span>
          </div>
        ))}
      </div>

      <p className="u-app-caption">
        This is the sentence a planner repeats to the plant head. The number, the machine, the week
        and the trade-off — not &ldquo;the system says 540&rdquo;.
      </p>
    </AppPanel>
  );
}

/* ── the thread ───────────────────────────────────────────────────────── */

const STEPS = [
  {
    title: 'Demand',
    question: 'What was asked for',
    copy: 'One line off a customer schedule: 900 units of PIN-7742 for Meridian Drives, wanted on 21 August. The plan comes back saying 540. The next four screens are why.',
    panel: <DemandPanel />,
  },
  {
    title: 'Resource loading',
    question: 'Where it has to be made',
    copy: 'PIN-7742 turns on CNC-LATHE-02 at 0.35 h a unit, so 900 units is 315 hours of that machine. Week 34 is already carrying other work, and the total lands at 140% of what the week actually has.',
    panel: <LoadPanel />,
  },
  {
    title: 'Inventory plan',
    question: 'What that does to stock',
    copy: 'Netted against opening stock and everything else due out, the shortfall lands squarely in week 34 and shows up as projected on hand going negative.',
    panel: <InventoryPanel />,
  },
  {
    title: 'Production plan',
    question: 'What actually got scheduled',
    copy: 'The solver loads the week by priority. SO-4471 goes on first, PIN-7742 gets what is left, and the remainder has nowhere to sit until week 35.',
    panel: <ProductionPanel />,
  },
  {
    title: 'The exception',
    question: 'Why it came back partial',
    copy: 'The same 126 hours, expressed as the decision you can act on — with what each option costs and what it buys back.',
    panel: <ExceptionPanel />,
  },
];

/**
 * The five steps as a single-open accordion hung off the thread: every title
 * stays visible so the whole story is scannable, but only the step you are on
 * renders its screen. The thread reads as progress — solid down to the step
 * you have reached, faint below it.
 */
export default function PlanTrace() {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  const openStep = (i, { moveFocus = false } = {}) => {
    setActive(i);
    // The header button is reconciled in place rather than remounted, so it is
    // safe to focus straight away; focusing also scrolls it into view, which
    // is what we want after the previous step collapses.
    if (moveFocus) listRef.current?.querySelectorAll('.u-trace-head')[i]?.focus();
  };

  // Standard accordion keys: arrows walk the headers, Home/End jump the ends.
  const onKeyDown = (e, i) => {
    const targets = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: STEPS.length - 1 };
    if (!(e.key in targets)) return;
    e.preventDefault();
    openStep((targets[e.key] + STEPS.length) % STEPS.length, { moveFocus: true });
  };

  return (
    <div className="u-trace-block">
      <div className="u-trace-intro">
        <div>
          <div className="u-kicker">Pull the thread</div>
          <h3 className="u-trace-heading">One order,<br />all the way down</h3>
        </div>
        <p className="u-lead">
          Take any one of those 31 and follow it. Every screen hands the next one its numbers, so
          the answer at the bottom is the same 126 hours of one machine that the second screen
          already showed you. Nothing here is a black box you have to take on trust.
        </p>
      </div>

      <div className="u-trace" ref={listRef}>
        {STEPS.map((step, i) => {
          const isOpen = i === active;
          const next = STEPS[i + 1];
          return (
            <section
              key={step.title}
              className={`u-trace-step${isOpen ? ' is-open' : ''}${i < active ? ' is-past' : ''}`}
            >
              <div className="u-trace-rail" aria-hidden="true">
                <span className="u-trace-node">{String(i + 1).padStart(2, '0')}</span>
              </div>

              <div className="u-trace-content">
                <h4 className="u-trace-title-wrap">
                  <button
                    type="button"
                    className="u-trace-head"
                    id={`trace-head-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`trace-body-${i}`}
                    onClick={() => openStep(i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                  >
                    <span className="u-trace-title">{step.title}</span>
                    <span className="u-trace-rule" aria-hidden="true" />
                    <span className="u-trace-q">{step.question}</span>
                  </button>
                </h4>

                <div className="u-trace-body">
                  <div
                    className="u-trace-body-clip"
                    id={`trace-body-${i}`}
                    role="region"
                    aria-labelledby={`trace-head-${i}`}
                    inert={!isOpen}
                  >
                    <div className="u-trace-body-inner">
                      <p className="u-trace-copy">{step.copy}</p>
                      {step.panel}
                      {next ? (
                        <button
                          type="button"
                          className="btn btn-secondary u-trace-next"
                          onClick={() => openStep(i + 1, { moveFocus: true })}
                        >
                          Next · {next.title} <span aria-hidden="true">→</span>
                        </button>
                      ) : (
                        <a href="#demo" className="btn btn-secondary u-trace-next">
                          See this for your plant <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <p className="u-trace-close">
        Five screens, one thread. Any number on any of them can be walked back to the constraint
        that produced it — which is the whole reason a planner will defend it.
      </p>
    </div>
  );
}
