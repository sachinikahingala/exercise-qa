import { test, type Page } from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { ABTestingPage } from "../pages/abtesting";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("AB Testing Page Tests", () => {
  test("verify the page title", async ({ page }) => {
    const abtestingPage = new ABTestingPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoabtestingPage();
    await abtestingPage.assertTitleIsPresent("A/B Test Variation 1");
  });
});
