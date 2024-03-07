describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: 1,
            name: 'Mobile',
        };
        const product = {
            id: 'u1',
            name: 'iPhone 12',
            price: 12000000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
