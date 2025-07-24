import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should throw error for negative values', () => {
    expect(() => calculatePaintCost(-10, 5)).toThrow('Invalid input: paintRequired and costPerLiter must be non-negative');
    expect(() => calculatePaintCost(10, -5)).toThrow('Invalid input: paintRequired and costPerLiter must be non-negative');
    expect(() => calculatePaintCost(-10, -5)).toThrow('Invalid input: paintRequired and costPerLiter must be non-negative');
  });

  test('should throw error for non-number inputs', () => {
    expect(() => calculatePaintCost('a' as any, 5)).toThrow('Invalid input: paintRequired and costPerLiter must be numbers');
    expect(() => calculatePaintCost(10, 'b' as any)).toThrow('Invalid input: paintRequired and costPerLiter must be numbers');
  });
});
