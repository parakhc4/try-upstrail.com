import PageShell from '../components/PageShell';
import Blueprint from '../components/Blueprint';
import SectionHead from '../components/SectionHead';
import Screen from '../components/Screen';
import Demo from '../sections/Demo';
import MachineLoad from '../components/diagrams/MachineLoad';
import ReplanGantt from '../components/diagrams/ReplanGantt';
import { SCREENS } from '../screens';

const SPEC = [
  { key: 'Monthly plan', value: 'Minutes' },
  { key: 'Replan', value: 'One click' },
  { key: 'Routings', value: 'Every operation, with setup time' },
  { key: 'MRP', value: 'Constrained' },
];

const THINGS = [
  {
    title: 'Loads every machine to what it can do',
    copy: 'A 450-tonne mould goes on a 450-tonne machine. A part with six operations goes through six machines in the right sequence, each with its own setup time. Work is spread by tonnage, mould, insert and routing, so the big machines stop sitting at 30%. Planners call this constrained MRP: a plan that knows the machine is not infinite. The MRP inside an ERP is the other kind.',
  },
  {
    title: 'Sequences jobs to cut setups and changeovers',
    copy: 'Black after natural, not the other way round. Same mould, same insert, same fixture, run together. Setup time on every operation is in the plan, so the sequence that costs least in setups is the one you get.',
  },
  {
    title: 'Replans in one click',
    copy: 'The customer wants more. A machine is down. An insert is late. Press Replan and get a new plan in minutes, with the list of what moved.',
  },
];

const KNOWS = [
  ['Every operation in the routing', 'Turning, then milling, then grinding, then inspection. Each on its own machine, with its own setup time, in order.'],
  ['Every machine and its tonnage', 'A 450-tonne mould does not go on a 100-tonne machine. Obvious to you; unknown to a spreadsheet.'],
  ['Which mould or fixture fits which machine', 'And which insert it needs, and whether that insert is free.'],
  ['Unload and load time', 'Forty-five minutes off, an hour on, and mould service done while it is off, not after.'],
  ['Manpower per shift', 'Two twelve-hour shifts, and who is actually in on each of them.'],
  ['What happens after the main operation', 'Trimming, assembly, greasing, final inspection. Planned with the rest, not discovered after it.'],
  ['Maintenance', 'Preventive windows are blocked out. A breakdown is a replan, not a redo.'],
  ['Which operation can go outside', 'Coating, anodising, a machining shop down the road. When it leaves, when it is back, and what it costs.'],
  ['Which customer cannot slip', 'And which can, and by how much.'],
];

export default function ProductionPlanning() {
  return (
    <PageShell page="production-planning">
      <section className="u-section u-page-hero">
        <div className="u-shell u-band-hero">
          <div className="u-crumb">
            <a href="/">Upstrail</a><span aria-hidden="true">/</span>
            <span>Production planning</span>
          </div>

          <div className="u-hero-grid">
            <div>
              <h1 className="u-h1">
                Your machine plan, <span className="u-h1-accent">in minutes.</span>
              </h1>
              <p className="u-hero-copy">
                Give Upstrail the customer schedule. It puts every job on the right machine, in the
                right order, on the right shift. Every operation in the routing, with its setup
                time. Changeovers, inserts, moulds, manpower and maintenance all counted. And it
                makes the plan again when things change.
              </p>
              <div className="u-cta-row">
                <Blueprint as="a" href="#demo" className="btn btn-primary btn-lg">
                  Talk to us
                </Blueprint>
                <a href="#screens" className="btn btn-secondary btn-lg">See the screens</a>
              </div>
            </div>

            <Blueprint className="u-spec u-plate">
              <div className="u-plate-label">In short</div>
              {SPEC.map((row) => (
                <div className="u-spec-row" key={row.key}>
                  <span className="u-spec-key">{row.key}</span>
                  <span className="u-spec-val">{row.value}</span>
                </div>
              ))}
              <p className="u-note">Machining, moulding and die casting. Reads your ERP, or your Excel.</p>
            </Blueprint>
          </div>
        </div>
      </section>

      <section id="what" className="u-section">
        <div className="u-shell u-band">
          <SectionHead kicker="What it does" title="Three things, every month">
            The same three jobs your planner does in Excel between the 5th and the 7th, done
            properly, and done again in minutes when the week changes.
          </SectionHead>

          <Blueprint className="u-cells">
            {THINGS.map((t) => (
              <div className="u-cell" key={t.title}>
                <h3 className="u-cell-title">{t.title}</h3>
                <p className="u-cell-copy">{t.copy}</p>
              </div>
            ))}
          </Blueprint>
        </div>
      </section>

      <section id="screens" className="u-section u-section-tint">
        <div className="u-shell u-band">
          <SectionHead kicker="The screens" title="What the planner works in">
            From the precision machining plant that runs it today. Every machine as a row, every
            work order as a block, and every day's load in one grid.
          </SectionHead>
          <div className="u-screens">
            <Screen {...SCREENS.gantt} />
            <Screen {...SCREENS.production} />
            <Screen {...SCREENS.calendar} />
          </div>
          <p className="u-screens-note">Demo workspace shown. Machine and part names are illustrative.</p>
        </div>
      </section>

      <section id="machines" className="u-section">
        <div className="u-shell u-band">
          <SectionHead kicker="The machines" title="Where the hours actually go">
            A moulding plant we visited: twenty machines, 25 to 450 tonnes. The two biggest at 30%,
            the rest at 90% and still missing dates, because the sheet put each job where it had
            always gone.
          </SectionHead>
          <MachineLoad />
          <p className="u-fig-cap">
            Same jobs, same month. Loaded by what each machine can actually run, wherever the mould
            and the insert allow.
          </p>
        </div>
      </section>

      <section id="midweek" className="u-section u-section-tint">
        <div className="u-shell u-band">
          <SectionHead kicker="Mid-week" title="The customer calls on Wednesday">
            Today someone opens the sheet, sees what is done, and pushes something out to make
            room. With every machine, mould and insert already in the plan, it is one button, and
            the plan tells you what moved.
          </SectionHead>
          <ReplanGantt />
        </div>
      </section>

      <section id="knows" className="u-section">
        <div className="u-shell u-band">
          <SectionHead kicker="Your factory" title="It knows the things the sheet does not">
            Most of it comes from your ERP. The rest is in your planner’s head, and we spend two
            days on the floor writing it down.
          </SectionHead>

          <Blueprint className="u-ledger">
            {KNOWS.map(([term, desc]) => (
              <div className="u-ledger-row" key={term}>
                <span className="u-ledger-term">{term}</span>
                <p className="u-ledger-desc">{desc}</p>
              </div>
            ))}
          </Blueprint>

          <div className="u-screens" style={{ marginTop: 30 }}>
            <Screen {...SCREENS.subcontract} />
          </div>
          <p className="u-screens-note">Demo workspace shown.</p>
        </div>
      </section>

      <Demo />
    </PageShell>
  );
}
