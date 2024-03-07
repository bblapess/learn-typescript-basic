"use strict";
describe('Optional Parameters', function () {
    it('should support null and undefined', function () {
        function sayHello(name) {
            if (name) {
                return `Hello ${name}!`;
            }
            else {
                return 'Hello Stranger!';
            }
        }
        console.info(sayHello('Iqbal'));
        const name = undefined;
        console.info(sayHello(name));
        console.info(sayHello(null));
    });
});
