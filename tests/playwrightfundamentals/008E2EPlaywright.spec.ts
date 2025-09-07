import { test, expect } from '@playwright/test';

test('End-to-End test cases playwright', async({page}) => { 

    await page.goto(`https://rahulshettyacademy.com/client`);
    await page.getByPlaceholder(`email@example.com`).fill(`anshika@gmail.com`);
    await page.getByPlaceholder(`enter your passsword`).fill(`Iamking@000`);
    await page.getByRole(`button`, {name: `login`}).click();
    await page.locator(`[class= 'card-body'] b`).first().waitFor();
    await page.locator(`[class= 'card-body']`).filter({hasText: `ZARA COAT 3`}).getByRole(`button`, {name: `Add to Cart`}).click();
    await page.pause();
});