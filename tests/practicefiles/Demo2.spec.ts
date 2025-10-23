import {test, expect} from '@playwright/test';


test('Table handle concept using playwright', async ({page}) =>{

    await page.goto("https://letcode.in/table");

    //I am using playwright concept for this project
    const table = page.locator("[id ='simpletable']");
    const headerName = table.locator("thead").allInnerTexts();
    console.log(await headerName);
    const rowCount = table.locator("tbody tr").count();
    const colCount = table.locator("tbody tr").first().locator("td").count();
    console.log(await rowCount);
    console.log(await colCount);



});