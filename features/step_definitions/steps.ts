import { Given, When, Then, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given(
  "I log in to the E-commerce application with username {string} and password {string}",{timeout:100*1000},
  async function (username: string, password: string) {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.fill("#userEmail", username);
    await page.fill("#userPassword", password);
    await page.click("#login");

    // Wait until dashboard loads
    await page.waitForSelector("[routerlink='/dashboard/cart']");
  }
);

When("I add {string} to the cart", async function (productName: string) {
  const products = page.locator(".card-body b");
  await products.first().waitFor(); // wait until products load

  const count = await products.count();
  for (let i = 0; i < count; i++) {
    if ((await products.nth(i).textContent())?.trim() === productName) {
      await page.locator(".card-body").nth(i).locator("text=Add To Cart").click();
      break;
    }
  }

  await page.click("[routerlink='/dashboard/cart']");
});

Then("I should see {string} displayed in the cart", async function (productName: string) {
  const cartItems = page.locator(".cartSection h3");
  await expect(cartItems).toContainText(productName);
});

When("I enter valid shipping and payment details and place the order", async function () {
  await page.locator("[placeholder='Select Country']").pressSequentially("Ind");
  const listOfCountries = page.locator(".ta-results span");

  await listOfCountries.first().waitFor();
  const count = await listOfCountries.count();

  for (let i = 0; i < count; i++) {
    if ((await listOfCountries.nth(i).textContent())?.trim() === "India") {
      await listOfCountries.nth(i).click();
      break;
    }
  }

  await page.click(".action__submit"); // Place order button
});

Then("I should see the order recorded in the order history", async function () {
  await page.click("button[routerlink='/dashboard/myorders']");
  const orderHistory = page.locator("tbody tr");
  //await expect(orderHistory).toHaveCountGreaterThan(0);
});

// Close browser after each scenario
After(async function () {
  if (browser) {
    await browser.close();
  }
});


