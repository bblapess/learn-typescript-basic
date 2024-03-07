describe('Union Type', function () {
  it('should support in typescript', function () {
    let sample: number | string | boolean = 'Iqbal';
    console.info(sample);

    sample = 22;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it('should support typeof operator', function () {
    function process(value: number | string | boolean) {
      if (typeof value === 'string') {
        console.info(value.toUpperCase());
      } else if (typeof value === 'number') {
        console.info(value + 2);
      } else {
        console.info(!value);
      }

      expect(process('Iqbal')).toBe('IQBAL');
      expect(process(22)).toBe(24);
      expect(process(true)).toBe(false);
    }
  });
});
