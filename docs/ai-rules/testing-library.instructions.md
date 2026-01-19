---
applyTo: '**/*.spec.ts,**/*.spec.tsx'
name: 'Unit Testing'
description: 'Unit testing conventions with Vitest and Testing Library'
---

# Unit Tests

Uses Vitest with @testing-library/react and happy-dom:

```ts
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderTestWithAllProviders } from '@/lib/testing-library';

import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('should render component', () => {
    renderTestWithAllProviders(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

Test files: `*.spec.ts` or `*.spec.tsx` in `src/`

## Test Configuration

- **Test Runner**: Vitest v4
- **Environment**: happy-dom
- **Setup**: `./testing-library.ts` (configured in vitest.config.ts)
- **Coverage**: v8 provider with 90% threshold
- **Location**: All test files must be co-located with their source files

## Running Tests

```bash
bun test                 # Run all unit tests
bun test:ui              # Run tests with UI
bun test:coverage        # Run tests with coverage report
bun test -- --watch      # Run tests in watch mode
```

# Testing Utilities

Use render wrappers from `@/lib/testing-library` based on what providers your component needs:

| Wrapper                            | Provides                           | Use when                                              |
| ---------------------------------- | ---------------------------------- | ----------------------------------------------------- |
| `renderTestWithRoutersWrapper`     | MemoryRouter                       | Component uses react-router (Link, useNavigate, etc.) |
| `renderTestWithQueryClientWrapper` | QueryClientProvider                | Component uses react-query (useQuery, useMutation)    |
| `renderTestWithAllProviders`       | QueryClientProvider + MemoryRouter | Component uses both react-router and react-query      |

```tsx
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderTestWithAllProviders } from '@/lib/testing-library';

import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('should render navigation links', () => {
    renderTestWithAllProviders(<MyComponent />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });
});
```

# Test Structure

Follow the AAA (Arrange, Act, Assert) pattern:

```tsx
describe('LoginPage', () => {
  it('should update email input value', () => {
    // Arrange
    renderTestWithAllProviders(<LoginPage />);
    const emailInput = screen.getByLabelText('Email address');

    // Act
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Assert
    expect(emailInput).toHaveValue('test@example.com');
  });
});
```

# Snapshot Testing

Use snapshot testing for components to catch unintended changes:

```tsx
it('should match snapshot', () => {
  const { container } = renderTestWithAllProviders(<MyComponent />);
  expect(container.innerHTML).toMatchSnapshot();
});
```

# Querying Elements

Prefer queries in this order (as recommended by Testing Library):

1. **Accessible queries** (best):
   - `getByRole` - queries by ARIA role
   - `getByLabelText` - queries form elements by label
   - `getByPlaceholderText` - queries by placeholder
   - `getByText` - queries by text content
   - `getByDisplayValue` - queries by form element value

2. **Semantic queries**:
   - `getByAltText` - queries by img alt text
   - `getByTitle` - queries by title attribute

3. **Test IDs** (last resort):
   - `getByTestId` - queries by data-testid attribute

```tsx
// Good - accessible queries
expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
expect(screen.getByLabelText('Email address')).toBeInTheDocument();

// Bad - test IDs should be avoided
expect(screen.getByTestId('login-button')).toBeInTheDocument();
```

# User Interactions

Use `fireEvent` or `userEvent` for simulating user interactions:

```tsx
import { fireEvent, screen } from '@testing-library/react';

it('should handle button click', () => {
  const handleClick = vi.fn();
  renderTestWithAllProviders(<Button onClick={handleClick}>Click me</Button>);

  const button = screen.getByRole('button', { name: 'Click me' });
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

# Async Testing

Use `waitFor` and `findBy*` queries for async operations:

```tsx
import { screen, waitFor } from '@testing-library/react';

it('should load and display data', async () => {
  renderTestWithAllProviders(<UserProfile userId="1" />);

  // Wait for element to appear
  const userName = await screen.findByText('John Doe');
  expect(userName).toBeInTheDocument();

  // Or use waitFor
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
```

# Mocking

Use Vitest's mocking utilities:

## Module Mocking

```tsx
import { vi } from 'vitest';

// Mock entire module
vi.mock('@/services/authService', () => ({
  authService: {
    login: vi.fn(),
  },
}));
```

## Function Mocking

```tsx
import { vi } from 'vitest';

const mockFn = vi.fn();
mockFn.mockReturnValue('mocked value');
mockFn.mockResolvedValue('async mocked value');
mockFn.mockRejectedValue(new Error('error'));
```

## Spying

```tsx
import { vi } from 'vitest';

const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

// After test
spy.mockRestore();
```

# Testing React Query

When testing components that use React Query, the `renderTestWithQueryClientWrapper` or `renderTestWithAllProviders` will handle the setup:

```tsx
import { screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { renderTestWithAllProviders } from '@/lib/testing-library';

vi.mock('@/services/authService', () => ({
  authService: {
    login: vi.fn().mockResolvedValue({ user: { name: 'John' }, token: 'abc' }),
  },
}));

describe('LoginPage', () => {
  it('should handle successful login', async () => {
    renderTestWithAllProviders(<LoginPage />);

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.getByText('Welcome John')).toBeInTheDocument();
    });
  });
});
```

# Testing Best Practices

1. **Test behavior, not implementation** - Focus on what the user sees and does
2. **Use accessible queries** - Prefer `getByRole` and `getByLabelText`
3. **Avoid test IDs** - Use semantic queries instead
4. **Test error states** - Test both success and failure scenarios
5. **Keep tests simple** - One assertion per test when possible
6. **Use descriptive test names** - Test names should describe the expected behavior
7. **Co-locate tests** - Keep test files next to the components they test
8. **Mock external dependencies** - Mock API calls and third-party services
9. **Clean up after tests** - Restore mocks and spies

# Coverage

The project enforces 90% code coverage threshold. Run coverage report:

```bash
bun test:coverage
```

Coverage reports are generated in the `coverage/` directory.
