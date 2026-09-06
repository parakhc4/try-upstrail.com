import Blueprint from '../components/Blueprint';
import SectionHead from '../components/SectionHead';

export default function Cost() {
  return (
    <section id="cost" className="u-section">
      <div className="u-shell u-band">
        <SectionHead kicker="What it costs" title="Priced for twenty machines, not two hundred">
          The good planning tools were built for companies a hundred times your size. The cheap
          ones do not understand a changeover. Upstrail is one subscription per plant, with setup
          and the two-day visit included.
        </SectionHead>

        <Blueprint className="u-cost u-plate">
          <div>
            <div className="u-cost-line">Less than one planner’s month in Excel already costs you.</div>
            <p className="u-cost-copy">
              We put a number on the table in the first call. You can stop after the first quarter
              if the plan is not better than the one you make today.
            </p>
          </div>
          <Blueprint as="a" href="#demo" className="btn btn-primary btn-lg">
            Talk to us
          </Blueprint>
        </Blueprint>
      </div>
    </section>
  );
}
