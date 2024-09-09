import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { CheckBoxPage } from "../pages/checkboxes";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Check boxes functionality", () => {
  test("verify check and uncheck option one", async ({ page }) => {
    const checkboxpage = new CheckBoxPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoCheckBoxPage();
    await checkboxpage.selectChekbox(1);
    await checkboxpage.assertChecked(1);
    await checkboxpage.uncheckChekbox(1);
    await checkboxpage.assertUnchecked(1);
  });

  test("verify check and uncheck option two", async ({ page }) => {
    const checkboxpage = new CheckBoxPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoCheckBoxPage();
    await checkboxpage.assertChecked(2);
    await checkboxpage.uncheckChekbox(2);
    await checkboxpage.assertUnchecked(2);
  });
});
