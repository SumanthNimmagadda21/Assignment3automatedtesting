import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10);
    expect(calculateCanvasDiagonal('5', '12')).toBeCloseTo(13);
  });

  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal('0', '0')).toBe(0);
  });

  test('should throw error for negative values', () => {
    expect(() => calculateCanvasDiagonal('-3', '4')).toThrow('Invalid input: length and width must be non-negative');
    expect(() => calculateCanvasDiagonal('3', '-4')).toThrow('Invalid input: length and width must be non-negative');
    expect(() => calculateCanvasDiagonal('-3', '-4')).toThrow('Invalid input: length and width must be non-negative');
  });

  test('should throw error for non-numeric strings', () => {
    expect(() => calculateCanvasDiagonal('a', '4')).toThrow('Invalid input: length and width must be numeric strings');
    expect(() => calculateCanvasDiagonal('3', 'b')).toThrow('Invalid input: length and width must be numeric strings');
    expect(() => calculateCanvasDiagonal('a', 'b')).toThrow('Invalid input: length and width must be numeric strings');
  });
});
