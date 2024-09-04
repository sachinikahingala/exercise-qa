
import { Page, Locator, expect } from "@playwright/test";

export class KeyPressesPage {
    readonly page: Page;
    readonly label: Locator;


    constructor(page: Page) {
        this.page = page;
        this.label = page.locator('#result');

    }

    async pressbutton(text) {
        await this.page.keyboard.press(text);
        await this.page.pause();
    }

    async verifypressedbutton(text) {
        await expect(this.label).toContainText('You entered: ' + text);
    }
}


