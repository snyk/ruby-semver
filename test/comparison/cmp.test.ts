import { cmp } from '../../';

// cmp(v1, comparator, v2): Pass in a comparison string, and it'll call the
// corresponding function above. "===" and "!==" do simple string comparison,
// but are included for completeness.
// Throws if an invalid comparison string is provided.

describe('test cmp', () => {
  it('cmp(v1, ">", v2)',  () => {
    expect(cmp('2', '>', '1')).toBeTruthy();
    expect(cmp('2', '>', '2')).toBeFalsy();
    expect(cmp('1', '>', '2')).toBeFalsy();
  });

  it('cmp(v1, ">=", v2)',  () => {
    expect(cmp('2', '>=', '1')).toBeTruthy();
    expect(cmp('2', '>=', '2')).toBeTruthy();
    expect(cmp('1', '>=', '2')).toBeFalsy();
  });

  it('cmp(v1, "<", v2)',  () => {
    expect(cmp('1', '<', '2')).toBeTruthy();
    expect(cmp('2', '<', '2')).toBeFalsy();
    expect(cmp('2', '<', '1')).toBeFalsy();
  });

  it('cmp(v1, "<=", v2)',  () => {
    expect(cmp('1', '<=', '2')).toBeTruthy();
    expect(cmp('2', '<=', '2')).toBeTruthy();
    expect(cmp('2', '<=', '1')).toBeFalsy();
  });

  it('cmp(v1, "==", v2)',  () => {
    expect(cmp('2', '==', '2')).toBeTruthy();
    expect(cmp('2', '==', '2.0')).toBeTruthy();
    expect(cmp('1.13.10', '==','1.13.10-x86_64-darwin')).toBeTruthy();
    expect(cmp('2', '==', '1')).toBeFalsy();
  });

  it('cmp(v1, "!=", v2)',  () => {
    expect(cmp('2', '!=', '1')).toBeTruthy();
    expect(cmp('2', '!=', '2')).toBeFalsy();
    expect(cmp('2', '!=', '2.0')).toBeFalsy();
  });

  it('cmp(v1, "===", v2)',  () => {
    expect(cmp('2', '===', '2')).toBeTruthy();
    expect(cmp('2', '===', '1')).toBeFalsy();
    expect(cmp('2', '===', '2.0')).toBeFalsy();
  });

  it('cmp(v1, "!==", v2)',  () => {
    expect(cmp('2', '!==', '2')).toBeFalsy();
    expect(cmp('2', '!==', '2.0')).toBeTruthy();
    expect(cmp('2', '!==', '1')).toBeTruthy();
  });

  it('cmp(v1, "nonsense", v2)',  () => {
    expect(() => {cmp('2', 'nonsense', '2')}).toThrow(new Error('Invalid comparator: nonsense'));
    expect(() => {cmp('2', '!====', '2')}).toThrow(new Error('Invalid comparator: !===='));
    expect(() => {cmp('2', '>broken', '2')}).toThrow(new Error('Invalid comparator: >broken'));
  });
});
