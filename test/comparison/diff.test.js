import test from 'ava';

import { diff } from '../../';

// Not implemented as we don't use it.

// diff(v1, v2): Returns difference between two versions by the release type
// (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null
// if the versions are the same.

test('diff(v1, v2): not implemented', t => {
  t.throws(() => diff('1.1.2', '1.2.0'), 'Not implemented');
});
