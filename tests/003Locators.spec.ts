import { test, expect } from '@playwright/test';

test('Locators test cases', async({page}) => { 

    await page.goto(`https://rahulshettyacademy.com/loginpagePractise/`);
    await page.locator(`#username`).fill(`rahulshetty`);
    await page.locator(`[type='password']`).fill(`learning`);
    await page.locator(`#signInBtn`).click();
    const errorMessage = await page.locator(`[style*='block']`).textContent();
    console.log(errorMessage);
    await expect(page.locator(`[style*='block']`)).toContainText(`Incorrect`);
    await page.locator(`#username`).fill("");
    await page.locator(`#username`).fill(`rahulshettyacademy`);
});