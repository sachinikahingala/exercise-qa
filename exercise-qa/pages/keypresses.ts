import { Page, Locator, expect } from "@playwright/test";

export class KeyPressesPage {
    readonly page: Page;
    readonly label: Locator;

    constructor(page: Page) {
        this.page = page;
        this.label = page.locator("#result");
    }

    async pressbutton(buttonname) {
        await this.page.keyboard.press(buttonname);
        await this.page.pause();
    }

    async assertpressedbutton(buttonname) {
        await expect(this.label).toContainText("You entered: " + buttonname);
    }
}
