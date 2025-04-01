import { test, expect } from '@playwright/test';

import { OrdersResponsePayload } from '../../types/api.types';
import { ApiRoutes, StatusCode } from '../../enums/enums.api';

test.describe('User Order History', () => {
  test('verify User Order History API', async ({ request }) => {
    const response = await request.get(ApiRoutes.ORDER_HISTORY);

    const orderHistory: OrdersResponsePayload = await response.json();

    expect(orderHistory.orders).toBeDefined();
    expect(orderHistory.orders.length).toBeGreaterThan(0);
    expect(orderHistory.orders[0].id).toBeTruthy();
    expect(orderHistory.orders[0].hasAutoShip).toBe(true);
  });
});
