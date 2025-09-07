import { test, request, expect } from '@playwright/test';

let token;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
    data: {
      userEmail: 'anshika@gmail.com',
      userPassword: 'Iamking@000'
    }
  });
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;
  console.log(`Token is ` + token)
});

test(`log in with API token test cases`, async({page}) =>{

    page.addInitScript(value =>{
        window.localStorage.setItem(`token`, value);
    }, token);
    await page.goto(`https://rahulshettyacademy.com/client`);

})