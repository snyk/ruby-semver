import { lt } from '../../';

describe('test lt', () => {
  it('lt(v1, v2): v1 < v2', () => {
    expect(lt('1', '2')).toBeTruthy();
    expect(lt('5.3', '5.4')).toBeTruthy();
    expect(lt('5.0.0', '5.0.1')).toBeTruthy();
    expect(lt('5.0.1.34', '5.0.1.52')).toBeTruthy();
    expect(lt('5.0.1.52.176', '5.0.1.52.200')).toBeTruthy();
    expect(lt('5.0.1-beta.1', '5.0.1-beta.3')).toBeTruthy();
    expect(lt('5.0.1-alpha', '5.0.1-beta')).toBeTruthy();
    expect(lt('5.0.1.beta', '5.0.1')).toBeTruthy();

    expect(lt('2', '2')).toBeFalsy();
    expect(lt('5.4', '5.4')).toBeFalsy();
    expect(lt('5.0.1', '5.0.1')).toBeFalsy();
    expect(lt('5.0.1.52', '5.0.1.52')).toBeFalsy();
    expect(lt('5.0.1.52.200', '5.0.1.52.200')).toBeFalsy();
    expect(lt('5.0.1-beta.3', '5.0.1-beta.3')).toBeFalsy();
    expect(lt('5.0.1-beta', '5.0.1-beta')).toBeFalsy();

    expect(lt('2', '1')).toBeFalsy();
    expect(lt('5.4', '5.3')).toBeFalsy();
    expect(lt('5.0.1', '5.0.0')).toBeFalsy();
    expect(lt('5.0.1.52', '5.0.1.34')).toBeFalsy();
    expect(lt('5.0.1.52.200', '5.0.1.52.176')).toBeFalsy();
    expect(lt('5.0.1-beta.3', '5.0.1-beta.1')).toBeFalsy();
    expect(lt('5.0.1-beta', '5.0.1-alpha')).toBeFalsy();
    expect(lt('5.0.1', '5.0.1.beta')).toBeFalsy();
  })
});
