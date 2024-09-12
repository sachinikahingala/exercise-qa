import { Page, Locator, expect } from "@playwright/test";

export class KeyPressesPage {
  readonly page: Page;
  readonly label: Locator;

  constructor(page: Page) {
    this.page = page;
    this.label = page.locator("#result");
  }

  async pressbutton(buttonname: string) {
    await this.page.keyboard.press(buttonname);
    await this.page.pause();
  }

  async getlabel() {
    return await this.label.textContent();
  }
}
