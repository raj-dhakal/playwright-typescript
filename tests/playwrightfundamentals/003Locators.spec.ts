import { test, expect } from '@playwright/test';

test(`Locators test cases`, async({page}) => { 

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

test(`Get by Role Locators`, async({page}) =>{
    await page.goto (`https://rahulshettyacademy.com/angularpractice/`);
    await page.locator(`[class='form-group'] [name='name']`).fill(`Raj Dhakal`);
    await page.locator(`[class='form-group'] [name='email']`).fill(`swiss_raj_19@yahoomail.com`);
    await page.getByPlaceholder(`Password`).fill(`YoubaRaj1988$`);
    await page.getByLabel(`Check me out if you Love IceCreams!`).click();
    await page.getByLabel(`Gender`).selectOption(`Female`);
    await page.getByLabel(`Employed`).check();
    await page.locator(`[type ='date']`).pressSequentially(`12122024`);
    await page.getByRole(`button`, {name: `Submit`}).click();
    console.log(await page.getByText(`Success! The Form has been submitted successfully!.`).textContent());
    await page.getByRole(`link`, {name: `Shop`}).click();
    await page.locator(`app-card`).filter({hasText: `Nokia Edge`}).getByRole(`button`).click();
    await page.pause();

})