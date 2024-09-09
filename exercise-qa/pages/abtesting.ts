import { Page, Locator, expect } from "@playwright/test";

export class ABTestingPage {
    readonly page: Page;
    readonly Text: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Text = page.locator("xpath=//*[@id='content']/div/h3");

    }

    async assertTitleIsPresent(title: string ) {

        await expect(this.Text).toBeVisible();
        await expect(this.Text).toContainText(title);
    }
}
