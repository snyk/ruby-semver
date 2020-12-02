import { outside } from '../../';

// Not implemented as we don't use it.

// outside(version, range, hilo): Return true if the version is outside the
// bounds of the range in either the high or low direction. The hilo argument
// must be either the string '>' or '<'.

describe('test outside', () => {
  it('outside(version, range): not implemented', () => {
    expect(() => {outside()}).toThrow('Not implemented');
    // expect(outside('1.1.2', '> 0.2, < 2.3', '>')).toThrow({message: 'Not implemented'});
    // expect(outside('1.1.2', '> 0.2, < 2.3', '<')).toThrow({message: 'Not implemented'});
  })
});
