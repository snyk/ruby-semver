const { GemVersion } = require('./generated');

module.exports = {
  gt,
  gte,
  lt,
  lte,
  eq,
  neq,
  cmp,
  compare,
  rcompare,
  diff: () => { throw new Error('Not implemented'); },
};

function gt(v1, v2) {
  return compare(v1, v2) > 0;
}

function gte(v1, v2) {
  return compare(v1, v2) >= 0;
}

function lt(v1, v2) {
  return compare(v1, v2) < 0;
}

function lte(v1, v2) {
  return compare(v1, v2) <= 0;
}

function eq(v1, v2) {
  return compare(v1, v2) === 0;
}

function neq(v1, v2) {
  return !eq(v1, v2);
}

function _strictEq(v1, v2) {
  return GemVersion.$create(v1)['$eql?'](GemVersion.$create(v2));
}

function _strictNeq(v1, v2) {
  return !_strictEq(v1, v2);
}

function cmp(v1, comparator, v2) {
  switch (comparator) {
    case '>':
      return gt(v1, v2);
    case '>=':
      return gte(v1, v2);
    case '<':
      return lt(v1, v2);
    case '<=':
      return lte(v1, v2);
    case '==':
      return eq(v1, v2);
    case '!=':
      return neq(v1, v2);
    case '===':
      return _strictEq(v1, v2);
    case '!==':
      return _strictNeq(v1, v2);
    default:
      throw new Error(`Invalid comparator: ${comparator}`);
  }
}

function compare(v1, v2) {
  return GemVersion.$create(v1)['$<=>'](GemVersion.$create(v2));
}

function rcompare(v1, v2) {
  return GemVersion.$create(v2)['$<=>'](GemVersion.$create(v1));
}
