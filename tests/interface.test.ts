import { Seller } from '../src/seller';
import { Employee, Manager } from '../src/employee';
import { Person } from '../src/person';

describe('Interface', function () {
  it('should support in typescript', function () {
    const seller: Seller = {
      id: 1,
      name: 'Toko Sumber Ilmu',
      nib: '1234567890',
      npwp: '0987654321',
    };

    seller.name = 'Toko Sumber Ilmu Baru';

    console.info(seller);
  });

  it('should support function interface', function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(1, 2)).toBe(3);
    console.info(add(1, 2));
  });

  it('should support indexable interface', function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ['Iqbal', 'Pamula'];
    console.info(names[0]);
    console.info(names[1]);
  });

  it('should support indexable interface for non-number index', function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: 'Iqbal',
      address: 'Jakarta',
    };

    expect(dictionary['name']).toBe('Iqbal');
    expect(dictionary['address']).toBe('Jakarta');
  });

  it('should support extends interface', function () {
    const employee: Employee = {
      id: '1',
      name: 'Iqbal',
      division: 'Engineering',
    };

    console.info(employee);

    const manager: Manager = {
      id: '2',
      name: 'Pamula',
      division: 'Engineering',
      numberOfEmployees: 10,
    };

    console.info(manager);
  });

  it('should support function in interface', function () {
    const person: Person = {
      name: 'Iqbal',
      sayHello: (name: string): string => {
        return `Hello ${name}, my name is ${person.name}`;
      },
    };

    console.info(person.sayHello('Pamula'));
  });

  it('should support intersection type', function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: number;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: 1,
      name: 'Iqbal',
    };

    console.info(domain);
  });

  it('should support type assertion', function () {
    const person: any = {
      name: 'Iqbal',
      age: 30,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});
