import { Navigate, type RouteObject } from 'react-router';

import { NotFoundPage } from './NotFoundPage';

export const NOT_FOUND_PATH = '/not-found';

export const notFoundRouter: Array<RouteObject> = [
  {
    path: NOT_FOUND_PATH,
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to={NOT_FOUND_PATH} replace />,
  },
];
