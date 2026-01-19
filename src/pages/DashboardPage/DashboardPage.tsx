import { type FC } from 'react';

import { CallToAction } from './CallToAction';
import { FAQs } from './FAQs';
import { Features } from './Features';
import { Footer } from './Footer';
import { LandingHero } from './LandingHero';
import { Pricing } from './Pricing';
import { SecondaryFeatures } from './SecondaryFeatures';
import { Testimonials } from './Testimonials';
import { TrustedBy } from './TrustedBy';

export const DashboardPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHero />
      <TrustedBy />
      <Features />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <FAQs />
      <Footer />
    </div>
  );
};
