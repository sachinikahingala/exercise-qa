import { test, expect, type Page } from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { CheckBoxPage } from "../pages/checkboxes";
import assert from "assert";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Check boxes functionality", () => {
  test("verify check and uncheck option one", async ({ page }) => {
    const checkboxpage = new CheckBoxPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoCheckBoxPage();
    await checkboxpage.selectChekbox(1);
    //verify checkbox 01 is checked
    expect(await checkboxpage.getCheckboxStatus(1)).toBeTruthy();
    await checkboxpage.uncheckChekbox(1);
    //verify checkbox 01 is unchecked
    expect(await checkboxpage.getCheckboxStatus(1)).toBeFalsy();
  });

  test("verify check and uncheck option two", async ({ page }) => {
    const checkboxpage = new CheckBoxPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoCheckBoxPage();
    //verify checkbox 02 is checked
    expect(await checkboxpage.getCheckboxStatus(2)).toBeTruthy();
    await checkboxpage.uncheckChekbox(2);
    //verify checkbox 02 is unchecked
    expect(await checkboxpage.getCheckboxStatus(2)).toBeFalsy();
  });
});
