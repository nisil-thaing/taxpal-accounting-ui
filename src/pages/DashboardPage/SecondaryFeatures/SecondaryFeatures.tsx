import { type FC } from 'react';

import { DASHBOARD_CONTENT } from '../DashboardPage.constants';

export const SecondaryFeatures: FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {DASHBOARD_CONTENT.secondaryFeatures.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{DASHBOARD_CONTENT.secondaryFeatures.description}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {DASHBOARD_CONTENT.secondaryFeatures.items.map(feature => (
            <div key={feature.id} className="flex flex-col">
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{feature.description}</p>
              <p className="mt-4 text-sm leading-6 text-slate-500">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
