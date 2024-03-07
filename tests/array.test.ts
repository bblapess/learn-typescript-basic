describe('Array', function () {
  it('should same with javascript', function () {
    const names: string[] = ['Iqbal', 'Pamula'];
    const balances: number[] = [1, 2, 3];

    console.info(names);
    console.info(balances);
  });

  it('should support readonly array', function () {
    const hobbies: ReadonlyArray<string> = ['Main', 'Tidur', 'Makan'];
    console.info(hobbies);
  });

  it('should support tuple', function () {
    const person: readonly [string, string, number] = ['Iqbal', 'Pamula', 22];
    console.info(person);

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
