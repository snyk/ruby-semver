import { neq } from '../../';

describe('test neq', () => {
  it('neq(v1, v2): v1 != v2', () => {
    expect(neq('2', '1')).toBeTruthy();
    expect(neq('5.4', '5.3')).toBeTruthy();
    expect(neq('5.0.1', '5.0.0')).toBeTruthy();
    expect(neq('5.0.1.52', '5.0.1.34')).toBeTruthy();
    expect(neq('5.0.1.52.200', '5.0.1.52.176')).toBeTruthy();
    expect(neq('5.0.1-beta.3', '5.0.1-beta.1')).toBeTruthy();
    expect(neq('5.0.1-beta', '5.0.1-alpha')).toBeTruthy();
    expect(neq('5.0.1-x86_64-darwin', '5.0.2-x86_64-darwin')).toBeTruthy();
    expect(neq('5.0.1-x86_64-darwin', '5.0.1-alpha')).toBeTruthy();

    expect(neq('2', '2')).toBeFalsy();
    expect(neq('2', '2.0')).toBeFalsy();
    expect(neq('5.4', '5.4')).toBeFalsy();
    expect(neq('5.4', '5.4.0')).toBeFalsy();
    expect(neq('5.0.1', '5.0.1')).toBeFalsy();
    expect(neq('5.0.1', '5.0.1.0')).toBeFalsy();
    expect(neq('5.0.1.52', '5.0.1.52')).toBeFalsy();
    expect(neq('5.0.1.52.200', '5.0.1.52.200')).toBeFalsy();
    expect(neq('5.0.1-beta.3', '5.0.1-beta.3')).toBeFalsy();
    expect(neq('5.0.1-beta', '5.0.1-beta')).toBeFalsy();
    expect(neq('5.0.1-x86_64-darwin', '5.0.1-java')).toBeFalsy();
  });
});
