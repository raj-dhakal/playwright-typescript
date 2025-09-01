import { test, expect } from '@playwright/test';

test('Browser Context Demo', async({browser}) => { // browser is a global variable or fixture comes with test annotation

    const context =  await browser.newContext(); // this will open the  fresh browser but if you want to send some proxy or cookies then we need
    const page = await context.newPage(); //new page open                                       //  to add some parameter in newContext(proxy)
    await page.goto("https://www.google.com");

});