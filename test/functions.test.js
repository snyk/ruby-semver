// valid(v): Return the parsed version, or null if it's not valid.
// inc(v, release): Return the version incremented by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if it's not valid
// premajor in one call will bump the version up to the next major version and down to a prerelease of that major version. preminor, and prepatch work the same way.
// If called from a non-prerelease version, the prerelease will work the same as prepatch. It increments the patch version, then makes a prerelease. If the input version is already a prerelease it simply increments it.
// prerelease(v): Returns an array of prerelease components, or null if none exist. Example: prerelease('1.2.3-alpha.1') -> ['alpha', 1]
// major(v): Return the major version number.
// minor(v): Return the minor version number.
// patch(v): Return the patch version number.

import test from 'ava';

test.todo('todo');
