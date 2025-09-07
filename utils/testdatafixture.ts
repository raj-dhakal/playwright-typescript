import { test as base } from "@playwright/test";

export const customTest = base.extend({
  testDataOrder: async ({}, use) => {
    await use({
      userName: "ansika@gmail.com",
      userPassword: "Iamking@000",
      productName: "Zara Coat 4",
    });
  },
});
