import { useState } from 'react';
import Blueprint from '../components/Blueprint';
import RecordVsPlan from '../components/diagrams/RecordVsPlan';
import SectionHead from '../components/SectionHead';

/* The first four rows carry the argument; the rest are corroboration, so they
   stay one click away rather than making the section a wall of prose. */
const VISIBLE_ROWS = 4;

const ROWS = [
  {
    question: 'How much will we sell?',
    erp: 'Stores sales history. No statistical forecast, no seasonality, no promotion or NPI logic.',
    instead: 'Last-3-month average in Excel, adjusted by gut feel in a Monday meeting.',
  },
  {
    question: 'Can the plant make it?',
    erp: 'MRP explodes the BOM assuming infinite capacity and a fixed lead time per item.',
    instead: 'A separate capacity sheet per work centre, reconciled by hand every week.',
  },
  {
    question: 'What do we make first?',
    erp: 'Generates every planned order at once. No priority, no trade-off between customers.',
    instead: 'Whichever customer called last, or whoever shouts loudest on the shop floor.',
  },
  {
    question: 'Which machine, in what sequence?',
    erp: 'Holds a routing as static text. It does not load operations onto a dated machine calendar or sequence them against each other.',
    instead: 'A line loading sheet per machine, sequenced by hand every morning against yesterday’s actuals.',
  },
  {
    question: 'The primary line is full. Now what?',
    erp: 'Knows one routing and one BOM. Alternate routes, alternate BOMs and subcontract paths are not evaluated.',
    instead: 'Phone calls: can the older machine run it, can the vendor take it, what does that do to cost.',
  },
  {
    question: 'What if the order moves?',
    erp: 'One live plan. Re-running MRP overwrites it; there is no sandbox to compare against.',
    instead: 'Copy of a copy of the sheet, v4_final_revised, with no record of what changed.',
  },
  {
    question: 'How much stock is right?',
    erp: 'Holds a static reorder level someone typed in years ago and nobody has revisited.',
    instead: 'Buy extra of everything that hurt last quarter. Working capital sits on the floor.',
  },
  {
    question: 'Why did the plan change?',
    erp: 'No explanation layer. The output is a list of orders, not a reason.',
    instead: 'The one planner who understands the sheet explains it. When they leave, it leaves.',
  },
];

const STATS = [
  {
    figure: '2 to 3 days',
    copy: 'of a senior planner’s month spent rebuilding the same Excel file, before a single decision is made.',
  },
  {
    figure: '1 person',
    copy: 'holds the logic. The plan is not a system, it is a colleague, and it goes on leave when they do.',
  },
  {
    figure: '0 versions',
    copy: 'of the plan you can compare. Nobody can answer why last month’s commitment slipped.',
  },
];

export default function ErpGap() {
  const [showAll, setShowAll] = useState(false);
  const rows = showAll ? ROWS : ROWS.slice(0, VISIBLE_ROWS);

  return (
    <section id="gap" className="u-section u-section-tint">
      <div className="u-shell u-band" data-reveal>
        <SectionHead kicker="01 / The gap" title={<>Why your ERP<br />isn&apos;t enough</>}>
          Nothing is wrong with your ERP. It was built to record transactions: orders, receipts,
          issues, invoices. Planning is a different problem: it is a forecast plus a set of
          constraints, solved forward in time. MRP inside an ERP does the arithmetic but not the
          decision, so the decision falls back to a person and an Excel file.
        </SectionHead>

        {/* The claim, drawn once, before the table argues it in prose. */}
        <Blueprint className="u-figure u-plate-soft" style={{ marginBottom: 34 }}>
          <div className="u-scroll-x">
            <RecordVsPlan />
          </div>
          <p className="u-fig-cap">
            Everything your ERP holds sits to the left of today. Every decision you are paid to make
            sits to the right of it, and MRP crosses that line with one assumption: infinite
            capacity.
          </p>
        </Blueprint>

        {/* The scroll container sits inside the frame so the registration
            marks are never clipped by it. */}
        <Blueprint className="u-plate-soft">
          <div className="u-scroll-x">
            <table className="table u-gap-table">
              <thead>
                <tr>
                  <th style={{ width: '26%' }}>The planning question</th>
                  <th style={{ width: '37%' }}>What the ERP actually does</th>
                  <th style={{ width: '37%' }}>So the planner does this instead</th>
                </tr>
              </thead>
              <tbody id="gap-rows">
                {rows.map((row) => (
                  <tr key={row.question}>
                    <td className="u-gap-q">{row.question}</td>
                    <td className="u-gap-erp">{row.erp}</td>
                    <td>{row.instead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            className="u-table-more"
            aria-expanded={showAll}
            aria-controls="gap-rows"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll
              ? 'Show fewer'
              : `Show the other ${ROWS.length - VISIBLE_ROWS} questions`}
            <span className="u-caret" aria-hidden="true">▾</span>
          </button>
        </Blueprint>

        <div className="u-grid-3" style={{ marginTop: 34 }}>
          {STATS.map((stat) => (
            <Blueprint className="u-stat" key={stat.figure}>
              <div className="u-stat-num">{stat.figure}</div>
              <p className="u-stat-copy">{stat.copy}</p>
            </Blueprint>
          ))}
        </div>
      </div>
    </section>
  );
}
