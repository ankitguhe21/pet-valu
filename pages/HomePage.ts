import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './Base.ts';

export class HomePage extends BasePage {
  readonly userProfileIcon: Locator;

  constructor(page: Page) {
    super(page);

    this.userProfileIcon = this.page.locator('.user-name').first();
  }

  async veirfyUserName(userName) {
    await expect(this.userProfileIcon).toHaveText(`Hi ${userName}!`);
  }
}
