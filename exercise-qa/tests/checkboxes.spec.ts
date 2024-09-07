import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { CheckBoxPage } from '../pages/checkboxes';




test.beforeEach(async ({ page }) => {
  await page.goto('/');

});

test.describe('Verify check boxes functionality', () => {

  test('should allow me to check and uncheck option one', async ({ page }) => {

    const checkboxpage = new CheckBoxPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoCheckBoxPage();
    await checkboxpage.selectChekbox(1);
    await checkboxpage.verifyChecked(1);
    await checkboxpage.uncheckChekbox(1);
    await checkboxpage.verifyUnchecked(1);

  })

  test('should allow me to uncheck option two', async ({ page }) => {

    const checkboxpage = new CheckBoxPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoCheckBoxPage();
    await checkboxpage.verifyChecked(2);
    await checkboxpage.uncheckChekbox(2);
    await checkboxpage.verifyUnchecked(2);
  })
});

