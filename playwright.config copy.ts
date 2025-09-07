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
  retries: 1,
  workers : 3,  // you can do 4 5 as per needed
  reporter: 'html',
  timeout: 10*1000,
  expect: {
    timeout: 20 * 1000,
  },

  projects: [
    {
      name : 'Chrome Executiona',
       use: {
        browserName: 'chromium',
        headless : false,
        screenshot : 'off',
        trace: 'retain-on-failure',  //help debugg
  }}]
 
});
