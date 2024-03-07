import { sayHello } from '../src/say-hello';

describe('sayHello', function () {
  it('should return hello iqbal', function () {
    expect(sayHello('iqbal')).toBe('Hello iqbal!');
  });
});
