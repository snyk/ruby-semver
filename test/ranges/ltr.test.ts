import { ltr } from '../../';

// Not implemented as we don't use it.

// ltr(version, range): Return true if version is less than all the versions
// possible in the range.

describe('test ltr', () => {
  it('ltr(version, range): not implemented', () => {
    expect(() => {ltr()}).toThrow();
    // expect(ltr('1.1.2', '> 0.2, < 2.3')).toThrow({message: 'Not implemented'});
  })
});
