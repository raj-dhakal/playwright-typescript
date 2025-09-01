import {test, expect} from '@playwright/test';

test('Extraxt text Test cases', async ({page}) =>{
    await page.goto(`https://rahulshettyacademy.com/client/#/auth/login`);
    await page.locator(`#userEmail`).fill(`anshika@gmail.com`)
    await page.locator(`#userPassword`).fill(`Iamking@000`);
    await page.locator(`#login`).click();
    await page.locator(`[class= 'card-body'] h5`).first().waitFor();
    const title = await page.locator(`[class= 'card-body'] h5`).allTextContents();
    console.log(title);    
})