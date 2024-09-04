import { test, type Page } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AddRemoveElementsPage } from '../pages/addremove';



test.beforeEach(async ({ page }) => {
  await page.goto('/');

});


test.describe('Verify Add Elements and Remove', () => {

  test('should allow me to add elements', async ({ page }) => {

    const addelementpage = new AddRemoveElementsPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoAddElementsPage();

    await addelementpage.addElement();
    await addelementpage.verifyAddedElement(1);

    await addelementpage.addElement();
    await addelementpage.verifyAddedElement(2);

    await addelementpage.addElement();
    await addelementpage.verifyAddedElement(3);


  });
  test('should allow me to remove elements', async ({ page }) => {

    const addelementpage = new AddRemoveElementsPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoAddElementsPage();

    await addelementpage.addElement();
    await addelementpage.verifyAddedElement(1);
    await addelementpage.removeElement();
    await addelementpage.verifyRemovedElement();


  });


});
