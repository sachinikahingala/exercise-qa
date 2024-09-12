import { test, type Page, expect } from "@playwright/test";
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
    //verify the delete button count
    expect(await addelementpage.getElementCount()).toBe(1);

    //verify add second element
    await addelementpage.addElement();
    //verify the delete button count
    expect(await addelementpage.getElementCount()).toBe(2);

    await addelementpage.addElement();
    //verify the delete button count
    expect(await addelementpage.getElementCount()).toBe(3);
  });
  test("verify remove elements", async ({ page }) => {
    const addelementpage = new AddRemoveElementsPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoAddElementsPage();

    await addelementpage.addElement();
    //verify the delete button count
    expect(await addelementpage.getElementCount()).toBe(1);

    await addelementpage.removeElement();
    //verify the delete button count
    expect(await addelementpage.getElementCount()).toBe(0);
  });
});
