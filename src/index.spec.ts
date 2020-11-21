import { hello } from '.';

describe('hello', () => {
  it('should return the correct salutation', () => {
    expect(hello('World')).toEqual('Hello World');
    expect(hello('Carrie')).toEqual('Hello Carrie');
  });
});
