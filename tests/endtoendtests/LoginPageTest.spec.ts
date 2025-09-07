import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageobjects/LoginPage';
const dataset = JSON.parse(JSON.stringify(require('../../utils/LogInPagetestData.json')));

test('Login App', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  const landingPage = await loginPage.login(dataset.userName, dataset.userPassword);
  await page.pause();
});
