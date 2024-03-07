"use strict";
describe('If Statement', function () {
    it('should support in typescript', function () {
        const examValue = 90;
        if (examValue > 80) {
            console.info('Good');
        }
        else if (examValue > 60) {
            console.info('Not Bad');
        }
        else {
            console.info('Try Again');
        }
    });
    it('should support in typescript with ternary operator', function () {
        const value = 90;
        const say = value >= 75 ? 'Congratulations' : 'Try Again';
        console.info(say);
    });
    it('should support in typescript with switch statement', function () {
        function sayHello(name) {
            switch (name) {
                case "Iqbal":
                    return "Hi Iqbal";
                case "Pamula":
                    return "Hello Pamula";
                default:
                    return "Hello";
            }
        }
        console.info(sayHello('Iqbal'));
        console.info(sayHello('Pamula'));
        console.info(sayHello('Stranger'));
    });
});
