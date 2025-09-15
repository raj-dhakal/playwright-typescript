import { test } from '@playwright/test';

test('scroll inside wrapper until row is visible', async ({ page }) => {
  await page.goto('https://example.com/your-page-with-table');

  // The scrollable container (wrapper around the table)
  const wrapper = page.locator('.table-wrapper'); // change to your wrapper selector

  // Target the 100th row inside the table
  const row = wrapper.locator('tr').nth(99);

  // Scroll the row into view inside the wrapper
  await row.scrollIntoViewIfNeeded();

  // Optionally confirm the row is visible
  await row.waitFor({ state: 'visible' });
});
