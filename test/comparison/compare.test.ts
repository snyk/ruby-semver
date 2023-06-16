import { compare } from '../../';

// compare(v1, v2): Return 0 if v1 == v2, or 1 if v1 is greater, or -1 if v2 is
// greater. Sorts in ascending order if passed to Array.sort().

describe('test compare', () => {
  it('compare(v1, v2): 0 if v1 == v2', () => {
    expect(compare('1', '1')).toBe(0);
    expect(compare('1.1', '1.1')).toBe(0);
    expect(compare('1.1.0', '1.1.0')).toBe(0);
    expect(compare('1.1.0.1', '1.1.0.1')).toBe(0);
    expect(compare('1.1.0.1-alpha', '1.1.0.1-alpha')).toBe(0);
    expect(compare('1.1.0.1-alpha.2', '1.1.0.1-alpha.2')).toBe(0);
    expect(compare('1.13.10', '1.13.10-x86_64-darwin')).toBe(0);
    // expect(compare('1.13.10-sdfsdfsd', '1.13.10-evczxfsd')).toBe(0);
  });

  it('compare(v1, v2): 1 if v1 > v2', () => {
    expect(compare('2', '1')).toBe(1);
    expect(compare('1.2', '1.1')).toBe(1);
    expect(compare('1.1.1', '1.1.0')).toBe(1);
    expect(compare('1.1.0.2', '1.1.0.1')).toBe(1);
    expect(compare('1.1.0.1-beta', '1.1.0.1-alpha')).toBe(1);
    expect(compare('1.1.0.1-alpha.3', '1.1.0.1-alpha.2')).toBe(1);
    expect(compare('1.13.11', '1.13.10-x86_64-darwin')).toBe(1);
  });

  it('compare(v1, v2): -1 if v1 < v2', () => {
    expect(compare('1', '2')).toBe(-1);
    expect(compare('1.1', '1.2')).toBe(-1);
    expect(compare('1.1.0', '1.1.1')).toBe(-1);
    expect(compare('1.1.0.1', '1.1.0.2')).toBe(-1);
    expect(compare('1.1.0.1-alpha', '1.1.0.1-beta')).toBe(-1);
    expect(compare('1.1.0.1-alpha.2', '1.1.0.1-alpha.3')).toBe(-1);
    expect(compare('1.13.10-x86_64-darwin','1.13.11')).toBe(-1);
  })
});
