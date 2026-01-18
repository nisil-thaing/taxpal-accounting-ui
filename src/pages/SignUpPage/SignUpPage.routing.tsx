import type { RouteObject } from 'react-router';

import { SignUpPage } from './SignUpPage';

export const SIGN_UP_PATH = '/register';

export const signUpRouter: RouteObject = {
  path: SIGN_UP_PATH,
  element: <SignUpPage />,
};
