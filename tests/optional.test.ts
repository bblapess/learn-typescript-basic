describe('Optional Parameters', function () {
  it('should support null and undefined', function () {
    function sayHello(name?: string | null) {
      if (name) {
        return `Hello ${name}!`;
      } else {
        return 'Hello Stranger!';
      }
    }

    console.info(sayHello('Iqbal'));

    const name: string | undefined = undefined;
    console.info(sayHello(name));
    console.info(sayHello(null));
  });
});
