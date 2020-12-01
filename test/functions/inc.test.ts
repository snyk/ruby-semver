import { inc } from '../../';

// Not implemented as we don't use it.

// inc(v, release): Return the version incremented by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if it's not valid
//  - premajor in one call will bump the version up to the next major version and down to a prerelease of that major version. preminor, and prepatch work the same way.
//  - If called from a non-prerelease version, the prerelease will work the same as prepatch. It increments the patch version, then makes a prerelease. If the input version is already a prerelease it simply increments it.
describe('test inc', () => {
  it('inc(v, release): not implemented', () => {
    expect(() => {inc()}).toThrow();
    // tests commented out until inc is implemented
    // expect(inc('1.1.0', 'major')).toThrow({message: 'Not implemented'});
    // expect(inc('1.1.0', 'premajor')).toThrow({message: 'Not implemented'});
    // expect(inc('1.1.0', 'minor')).toThrow({message: 'Not implemented'});
    // expect(inc('1.1.0', 'preminor')).toThrow({message: 'Not implemented'});
    // expect(inc('1.1.0', 'patch')).toThrow({message: 'Not implemented'});
    // expect(inc('1.1.0', 'prepatch')).toThrow({message: 'Not implemented'});
    // expect(inc('1.1.0', 'prerelease')).toThrow({message: 'Not implemented'});
  })
});
