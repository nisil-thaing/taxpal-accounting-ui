import test, { expect } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should display Bun and React logos correctly', async ({ page }) => {
    const bunLogo = page.getByAltText('Vite logo');
    const reactLogo = page.getByAltText('React logo');

    await expect(bunLogo).toBeVisible();
    await expect(reactLogo).toBeVisible();

    await expect(reactLogo).toHaveClass(/logo react/);
  });

  test('should render the main Card content', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Vite + React' })).toBeVisible();
    await expect(page.getByText('src/App.tsx')).toBeVisible();
  });
});
