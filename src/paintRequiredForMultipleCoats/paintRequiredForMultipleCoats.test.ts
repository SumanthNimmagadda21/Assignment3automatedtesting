import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should calculate paint required correctly for positive values', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  test('should return 0 for area of 0', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 2)).toBe(0);
  });

  test('should throw error for coveragePerLiter of 0', () => {
    expect(() => paintRequiredForMultipleCoats(100, 0, 2)).toThrow("coveragePerLiter and coats must be greater than zero");
  });

  test('should throw error for coats of 0', () => {
    expect(() => paintRequiredForMultipleCoats(100, 10, 0)).toThrow("coveragePerLiter and coats must be greater than zero");
  });

  test('should throw error for negative coveragePerLiter', () => {
    expect(() => paintRequiredForMultipleCoats(100, -10, 2)).toThrow("coveragePerLiter and coats must be greater than zero");
  });

  test('should throw error for negative coats', () => {
    expect(() => paintRequiredForMultipleCoats(100, 10, -2)).toThrow("coveragePerLiter and coats must be greater than zero");
  });

  test('should handle negative area correctly', () => {
    expect(paintRequiredForMultipleCoats(-100, 10, 2)).toBe(-20);
  });
});
