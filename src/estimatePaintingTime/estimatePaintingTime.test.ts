import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for positive values', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  test('should throw error for painting speed of 0', () => {
    expect(() => estimatePaintingTime(100, 0)).toThrow('Invalid input: area must be non-negative and paintingSpeed must be positive');
  });

  test('should handle area of 0 correctly', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  test('should throw error for negative values', () => {
    expect(() => estimatePaintingTime(-100, 10)).toThrow('Invalid input: area must be non-negative and paintingSpeed must be positive');
    expect(() => estimatePaintingTime(100, -10)).toThrow('Invalid input: area must be non-negative and paintingSpeed must be positive');
    expect(() => estimatePaintingTime(-100, -10)).toThrow('Invalid input: area must be non-negative and paintingSpeed must be positive');
  });

  test('should throw error for non-number inputs', () => {
    expect(() => estimatePaintingTime('a' as any, 10)).toThrow('Invalid input: area and paintingSpeed must be numbers');
    expect(() => estimatePaintingTime(100, 'b' as any)).toThrow('Invalid input: area and paintingSpeed must be numbers');
  });
});
