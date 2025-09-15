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


test('scroll the page', async ({ page }) => {
  await page.goto('https://example.com');

  // Scroll down by 500px
  await page.evaluate(() => window.scrollBy(0, 500));

  // Wait a bit so you can see the effect (optional)
  await page.waitForTimeout(1000);

  // Scroll to bottom of page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.waitForTimeout(1000);

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
});

