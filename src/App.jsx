import PageShell from './components/PageShell';
import Hero from './sections/Hero';
import Familiar from './sections/Familiar';
import WhatItDoes from './sections/WhatItDoes';
import Product from './sections/Product';
import Connect from './sections/Connect';
import HowItStarts from './sections/HowItStarts';
import Cost from './sections/Cost';
import Demo from './sections/Demo';

export default function App() {
  return (
    <PageShell page="home">
      <Hero />
      <Familiar />
      <WhatItDoes />
      <Product />
      <Connect />
      <HowItStarts />
      <Cost />
      <Demo />
    </PageShell>
  );
}
