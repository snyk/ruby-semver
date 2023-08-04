import { maxSatisfying } from '../../';

// maxSatisfying(versions, range): Return the highest version in the list that
// satisfies the range, or null if none of them do.

describe('test maxSatisfying', () => {
  it('maxSatisfying(versions, range)', () => {
    expect(maxSatisfying(['1.2.3', '1.2.4'], '~> 1.2')).toBe('1.2.4');
    expect(maxSatisfying(['1.2.3', '1.2.4', '1.2.5'], '~> 1.2, <= 1.2.4')).toBe(
      '1.2.4',
    );
    expect(maxSatisfying(['1.2.4', '1.2.3'], '~> 1.2')).toBe('1.2.4');
    expect(
      maxSatisfying(['1.2.3', '1.2.4', '1.2.5', '1.2.6'], '~> 1.2.3'),
    ).toBe('1.2.6');
    expect(
      maxSatisfying(
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
      ),
    ).toBe('2.0.0');
    expect(maxSatisfying(['1.2.3', '1.2.4'], '> 3.2')).toBeNull();
  });

  it('maxSatisfying(versions, range) multi-platform', () => {
    expect(
      maxSatisfying(
        [
          '1.2.3-x86_64-linux',
          '1.2.4-x86_64-linux',
          '1.2.5-x86_64-linux',
          '1.2.6-x86_64-linux',
          '1.3.0-x86_64-linux',
        ],
        '~>1.2.3',
      ),
    ).toBe('1.2.6-x86_64-linux');
  });
});
