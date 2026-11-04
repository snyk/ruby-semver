import { GemRequirement } from '../../lib/ruby/gem-requirement';

describe('GemRequirement with platform qualifiers (OSM-3773)', () => {
  it('should parse requirements with x86_64 platform qualifiers', () => {
    const req1 = GemRequirement.parse('>= 1.14.5-x86_64-linux');
    expect(req1[0]).toBe('>=');
    expect(req1[1].toString()).toBe('1.14.5-x86_64-linux');

    const req2 = GemRequirement.parse('>= 1.13.10-x86_64-darwin');
    expect(req2[0]).toBe('>=');
    expect(req2[1].toString()).toBe('1.13.10-x86_64-darwin');

    const req3 = GemRequirement.parse('~> 2.0.0-x86_64-linux');
    expect(req3[0]).toBe('~>');
    expect(req3[1].toString()).toBe('2.0.0-x86_64-linux');
  });

  it('should create GemRequirement with platform-qualified versions', () => {
    const req = new GemRequirement('>= 1.14.5-x86_64-linux', '< 2.0.0');
    expect(req.requirements).toHaveLength(2);
    expect(req.requirements[0][1].toString()).toBe('1.14.5-x86_64-linux');
  });

  it('should work with various platform qualifiers containing underscores', () => {
    const platforms = [
      '1.0.0-x86_64-darwin',
      '1.0.0-x86_64-linux',
      '1.0.0-x64-mingw32',
      '1.0.0-x86-mingw32',
      '1.0.0-aarch64-linux',
    ];

    platforms.forEach((version) => {
      const req = GemRequirement.parse(`>= ${version}`);
      expect(req[1].toString()).toBe(version);
    });
  });
});
