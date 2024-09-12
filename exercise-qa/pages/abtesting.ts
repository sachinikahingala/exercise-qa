import { Page, Locator, expect } from "@playwright/test";
import { log } from "console";
import { text } from "stream/consumers";

export class ABTestingPage {
  readonly page: Page;
  readonly Text: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Text = page.locator("xpath=//*[@id='content']/div/h3");
  }

  async getTitle() {
    await this.page.pause();
    return await this.Text.textContent();
  }
}
