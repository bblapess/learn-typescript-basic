describe('Any', function () {
  it('should support in typescript', function () {
    const person: any = {
      name: 'Iqbal',
      age: 22,
    };

    person.age = 23;
    person.address = 'Jakarta';
  });
});
