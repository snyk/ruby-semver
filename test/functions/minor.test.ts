import { minor } from '../../';

// minor(v): Return the minor version number.
describe('test minor', () => {
  it('minor(v)', () => {
    expect(minor('1')).toBe(null);
    expect(minor('1.2')).toBe(2);
    expect(minor('1.2.3')).toBe(2);
    expect(minor('1.2.3.4')).toBe(2);
    expect(minor('1.2.3.4.5')).toBe(2);
    expect(minor('1.2.3-123')).toBe(2);
    expect(minor('1.2.3.alpha.4')).toBe(2);
    expect(minor('1.0')).toBe(0);
    expect(minor('1.0.0')).toBe(0);
  })
});
