import type { FC } from 'react';
import { Outlet } from 'react-router';

import { Header } from './Header';

export const GeneralLayout: FC = () => (
  <div className="flex min-h-screen w-full flex-col">
    <Header />
    <main className="flex w-full flex-1 flex-col pt-16">
      <Outlet />
    </main>
  </div>
);
