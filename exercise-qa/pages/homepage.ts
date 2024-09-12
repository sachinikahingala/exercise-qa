import { Locator, Page, expect } from "@playwright/test";
import { Expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoHomePage() {
    await this.page.goto("/");
  }

  async gotoCheckBoxPage() {
    await this.page.goto("/checkboxes");
  }

  async gotoabtestingPage() {
    await this.page.goto("/abtest");
    await expect(this.page).toHaveURL("/abtest");
  }

  async gotoDropdownPage() {
    await this.page.goto("/dropdown");
  }

  async gotoAddElementsPage() {
    await this.page.goto("/add_remove_elements/");
  }

  async gotoKeyPressesPage() {
    await this.page.goto("/key_presses");
  }
}
