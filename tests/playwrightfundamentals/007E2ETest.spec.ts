import { test, expect } from '@playwright/test';

test('End-to-End test cases', async({page}) => { 

    await page.goto(`https://rahulshettyacademy.com/client`);
    await page.locator(`#userEmail`).fill(`anshika@gmail.com`)
    await page.locator(`#userPassword`).fill(`Iamking@000`);
    await page.locator(`#login`).click();
    await page.locator(`[class= 'card-body'] b`).first().waitFor(); // this is just to wait or explicitly wait making the products appears all
    const products = page.locator(`[class= 'card-body'] b`);
    const productLists = await products.allTextContents();
    for(let i = 0; i < productLists.length; i++){
        if(await products.nth(i).textContent() === `ZARA COAT 3`){
            await page.locator(`[class= 'card-body']`).nth(i).locator(`text = Add To Cart`).click();
            break; 
        }
    }
    await page.locator(`[routerlink = '/dashboard/cart']`).click();
    await page.locator(`.cartSection h3`).first().waitFor();
    await page.locator(`[type = 'button']`).last().click();
    await page.locator(`[placeholder = 'Select Country']`).pressSequentially(`Ind`);

    const listOfCountries = page.locator(`[class='ta-results list-group ng-star-inserted'] span`);
    const count = await listOfCountries.allTextContents();
    console.log(count);

    for(let i = 0; i < count.length; i++){
        if(await listOfCountries.nth(i).textContent() === `India`){
            await listOfCountries.nth(i).click();
            break;
        }
    }
    await page.pause();
});