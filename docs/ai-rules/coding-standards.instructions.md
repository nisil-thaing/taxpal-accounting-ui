---
applyTo: '**/*.ts,**/*.tsx'
name: 'TypeScript & React Coding Rules'
description: 'Code style and component conventions for TypeScript and React files'
---

# Code Style (Prettier Config)

Strictly follow these Prettier rules:

- **Single quotes** for strings (`singleQuote: true`)
- **Semicolons** required (`semi: true`)
- **Trailing commas** everywhere (`trailingComma: 'all'`)
- **120 character** line width (`printWidth: 120`)
- **2 spaces** for indentation (`tabWidth: 2`)
- **Avoid parentheses** around single arrow function parameters (`arrowParens: 'avoid'`)

```ts
// Good
const fn = x => x * 2;
const obj = { a: 1, b: 2, };
const arr = [1, 2, 3,];

// Bad
const fn = (x) => x * 2;
const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];
```

# Import Order

Imports are auto-sorted via `@trivago/prettier-plugin-sort-imports` with blank line separation:

1. React imports (`react`, `react-dom`, etc.)
2. Third-party modules
3. `@/types/*`
4. `@/constants/*`
5. `@/lib/*` (third-party library utilities and wrappers)
6. `@/services/*`
7. `@/utils/*`
8. `@/store/*`
9. `@/components/*`
10. `@/pages/*`
11. `@/mocks/*`
12. Relative imports (non-assets)
13. Image assets (`.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`, `.webp`)
14. CSS files (`.css`)

```tsx
import { useState } from 'react';

import { useLogin } from '@/hooks/useAuthServices';
import { z } from 'zod';

import { GENERAL_REGEX } from '@/constants/validation';

import { cn } from '@/lib/tailwindcss';

import { authService } from '@/services/authService';

import { Form } from '@/components/Form';

import { VALIDATION_MESSAGES } from './LoginPage.constants';

import './styles.css';
```

# Additional Rules

- Prefix unused variables with `_`
- Use `Array<type>` instead of `type[]` for array types
- Use HTML entities for spaces in JSX, not `{' '}`:

```tsx
// Good
<p>Hello&nbsp;<Link to="/">world</Link></p>

// Bad
<p>Hello{' '}<Link to="/">world</Link></p>
```

- **NEVER use React.\* patterns** - Always import specific items from React:

```tsx
// Good
import { useState, useEffect, type FC, type ReactNode } from 'react';

// Bad
import React from 'react';
import type React from 'react';

// Bad
const MyComponent: React.FC = () => { };
const element: React.ReactElement = <div />;
```

Pre-commit hooks run ESLint and Prettier via Husky + lint-staged.

# Component Conventions

Use arrow functions with `FC` type for React components:

```tsx
import type { FC } from 'react';

interface MyComponentProps {
  title: string;
  isActive?: boolean;
}

export const MyComponent: FC<MyComponentProps> = ({ title, isActive = false }) => {
  return <div className={cn('base-class', isActive && 'active-class')}>{title}</div>;
};
```

# Data Fetching

Use TanStack React Query for API calls with services:

```tsx
import { useMutation, useQuery } from '@tanstack/react-query';

import { authService } from '@/services/authService';

// Query example
const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: () => authService.getUsers(),
});

// Mutation example
const { mutateAsync, isPending } = useMutation({
  mutationFn: (data: CreateUserRequest) => authService.createUser(data),
});
```

# Custom Hooks

Place custom hooks in `src/hooks/`. Group related hooks by domain (e.g., `useAuthServices.ts` for auth hooks):

```tsx
import { useNavigate } from 'react-router';

import { useMutation } from '@tanstack/react-query';

import type { LoginRequest, LoginResponse } from '@/services/authService';
import { authService } from '@/services/authService';

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isSuccess, error, data, reset } = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: authService.login,
    onSuccess: () => {
      navigate('/');
    },
  });

  const login = async (credentials: LoginRequest) => {
    reset();
    return mutateAsync(credentials);
  };

  return {
    login,
    isLoading: isPending,
    isSuccess,
    error,
    data,
  };
};
```

# Services

Place API services in `src/services/`. Define request/response types alongside service methods:

```tsx
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export const authService = {
  login: (credentials: LoginRequest): Promise<LoginResponse> => {
    // API call implementation
    return fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }).then(res => res.json());
  },
};
```

# Styling

- **Tailwind CSS v4** for styling
- **shadcn/ui** components in `src/components/ui/`
- Use `cn()` from `@/lib/tailwindcss` for conditional class merging:

```tsx
import { cn } from '@/lib/tailwindcss';

<div className={cn('base-class', isActive && 'active-class')} />;
```

# Tailwind Class Ordering

Order Tailwind classes in the following sequence:

1. **Display** - `flex`, `block`, `inline-flex`, `grid`, `hidden`, `relative`, `absolute`, `fixed`
2. **Typography** - `text-*` (size), `font-*` (weight, family), `leading-*`, `tracking-*`
3. **Flexbox/Grid** - `flex-col`, `flex-row`, `items-*`, `justify-*`, `gap-*`, `space-*`
4. **Size** - `w-*`, `h-*`, `min-w-*`, `max-w-*`, `min-h-*`, `max-h-*`
5. **Padding** - `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`
6. **Margin** - `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`
7. **Border** - `border-*`, `rounded-*`
8. **Text Color** - `text-{color}-*`
9. **Background** - `bg-*`
10. **Shadow** - `shadow-*`
11. **States** - `hover:*`, `focus:*`, `active:*`, `disabled:*`
12. **Responsive** - `sm:*`, `md:*`, `lg:*`, `xl:*`

Example:

```tsx
<div className="flex text-sm font-medium items-center justify-between h-11 w-full px-4 py-2 mt-4 rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500" />
```

# Icons

- Use **lucide-react** for all icons in components
- Import icons individually to enable tree-shaking:

```tsx
import { ArrowRight, Layers, User } from 'lucide-react';

<ArrowRight className="h-4 w-4" />;
```

# Forms

Use React Hook Form with Zod validation via the custom `Form` component:

```tsx
import { z } from 'zod';

import { Form } from '@/components/Form';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormData = z.infer<typeof formSchema>;

export const MyForm: FC = () => {
  const handleSubmit = async (data: FormData) => {
    // Handle form submission
  };

  return (
    <Form<FormData>
      schema={formSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <Form.Input<FormData> name="email" label="Email" type="email" />

      <Form.Input<FormData> name="password" label="Password" type="password" />

      <Button type="submit">Submit</Button>
    </Form>
  );
};
```

# ESLint Rules

Key ESLint rules enforced:

- Single quotes for strings
- Semicolons required
- Prefix unused variables with `_`
- No console.log (use console.warn or console.error)
- TypeScript strict mode enabled

Pre-commit hooks automatically run ESLint and Prettier to ensure code quality.
