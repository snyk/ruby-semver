import { major } from '../../';

// major(v): Return the major version number.
describe('test major', () => {
  it('major(v)', () => {
    expect(major('1')).toBe(1);
    expect(major('1.2')).toBe(1);
    expect(major('1.2.3')).toBe(1);
    expect(major('1.2.3.4')).toBe(1);
    expect(major('1.2.3.4.5')).toBe(1);
    expect(major('1.2.3-123')).toBe(1);
    expect(major('1.2.3.alpha.4')).toBe(1);
    expect(major('0.0.1')).toBe(0);
  });

  it('major(v) multi-platform', () => {
    expect(major('1-x86_64-darwin')).toBe(1);
    expect(major('1.2-x86_64-darwin')).toBe(1);
    expect(major('1.2.3-x86_64-darwin')).toBe(1);
    expect(major('1.2.3.4-x86_64-darwin')).toBe(1);
    expect(major('1.2.3.4.5-x86_64-darwin')).toBe(1);
    expect(major('1.2.3-123-x86_64-darwin')).toBe(1);
    expect(major('1.2.3.alpha.4-x86_64-darwin')).toBe(1);
    expect(major('0.0.1-x86_64-darwin')).toBe(0);
  });
});
