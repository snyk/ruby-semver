import { validRange } from '../../';

// validRange(range): Return the valid range or null if it's not valid
describe('test validRange', () => {
  it('validRange(range)', () => {
    expect(validRange('1.1')).toBe('= 1.1');
    expect(validRange('~> 1.1')).toBe('< 2, >= 1.1');
    expect(validRange('~> 1.1.0')).toBe('< 1.2, >= 1.1.0');
    expect(validRange('~> 1.1.1.0')).toBe('< 1.1.2, >= 1.1.1.0');
    expect(validRange('~> 1.1.1.beta.1')).toBe('< 1.2, >= 1.1.1.beta.1');
    expect(validRange('> 2.1, < 2.4')).toBe('< 2.4, > 2.1');

    expect(validRange('')).toBe('>= 0');
    expect((validRange as Function)()).toBe(null);
    expect(validRange('nonsense')).toBe(null);
  });
});
