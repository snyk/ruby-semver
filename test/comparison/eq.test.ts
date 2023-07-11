import { eq } from '../../';

describe('test eq', () => {
  it('eq(v1, v2): v1 == v2', () => {
    expect(eq('2', '2')).toBeTruthy();
    expect(eq('2', '2.0')).toBeTruthy();
    expect(eq('5.4', '5.4')).toBeTruthy();
    expect(eq('5.4', '5.4.0')).toBeTruthy();
    expect(eq('5.0.1', '5.0.1')).toBeTruthy();
    expect(eq('5.0.1', '5.0.1.0')).toBeTruthy();
    expect(eq('5.0.1.52', '5.0.1.52')).toBeTruthy();
    expect(eq('5.0.1.52.200', '5.0.1.52.200')).toBeTruthy();
    expect(eq('5.0.1-beta.3', '5.0.1-beta.3')).toBeTruthy();
    expect(eq('5.0.1-beta', '5.0.1-beta')).toBeTruthy();

    expect(eq('2', '1')).toBeFalsy();
    expect(eq('5.4', '5.3')).toBeFalsy();
    expect(eq('5.0.1', '5.0.0')).toBeFalsy();
    expect(eq('5.0.1.52', '5.0.1.34')).toBeFalsy();
    expect(eq('5.0.1.52.200', '5.0.1.52.176')).toBeFalsy();
    expect(eq('5.0.1-beta.3', '5.0.1-beta.1')).toBeFalsy();
    expect(eq('5.0.1-beta', '5.0.1-alpha')).toBeFalsy();

    // versions with recognised platform qualifiers
    expect(eq('5.0.1-x86_64-linux', '5.0.1')).toBeTruthy();
    expect(eq('5.0.1-java', '5.0.1-x86_64-linux')).toBeTruthy();
    expect(eq('5.0.1-x86_64-linux', '5.0.1.beta')).toBeFalsy();
  });
});
