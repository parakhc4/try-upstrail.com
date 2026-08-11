import Blueprint from '../components/Blueprint';
import SectionHead from '../components/SectionHead';

const WEEKS = Array.from({ length: 12 }, (_, i) => `W${i + 1}`);

/* Bars step down the accent ramp as the project moves from our work to
   yours; the light steps carry dark ink so the label stays readable. */
const PHASES = [
  { label: 'Connect & map data', start: 1, span: 3, tone: 'var(--color-accent)', ink: 'var(--color-bg)', caption: 'Weeks 1 to 3' },
  { label: 'Fit the vertical pack', start: 3, span: 4, tone: 'var(--color-accent-600)', ink: 'var(--color-bg)', caption: 'Weeks 3 to 6' },
  { label: 'Configure your 20%', start: 6, span: 3, tone: 'var(--color-accent-500)', ink: 'var(--color-accent-900)', caption: 'Weeks 6 to 8' },
  { label: 'Parallel run with Excel', start: 8, span: 3, tone: 'var(--color-accent-400)', ink: 'var(--color-accent-900)', caption: 'Weeks 8 to 10' },
  { label: 'Cut over & hand off', start: 11, span: 2, tone: 'var(--color-accent-300)', ink: 'var(--color-accent-900)', caption: 'Weeks 11 to 12' },
];

export default function Rollout() {
  return (
    <section id="rollout" className="u-section">
      <div className="u-shell u-band">
        <SectionHead kicker="05 / Rollout" title={<>Twelve weeks,<br />not two years</>}>
          A typical enterprise APS rollout is measured in years and paid for in consultant-days.
          Ours is measured in weeks, because the vertical pack is already built and the mapping is
          algorithmic. Here is what a single-plant deployment looks like.
        </SectionHead>

        <Blueprint className="u-gantt u-plate-soft">
          <div className="u-gantt-scale" aria-hidden="true">
            {WEEKS.map((week) => <span key={week}>{week}</span>)}
          </div>

          {PHASES.map((phase) => (
            <div className="u-gantt-row" key={phase.label}>
              <span className="u-gantt-label">{phase.label}</span>
              <div className="u-gantt-track">
                <div
                  className="u-gantt-bar"
                  style={{
                    gridColumn: `${phase.start} / span ${phase.span}`,
                    background: phase.tone,
                    color: phase.ink,
                  }}
                >
                  {phase.caption}
                </div>
              </div>
            </div>
          ))}
        </Blueprint>
      </div>
    </section>
  );
}
