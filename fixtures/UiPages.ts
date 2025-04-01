import { test as base } from '@playwright/test';
import { BasePage } from '../pages/Base';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginpAGE';

type UIPages = {
  basePage: BasePage;
  homePage: HomePage;
  loginPage: LoginPage;
};

export const test = base.extend<UIPages>({
  basePage: async ({ page }, use: any) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },

  loginPage: async ({ page }, use: any) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});
