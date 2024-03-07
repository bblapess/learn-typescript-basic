describe('Function', function () {
  it('should support in typescript', function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello('Iqbal')).toBe('Hello Iqbal');

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello('Iqbal');
  });

  it('should support default parameter', function () {
    function sayHello(name: string = 'Pamula'): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe('Hello Pamula');
    expect(sayHello('Iqbal')).toBe('Hello Iqbal');
  });

  it('should support rest parameter', function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3)).toBe(6);
  });

  it('should support optional parameter', function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      }
      return `Hello ${firstName}`;
    }

    expect(sayHello('Iqbal')).toBe('Hello Iqbal');
    expect(sayHello('Iqbal', 'Pamula')).toBe('Hello Iqbal Pamula');
  });

  it('should support function overloading', function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === 'string') {
        return value.toUpperCase();
      } else if (typeof value === 'number') {
        return value * 2;
      }
    }

    expect(callMe(100)).toBe(200);
    expect(callMe('Iqbal')).toBe('IQBAL');
  });

  it('should support function as parameter', function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('Iqbal', toUpper)).toBe('Hello IQBAL');

    expect(
      sayHello('Iqbal', function (name: string): string {
        return name.toUpperCase();
      }),
    ).toBe('Hello IQBAL');

    expect(
      sayHello('Iqbal', (name: string): string => name.toUpperCase()),
    ).toBe('Hello IQBAL');
  });
});
