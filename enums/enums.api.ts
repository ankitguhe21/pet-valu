export enum ApiRoutes {
  LOGIN = '/api-customers/customers/login',
  PROFILE = '/api-customers/customers/profile',
  ORDER_HISTORY = '/api-carts/order/get-order-history',
}

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  SERVER_UNAVAILABLE = 503,
}
