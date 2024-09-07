import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { DropdownPage } from '../pages/dropdown';

test.beforeEach(async ({ page }) => {
  await page.goto('/');

});

test.describe('Verify Drop Down Values', () => {

  test('should allow me to select option 1 from drop down', async ({ page }) => {

    const dropdownPage = new DropdownPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoDropdownPage();
    await dropdownPage.selectOption('Option 1');
    await dropdownPage.verifyOption('1');
    await dropdownPage.selectOption('Option 2');
    await dropdownPage.verifyOption('2');

  });
});

