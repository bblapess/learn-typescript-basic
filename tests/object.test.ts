describe('Object', function () {
  it('should support in typescript', function () {
    const person: { id: number; name: string; hobbies?: string[] } = {
      id: 1,
      name: 'Iqbal',
    };

    console.info(person);

    person.id = 2;
    person.name = 'Pamula';

    console.info(person);
  });
});
