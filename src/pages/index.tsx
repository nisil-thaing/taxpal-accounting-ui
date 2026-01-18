import { createBrowserRouter } from 'react-router';

import { GeneralLayout } from '@/components/GeneralLayout';

import { dashboardRouter } from './DashboardPage';
import { loginRouter } from './LoginPage';
import { notFoundRouter } from './NotFoundPage';
import { signUpRouter } from './SignUpPage';

export const routerConfigs = createBrowserRouter([
  {
    Component: GeneralLayout,
    children: [dashboardRouter, loginRouter, signUpRouter, ...notFoundRouter],
  },
]);
