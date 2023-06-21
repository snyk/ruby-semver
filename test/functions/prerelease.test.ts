import { prerelease } from '../../';

// prerelease(v): Returns an array of prerelease components, or null if none
// exist. Example: prerelease('1.2.3-alpha.1') -> ['alpha', 1]

describe('test prerelease', () => {
  it('prerelease(v)', () => {
    expect(prerelease('1.2.3.alpha.1')).toStrictEqual(['alpha', 1]);
    expect(prerelease('1.2.3.alpha.1.2')).toStrictEqual(['alpha', 1, 2]);
    expect(prerelease('1.2.3-1')).toStrictEqual(['pre', 1]);
    expect(prerelease('1.2.3-1.2')).toStrictEqual(['pre', 1, 2]);

    expect(prerelease('1')).toStrictEqual(null);
    expect(prerelease('1.2')).toStrictEqual(null);
    expect(prerelease('1.2.3')).toStrictEqual(null);
    expect(prerelease('1.2.3.4')).toStrictEqual(null);
    expect(prerelease('1.2.3.4.5')).toStrictEqual(null);

    expect(prerelease('nonsense')).toStrictEqual(null);
    expect(prerelease('')).toStrictEqual(null);
    // expect(prerelease()).toStrictEqual(null); not valid with typescript
    expect(prerelease(null as any)).toStrictEqual(null);
  });
});
