# TaxPal Accounting UI - AI Agent Instructions

This document serves as the main entry point for AI coding agents working on the TaxPal Accounting UI project. It references modular instruction files that provide comprehensive coding guidelines.

## Instruction Files

All instruction files are located in `docs/ai-rules/`:

| File                               | Applies To                        | Description                                            |
| ---------------------------------- | --------------------------------- | ------------------------------------------------------ |
| `general.instructions.md`          | All files                         | Project overview, tech stack, structure, scripts       |
| `coding-standards.instructions.md` | `**/*.ts`, `**/*.tsx`             | TypeScript/React code style, patterns, and conventions |
| `testing-library.instructions.md`  | `**/*.spec.ts`, `**/*.spec.tsx`   | Unit testing with Vitest and Testing Library           |
| `e2e.instructions.md`              | `e2e/**/*.ts`, `e2e/**/*.spec.ts` | End-to-end testing with Playwright                     |

## Quick Reference

### Project Tech Stack

- **Runtime**: Vite v7
- **Framework**: React 19 + TypeScript 5.9
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **State Management**: TanStack React Query v5
- **Routing**: React Router v7
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Package Manager**: Bun

### Key Patterns

#### Adding New Features

1. **API Integration**: Create service in `src/services/` with types
2. **Data Fetching**: Create hook in `src/hooks/` using React Query + service
3. **UI**: Create/update page component using the hook
4. **Testing**: Write unit tests and E2E tests

#### File Naming Conventions

- Components: `ComponentName.tsx`
- Tests: `ComponentName.spec.tsx`
- Constants: `ComponentName.constants.ts`
- Routing: `ComponentName.routing.tsx`
- Services: `domainService.ts`
- Hooks: `useDomainServices.ts`

### Code Style Highlights

- Single quotes for strings
- Semicolons required
- Trailing commas everywhere
- 120 character line width
- 2 spaces indentation
- Arrow functions with `FC` type for components
- Prefix unused variables with `_`
- NEVER use React.\* patterns - import directly from 'react'

### Import Order

1. React imports
2. Third-party modules
3. `@/types/*`
4. `@/constants/*`
5. `@/lib/*`
6. `@/services/*`
7. `@/utils/*`, `@/store/*`
8. `@/components/*`, `@/pages/*`
9. `@/mocks/*`
10. Relative imports
11. Image assets
12. CSS files

### Testing Guidelines

#### Unit Tests

- Use `renderTestWithAllProviders` for components with routing and query
- Prefer accessible queries (`getByRole`, `getByLabelText`)
- Test behavior, not implementation
- Co-locate tests with components

#### E2E Tests

- Use Playwright with Chromium, Firefox, WebKit
- Test complete user workflows
- Mock external APIs
- Use descriptive test names

## Task Planning

When working on tasks:

1. **Plan first** - Create a todo list before implementation
2. **Execute directly** - Proceed with the plan without excessive confirmation
3. **Ask only when necessary** - Only ask for genuine ambiguities

## Getting Started

1. Read `general.instructions.md` for project overview
2. Read `coding-standards.instructions.md` for coding conventions
3. Read `testing-library.instructions.md` for unit testing
4. Read `e2e.instructions.md` for E2E testing

## Scripts Reference

```bash
# Development
bun run dev              # Start dev server (port 5173)
bun run build            # Production build
bun run preview          # Preview production build

# Testing
bun test                 # Run unit tests
bun test:ui              # Run tests with UI
bun test:coverage        # Run tests with coverage
bun test:e2e             # Run E2E tests
bun test:e2e:ui          # Run E2E tests with UI

# Code Quality
bun run lint             # Run ESLint
bun run lint:fix         # Run ESLint with auto-fix
bun run format           # Run Prettier
```

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Router Documentation](https://reactrouter.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)

---

For detailed guidelines on specific topics, please refer to the individual instruction files listed above.
