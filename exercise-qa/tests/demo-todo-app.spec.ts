import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { CheckBoxPage } from '../pages/checkboxes';
import { ABTestingPage } from '../pages/abtesting';
import { DropdownPage } from '../pages/dropdown';
import { AddRemoveElementsPage } from '../pages/addremove';
import { KeyPressesPage } from '../pages/keypresses';



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

test.describe('Verify Title is Present', () => {

  test('should allow me to validate page title', async ({ page }) => {

    const abtestingPage = new ABTestingPage(page);
    const homepage = new HomePage(page);

    await homepage.gotoabtestingPage();
    await abtestingPage.verifyTitleIsPresent("A/B Test Variation 1");
  });
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
