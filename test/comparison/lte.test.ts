import { lte } from '../../';

describe('test lte', () => {
  it('lte(v1, v2): v1 <= v2', () => {
    expect(lte('1', '2')).toBeTruthy();
    expect(lte('5.3', '5.4')).toBeTruthy();
    expect(lte('5.0.0', '5.0.1')).toBeTruthy();
    expect(lte('5.0.1.34', '5.0.1.52')).toBeTruthy();
    expect(lte('5.0.1.52.176', '5.0.1.52.200')).toBeTruthy();
    expect(lte('5.0.1-beta.1', '5.0.1-beta.3')).toBeTruthy();
    expect(lte('5.0.1-alpha', '5.0.1-beta')).toBeTruthy();
    expect(lte('5.0.1.beta', '5.0.1')).toBeTruthy();

    expect(lte('2', '2')).toBeTruthy();
    expect(lte('5.4', '5.4')).toBeTruthy();
    expect(lte('5.0.1', '5.0.1')).toBeTruthy();
    expect(lte('5.0.1.52', '5.0.1.52')).toBeTruthy();
    expect(lte('5.0.1.52.200', '5.0.1.52.200')).toBeTruthy();
    expect(lte('5.0.1-beta.3', '5.0.1-beta.3')).toBeTruthy();
    expect(lte('5.0.1-beta', '5.0.1-beta')).toBeTruthy();

    expect(lte('2', '1')).toBeFalsy();
    expect(lte('5.4', '5.3')).toBeFalsy();
    expect(lte('5.0.1', '5.0.0')).toBeFalsy();
    expect(lte('5.0.1.52', '5.0.1.34')).toBeFalsy();
    expect(lte('5.0.1.52.200', '5.0.1.52.176')).toBeFalsy();
    expect(lte('5.0.1-beta.3', '5.0.1-beta.1')).toBeFalsy();
    expect(lte('5.0.1-beta', '5.0.1-alpha')).toBeFalsy();
    expect(lte('5.0.1', '5.0.1.beta')).toBeFalsy();

    // versions with recognised platform qualifiers
    expect(lte('5.0.1-x86_64-linux', '5.0.1')).toBeTruthy();
    expect(lte('5.0.1', '5.0.1-x86_64-linux')).toBeTruthy();
    expect(lte('5.0.1-java', '5.0.1-x86_64-linux')).toBeTruthy();
    expect(lte('5.0.1-x86_64-linux', '5.0.1.beta')).toBeFalsy();
    expect(lte('5.0.1.beta', '5.0.1-x86_64-linux')).toBeTruthy();
  });
});
