import { patch } from '../../';

// patch(v): Return the patch version number.

describe('test patch', () => {
  it('patch(v)', () => {
    expect(patch('1')).toBe(null);
    expect(patch('1.2')).toBe(null);
    expect(patch('1.2.3')).toBe(3);
    expect(patch('1.2.3.4')).toBe(3);
    expect(patch('1.2.3.4.5')).toBe(3);
    expect(patch('1.2.3-123')).toBe(3);
    expect(patch('1.2.3.alpha.4')).toBe(3);
    expect(patch('1.0.0')).toBe(0);
  })
});
