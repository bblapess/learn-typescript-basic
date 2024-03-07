import { Category, Product } from '../src/type-alias';
describe('Type Alias', function () {
  it('should support in typescript', function () {
    const category: Category = {
      id: 1,
      name: 'Mobile',
    };

    const product: Product = {
      id: 'u1',
      name: 'iPhone 12',
      price: 12000000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
