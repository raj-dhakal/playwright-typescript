import { test, expect } from '@playwright/test';
import * as path from 'path';

test('upload a file', async ({ page }) => {
  await page.goto('https://example.com/upload');

  // Find the file input
  const fileInput = page.locator('input[type="file"]');

  // Path to the file you want to upload (relative to your test file)
  const filePath = path.join(__dirname, 'test-files', 'sample.pdf');

  // Upload the file
  await fileInput.setInputFiles(filePath);

  // Optionally, click the upload button if there is one
  await page.click('button[type="submit"]');

  // Assert upload success (depends on your app)
  await page.waitForSelector('text=Upload successful');
});

test('download a file', async ({ page }) => {
  await page.goto('https://example.com/download-page');

  // Start waiting for the download
  const [ download ] = await Promise.all([
    page.waitForEvent('download'), // wait for the download event
    page.click('text=Download file'), // the action that triggers download
  ]);

  // Save the downloaded file to a custom path
  const downloadPath = path.join(__dirname, 'downloads', await download.suggestedFilename());
  await download.saveAs(downloadPath);

  console.log(`File saved to: ${downloadPath}`);

  // Optionally, check file name
  expect(await download.suggestedFilename()).toContain('.pdf');
});
