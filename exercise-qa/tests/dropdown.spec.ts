import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { DropdownPage } from "../pages/dropdown";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Drop Down Values Functionality", () => {
  test("verify select options from drop down", async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoDropdownPage();
    await dropdownPage.selectOption("Option 1");
    await dropdownPage.assertOption("1");
    await dropdownPage.selectOption("Option 2");
    await dropdownPage.assertOption("2");
  });
});
