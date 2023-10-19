const CartsRouter = require('./carts_router');

describe('CartsRouter', () => {
  test('should create a cart', () => {
    const cartsRouter = new CartsRouter();
    const cartId = cartsRouter.createCart();
    expect(cartsRouter.carts.length).toBe(1);
    expect(cartsRouter.carts[0].id).toBe(1);
  });
});