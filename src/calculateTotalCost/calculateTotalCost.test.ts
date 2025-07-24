import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should return paint cost when labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost when paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('should throw error for negative values', () => {
    expect(() => calculateTotalCost(-100, 50)).toThrow('Invalid input: paintCost and laborCost must be non-negative');
    expect(() => calculateTotalCost(100, -50)).toThrow('Invalid input: paintCost and laborCost must be non-negative');
    expect(() => calculateTotalCost(-100, -50)).toThrow('Invalid input: paintCost and laborCost must be non-negative');
  });

  test('should throw error for non-number inputs', () => {
    expect(() => calculateTotalCost('a' as any, 50)).toThrow('Invalid input: paintCost and laborCost must be numbers');
    expect(() => calculateTotalCost(100, 'b' as any)).toThrow('Invalid input: paintCost and laborCost must be numbers');
  });

  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });
});
