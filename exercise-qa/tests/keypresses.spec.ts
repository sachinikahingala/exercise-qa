import { test, type Page } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { KeyPressesPage } from '../pages/keypresses';



test.beforeEach(async ({ page }) => {
  await page.goto('/');

});

test.describe('Key presses functionality', () => {


  test('should allow me to click on keys', async ({ page }) => {

    const keypresspage = new KeyPressesPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoKeyPressesPage();

    await keypresspage.pressbutton('Shift');
    await keypresspage.verifypressedbutton('SHIFT');


    await keypresspage.pressbutton('Control');
    await keypresspage.verifypressedbutton('CONTROL');


  });

  test('should allow me to click on key combinations', async ({ page }) => {

    const keypresspage = new KeyPressesPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoKeyPressesPage();


    await keypresspage.pressbutton('ArrowDown');
    await keypresspage.verifypressedbutton('DOWN');


  });
});
