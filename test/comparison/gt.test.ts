import { gt } from '../../';

describe('test gt', () => {
  it('gt(v1, v2): v1 > v2', () => {
    expect(gt('2', '1')).toBeTruthy();
    expect(gt('5.4', '5.3')).toBeTruthy();
    expect(gt('5.0.1', '5.0.0')).toBeTruthy();
    expect(gt('5.0.1.52', '5.0.1.34')).toBeTruthy();
    expect(gt('5.0.1.52.200', '5.0.1.52.176')).toBeTruthy();
    expect(gt('5.0.1-beta.3', '5.0.1-beta.1')).toBeTruthy();
    expect(gt('5.0.1-beta', '5.0.1-alpha')).toBeTruthy();
    expect(gt('5.0.1', '5.0.1.beta')).toBeTruthy();

    expect(gt('2', '2')).toBeFalsy();
    expect(gt('5.4', '5.4')).toBeFalsy();
    expect(gt('5.0.1', '5.0.1')).toBeFalsy();
    expect(gt('5.0.1.52', '5.0.1.52')).toBeFalsy();
    expect(gt('5.0.1.52.200', '5.0.1.52.200')).toBeFalsy();
    expect(gt('5.0.1-beta.3', '5.0.1-beta.3')).toBeFalsy();
    expect(gt('5.0.1-beta', '5.0.1-beta')).toBeFalsy();

    expect(gt('1', '2')).toBeFalsy();
    expect(gt('5.3', '5.4')).toBeFalsy();
    expect(gt('5.0.0', '5.0.1')).toBeFalsy();
    expect(gt('5.0.1.34', '5.0.1.52')).toBeFalsy();
    expect(gt('5.0.1.52.176', '5.0.1.52.200')).toBeFalsy();
    expect(gt('5.0.1-beta.1', '5.0.1-beta.3')).toBeFalsy();
    expect(gt('5.0.1-alpha', '5.0.1-beta')).toBeFalsy();
    expect(gt('5.0.1.beta', '5.0.1')).toBeFalsy();

    // versions with recognised platform qualifiers
    expect(gt('5.0.1-x86_64-linux', '5.0.1')).toBeFalsy();
    expect(gt('5.0.1', '5.0.1-x86_64-linux')).toBeFalsy();
    expect(gt('5.0.1-java', '5.0.1-x86_64-linux')).toBeFalsy();
    expect(gt('5.0.1-x86_64-linux', '5.0.1.beta')).toBeTruthy();
    expect(gt('5.0.1.beta', '5.0.1-x86_64-linux')).toBeFalsy();
  });
});
