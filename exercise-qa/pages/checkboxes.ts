
import { Page, Locator, expect } from "@playwright/test";

export class CheckBoxPage {
    readonly page: Page;
    readonly checkbox01: Locator;
    readonly checkbox02: Locator;


    constructor(page: Page) {
        this.page = page;

        this.checkbox01 = page.locator("xpath=//*[@id='checkboxes']/input[1]");
        this.checkbox02 = page.locator("xpath=//*[@id='checkboxes']/input[2]");

    }



    async selectChekbox(option) {

        if (option == 1)
        //check the checkbox01
        {

            await this.checkbox01.check();
            await this.page.pause();

        }

        else {
            //check the checkbox02
            await this.checkbox02.click();
            await this.page.pause();
        }

    }
    async uncheckChekbox(option) {

        if (option == 1)
        //check the checkbox01
        {
            await this.checkbox01.uncheck();
            await this.page.pause();

        }

        else {
            //check the checkbox02
            await this.checkbox02.uncheck();
            await this.page.pause();
        }

    }
    async verifyChecked(option) {

        if (option == 1)
        //assert the checkbox01 is checked
        {
            expect(this.checkbox01).toBeChecked();

        }

        else {
            //assert the checkbox02 is checked
            {
                expect(this.checkbox02).toBeChecked();
            }

        }
    }
    async verifyUnchecked(option) {

        if (option == 1)
        //assert the checkbox01 is unchecked
        {
            expect(await this.checkbox01.isChecked()).toBeFalsy();

        }

        else {
            //assert the checkbox02 is unchecked
            {
                expect(await this.checkbox02.isChecked()).toBeFalsy();

            }

        }
    }

}
