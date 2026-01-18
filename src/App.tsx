import type { FC } from 'react';
import { RouterProvider } from 'react-router';

import { routerConfigs } from './pages';

import './App.css';

export const App: FC = () => <RouterProvider router={routerConfigs} />;
