import { test, expect} from '@playwright/test';

test("Demo Test", async({page}) =>{
    console.log(`My name is Raj Dhakal`);
})

test(`Browser Fixture`, async({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`https://playwright.dev/`);
});

test(`Locator Review Tests`, async({page}) =>{
    await page.goto('https://playwright.dev/');
    const titleOfThePage = await page.locator(`.hero__title`).allTextContents();
    console.log(titleOfThePage);
    await page.locator(`.getStarted_Sjon`).click();
    await page.pause();
})
test('Extraxt text Test cases', async ({page}) =>{
    const products = page.locator(`[class='card-body'] h5`);
    await page.goto(`https://rahulshettyacademy.com/client`);
    await page.locator(`#userEmail`).fill(`anshika@gmail.com`)
    await page.locator(`#userPassword`).fill(`Iamking@000`);
    await page.locator(`#login`).click();
    await products.first().waitFor();
    const count = await page.locator(`[class='card-body'] h5`).allTextContents();
    for(let i = 0; i < count.length; i++){
        console.log(await products.allTextContents());
    }
    await page.pause();
})

test(`Static Dropdown`, async ({page}) =>{
    await page.goto(`https://rahulshettyacademy.com/loginpagePractise/`);

})