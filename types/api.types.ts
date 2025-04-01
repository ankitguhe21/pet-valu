import { UUID } from 'crypto';

export interface LoginPayload {
  email: string;
  password: string;
  remember: true;
}

export interface LoginResponse {
  key: string;
  commerceToolsId: string;
  firstName: string;
  lastName: string;
  email: string;
  isEmailVerified: boolean;
  accessToken: string;
  refreshToken: string;
  version: string;
  hadCartItemsInLoggedIn: boolean;
  customerGroup: null;
}

export interface ApiStatusResponse<T> {
  statusCode: string;
  ok: boolean;
  code: string;
  message: string;
  data: T;
}

export interface UserProfileResponse {
  shippingAddresses: ShippingAddress[];
  id: string;
  lastName: string;
  receiveEmail: boolean;
  subscribedForVIPUpdates: boolean;
  defaultShippingAddressId: string;
  firstName: string;
  phoneNumber: string;
  defaultPaymentMethodId: string;
  paymentMethods: PaymentMethod[];
  email: string;
  version: number;
  militaryDiscount: boolean;
  seniorDiscount: boolean;
}

export interface ShippingAddress {
  id: string;
  key: string | null;
  country: string;
  title: string | null;
  salutation: string | null;
  firstName: string;
  lastName: string;
  streetName: string;
  streetNumber: string | null;
  additionalStreetInfo: string | null;
  postalCode: string;
  city: string;
  region: string | null;
  state: string;
  company: string | null;
  department: string | null;
  building: string | null;
  apartment: string;
  pOBox: string | null;
  phone: string;
  mobile: string | null;
  email: string | null;
  fax: string | null;
  additionalAddressInfo: string | null;
  externalId: string | null;
  custom: any;
}

export interface PaymentMethod {
  id: string;
  key: string;
  billingAddress: BillingAddress;
  expiryMonth: string;
  expiryYear: string;
  nameOnCard: string;
  number: string;
  bin: string;
  type: string;
  cybersourceToken: string;
  createdAt: string;
  expiresSoon: boolean;
  expired: boolean;
}

// Stub for BillingAddress (replace this with the correct shape if available)
export interface BillingAddress {
  [key: string]: any; // You can refine this further based on actual billing address fields
}
