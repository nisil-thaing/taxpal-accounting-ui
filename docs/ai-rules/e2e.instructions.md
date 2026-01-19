---
applyTo: 'e2e/**/*.ts,e2e/**/*.spec.ts'
name: 'E2E Testing'
description: 'End-to-end testing conventions with Playwright'
---

# E2E Tests

Uses Playwright for cross-browser testing (Chromium, Firefox, WebKit):

```ts
import { expect, test } from '@playwright/test';

test('page loads', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.locator('h1')).toBeVisible();
});
```

Test files: `e2e/*.spec.ts`

## Test Configuration

- **Test Runner**: Playwright v1.57
- **Base URL**: `http://localhost:5173`
- **Browsers**: Chromium, Firefox, WebKit
- **Test Directory**: `e2e/`
- **Dev Server**: Automatically starts with `bun run dev` before tests

## Running E2E Tests

```bash
bun test:e2e           # Run E2E tests headless
bun test:e2e:ui        # Run E2E tests with Playwright UI
```

# Test Structure

Use `test.describe` to group related tests and `test.beforeEach` for setup:

```ts
import { expect, test } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should display logo correctly', async ({ page }) => {
    const logo = page.getByAltText('Vite logo');
    await expect(logo).toBeVisible();
  });

  test('should render the main content', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Vite + React' })).toBeVisible();
  });
});
```

# Page Navigation

Navigate to pages using `page.goto()`:

```ts
test('should navigate to login page', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await expect(page).toHaveURL('/login');
});
```

# Locating Elements

Prefer accessible locators in this order:

1. **Role-based** (best):

```ts
page.getByRole('button', { name: 'Sign in' });
page.getByRole('heading', { name: 'Welcome' });
page.getByRole('link', { name: 'Home' });
page.getByRole('textbox', { name: 'Email' });
```

2. **Label-based**:

```ts
page.getByLabel('Email address');
page.getByLabel('Password');
```

3. **Text-based**:

```ts
page.getByText('Welcome');
page.getByText(/hello world/i);
```

4. **Placeholder-based**:

```ts
page.getByPlaceholder('Enter your email');
```

5. **Test ID** (last resort):

```ts
page.getByTestId('submit-button');
```

# User Interactions

## Clicking

```ts
await page.getByRole('button', { name: 'Sign in' }).click();
```

## Typing

```ts
await page.getByLabel('Email').fill('test@example.com');
await page.getByLabel('Password').type('password123');
```

## Selecting

```ts
await page.getByLabel('Country').selectOption('USA');
```

## Checking/Unchecking

```ts
await page.getByLabel('Remember me').check();
await page.getByLabel('Remember me').uncheck();
```

# Assertions

Use Playwright's built-in assertions:

## Visibility

```ts
await expect(page.getByText('Hello')).toBeVisible();
await expect(page.getByText('Hidden')).toBeHidden();
```

## Text Content

```ts
await expect(page.getByRole('heading')).toHaveText('Welcome');
await expect(page.getByRole('heading')).toContainText('Wel');
```

## Attributes

```ts
await expect(page.getByRole('link')).toHaveAttribute('href', '/home');
await expect(page.getByRole('button')).toBeDisabled();
await expect(page.getByRole('button')).toBeEnabled();
```

## URL

```ts
await expect(page).toHaveURL('/dashboard');
await expect(page).toHaveURL(/\/dashboard/);
```

## Count

```ts
await expect(page.getByRole('listitem')).toHaveCount(5);
```

# Waiting for Elements

Playwright auto-waits for elements, but you can explicitly wait:

```ts
// Wait for element to be visible
await page.waitForSelector('text=Welcome', { state: 'visible' });

// Wait for navigation
await page.waitForURL('/dashboard');

// Wait for load state
await page.waitForLoadState('networkidle');
```

# Form Testing

Test complete form flows:

```ts
test('should submit login form', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  // Fill form
  await page.getByLabel('Email address').fill('test@example.com');
  await page.getByLabel('Password').fill('password123');

  // Submit
  await page.getByRole('button', { name: /sign in/i }).click();

  // Assert navigation
  await expect(page).toHaveURL('/dashboard');
  await expect(page.getByText('Welcome')).toBeVisible();
});
```

# API Mocking

Mock API responses for testing:

```ts
test('should handle login error', async ({ page }) => {
  // Mock API response
  await page.route('**/api/auth/login', route => {
    route.fulfill({
      status: 401,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Invalid credentials' }),
    });
  });

  await page.goto('http://localhost:5173/login');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('wrong');
  await page.getByRole('button', { name: /sign in/i }).click();

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});
```

# Screenshots and Videos

Capture screenshots on failure (configured by default):

```ts
test('should capture screenshot on failure', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.screenshot({ path: 'screenshots/homepage.png' });
});
```

# Debugging

Use Playwright's debugging tools:

```bash
# Run tests with Playwright Inspector
bun test:e2e:ui

# Run specific test file
bun x playwright test e2e/login.spec.ts

# Run in headed mode
bun x playwright test --headed

# Run in debug mode
bun x playwright test --debug
```

# Test Best Practices

1. **Use descriptive test names** - Clearly describe what the test does
2. **Keep tests independent** - Each test should run in isolation
3. **Use auto-waiting** - Playwright waits automatically for elements
4. **Prefer user-facing selectors** - Use roles, labels, and text over test IDs
5. **Test user workflows** - Test complete user journeys, not isolated actions
6. **Mock external APIs** - Use route mocking for consistent test results
7. **Group related tests** - Use `test.describe` to organize tests
8. **Use beforeEach for setup** - Navigate to pages in beforeEach hooks
9. **Test across browsers** - Run tests on Chromium, Firefox, and WebKit
10. **Keep tests readable** - Use clear variable names and comments when needed

# CI/CD Integration

Playwright tests are configured for CI with:

- Retries: 2 retries on CI
- Workers: 1 worker on CI (parallel execution disabled)
- Reporter: HTML reporter
- Fail on `.only`: Tests with `.only` will fail on CI

# Common Patterns

## Testing Authentication Flow

```ts
test.describe('Authentication', () => {
  test('should login successfully', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.getByLabel('Email address').fill('user@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText('Welcome')).toBeVisible();
  });

  test('should logout successfully', async ({ page }) => {
    // Assuming user is logged in
    await page.goto('http://localhost:5173/dashboard');

    await page.getByRole('button', { name: 'Logout' }).click();

    await expect(page).toHaveURL('/login');
  });
});
```

## Testing Navigation

```ts
test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL('/login');

    await page.getByRole('link', { name: 'Sign up' }).click();
    await expect(page).toHaveURL('/register');
  });
});
```

## Testing Error States

```ts
test('should display validation errors', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  // Submit empty form
  await page.getByRole('button', { name: /sign in/i }).click();

  // Check for validation errors
  await expect(page.getByText('Email is required')).toBeVisible();
  await expect(page.getByText('Password is required')).toBeVisible();
});
```
