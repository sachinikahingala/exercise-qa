import { Page, Locator, expect } from "@playwright/test";

export class AddRemoveElementsPage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly deleteButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addButton = page.locator('button:text("Add Element")');
        this.deleteButton = page.locator('button:text("Delete")');
    }

    async addElement() {
        await this.addButton.click();
        await this.page.pause();
    }
    async assertElementCount(elementcount: number) {
        //verify selected value in the drop down
        await expect(this.deleteButton).toHaveCount(elementcount);
    }

    async removeElement() {
        await this.deleteButton.last().click();
        await this.page.pause();
    }
}
