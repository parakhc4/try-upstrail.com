import Fold from '../components/Fold';
import SectionHead from '../components/SectionHead';
import ConnectFlow from '../components/diagrams/ConnectFlow';

export default function Connect() {
  return (
    <section id="connect" className="u-section">
      <div className="u-shell u-band">
        <SectionHead kicker="Your ERP" title="It connects to the ERP you have">
          Upstrail is not an ERP and does not replace one. Your ERP keeps recording orders, stock
          and invoices. Upstrail reads that data and does the one thing the ERP cannot: make the
          plan. Tally, Busy, Zoho, Dynamics, SAP Business One, or a system your own team built.
        </SectionHead>

        <Fold label="See how it connects" hideLabel="Hide the diagram">
          <ConnectFlow />
          <p className="u-fig-cap">
            Reads on the left, plans on the right. If part of your data lives in Excel rather than
            the ERP, we read those sheets the same way.
          </p>
        </Fold>
      </div>
    </section>
  );
}
