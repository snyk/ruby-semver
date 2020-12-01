import { rcompare } from '../../';

// rcompare(v1, v2): The reverse of compare. Sorts an array of versions in
// descending order when passed to Array.sort().
describe('test rcompare', () => {
  it('rcompare(v1, v2): 0 if v1 == v2', () => {
    expect(rcompare('1', '1')).toBe(0);
    expect(rcompare('1.1', '1.1')).toBe(0);
    expect(rcompare('1.1.0', '1.1.0')).toBe(0);
    expect(rcompare('1.1.0.1', '1.1.0.1')).toBe(0);
    expect(rcompare('1.1.0.1-alpha', '1.1.0.1-alpha')).toBe(0);
    expect(rcompare('1.1.0.1-alpha.2', '1.1.0.1-alpha.2')).toBe(0);
  });

  it('rcompare(v1, v2): -1 if v1 > v2', () => {
    expect(rcompare('2', '1')).toBe(-1);
    expect(rcompare('1.2', '1.1')).toBe(-1);
    expect(rcompare('1.1.1', '1.1.0')).toBe(-1);
    expect(rcompare('1.1.0.2', '1.1.0.1')).toBe(-1);
    expect(rcompare('1.1.0.1-beta', '1.1.0.1-alpha')).toBe(-1);
    expect(rcompare('1.1.0.1-alpha.3', '1.1.0.1-alpha.2')).toBe(-1);
  });

  it('rcompare(v1, v2): 1 if v1 < v2', () => {
    expect(rcompare('1', '2')).toBe(1);
    expect(rcompare('1.1', '1.2')).toBe(1);
    expect(rcompare('1.1.0', '1.1.1')).toBe(1);
    expect(rcompare('1.1.0.1', '1.1.0.2')).toBe(1);
    expect(rcompare('1.1.0.1-alpha', '1.1.0.1-beta')).toBe(1);
    expect(rcompare('1.1.0.1-alpha.2', '1.1.0.1-alpha.3')).toBe(1);
  })
});
