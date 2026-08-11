import SiteHeader from './sections/SiteHeader';
import Hero from './sections/Hero';
import ErpGap from './sections/ErpGap';
import HowItWorks from './sections/HowItWorks';
import Explain from './sections/Explain';
import Verticals from './sections/Verticals';
import Rollout from './sections/Rollout';
import Pricing from './sections/Pricing';
import Demo from './sections/Demo';
import SiteFooter from './sections/SiteFooter';

export default function App() {
  return (
    <div className="u-page">
      <SiteHeader />
      <main>
        <Hero />
        <ErpGap />
        <HowItWorks />
        <Explain />
        <Verticals />
        <Rollout />
        <Pricing />
        <Demo />
      </main>
      <SiteFooter />
    </div>
  );
}
