import { expect, type Page, type Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  readonly storeModalClose: Locator;
  readonly signInIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.storeModalClose = this.page.getByRole('button', { name: 'Close' });
    this.signInIcon = this.page.getByText('Sign In').last();
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }

  async closeStoreModal() {
    if (await this.storeModalClose.isVisible()) {
      await this.storeModalClose.click();
    }
  }

  async clickSignInIcon() {
    await this.signInIcon.click();
  }
}
