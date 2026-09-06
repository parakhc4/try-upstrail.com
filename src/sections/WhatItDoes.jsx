import Blueprint from '../components/Blueprint';
import SectionHead from '../components/SectionHead';
import { SOLUTIONS } from '../nav';

const THINGS = [
  {
    title: 'Makes the machine plan',
    copy: 'Which machine runs which job, in what order, on which shift. Every operation in the routing with its setup time, and the changeovers, inserts, moulds and maintenance, counted before the plan is shown to you. Planners call this constrained MRP.',
    to: SOLUTIONS[0],
  },
  {
    title: 'Replans when things change',
    copy: 'A customer pushes for more. A machine goes down. An insert is late. Press Replan, get a new plan in minutes, and see exactly what moved.',
    to: SOLUTIONS[0],
  },
  {
    title: 'Plans your raw material and suppliers',
    copy: 'From the forecast and your lead times, ten days for most grades and forty-five for some, it tells you what to order and when. Purchase orders are split between suppliers by the share of business you have agreed with each.',
    to: SOLUTIONS[1],
  },
];

export default function WhatItDoes() {
  return (
    <section id="what" className="u-section">
      <div className="u-shell u-band">
        <SectionHead kicker="What it is" title="Planning software that sits on top of your ERP">
          Upstrail is not an ERP. Your ERP records what has happened: orders, receipts, stock,
          invoices. Upstrail reads that and decides what happens next: the plan your planner
          makes in Excel, made properly, in minutes, and made again whenever something changes.
        </SectionHead>

        <Blueprint className="u-cells">
          {THINGS.map((t) => (
            <div className="u-cell" key={t.title}>
              <h3 className="u-cell-title">{t.title}</h3>
              <p className="u-cell-copy">{t.copy}</p>
              <a className="u-cell-link" href={t.to.href}>More on {t.to.label.toLowerCase()}</a>
            </div>
          ))}
        </Blueprint>
      </div>
    </section>
  );
}
