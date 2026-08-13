import { useEffect, useState } from 'react';
import Blueprint from '../components/Blueprint';
import Disclosure from '../components/Disclosure';
import SectionHead from '../components/SectionHead';

/* Illustrative ERP column names — the mapper works from your schema and its
   contents, not from a fixed connector catalogue. */
const FIELDS = [
  { source: 'ITM_MSTR.ITM_CD', target: 'item.code' },
  { source: 'OMPHEAD.DEL_DT', target: 'demand.due_date' },
  { source: 'BOM_LINE.QTY_PER', target: 'bom.qty_per' },
  { source: 'WC_CAL.SHIFT_HRS', target: 'resource.capacity' },
  { source: 'PO_DTL.PROM_DT', target: 'supply.eta' },
  { source: 'VEND_M.LEAD_D', target: 'supplier.lead_time' },
];

const STEPS = [
  {
    title: 'Connect',
    copy: 'We build the link to your ERP as part of the project: Dynamics, Zoho, Odoo or your own in-house system. Read only, and nothing is written back until you ask for it.',
  },
  {
    title: 'Map',
    copy: 'The algorithm proposes a field-by-field mapping with a confidence score. Your team reviews the handful it is unsure about. Days, not quarters.',
  },
  {
    title: 'Solve',
    copy: 'Forecast, then a capacity- and material-constrained supply plan. Versioned, so you can compare this week’s plan against last week’s and see what moved.',
  },
  {
    title: 'Explain',
    copy: 'Every recommendation comes with the reason in plain language: which constraint bound, which order was pushed, and what it cost. This is what makes planners trust it.',
  },
];

const TICKS = 9;
const TICK_MS = 900;

/** Which of the four steps the run is in, for a given tick. */
function activeStep(tick) {
  if (tick < 1) return 0;
  if (tick < 7) return 1;
  if (tick < 8) return 2;
  return 3;
}

function caption(tick) {
  if (tick === 0) return 'reading schema…';
  if (tick > 5) return '6 / 6 mapped · 98% confidence';
  return `${Math.min(tick, 6)} / 6 mapped`;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function HowItWorks() {
  // Runs a loop of the mapper: fields resolve one per tick, and the step
  // list tracks along with it. Rests on the finished state when the visitor
  // has asked for reduced motion.
  const [tick, setTick] = useState(() => (prefersReducedMotion() ? TICKS - 1 : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const timer = setInterval(() => setTick((t) => (t + 1) % TICKS), TICK_MS);
    return () => clearInterval(timer);
  }, []);

  const step = activeStep(tick);

  return (
    <section id="how" className="u-section u-section-dark">
      <div className="u-shell u-band-lg" data-reveal>
        <SectionHead kicker="02 / The bridge" title={<>It reads your<br />ERP as it is</>}>
          Most planning projects die in data mapping. Six months of consultants writing ETL against
          table names nobody documented, before anyone sees a plan. Our mapper reads your schema,
          infers what each field means from its contents, and proposes the mapping. Your team
          approves it. That is the integration, and it is why the interesting conversation can be
          about your planning problem instead of your database.
        </SectionHead>

        <div className="u-grid-2" style={{ alignItems: 'stretch' }}>
          <Blueprint tone="dark" className="u-map">
            <div className="u-map-head">
              <span className="u-map-title">Field mapping · live</span>
              <span className="u-map-caption" aria-live="polite">{caption(tick)}</span>
            </div>

            {FIELDS.map((field, i) => {
              const opacity = tick > i ? 1 : 0.16;
              return (
                <div className="u-map-row" key={field.source}>
                  <span className="u-map-src">{field.source}</span>
                  <span className="u-map-arrow" style={{ opacity }} aria-hidden="true">→</span>
                  <span className="u-map-dst" style={{ opacity }}>{field.target}</span>
                </div>
              );
            })}

            <p className="u-map-note">
              Column names are illustrative. The mapper works from your schema and its contents
              rather than a fixed connector catalogue, so an in-house or heavily customised ERP is
              no harder to take on than a standard one. The connection itself is built for your
              project.
            </p>
          </Blueprint>

          <div className="u-steps">
            {STEPS.map((item, i) => (
              <Blueprint
                tone="dark"
                key={item.title}
                className={`u-step${step === i ? ' is-active' : ''}`}
              >
                <div className="u-step-body">
                  <span className="u-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <Disclosure
                    className="u-step-disc"
                    titleClassName="u-step-title"
                    summary={item.title}
                    defaultOpen={i === 0}
                  >
                    <p className="u-step-copy">{item.copy}</p>
                  </Disclosure>
                </div>
              </Blueprint>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
