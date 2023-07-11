import { platform } from '../../';

// platform(v): Returns a platform found in the version, or null if none
// exist. Example: platform('1.2.3-x86_64-darwin') -> 'x86_64-darwin'

describe('test platform', () => {
  it('platform(v)', () => {
    expect(platform('1.2.3-x86_64-darwin')).toEqual('x86_64-darwin');
    expect(platform('1.2.3-java')).toEqual('java');

    expect(platform('1')).toEqual(null);
    expect(platform('1.2')).toEqual(null);
    expect(platform('1.2.3')).toEqual(null);
    expect(platform('1.2.3.4')).toEqual(null);
    expect(platform('1.2.3.4.5')).toEqual(null);

    // prerelease qualifiers
    expect(platform('1.2.3-alpha')).toEqual(null);
    expect(platform('1.2.3.alpha')).toEqual(null);
    expect(platform('1.2.3-alpha.1.2')).toEqual(null);
    expect(platform('1.2.3.alpha.1.2')).toEqual(null);

    expect(platform('nonsense')).toEqual(null);
    expect(platform('')).toEqual(null);
    expect(platform(null as any)).toEqual(null);
    expect(platform('1.2.3-x86_64-darwind')).toEqual(null);
  });
});
