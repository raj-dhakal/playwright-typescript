import {test, expect} from '@playwright/test';

test('Page tittle', async ({page}) =>{
    await page.goto("https://www.google.com");
    const title1 = await page.title();
    console.log(title1);
})

test('Assertion practice', async ({page}) =>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle(`Google`)
})