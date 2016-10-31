// gt(v1, v2): v1 > v2
// gte(v1, v2): v1 >= v2
// lt(v1, v2): v1 < v2
// lte(v1, v2): v1 <= v2
// eq(v1, v2): v1 == v2 This is true if they're logically equivalent, even if they're not the exact same string. You already know how to compare strings.
// neq(v1, v2): v1 != v2 The opposite of eq.
// cmp(v1, comparator, v2): Pass in a comparison string, and it'll call the corresponding function above. "===" and "!==" do simple string comparison, but are included for completeness. Throws if an invalid comparison string is provided.
// compare(v1, v2): Return 0 if v1 == v2, or 1 if v1 is greater, or -1 if v2 is greater. Sorts in ascending order if passed to Array.sort().
// rcompare(v1, v2): The reverse of compare. Sorts an array of versions in descending order when passed to Array.sort().
// diff(v1, v2): Returns difference between two versions by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if the versions are the same.

import test from 'ava';

test.todo('todo');
