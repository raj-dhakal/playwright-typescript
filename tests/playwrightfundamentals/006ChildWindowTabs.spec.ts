import {test, expect} from '@playwright/test';

test('Handling childwindow test cases', async ({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`https://rahulshettyacademy.com/loginpagePractise/`);
    const documentLink = page.locator(`[href*='documents-request']`);
    const[newPage] = await Promise.all([
        context.waitForEvent(`page`),
        documentLink.click(),
    ]);
    const text = await newPage.locator(`.red`).textContent();
    console.log(text);
    // if you want to go back to original or first page then go as usual
    await page.locator(`#id`).click();
    await page.pause();
})