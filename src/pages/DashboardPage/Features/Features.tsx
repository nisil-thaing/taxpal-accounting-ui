import { type FC } from 'react';

import { BarChart, FileText, Receipt, Users } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { DASHBOARD_CONTENT } from '../DashboardPage.constants';

export const Features: FC = () => {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {DASHBOARD_CONTENT.features.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{DASHBOARD_CONTENT.features.description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DASHBOARD_CONTENT.features.items.map(feature => {
              const IconComponent =
                feature.icon === 'Users'
                  ? Users
                  : feature.icon === 'Receipt'
                    ? Receipt
                    : feature.icon === 'FileText'
                      ? FileText
                      : BarChart;

              return (
                <Card key={feature.id} className="border-slate-200 bg-white">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
