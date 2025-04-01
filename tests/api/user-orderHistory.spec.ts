import { Page, request, test } from '@playwright/test';

test.describe('User Order History', () => {
  test('verify User Order History API', async ({ request }) => {
    const response = await request.get('/api-carts/order/get-order-history');

    const orderHistory = await response.json();
    console.log(orderHistory);
  });
});
