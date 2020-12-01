import { intersects } from '../../';

// intersects(range1, range2): Return true if the ranges intersect.

function testIntersects(r1, r2) {
  const res1 = intersects(r1, r2);
  const res2 = intersects(r2, r1);
  if (res1 !== res2) {
    throw new Error(`Inconsistent result: ${r1} vs. ${r2}`);
  }
  return res1;
}

describe('test intersects', () => {
  it('intersects(range1, range2)', () => {
    expect(testIntersects('1.1', '>= 1.1')).toBeTruthy();
    expect(testIntersects('1.1.5', '1.1.5')).toBeTruthy();
    expect(testIntersects('1.4.11', '>= 1.3, < 1.5')).toBeTruthy();

    expect(testIntersects('1.0', '>= 1.1')).toBeFalsy();
    expect(testIntersects('1.2.5', '1.1.2')).toBeFalsy();
    expect(testIntersects('1.5.2', '>= 1.3, < 1.5')).toBeFalsy();

    expect(testIntersects('1.1.5', '~> 1.1.2')).toBeTruthy();
    expect(testIntersects('>=1.1.5', '~> 1.1.2')).toBeTruthy();
    expect(testIntersects('1.2.5', '~> 1.1.2')).toBeFalsy();
    expect(testIntersects('>=1.2.5', '~> 1.1.2')).toBeFalsy();
    expect(testIntersects('>=2.1.1', '~> 1.1.2')).toBeFalsy();
    expect(testIntersects('<=1.1.0', '~> 1.1.2')).toBeFalsy();
    expect(testIntersects('<1.1.2', '~> 1.1.2')).toBeFalsy();
    expect(testIntersects('<=1.1.2', '~> 1.1.2')).toBeTruthy();

    expect(testIntersects('1.1.5', '~> 1.1')).toBeTruthy();
    expect(testIntersects('1.2.5', '~> 1.1')).toBeTruthy();
    expect(testIntersects('2.1.1', '~> 1.1')).toBeFalsy();
    expect(testIntersects('>=1.1.0', '~> 1.1')).toBeTruthy();
    expect(testIntersects('<=1.1.0', '~> 1.1')).toBeTruthy();
    expect(testIntersects('<1.1.0', '~> 1.1')).toBeFalsy();
    expect(testIntersects('>=1.1.5', '~> 1.1')).toBeTruthy();
    expect(testIntersects('>=1.2.0', '~> 1.1')).toBeTruthy();
    expect(testIntersects('>1.2.0', '~> 1.1')).toBeTruthy();
    expect(testIntersects('>=2.0.0', '~> 1.1')).toBeFalsy();

    expect(testIntersects('1.2.1', 'nonsense')).toBeFalsy();

    expect(testIntersects('1.0', '1.0')).toBeTruthy();
    expect(testIntersects('1.0', '1.1')).toBeFalsy();

    expect(testIntersects('1.0', '!=1.0')).toBeFalsy();
    expect(testIntersects('1.0', '!=1.1')).toBeTruthy();

    expect(testIntersects('>1.0', '>2.0, <4.0')).toBeTruthy();
    expect(testIntersects('<3.0', '>2.0, <4.0')).toBeTruthy();
    expect(testIntersects('>1.0, <3.0', '>2.0, <4.0')).toBeTruthy();

    expect(testIntersects('>1.0', '>1.0')).toBeTruthy();
    expect(testIntersects('>1.0', '>=1.0')).toBeTruthy();
    expect(testIntersects('>=1.0', '>1.0')).toBeTruthy();
    expect(testIntersects('>=1.0', '>=1.0')).toBeTruthy();

    expect(testIntersects('>1.0', '>1.0, < 2.0')).toBeTruthy();
    expect(testIntersects('>1.0', '>=1.0, < 2.0')).toBeTruthy();
    expect(testIntersects('>=1.0', '>1.0, < 2.0')).toBeTruthy();
    expect(testIntersects('>=1.0', '>=1.0, < 2.0')).toBeTruthy();

    expect(testIntersects('1.0', '>=1.0')).toBeTruthy();
    expect(testIntersects('1.0', '>1.0')).toBeFalsy();

    expect(testIntersects('<2.0', '<=2.0')).toBeTruthy();
    expect(testIntersects('<2.0', '<2.0')).toBeTruthy();
    expect(testIntersects('<=2.0', '<=2.0')).toBeTruthy();
    expect(testIntersects('<=2.0', '<2.0')).toBeTruthy();

    expect(testIntersects('<2.0', '>1.0, <2.0')).toBeTruthy();
    expect(testIntersects('<=2.0', '>1.0, <2.0')).toBeTruthy();
    expect(testIntersects('<2.0', '>1.0, <=2.0')).toBeTruthy();
    expect(testIntersects('<=2.0', '>1.0, <=2.0')).toBeTruthy();

    expect(testIntersects('2.0', '<=2.0')).toBeTruthy();
    expect(testIntersects('2.0', '<2.0')).toBeFalsy();

    expect(testIntersects('2.0', '>1.0, <3.0')).toBeTruthy();
    expect(testIntersects('2.0', '>1.0, <3.0, !=2.0')).toBeFalsy();

    expect(testIntersects('>1.0, !=2.0, <3.0', '>2.0, !=3.0, <4.0')).toBeTruthy();

    expect(testIntersects('<1.0.0, >2.0.0', '>1.4.0 <1.6.0')).toBeFalsy();
    expect(testIntersects('>1.0.0, <=2.0.0', '2.0.0')).toBeTruthy();
    expect(testIntersects('<1.0.0, >=2.0.0', '2.1.0')).toBeFalsy();
    expect(testIntersects('>=1.0.0', '<=1.0.0')).toBeTruthy();
    expect(testIntersects('>1.0.0, <1.0.0', '<=0.0.0')).toBeFalsy();
  })
});
