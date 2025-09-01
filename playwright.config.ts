import { defineConfig, devices } from '@playwright/test';

    import * as fs from 'fs';
    import * as path from 'path';
    const resultsDir = path.join(__dirname, 'test-results');
    if (fs.existsSync(resultsDir)) {
      fs.rmSync(resultsDir, { recursive: true, force: true });
      console.log('test-results folder was removed.');
    }

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 10*1000,
  expect: {
    timeout: 20 * 1000,
  },
  use: {
    browserName: 'chromium',
    headless : false,
    screenshot : 'on',
    trace: 'retain-on-failure',  //help debugg
  },
});
