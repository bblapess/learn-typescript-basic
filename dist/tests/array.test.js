"use strict";
describe('Array', function () {
    it('should same with javascript', function () {
        const names = ['Iqbal', 'Pamula'];
        const balances = [1, 2, 3];
        console.info(names);
        console.info(balances);
    });
    it('should support readonly array', function () {
        const hobbies = ['Main', 'Tidur', 'Makan'];
        console.info(hobbies);
    });
    it('should support tuple', function () {
        const person = ['Iqbal', 'Pamula', 22];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
