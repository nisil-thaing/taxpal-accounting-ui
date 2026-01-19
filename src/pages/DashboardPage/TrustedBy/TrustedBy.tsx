import { type FC } from 'react';

import { DASHBOARD_CONTENT } from '../DashboardPage.constants';

export const TrustedBy: FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold leading-8 text-slate-600">
          {DASHBOARD_CONTENT.trustedBy.title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {DASHBOARD_CONTENT.trustedBy.companies.map(company => (
            <div key={company} className="flex items-center justify-center text-sm font-medium text-slate-400">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
