const ProductsRouter = require('./products_router');

describe('ProductsRouter', () => {
  test('should add a product', () => {
    const productsRouter = new ProductsRouter();
    productsRouter.addProduct('Product1');
    expect(productsRouter.products.length).toBe(1);
    expect(productsRouter.products[0]).toBe('Product1');
  });
});