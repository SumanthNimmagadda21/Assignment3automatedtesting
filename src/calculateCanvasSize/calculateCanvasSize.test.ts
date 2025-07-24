import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('should calculate size correctly for positive values', () => {
    expect(calculateCanvasSize('10', '20')).toBe(200);
    expect(calculateCanvasSize('5', '5')).toBe(25);
  });

  test('should throw error for non-numeric strings', () => {
    expect(() => calculateCanvasSize('a', '20')).toThrow('Invalid input: length and width must be numeric strings');
    expect(() => calculateCanvasSize('10', 'b')).toThrow('Invalid input: length and width must be numeric strings');
  });

  test('should throw error for negative values', () => {
    expect(() => calculateCanvasSize('-10', '20')).toThrow('Invalid input: length and width must be non-negative');
    expect(() => calculateCanvasSize('10', '-20')).toThrow('Invalid input: length and width must be non-negative');
  });
});
