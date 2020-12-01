import { gtr } from '../../';

// Not implemented as we don't use it.

// gtr(version, range): Return true if version is greater than all the versions
// possible in the range.
describe('test gtr', () => {
  it('gtr(version, range): not implemented', () => {
    expect(() => {gtr()}).toThrow();
    // expect(gtr('1.1.2', '> 0.2, < 2.3')).toThrow({message: 'Not implemented'});
  })
});
