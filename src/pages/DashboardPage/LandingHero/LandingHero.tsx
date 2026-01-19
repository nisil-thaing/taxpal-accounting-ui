import { type FC } from 'react';
import { Link } from 'react-router';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { DASHBOARD_CONTENT } from '../DashboardPage.constants';

export const LandingHero: FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            {DASHBOARD_CONTENT.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {DASHBOARD_CONTENT.hero.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild className="h-11 bg-blue-600 px-6 text-base font-medium hover:bg-blue-500">
              <Link to="/register">
                {DASHBOARD_CONTENT.hero.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 border-slate-300 px-6 text-base font-medium">
              <a href={DASHBOARD_CONTENT.hero.videoUrl} target="_blank" rel="noopener noreferrer">
                {DASHBOARD_CONTENT.hero.secondaryCta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
