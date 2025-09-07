import {test, expect} from '@playwright/test';

test('Static drop test cases', async ({page}) =>{
    await page.goto(`https://rahulshettyacademy.com/loginpagePractise/`);
    await page.locator(`#username`).fill(`swissraj1`);
    await page.locator(`#password`).fill(`YoubaRaj123`);
    await page.locator(`[class = 'customradio'] [class ='checkmark']`).last().click();
    await expect(page.locator(`[class = 'customradio'] [class ='checkmark']`).last()).toBeChecked();
    await page.locator(`#okayBtn`).click();
    await page.locator(`select.form-control`).selectOption(`consult`);
    await page.locator(`#terms`).check();
    await expect(page.locator(`[href*='documents-request']`)).toHaveAttribute(`class`, `blinkingText`);
    await page.pause();
})