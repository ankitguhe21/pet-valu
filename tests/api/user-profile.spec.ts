import { expect, test } from '@playwright/test';
import { ApiStatusResponse, UserProfileResponse } from '../../types/api.types';

test.describe('Get User Profile', () => {
  test('GET User Profile', async ({ request }) => {
    const resposne = await request.get('/api-customers/customers/profile');
    const userProfile: UserProfileResponse = await resposne.json();
    console.log(userProfile);
    expect(userProfile.firstName).toBe('Ankit');
    expect(userProfile.lastName).toBe('Guhe');
    expect(userProfile.shippingAddresses[0].streetName).toBe(
      '109 Tuscany Trail'
    );
  });
});
