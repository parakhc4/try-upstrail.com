import AppPanel from '../components/AppPanel';
import Blueprint from '../components/Blueprint';
import SectionHead from '../components/SectionHead';
import PlanTrace from './PlanTrace';

const LEGEND = [
  { label: 'Failed', count: 12, share: 39, color: 'var(--app-danger)' },
  { label: 'Partial', count: 11, share: 35, color: 'var(--app-steel)' },
  { label: 'Late', count: 8, share: 26, color: 'var(--app-mute)' },
];

const EXCEPTIONS = [
  {
    severity: 'Failed',
    order: 'SO-4471',
    item: 'HSG-2209',
    due: '2026-08-14',
    demand: '1,200',
    fulfilled: '0',
    fill: 0,
    gap: '1,200',
    cause: 'Capacity Bottleneck',
    resource: 'CNC-LATHE-02',
    action: ' overloaded. Add shifts or reschedule orders.',
  },
  {
    severity: 'Partial',
    order: 'SO-4482',
    item: 'SHAFT-3310',
    due: '2026-08-18',
    demand: '800',
    fulfilled: '520',
    fill: 65,
    gap: '280',
    cause: 'Material Shortage',
    action: 'Component unavailable. Check BOM or upstream supply.',
  },
  {
    severity: 'Late',
    order: 'SO-4455',
    item: 'BRKT-1180',
    due: '2026-08-12',
    demand: '2,000',
    fulfilled: '2,000',
    fill: 100,
    gap: '0',
    cause: 'Build Late',
    action: 'Demand fulfilled after due date. Planner accepted a late delivery.',
  },
  {
    severity: 'Failed',
    order: 'SO-4490',
    item: 'COVER-5521',
    due: '2026-08-21',
    demand: '450',
    fulfilled: '0',
    fill: 0,
    gap: '450',
    cause: 'Resource Not In Master',
    resource: 'GRIND-04',
    action: ' is not in the Resources master. Add it, or correct the routing. This is not a capacity or horizon problem.',
  },
];

const PHASES = [
  {
    title: 'Week 1 / Watch',
    copy: 'Your planner runs the old Excel file and Upstrail side by side. No commitment and no risk, just two answers to compare.',
  },
  {
    title: 'Week 2 / Question',
    copy: 'They start asking why the two differ. Every difference has a written reason, so the argument is with the constraint, not the software.',
  },
  {
    title: 'Week 3 / Own',
    copy: 'The Excel file gets retired because it is slower, not because it was banned. That is the whole change management programme.',
  },
];

export default function Explain() {
  return (
    <section id="explain" className="u-section">
      <div className="u-shell u-band">
        <SectionHead kicker="03 / Adoption" title={<>The plan<br />explains itself</>}>
          Planning software usually fails at change management, not at maths. A planner will not act
          on a number they cannot defend to the plant head. So every output carries its reasoning,
          in the language your team already uses on the floor.
        </SectionHead>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <AppPanel crumbs={['Results', 'Exception report']} meta="v3 · 3 Jul, 18:47 · 6.87s">
            <div className="u-app-summary">
              <div className="u-app-count">
                <span className="u-app-count-num u-app-mono">31</span>
                <span className="u-app-count-label">exceptions across 412 demand orders</span>
              </div>
              <div className="u-app-meter">
                {LEGEND.map((band) => (
                  <div key={band.label} style={{ width: `${band.share}%`, background: band.color }} />
                ))}
              </div>
              <div className="u-app-legend">
                {LEGEND.map((band) => (
                  <span className="u-app-legend-item" key={band.label}>
                    <span className="u-app-swatch" style={{ background: band.color }} />
                    {band.label}
                    <span className="u-app-legend-num u-app-mono">{band.count}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="u-app-toolbar">
              <div className="u-app-seg">
                <span className="u-app-seg-opt is-on">
                  All exceptions <span className="u-app-seg-num u-app-mono">31</span>
                </span>
                {LEGEND.map((band) => (
                  <span className="u-app-seg-opt" key={band.label}>
                    {band.label} <span className="u-app-seg-num u-app-mono">{band.count}</span>
                  </span>
                ))}
              </div>
              <span className="u-app-btn">Group by root cause</span>
            </div>

            <div className="u-app-table-wrap">
              <table className="u-app-table">
                <thead>
                  <tr>
                    <th>Severity</th>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Due date</th>
                    <th className="u-app-num">Demand</th>
                    <th className="u-app-num">Fulfilled</th>
                    <th className="u-app-num">Gap</th>
                    <th>Root cause</th>
                    <th>Action needed</th>
                  </tr>
                </thead>
                <tbody>
                  {EXCEPTIONS.map((row) => (
                    <tr key={row.order}>
                      <td className={row.severity === 'Late' ? 'u-app-sev-late' : 'u-app-sev-fail'}>
                        {row.severity}
                      </td>
                      <td className="u-app-mono">{row.order}</td>
                      <td className="u-app-item">{row.item}</td>
                      <td className="u-app-mono">{row.due}</td>
                      <td className="u-app-mono u-app-num u-app-item">{row.demand}</td>
                      <td className="u-app-mono u-app-num">
                        <div className="u-app-fill">
                          <span className="u-app-item">{row.fulfilled}</span>
                          <div className="u-app-fill-track">
                            <div className="u-app-fill-bar" style={{ width: `${row.fill}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="u-app-mono u-app-num u-app-gap">{row.gap}</td>
                      <td className="u-app-cause">{row.cause}</td>
                      <td className="u-app-action">
                        {row.resource && <span className="u-app-item">{row.resource}</span>}
                        {row.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="u-app-caption">
              Every failing order carries the root cause the solver actually hit and the action a
              planner can take. Grouping by root cause turns 31 exceptions into four decisions.
            </p>
          </AppPanel>

          <PlanTrace />

          <div className="u-grid-3">
            {PHASES.map((phase) => (
              <Blueprint className="u-phase" key={phase.title}>
                <h4 className="u-phase-title">{phase.title}</h4>
                <p className="u-phase-copy">{phase.copy}</p>
              </Blueprint>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
