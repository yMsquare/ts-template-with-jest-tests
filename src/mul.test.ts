import { sub } from './mul';

describe('sub', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(sub(2, 3)).toBe(6);
    expect(sub(4, 5)).toBe(20);
  });

  it('should multiply a positive and negative number correctly', () => {
    expect(sub(2, -3)).toBe(-6);
    expect(sub(-4, 5)).toBe(-20);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(sub(-2, -3)).toBe(6);
    expect(sub(-4, -5)).toBe(20);
  });

  it('should handle multiplication by zero', () => {
    expect(sub(5, 0)).toBe(0);
    expect(sub(0, 5)).toBe(0);
    expect(sub(0, 0)).toBe(0);
  });

  it('should handle decimal numbers', () => {
    expect(sub(1.5, 2)).toBe(3);
    expect(sub(2.5, 2.5)).toBe(6.25);
  });

  it('should handle large numbers', () => {
    expect(sub(999999, 999999)).toBe(999998000001);
  });
});
