const semver = require('../../');
const diff = semver.diff;

// Not implemented as we don't use it.

// diff(v1, v2): Returns difference between two versions by the release type
// (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null
// if the versions are the same.

describe('test diff', () => {

  it('diff(v1, v2): same versions', () => {
    expect(diff('1', '1')).toBe(null);
    expect(diff('1.1', '1.1')).toBe(null);
    expect(diff('1.1.2', '1.1.2')).toBe(null);
    expect(diff('1.1.1.1', '1.1.1.1')).toBe(null);
    expect(diff('1.0.0.alpha.1', '1.0.0.alpha.1')).toBe(null);
    expect(diff('1.1.2-1', '1.1.2.pre.1')).toBe(null);
    expect(diff('1.1.2.pre.1', '1.1.2-1')).toBe(null);
    expect(diff('2', '2.0')).toBe(null);
    expect(diff('2.0', '2')).toBe(null);
    expect(diff('2', '2.0.0')).toBe(null);
    expect(diff('2.0.0', '2')).toBe(null);
    expect(diff('2', '2.0.0.0')).toBe(null);
    expect(diff('2.0.0.0', '2')).toBe(null);
  });

  it('diff(v1, v2): major versions', () => {
    expect(diff('1', '3')).toBe('major');
    expect(diff('1.1', '3.1')).toBe('major');
    expect(diff('1.1.2', '3.0.0')).toBe('major');
    expect(diff('1.1.2', '2.0.0')).toBe('major');
    expect(diff('1.1.1.1', '2.0.0')).toBe('major');
  });

  it('diff(v1, v2): minor versions', () => {
    expect(diff('1.1', '1.2')).toBe('minor');
    expect(diff('1.1.2', '1.2.1.1')).toBe('minor');
    expect(diff('1.1.2', '1.2.0')).toBe('minor');
    expect(diff('1.1.2.1', '1.2.0')).toBe('minor');
    expect(diff('1.1.2.1', '1.2.0.1')).toBe('minor');
  });

  it('diff(v1, v2): patch versions', () => {
    expect(diff('1.1.2', '1.1.3')).toBe('patch');
    expect(diff('1.1.2', '1.1.2.1')).toBe('patch');
    expect(diff('1.1.2.1', '1.1.3')).toBe('patch');
    expect(diff('1.1.2.1', '1.1.3.2.1')).toBe('patch');
    expect(diff('1.1.2.1', '1.1.2.1.1.1.2')).toBe('patch');
    expect(diff('1.1.2.1.1.1.1', '1.1.2.1.1.1.2')).toBe('patch');
  });

  it('diff(v1, v2): premajor versions', () => {
    expect(diff('1.0.0.alpha.1', '2.0.0')).toBe('premajor');
  });

  it('diff(v1, v2): preminor versions', () => {
    expect(diff('1.1.2.alpha.1', '1.2.0')).toBe('preminor');
  });

  it('diff(v1, v2): prepatch versions', () => {
    expect(diff('1.1.2.alpha.1', '1.1.3')).toBe('prepatch');
    expect(diff('1.1.2.3.alpha.1', '1.1.2.alpha.2')).toBe('prepatch');
    expect(diff('1.1.2.3.alpha.1', '1.1.2.4.alpha.2')).toBe('prepatch');
    expect(diff('1.1.2.alpha.1', '1.1.2.1')).toBe('prepatch');
  });

  it('diff(v1, v2): prerelease versions', () => {
    expect(diff('1.1.2.alpha.1', '1.1.2.alpha.2')).toBe('prerelease');
    expect(diff('1.1.2.3.alpha.1', '1.1.2.3.alpha.2')).toBe('prerelease');
    expect(diff('1.alpha.1', '1')).toBe('prerelease');
  })
});
