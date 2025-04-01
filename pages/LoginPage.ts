import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './Base';

export class LoginPage extends BasePage {
  readonly emailAddressInputField: Locator;
  readonly passwordInputField: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailAddressInputField = this.page.getByRole('textbox', {
      name: 'Email Address',
    });
    this.passwordInputField = this.page.getByRole('textbox', {
      name: 'Password',
    });

    this.signInButton = this.page.getByRole('button', { name: 'Sign In' });
  }

  async inputUserEmail(email) {
    await this.emailAddressInputField.fill(email);
  }

  async inputPassWord(password) {
    await this.passwordInputField.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }
}
