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
  })
});
