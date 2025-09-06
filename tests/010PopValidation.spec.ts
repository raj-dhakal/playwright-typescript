import {test, expect} from '@playwright/test';

test(`Hide element test cases`, async ({page}) =>{

    await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
    await expect(page.locator(`#displayed-text`)).toBeVisible();
    await page.locator(`#hide-textbox`).click();
    await expect(page.locator(`#displayed-text`)).toBeHidden();
    await page.pause(); 
})