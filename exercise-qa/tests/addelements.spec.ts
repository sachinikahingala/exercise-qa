import { test, type Page } from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { AddRemoveElementsPage } from "../pages/addremove";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Add / Remove Element Tests", () => {
  test("verify add elements", async ({ page }) => {
    const addelementpage = new AddRemoveElementsPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoAddElementsPage();

    //verify add an element
    await addelementpage.addElement();
    await addelementpage.assertElementCount(1);

    //verify add second element
    await addelementpage.addElement();
    await addelementpage.assertElementCount(2);

    //verify add third element
    await addelementpage.addElement();
    await addelementpage.assertElementCount(3);
  });
  test("verify remove elements", async ({ page }) => {
    const addelementpage = new AddRemoveElementsPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoAddElementsPage();

    //verify add an element
    await addelementpage.addElement();
    await addelementpage.assertElementCount(1);

    //verify deletion of the added element
    await addelementpage.removeElement();
    await addelementpage.assertElementCount(0);
  });
});
