import Fold from '../components/Fold';
import SectionHead from '../components/SectionHead';
import Screen from '../components/Screen';
import { SCREENS } from '../screens';

const FIRST = SCREENS.summary;
const REST = [SCREENS.gantt, SCREENS.fulfilment, SCREENS.trace];

export default function Product() {
  return (
    <section id="product" className="u-section u-section-tint">
      <div className="u-shell u-band">
        <SectionHead kicker="What you actually use" title="The screens, from the plant that runs it today">
          A precision machining plant in India plans on Upstrail every day: parts with several
          operations in the routing, a setup time on each, and purchase orders split between
          suppliers by the share of business agreed with each. These are its screens.
        </SectionHead>

        <div className="u-screens">
          <Screen {...FIRST} />
          <Fold label="Show three more screens" hideLabel="Show fewer screens" bodyClassName="u-screens">
            {REST.map((s) => <Screen key={s.src} {...s} />)}
          </Fold>
        </div>
        <p className="u-screens-note">Demo workspace shown. Machine and part names are illustrative.</p>
      </div>
    </section>
  );
}
