import { test as setup, expect } from '@playwright/test';
import { LoginResponse } from './types/api.types';
const authFile = './.auth/user.json';

setup('autheticate as user', async ({ request, page }) => {
  const response: Object = await request.post(
    '/api-customers/customers/login',
    {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
        'Content-Length': '150',
      },
      data: {
        email: process.env.USER_EMAIL,
        password: process.env.USER_PASSWORD,
        remember: true,
        storeId: '1005',
      },
    }
  );

  const responseData = await response.json();
  process.env.ACCESS_TOKEN = await responseData.data.accessToken;
  await page.context().storageState({ path: authFile });
});
