import Blueprint from '../components/Blueprint';
import SectionHead from '../components/SectionHead';

const STEPS = [
  {
    title: 'We visit your plant',
    when: 'Two days',
    copy: 'On the floor with your planner. We write down how the plan is really made: which machine cannot run which grade, who never slips, what gets pushed when the customer calls.',
  },
  {
    title: 'We connect to your ERP and build your plan',
    when: 'Two to three weeks',
    copy: 'We map your ERP’s exports, or your sheets, set up your machines, routings and inserts, and run last month through it to check it matches what you actually did.',
  },
  {
    title: 'You run both, then switch',
    when: 'One month',
    copy: 'Side by side with the Excel plan. When the sheet is the slower one, you stop using it. Nobody is forced.',
  },
];

export default function HowItStarts() {
  return (
    <section id="start" className="u-section u-section-tint">
      <div className="u-shell u-band">
        <SectionHead kicker="How it starts" title="Three steps, under three months">
          No six-month project and no consultants writing reports. Your ERP stays your ERP and
          your planner stays your planner. They just stop rebuilding the same sheet every month.
        </SectionHead>

        <Blueprint className="u-cells">
          {STEPS.map((s, i) => (
            <div className="u-cell" key={s.title}>
              <div className="u-cell-num">Step {i + 1}: {s.when}</div>
              <h3 className="u-cell-title">{s.title}</h3>
              <p className="u-cell-copy">{s.copy}</p>
            </div>
          ))}
        </Blueprint>
      </div>
    </section>
  );
}
