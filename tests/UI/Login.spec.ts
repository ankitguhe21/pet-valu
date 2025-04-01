import { test, expect } from '../../fixtures/mainFixtures';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.closeStoreModal();
    await loginPage.clickSignInIcon();
  });
  test('User should be able to login with Valid Credentials', async ({
    loginPage,
    homePage,
  }) => {
    await loginPage.inputUserEmail(process.env.USER_EMAIL);
    await loginPage.inputPassWord(process.env.USER_PASSWORD);
    await loginPage.clickSignInButton();
    await homePage.veirfyUserName('Ankit');
  });
});
