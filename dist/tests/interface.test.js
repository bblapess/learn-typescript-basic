describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'Toko Sumber Ilmu',
            nib: '1234567890',
            npwp: '0987654321'
        };
        seller.name = 'Toko Sumber Ilmu Baru';
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
        console.info(add(1, 2));
    });
    it('should support indexable interface', function () {
        const names = ['Iqbal', 'Pamula'];
        console.info(names[0]);
        console.info(names[1]);
    });
    it('should support indexable interface for non-number index', function () {
        const dictionary = {
            'name': 'Iqbal',
            'address': 'Jakarta'
        };
        expect(dictionary['name']).toBe('Iqbal');
        expect(dictionary['address']).toBe('Jakarta');
    });
    it('should support extends interface', function () {
        const employee = {
            id: '1',
            name: 'Iqbal',
            division: 'Engineering'
        };
        console.info(employee);
        const manager = {
            id: '2',
            name: 'Pamula',
            division: 'Engineering',
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: 'Iqbal',
            sayHello: (name) => {
                return `Hello ${name}, my name is ${person.name}`;
            }
        };
        console.info(person.sayHello('Pamula'));
    });
    it('should support intersection type', function () {
        const domain = {
            id: 1,
            name: 'Iqbal'
        };
        console.info(domain);
    });
    it('should support type assertion', function () {
        const person = {
            name: 'Iqbal',
            age: 30
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
