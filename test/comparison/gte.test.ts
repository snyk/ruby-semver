import { gte } from '../../';

describe('test gte', () => {
  it('gte(v1, v2): v1 >= v2', () => {
    expect(gte('2', '1')).toBeTruthy();
    expect(gte('5.4', '5.3')).toBeTruthy();
    expect(gte('5.0.1', '5.0.0')).toBeTruthy();
    expect(gte('5.0.1.52', '5.0.1.34')).toBeTruthy();
    expect(gte('5.0.1.52.200', '5.0.1.52.176')).toBeTruthy();
    expect(gte('5.0.1-beta.3', '5.0.1-beta.1')).toBeTruthy();
    expect(gte('5.0.1-beta', '5.0.1-alpha')).toBeTruthy();
    expect(gte('5.0.1', '5.0.1.beta')).toBeTruthy();

    expect(gte('2', '2')).toBeTruthy();
    expect(gte('5.4', '5.4')).toBeTruthy();
    expect(gte('5.0.1', '5.0.1')).toBeTruthy();
    expect(gte('5.0.1.52', '5.0.1.52')).toBeTruthy();
    expect(gte('5.0.1.52.200', '5.0.1.52.200')).toBeTruthy();
    expect(gte('5.0.1-beta.3', '5.0.1-beta.3')).toBeTruthy();
    expect(gte('5.0.1-beta', '5.0.1-beta')).toBeTruthy();

    expect(gte('1', '2')).toBeFalsy();
    expect(gte('5.3', '5.4')).toBeFalsy();
    expect(gte('5.0.0', '5.0.1')).toBeFalsy();
    expect(gte('5.0.1.34', '5.0.1.52')).toBeFalsy();
    expect(gte('5.0.1.52.176', '5.0.1.52.200')).toBeFalsy();
    expect(gte('5.0.1-beta.1', '5.0.1-beta.3')).toBeFalsy();
    expect(gte('5.0.1-alpha', '5.0.1-beta')).toBeFalsy();
    expect(gte('5.0.1.beta', '5.0.1')).toBeFalsy();
  })
});
