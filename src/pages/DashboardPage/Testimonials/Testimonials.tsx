import { type FC } from 'react';

import { Card, CardContent } from '@/components/ui/card';

import { DASHBOARD_CONTENT } from '../DashboardPage.constants';

export const Testimonials: FC = () => {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {DASHBOARD_CONTENT.testimonials.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{DASHBOARD_CONTENT.testimonials.description}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {DASHBOARD_CONTENT.testimonials.items.slice(0, 3).map(testimonial => (
            <Card key={testimonial.id} className="border-slate-200 bg-white">
              <CardContent className="pt-6">
                <p className="text-base leading-7 text-slate-600">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
