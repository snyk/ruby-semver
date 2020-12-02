import { minSatisfying } from '../../';

// minSatisfying(versions, range): Return the lowest version in the list that
// satisfies the range, or null if none of them do.
describe('test minSatisfying', () => {
  it('minSatisfying(versions, range)', () => {
    expect(minSatisfying(['1.2.3', '1.2.4'], '~> 1.2')).toBe('1.2.3');
    expect(minSatisfying(['1.2.4', '1.2.3'], '~> 1.2')).toBe('1.2.3');
    expect(minSatisfying(['1.2.3', '1.2.4', '1.2.5'], '~> 1.2, >= 1.2.4')).toBe('1.2.4');
    expect(minSatisfying(['1.2.3', '1.2.4', '1.2.5', '1.2.6'], '~>1.2.3')).toBe('1.2.3');
    expect(
      minSatisfying(
        [
          '1.1.0',
          '1.2.0',
          '1.2.1',
          '1.3.0',
          '2.0.0b1',
          '2.0.0b2',
          '2.0.0b3',
          '2.0.0',
          '2.1.0',
        ],
        '~> 2.0.0',
      )).toBe('2.0.0');
    expect(minSatisfying(['1.2.3', '1.2.4'], '> 3.2')).toBeNull();
  })
});
