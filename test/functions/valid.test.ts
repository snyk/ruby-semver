import { valid } from '../../';

// valid(v): Return the parsed version, or null if it's not valid.

describe('test valid', () => {
  it('valid(v)', () => {
    expect(valid('1')).toBe('1');
    expect(valid('1 ')).toBe('1');
    expect(valid(' 1')).toBe('1');
    expect(valid('1.1')).toBe('1.1');
    expect(valid('1.1.2')).toBe('1.1.2');
    expect(valid('1.1.2.3')).toBe('1.1.2.3');
    expect(valid('1.1.2-4')).toBe('1.1.2.pre.4');
    expect(valid('1.1.2.pre.4')).toBe('1.1.2.pre.4');

    expect(valid('nonsense')).toBe(null);
    expect(valid('1.2<3')).toBe(null);
    expect(valid('1.2 3')).toBe(null);
    expect(valid('')).toBe(null);
    expect(valid(null as any)).toBe(null);
    // expect(valid()).toBe(null); not valid with typescript
    expect(valid('1.13.10-x86_64-darwin')).toBe('1.13.10-x86_64-darwin');
    expect(valid('1.13.10-java')).toBe('1.13.10-java');
  });

  it('valid(v) with platform qualifiers containing underscores (OSM-3773)', () => {
    expect(valid('1.14.5-x86_64-linux')).toBe('1.14.5-x86_64-linux');
    expect(valid('1.18.2-x86_64-linux')).toBe('1.18.2-x86_64-linux');
    expect(valid('2.0.0-x86_64-darwin')).toBe('2.0.0-x86_64-darwin');
  });
});
