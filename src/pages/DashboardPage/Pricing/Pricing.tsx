import { type FC } from 'react';
import { Link } from 'react-router';

import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { DASHBOARD_CONTENT } from '../DashboardPage.constants';

export const Pricing: FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {DASHBOARD_CONTENT.pricing.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{DASHBOARD_CONTENT.pricing.description}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {DASHBOARD_CONTENT.pricing.tiers.map(tier => (
            <Card
              key={tier.id}
              className={`flex flex-col border-slate-200 ${'featured' in tier && tier.featured ? 'ring-2 ring-blue-600' : ''}`}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">{tier.name}</CardTitle>
                <CardDescription className="text-slate-600">{tier.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-slate-900">${tier.price}</span>
                  <span className="text-base font-medium text-slate-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${'featured' in tier && tier.featured ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-900 hover:bg-slate-800'}`}
                >
                  <Link to="/register">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
