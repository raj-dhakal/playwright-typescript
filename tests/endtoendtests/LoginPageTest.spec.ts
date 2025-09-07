import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageobjects/LoginPage';

test('Login App', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.goto();
  const landingPage = await loginPage.login('anshika@gmail.com', 'Iamking@000');
  await page.pause();
});
