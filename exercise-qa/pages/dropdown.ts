import { Page, Locator, expect } from "@playwright/test";

export class DropdownPage {
    readonly page: Page;
    readonly dropdown: Locator;

    constructor(page: Page) {
        this.page = page;

        this.dropdown = page.locator("#dropdown");
    }

    async selectOption(option : string) {
        await this.dropdown.selectOption(option);
        await this.page.pause();
    }
    async assertOption(dropdownvalue: string) {
        //verify selected value in the drop down
        await expect(this.dropdown).toHaveValue(dropdownvalue);
    }
}
