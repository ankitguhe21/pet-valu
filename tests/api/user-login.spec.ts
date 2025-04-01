import { test, expect } from '@playwright/test';
import { LoginResponse, ApiStatusResponse } from '../../types/api.types';
test.use({ storageState: { cookies: [], origins: [] } });
const email = process.env.USER_EMAIL;
const password = process.env.USER_PASSWORD;

test.describe('User Login', () => {
  test('First tests', async ({ request }) => {
    const response = await request.post('/api-customers/customers/login', {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
        Origin: 'https://www.petvalu.ca',
      },
      data: {
        email: email,
        password: password,
        remember: true,
        storeId: '1005',
      },
    });
    const user: ApiStatusResponse<LoginResponse> = await response.json();
    expect(user.statusCode).toEqual('OK');
    expect(user.message).toEqual('Success.');
    expect(user.data.lastName).toEqual('Guhe');
    expect(user.data.key).toBeTruthy();
    expect(user.data.email).toEqual(email);
    expect(user.data.firstName).toBe('Ankit');
    expect(user.data.lastName).toBe('Guhe');
    expect(user.data.accessToken).toBeTruthy();
    expect(user.data.refreshToken).toBeTruthy();
  });
});
