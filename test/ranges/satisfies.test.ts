import { satisfies } from '../../';

// satisfies(version, range): Return true if the version satisfies the range.
describe('test satisfies', () => {
  it('satisfies(version, range)', () => {
    expect(satisfies('1.1', '>= 1.1')).toBeTruthy();
    expect(satisfies('1.1.5', '~> 1.1.2')).toBeTruthy();
    expect(satisfies('1.1.5', '1.1.5')).toBeTruthy();
    expect(satisfies('1.4.11', '>= 1.3, < 1.5')).toBeTruthy();

    expect(satisfies('1.0', '>= 1.1')).toBeFalsy();
    expect(satisfies('1.2.5', '~> 1.1.2')).toBeFalsy();
    expect(satisfies('1.2.5', '1.1.2')).toBeFalsy();
    expect(satisfies('1.5.2', '>= 1.3, < 1.5')).toBeFalsy();

    expect(satisfies('1.2.1', 'nonsense')).toBeFalsy();
  });

  it('satisfies(version, range) multi-platform', () => {
    expect(satisfies('1.1', '< 1.13.10-x86_64-darwin')).toBeFalsy();
    expect(satisfies('1.14.0', '> 1.13.10-x86_64-darwin')).toBeFalsy();
    expect(satisfies('1.13.10', '= 1.13.10-x86_64-darwin')).toBeFalsy();
    expect(satisfies('1.13.10', '1.13.10-x86_64-darwin')).toBeFalsy();

    expect(satisfies('1.13.10-x86_64-darwin', '< 1.14.0')).toBeFalsy();
    expect(satisfies('1.15.10-x86_64-darwin', '> 1.14.0')).toBeFalsy();

    expect(
      satisfies('1.13.9-x86_64-darwin', '< 1.13.10-x86_64-darwin'),
    ).toBeTruthy();
    expect(
      satisfies('1.14.0-x86_64-darwin', '> 1.13.10-x86_64-darwin'),
    ).toBeTruthy();

    expect(
      satisfies('1.13.9-x86-mingw32', '< 1.13.10-x86_64-darwin'),
    ).toBeFalsy();
  });
});
