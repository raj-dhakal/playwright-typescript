import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  BeforeStep,
  AfterStep,
  Status,
} from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "playwright";

let browser: Browser;
let context: BrowserContext;
let page: Page;

//
// Runs once before everything
//
BeforeAll(async function () {
  console.log("🌍 BeforeAll: Starting test suite...");
});

//
// Runs once after everything
//
AfterAll(async function () {
  console.log("✅ AfterAll: Finished test suite.");
});

//
// Runs before each scenario
//
Before(async function () {
  console.log("⚡ Before: Launching browser for scenario");
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  // Expose page to steps using World
  this.page = page;
});

//
// Runs after each scenario
//
After(async function () {
  console.log("🛑 After: Closing browser for scenario");
  if (browser) {
    await browser.close();
  }
});

//
// Runs before every step
//
BeforeStep(async function ({ pickleStep }) {
  console.log(`➡️ BeforeStep: ${pickleStep.text}`);
});

//
// Runs after every step
//
AfterStep(async function ({ result, pickleStep }) {
  if (result?.status === Status.FAILED) {
    const fileName = `screenshot-${Date.now()}.png`;
    await this.page.screenshot({ path: fileName, fullPage: true });
    console.log(`❌ Step failed: ${pickleStep.text}`);
    console.log(`📸 Screenshot saved: ${fileName}`);
  } else {
    console.log(`✅ Step passed: ${pickleStep.text}`);
  }
});
