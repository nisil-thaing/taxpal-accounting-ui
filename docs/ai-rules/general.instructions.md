---
applyTo: '**/*'
name: 'Project Overview'
description: 'General project conventions for TaxPal Accounting UI'
---

# Project Overview

This is a React + TypeScript web application for TaxPal Accounting using Vite with Tailwind CSS v4 and shadcn/ui components.

## Tech Stack

- **Runtime**: Vite (v7)
- **Framework**: React 19 + TypeScript 5.9
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **State Management**: TanStack React Query v5
- **Routing**: React Router v7
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + Testing Library (unit), Playwright (E2E)
- **Package Manager**: Bun (NEVER use npm, yarn, or pnpm)
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## Package Management

**IMPORTANT**: This project uses **Bun exclusively** for package management. NEVER use npm, yarn, or pnpm.

```bash
# Install dependencies
bun install

# Add a package
bun add <package-name>

# Add a dev dependency
bun add -d <package-name>

# Remove a package
bun remove <package-name>

# Update packages
bun update
```

## Project Structure

```
src/
├── components/      # Shared components
│   ├── ui/          # shadcn/ui primitives (button, card, input, select, etc.)
│   ├── Form/        # Form components with React Hook Form
│   └── GeneralLayout/ # Layout components (Header, etc.)
├── constants/       # Application constants (validation regex, etc.)
├── hooks/           # Custom React hooks
│   └── useAuthServices.ts  # Authentication hooks (useLogin, useSignUp)
├── lib/             # Third-party library utilities and wrappers
│   ├── react-query.ts      # TanStack Query client configuration
│   ├── tailwindcss.ts      # Tailwind CSS utilities (cn for class merging)
│   └── testing-library.tsx # Testing utilities (provider wrappers)
├── pages/           # Page components with routing config
│   ├── DashboardPage/
│   ├── LoginPage/
│   ├── SignUpPage/
│   ├── NotFoundPage/
│   └── index.tsx    # Router configuration
├── services/        # API services and external integrations
│   └── authService.ts      # Authentication API service
├── types/           # TypeScript type definitions
├── App.tsx          # Main React app component with providers
├── main.tsx         # React entry point
└── index.css        # Global styles with Tailwind
e2e/                 # Playwright E2E tests
docs/                # Documentation
  └── ai-rules/      # AI coding instructions
```

## Path Aliases

Use `@/*` for imports from `src/`:

```ts
import { useLogin } from '@/hooks/useAuthServices';

import { cn } from '@/lib/tailwindcss';

import { Button } from '@/components/ui/button';
```

## Scripts

```bash
bun run dev              # Start dev server with HMR (port 5173)
bun run build            # Production build
bun run preview          # Preview production build
bun test                 # Run unit tests with Vitest
bun test:ui              # Run tests with UI
bun test:coverage        # Run tests with coverage
bun test:e2e             # Run E2E tests with Playwright
bun test:e2e:ui          # Run E2E tests with Playwright UI
bun run lint             # Run ESLint
bun run lint:fix         # Run ESLint with auto-fix
bun run format           # Run Prettier
```

## Key Patterns

### Adding New Features

1. **API Integration**: Create service in `src/services/` with request/response types
2. **Data Fetching**: Create hook in `src/hooks/` using React Query + service
3. **UI**: Create/update page component using the hook
4. **Testing**: Write unit tests with `renderTestWithAllProviders` wrapper and E2E tests

### File Locations

| What                   | Where                              |
| ---------------------- | ---------------------------------- |
| API services           | `src/services/<domain>Service.ts`  |
| Custom hooks           | `src/hooks/use<Domain>Services.ts` |
| React Query config     | `src/lib/react-query.ts`           |
| Testing utilities      | `src/lib/testing-library.tsx`      |
| Page components        | `src/pages/<PageName>/`            |
| Shared components      | `src/components/`                  |
| UI primitives (shadcn) | `src/components/ui/`               |
| Form components        | `src/components/Form/`             |

## AI Agent Guidelines

### Package Management Rules

- **ALWAYS use Bun** for all package management operations
- **NEVER use npm, yarn, or pnpm** commands
- When installing packages, use: `bun add <package>`
- When installing dev dependencies, use: `bun add -d <package>`
- When running scripts, use: `bun run <script>` or `bun <script>`

### Task Planning

When working on tasks, follow this approach:

1. **Plan first** - Create a todo list to track steps before starting implementation
2. **Execute directly** - No need for excessive confirmation, proceed with the plan
3. **Ask only when necessary** - Only ask questions for genuine ambiguity
4. **Use Bun exclusively** - Never use npm, yarn, or pnpm for any operations
