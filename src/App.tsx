import type { FC } from 'react';
import { RouterProvider } from 'react-router';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/lib/react-query';

import { routerConfigs } from '@/pages';

export const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routerConfigs} />
  </QueryClientProvider>
);
