import { type FC } from 'react';
import { Link } from 'react-router';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { DASHBOARD_CONTENT } from '../DashboardPage.constants';

export const CallToAction: FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {DASHBOARD_CONTENT.callToAction.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {DASHBOARD_CONTENT.callToAction.description}
          </p>
          <div className="mt-10">
            <Button asChild className="h-11 bg-blue-600 px-6 text-base font-medium hover:bg-blue-500">
              <Link to="/register">
                {DASHBOARD_CONTENT.callToAction.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
