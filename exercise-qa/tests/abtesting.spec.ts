import { test,  type Page } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { ABTestingPage } from '../pages/abtesting';


test.beforeEach(async ({ page }) => {
  await page.goto('/');

});


test.describe('Verify Title is Present', () => {

  test('should allow me to validate page title', async ({ page }) => {

    const abtestingPage = new ABTestingPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoabtestingPage();
    await abtestingPage.verifyTitleIsPresent("A/B Test Variation 1");
  });
});